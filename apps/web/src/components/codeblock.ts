import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '@studs/ui';

@customElement('presentational-codeblock')
export class PresentationalCodeblock extends LitElement {
  @property({ type: Boolean }) fullWidth: boolean = false;

  @state() copyText: string = 'Copy Code';

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
  `;

  copyCodeBlockContents(e: any) {
    const content = e?.target
      ?.assignedNodes({ flatten: true })
      .find((node: any) => node.data.includes('<'))?.textContent;
    if (content) {
      navigator.clipboard.writeText(content);
      this.copyText = 'Copied!';
      setTimeout(() => {
        this.copyText = 'Copy Code';
      }, 3000);
    }
  }

  render() {
    const classes = {
      code: true,
      '-fullwidth': this.fullWidth,
    };
    return html`<div class=${classMap(classes)}>
      <slot @click=${this.copyCodeBlockContents}></slot>
      <studs-tooltip>${this.copyText}</studs-tooltip>
    </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'presentational-codeblock': PresentationalCodeblock;
  }
}
