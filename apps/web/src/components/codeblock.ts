import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '@studs/ui';

@customElement('presentational-codeblock')
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
          content: '';
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
      .find((node: any) => node.data.includes('<'))?.textContent;
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
      '-fullwidth': this.fullWidth,
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

declare global {
  interface HTMLElementTagNameMap {
    'presentational-codeblock': PresentationalCodeblock;
  }
}
