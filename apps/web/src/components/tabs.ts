import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import pjson from '../../package.json';
import style from 'styles/styles.scss?inline';

@customElement('presentational-tabs')
export class PresentationalTabs extends LitElement {
  @property({ type: Array }) tabs: string[] = [];
  @state() protected _activeTab: string = this.tabs[0];
  static styles = unsafeCSS(style);

  setInitialTab() {
    const params = new URLSearchParams(window.location.search);
    const activeTab = params.get('tab');
    if (activeTab) {
      this._activeTab = activeTab;
    } else if (this.tabs) {
      this._activeTab = this.tabs[0];
    }
  }

  changeTab(tab: string) {
    const params = new URLSearchParams(window.location.search);
    if (tab !== this._activeTab) this._activeTab = tab;
    params.set('tab', tab);
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${params}`
    );
  }

  render() {
    if (!this._activeTab) this.setInitialTab();

    return html`<section>
      <div class="tabs -list">
        <div class="tabs -header">${pjson.name} <code>1.0.0</code></div>

        ${map(this.tabs, (tab) => {
          const tabClasses = {
            tab: true,
            '-active': tab === this._activeTab,
          };
          return html`<button
            class=${classMap(tabClasses)}
            @click=${() => this.changeTab(tab)}
          >
            ${tab}
          </button>`;
        })}
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
}

declare global {
  interface HTMLElementTagNameMap {
    'presentational-tabs': PresentationalTabs;
  }
}
