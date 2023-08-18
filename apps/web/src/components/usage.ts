import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import 'wc';

@customElement('presentational-usage')
export class PresentationalUsage extends LitElement {
  @property({ type: String }) code: string = '';
  @state() protected _codeBlocks: string = '';
  handleSlotchange(e: any) {
    const childNodes = e.target.assignedNodes({ flatten: true });
    // ... do something with childNodes ...
    this._codeBlocks = childNodes.map((node: any) => {
      const nodeCopy = node.cloneNode(true);
      this._codeBlocks = nodeCopy.outerHTML;
      // Remove the node from the DOM
      node.innerHTML = '';

      return nodeCopy.outerHTML ? nodeCopy.outerHTML : '';
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

declare global {
  interface HTMLElementTagNameMap {
    'presentational-usage': PresentationalUsage;
  }
}
