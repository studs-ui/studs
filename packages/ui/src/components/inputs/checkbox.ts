import style from '@studs/styles/components/checkbox.scss?inline';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { WithForm, WithFormInterface } from '../../mixins/withForm';

export interface CheckboxProps extends WithFormInterface {
  indeterminate?: boolean;
}

@customElement('studs-checkbox')
export class StudsCheckbox extends WithForm(LitElement) {

  static styles = unsafeCSS(style);
  @property({ type: Boolean }) indeterminate?: CheckboxProps['indeterminate'];

  private updateHandler = () => {
    const inputElement = this.shadowRoot?.querySelector(`#${this.inputId}`);
    if (inputElement) {
      (inputElement as HTMLInputElement).indeterminate =
        this.indeterminate || false;
    }
  };

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    const inputElement = this.shadowRoot?.querySelector(
      `#${this.inputId}`
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.indeterminate = this.indeterminate || false;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', this.onChange);
    this.shadowRoot
      ?.querySelector(`#${this.inputId}`)
      ?.addEventListener('update', this.updateHandler);
  }

  disconnectedCallback() {
    this.shadowRoot
      ?.querySelector(`#${this.inputId}`)
      ?.removeEventListener('update', this.updateHandler);
    this.removeEventListener('change', this.onChange);
    super.disconnectedCallback();
  }

  render() {
    return html`
      <div
        class="${classMap({
          checkbox: true,
        })}"
      >
        <input
          id="${this.inputId}"
          type="checkbox"
          name="${ifDefined(this.name)}"
          value="${ifDefined(this.value)}"
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          @change="${this.onChange}"
        />
        <label for="${this.inputId}" aria-seletable=${true}>${this.label}</label>
      </div>
    `;
  }
}
