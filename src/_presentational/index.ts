import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import pjson from "../../package.json";

@customElement("presentational-tabs")
export class PresentationalTabs extends LitElement {
  @property({ type: Array }) tabs: string[] = [];
  @state() protected _activeTab: string = this.tabs[0];
  static styles = css`
    :host section {
      display: flex;
      flex-direction: column;
      @media (min-width: 767px) {
        flex-direction: row;
      }
      width: 100%;
      height: 100%;
      gap: 1rem;
    }
    .tabs {
      &.-header {
        padding: 1.5rem 1.25rem;
        width: 100%;
        text-align: center;
        color: var(--heading-color);
        font-weight: 600;
        > code {
          padding: 0.25rem;
          border-radius: 0.15rem;
          background-color: var(--info-bkg);
          color: var(--info-color);
        }
      }
      &.-list {
        display: flex;
        min-height: 5rem;
        border-right: 1px solid var(--nav-border);
        @media (max-width: 767px) {
          width: 100%;
        }
        @media (min-width: 767px) {
          min-width: 20rem;
          flex-direction: column;
          align-items: center;
        }
      }
      &.-panel {
        overflow-y: scroll;
        padding: 1.5rem;
        flex-grow: 1;
      }
    }
    .tab {
      outline: 0;
      border: 0;
      border-bottom: 1px solid var(--nav-border);
      padding: 0.75rem 1.25rem;
      cursor: pointer;
      width: 100%;
      font-size: 1em;
      font-family: inherit;
      &.-active,
      &:hover {
        background-color: var(--button-hover);
        color: var(--button-color);
      }
    }
  `;

  setInitialTab() {
    const params = new URLSearchParams(window.location.search);
    const activeTab = params.get("tab");
    if (activeTab) {
      this._activeTab = activeTab;
    } else if (this.tabs) {
      this._activeTab = this.tabs[0];
    }
  }

  changeTab(tab: string) {
    const params = new URLSearchParams(window.location.search);
    if (tab !== this._activeTab) this._activeTab = tab;
    params.set("tab", tab);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  }

  render() {
    if (!this._activeTab) this.setInitialTab();

    return html`<section>
      <div class="tabs -list">
        <div class="tabs -header">
          ${pjson.name} <code>${pjson.version}</code>
        </div>

        ${map(this.tabs, (tab) => {
          const tabClasses = {
            tab: true,
            "-active": tab === this._activeTab,
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
        <slot name=${this._activeTab}></slot>
      </div>
    </section>`;
  }
}

@customElement("presentational-component")
export class PresentationalComponent extends LitElement {
  @state() protected _codeBlocks: string = "";

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;

      height: 100%;
      gap: 1rem;
    }
  `;

  handleSlotchange(e: any) {
    const childNodes = e.target.assignedNodes({ flatten: true });
    // ... do something with childNodes ...
    this._codeBlocks = childNodes.map((node: any) => {
      const nodeCopy = node.cloneNode(true);
      nodeCopy.innerHTML = "";
      this._codeBlocks = nodeCopy.outerHTML;

      return nodeCopy.outerHTML ? nodeCopy.outerHTML : "";
    });
  }

  renderCodeBlock() {
    if (this._codeBlocks) {
      return html`<presentational-codeblock>
        ${this._codeBlocks}
      </presentational-codeblock>`;
    }
  }

  render() {
    return html`
      <slot @slotchange=${this.handleSlotchange}></slot>
      ${this.renderCodeBlock()}
    `;
  }
}

@customElement("presentational-codeblock")
export class PresentationalCodeblock extends LitElement {
  @property({ type: Boolean }) fullWidth: boolean = false;
  @state() protected _popoverOpen: boolean = false;
  static styles = css`
    .code {
      font-size: 0.8em;
      display: block;
      padding: 0.5rem;
      border-radius: 0.15rem;
      background-color: var(--info-bkg);
      color: var(--info-color);
      width: 100%;
      word-break: break-all;
      font-family: monospace;
      &:not(.-fullwidth) {
        max-width: 500px;
      }
      margin: 0.5rem auto;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
    .popover {
      &.-container {
        position: relative;
        width: 100%;
      }
      &.-element {
        font-size: 0.8em;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem;
        border-radius: 0.15rem;
        background-color: var(--tooltip-bkg);
        color: var(--tooltip-text);
        &::before {
          position: absolute;
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 0.5rem solid transparent;
          border-right: 0.5rem solid transparent;
          border-bottom: 0.5rem solid var(--tooltip-bkg);
        }
      }
    }
  `;

  onMouseEnter() {
    this._popoverOpen = true;
  }

  onMouseLeave() {
    this._popoverOpen = false;
  }

  copyCodeBlockContents(e: any) {
    const content = e?.target
      ?.assignedNodes({ flatten: true })
      .find((node: any) => node.data.includes("<"))?.textContent;
    if (content) navigator.clipboard.writeText(content);
  }

  renderPopover() {
    if (this._popoverOpen) {
      return html`<div class="popover -container">
        <div class="popover -element">Copy Code</div>
      </div>`;
    }
  }

  render() {
    const classes = {
      code: true,
      "-fullwidth": this.fullWidth,
    };
    return html`<div
        class=${classMap(classes)}
        @mouseenter=${this.onMouseEnter}
        @mouseleave=${this.onMouseLeave}
      >
        <slot @click=${this.copyCodeBlockContents}></slot>
      </div>
      ${this.renderPopover()}`;
  }
}

@customElement("presentational-usage")
export class PresentationalUsage extends LitElement {
  @property({ type: String }) code: string = "";
  @state() protected _codeBlocks: string = "";
  handleSlotchange(e: any) {
    const childNodes = e.target.assignedNodes({ flatten: true });
    // ... do something with childNodes ...
    this._codeBlocks = childNodes.map((node: any) => {
      const nodeCopy = node.cloneNode(true);
      this._codeBlocks = nodeCopy.outerHTML;
      // Remove the node from the DOM
      node.innerHTML = "";

      return nodeCopy.outerHTML ? nodeCopy.outerHTML : "";
    });
  }
  renderCodeBlock() {
    if (this._codeBlocks) {
      return html`<presentational-codeblock fullwidth>
        ${this._codeBlocks}
      </presentational-codeblock> `;
    }
  }
  render() {
    return html`
      <div style="display: none">
        <slot @slotchange=${this.handleSlotchange}></slot>
      </div>
      ${this.renderCodeBlock()}
    `;
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   const codeBlocks = document.querySelectorAll(".codeBlock");
//   if (codeBlocks.length) {
//     codeBlocks.forEach((codeBlock) => {
//       codeBlock.addEventListener("click", () => {
//         const content = codeBlock?.textContent;
//         if (content)
//           navigator.clipboard.writeText(content).then(function (err) {
//             console.error("Async: Could not copy text: ", err);
//           });
//       });
//     });
//   }
// });

declare global {
  interface HTMLElementTagNameMap {
    "presentational-tabs": PresentationalTabs;
    "presentational-component": PresentationalComponent;
    "presentational-codeblock": PresentationalCodeblock;
    "presentational-usage": PresentationalUsage;
  }
}
