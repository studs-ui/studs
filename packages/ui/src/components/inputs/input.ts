import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import style from '../../styles/lib/components/inputs.scss?inline';
import { WithForm, WithFormInterface } from '../../mixins/withForm';

export interface InputProps extends WithFormInterface {
  type?: 'text' | 'password' | 'number' | 'tel' | 'email' | 'search' | 'file';
  value?: string;
  variant?: 'standard' | 'outlined' | 'filled';
  inputSize?: 'small' | 'medium' | 'large';
  messageType?: 'error' | 'success' | 'warning';
  helperText?: string[];
  adornment?: string;
  adornmentPosition?: 'start' | 'end';
}

@customElement('studs-input')
export class StudsInput extends WithForm(LitElement) {
  static styles = unsafeCSS(style);

  @property({ type: String }) type: InputProps['type'] = 'text';
  @property({ type: String }) value: InputProps['value'] = '';
  @property({ type: String }) variant?: InputProps['variant'];
  @property({ type: String }) inputSize?: InputProps['inputSize'];
  @property({ type: String }) messageType?: InputProps['messageType'];
  @property({ type: Array, attribute: 'helper-text' })
  helperText?: InputProps['helperText'] = [];
  @property({ type: String }) adornment?: InputProps['adornment'];
  @property({ type: String, attribute: 'adornment-position' })
  adornmentPosition?: InputProps['adornmentPosition'] = 'end';

  connectedCallback(): void {
    super.connectedCallback();
    if (this.type === 'search') {
      this.addEventListener('keydown', this.handleSubmit);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.type === 'search') {
      this.removeEventListener('keydown', this.handleSubmit);
    }
  }

  handleSubmit(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const form = this.getForm(this);
      if (form)
        form.dispatchEvent(
          new Event('submit', {
            bubbles: true,
            composed: true,
          })
        );
    }
  }

  handleInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatch(this.value);
  }

  handleClear() {
    this.value = '';
    this.dispatch(this.value);
  }

  render() {
    const classes = {
      input: true,
      [`${this.variant}`]: !!this.variant,
      [`${this.inputSize}`]: !!this.inputSize,
      [`${this.messageType}`]: !!this.messageType,
      [this.adornment && this.adornmentPosition ? this.adornmentPosition : '']:
        true,
    };

    return html`
      <div class=${`inputComponent`}>
        ${this.label
          ? html`<label ?required=${this.required}>${this.label}</label>`
          : ''}
        <div class="inputWrapper">
          ${this.adornment && this.adornmentPosition === 'start'
            ? html`<div class="adornmentStart">${this.adornment}</div>`
            : ''}
          <input
            type="${ifDefined(this.type)}"
            name=${ifDefined(this.name)}
            value=${ifDefined(this.value)}
            placeholder=${ifDefined(this.placeholder)}
            ?disabled=${this.disabled}
            @input=${this.handleInput}
            class=${classMap(classes)}
            ${this.control}
          />
          ${this.adornment && this.adornmentPosition === 'end'
            ? html`<div class="adornmentEnd">${this.adornment}</div>`
            : ''}
        </div>
        ${this.error && this.helperText
          ? this.helperText.map(
              (text: string, i: number) =>
                html`<p key=${i} class="error-text">${text}</p>`
            )
          : ''}
      </div>
    `;
  }
}
