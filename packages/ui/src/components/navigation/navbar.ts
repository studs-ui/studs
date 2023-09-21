import { html, unsafeCSS, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '@studs/styles/components/navbar.scss?inline';

export interface NavbarItem {
  label: string;
  icon: any;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export interface NavbarProps {
  items: NavbarItem[];
  showIcon: boolean;
  mode: 'horizontal' | 'vertical';
}

@customElement('studs-navbar')
export class StudsNavbar extends LitElement {
  @property({ type: Array }) items: NavbarProps['items'] = [];
  @property({ type: Boolean }) showIcon: NavbarProps['showIcon'] = false;
  @property({ type: String }) mode: NavbarProps['mode'] = 'horizontal';

  static styles = unsafeCSS(style);

  toggleLinks(item: NavbarItem) {
    item.initiallyOpened = !item.initiallyOpened;
    this.requestUpdate();
  }

  iconsForMode = {
    'horizontal': {
      subMenuIcon: 'chevron_right',
    },
    'vertical': {
      subMenuIcon: 'chevron_left',
    }
  }

  icons = this.iconsForMode[this.mode];

  render() {
    return html`
      <div class="navbar ${this.mode}">
        <slot name="header"></slot>
        ${this.items?.map(
          (item) => html`
            <div class="nav-group">
              <div class="nav-header" @click=${() => this.toggleLinks(item)}>
                ${this.showIcon && item.icon
                  ? html`<studs-icon
                      class="prefix-icon"
                      .icon="${item.icon}"
                    ></studs-icon>`
                  : ''} <span>${item.label}</span>
                ${item.links?.length
                  ? html`
                      <span class="arrow ${item.initiallyOpened ? 'open' : ''}">
                        <studs-icon icon="${this.icons.subMenuIcon}"></studs-icon>
                      </span>
                    `
                  : ''}
              </div>
              ${item.links?.length
                ? html`
                    <div class="nav-item" ?hidden=${!item.initiallyOpened}>
                      ${item.links.map(
                        (link) =>
                          html` <a href="${link.link}">${link.label}</a> `
                      )}
                    </div>
                  `
                : ''}
            </div>
          `
        )}
        <slot name="footer"></slot>
      </div>
    `;
  }
}
