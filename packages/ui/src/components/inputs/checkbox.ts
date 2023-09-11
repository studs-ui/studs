import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { WithForm, WithFormInterface } from '../../mixins/withForm';
import style from '@studs/styles/components/checkbox.scss?inline';
import { generateUniqueId } from '../../utils/shared';

export interface CheckboxProps extends WithFormInterface {
  value?: string;
  checked?: boolean;
  indeterminate?: boolean;
  children?: HTMLElement | TemplateResult | string;
}

@customElement('studs-checkbox')
export class StudsCheckbox extends WithForm(LitElement) {
  static styles = unsafeCSS(style);

  @property({ type: String }) value: CheckboxProps['value'] = '';
  @property({ type: Boolean }) checked?: CheckboxProps['checked'];
  @property({ type: Boolean }) indeterminate?: CheckboxProps['indeterminate'];

  private inputId = generateUniqueId('checkbox');

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
    this.addEventListener('change', this.handleChange);
    this.shadowRoot
      ?.querySelector(`#${this.inputId}`)
      ?.addEventListener('update', this.updateHandler);
  }

  disconnectedCallback() {
    this.shadowRoot
      ?.querySelector(`#${this.inputId}`)
      ?.removeEventListener('update', this.updateHandler);
    this.removeEventListener('change', this.handleChange);
    super.disconnectedCallback();
  }

  handleChange = (e: Event) => {
    if (this.disabled) {
      return;
    }

    // Update the checked property based on the checkbox state
    const input = e.target as HTMLInputElement;
    const newChecked = input.checked;
    if (newChecked !== this.checked) {
      this.checked = newChecked;

      // Emit a custom event with the checked state
      // this.dispatchEvent(new CustomEvent("change", { detail: this.checked }));
      this.dispatch(this.value);
    }
  };

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
          .checked="${this.checked}"
          ?disabled="${this.disabled}"
          @change="${this.handleChange}"
        />
        <label for="${this.inputId}">${this.label}</label>
      </div>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}
