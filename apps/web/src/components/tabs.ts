import { LitElement, html, unsafeCSS } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import pjson from '../../package.json';
import style from '../styles/styles.scss?inline';

@customElement('presentational-tabs')
export class PresentationalTabs extends LitElement {
  @state() protected _activeTab: string;

  static styles = unsafeCSS(style);

  @queryAssignedElements({ slot: 'tablist' }) tablist!: HTMLElement[];
  @state() _tabList: Element[] = [];

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._tabList.length > 0) {
      this._tabList.forEach((element) => {
        const el = element as HTMLElement;
        el.removeEventListener('click', this.changeTab);
      });
    }
  }

  changeTab = (e: MouseEvent) => {
    // Remove Active from Tabs
    Array.from(this._tabList).forEach((element) => {
      const el = element as HTMLElement;
      el.classList.remove('-active');
    });
    // Assign new Active
    const target = e.target as HTMLElement;
    const tab = target.getAttribute('name') || target.innerText;
    const params = new URLSearchParams(window.location.search);
    if (tab && tab !== this._activeTab) {
      this._activeTab = tab;
      params.set('tab', tab);
      window.history.replaceState(
        {},
        '',
        `${window.location.pathname}?${params}`
      );
      target.classList.add('-active');
      this.requestUpdate();
    }
  };

  render() {
    return html`<section>
      <div class="tabs -list">
        <div class="tabs -header">${pjson.name} <code>1.0.0</code></div>
        <slot name="tablist" @slotchange=${this.initTabList}></slot>
      </div>
      <div class="tabs -panel">
        <h2>${this._activeTab}</h2>
        <slot name=${this._activeTab}>
          You did not provide a correct SLOT attribute. Please ensure the
          slot="name" is equal to the tab name.
        </slot>
      </div>
    </section>`;
  }

  initTabList(e: Event) {
    const target = e.target as HTMLSlotElement;
    const children = target.assignedElements() as Element[];
    // Setup Initial Tab
    const params = new URLSearchParams(window.location.search);
    const activeTab = params.get('tab');

    if (!this._activeTab) {
      if (activeTab) {
        this._activeTab = activeTab;
        const active = children.find((el) => {
          const element = el as HTMLElement;
          const name = element.getAttribute('name') || element.innerText;
          if (name === activeTab) {
            return element;
          }
        });

        if (active) {
          const el = active as HTMLElement;
          el.classList.add('-active');
        }
      } else {
        const child = children[0] as HTMLElement;
        const name = child.getAttribute('name') || child.innerText;
        this._activeTab = name;
        child.classList.add('-active');
      }
    }
    // Setup Tab List
    if (children.length > 0) {
      this._tabList = children;
      children.forEach((element) => {
        const el = element as HTMLElement;
        if (!el.classList.contains('tab')) el.classList.add('tab');
        el.addEventListener('click', this.changeTab);
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'presentational-tabs': PresentationalTabs;
  }
}
