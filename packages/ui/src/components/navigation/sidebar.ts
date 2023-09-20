import { html, unsafeCSS, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '@studs/styles/components/sidebar.scss?inline';

export interface SidebarItem {
  label: string;
  icon: any;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

export interface SidebarProps {
  items: SidebarItem[];
  showIcon: boolean;
}

@customElement('studs-sidebar')
export class StudsSidebar extends LitElement {
  @property({ type: Array }) items: SidebarProps['items'] = [];
  @property({ type: Boolean }) showIcon: SidebarProps['showIcon'] = false;

  static styles = unsafeCSS(style);

  toggleLinks(item: SidebarItem) {
    item.initiallyOpened = !item.initiallyOpened;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="sidebar">
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
                        <studs-icon icon="chevron_right"></studs-icon>
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
      </div>
    `;
  }
}
