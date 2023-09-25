import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import style from '@studs/styles/components/tabs.scss?inline';

export interface TabProps {
  selectedIndex?: number;
  tabDirection?: 'row' | 'column';
  variant: 'line' | 'contained';
  disabled?: boolean;
}

@customElement('studs-tabs')
export class StudsTabs extends LitElement {
  static styles = unsafeCSS(style);
  private _tabs: Element[] = [];
  private _panels: Element[] = [];

  @property({ type: Number }) selectedIndex?: TabProps['selectedIndex'];
  @property({ type: String }) tabDirection?: TabProps['tabDirection'];
  @property({ type: String }) variant?: TabProps['variant'];
  @property({ type: Boolean }) disabled?: TabProps['disabled'];

  firstUpdated() {
    this._tabs = Array.from(this.querySelectorAll('[slot=tab]'));
    this._panels = Array.from(this.querySelectorAll('[slot=panel]'));
    this.selectTab(this.selectedIndex || 0);
  }

  selectTab(tabIndex: number): void {
    this._tabs.forEach((tab) => this.toggleSelected(tab, false));
    this._panels.forEach((panel) => this.toggleSelected(panel, false));
    this.toggleSelected(this._tabs[tabIndex], true);
    this.toggleSelected(this._panels[tabIndex], true);
  }

  toggleSelected(element: Element, isSelected: boolean): void {
    if (this.disabled) return;

    if (isSelected) {
      element.setAttribute('selected', '');
    } else {
      element.removeAttribute('selected');
    }
  }

  handleSelect = (e: Event): void => {
    if (this.disabled) return;
    const index = this._tabs.indexOf(e.target as Element);
    this.selectTab(index);
  };

  render() {
    const wrapperClasses = {
      tabsComponent: true,
      [`-${this.tabDirection}`]: this.tabDirection
    };

    const navClasses = {
      tabs: true,
      [`-${this.variant}`]: !!this.variant,
      [`-${this.tabDirection}`]: !!this.tabDirection,
    };

    return html`
      <div class=${classMap(wrapperClasses)}>
        <nav class=${classMap(navClasses)}>
          <slot
            name="tab"
            @click=${this.handleSelect}
            ?disabled="${this.disabled}"
          ></slot>
        </nav>
        <div>
            <slot name="panel"></slot>
        </div>
      </div>
    `;
  }
}
