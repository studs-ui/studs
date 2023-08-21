import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('presentational-component')
export class PresentationalComponent extends LitElement {
  @state() protected _codeBlocks: string = '';

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      height: 100%;
      gap: 1rem;
    }
  `;

  handleSlotchange(e: any) {
    const childNodes = e.target.assignedNodes({ flatten: true });
    // ... do something with childNodes ...
    this._codeBlocks = childNodes.map((node: any) => {
      const nodeCopy = node.cloneNode(true);
      nodeCopy.innerHTML = '';
      this._codeBlocks = nodeCopy.outerHTML;

      return nodeCopy.outerHTML ? nodeCopy.outerHTML : '';
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

declare global {
  interface HTMLElementTagNameMap {
    'presentational-component': PresentationalComponent;
  }
}
