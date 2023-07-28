import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from "styles/switch.scss?inline";

@customElement('studs-switch')
export class StudsSwitch extends LitElement {
  static styles = unsafeCSS(style);

  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) label = '';
  @property({ type: String, attribute: 'label-position' })
  labelPosition = 'end';

  @property({ type: String }) name = '';
  @property({ type: String }) size = 'small';

  render() {
    return html`
      <div class="switch ${this.labelPosition}">
        <label class="switch-label ${this.size}">
          <input type="checkbox" ?checked=${this.checked} ?disabled=${this.disabled}>
          <span class="slider"></span>
        </label>
        <span>${this.label}</span>
      </div>
    `;
  }
}
