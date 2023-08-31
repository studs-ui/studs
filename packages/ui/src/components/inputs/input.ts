import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
// import '@studs/styles/components/inputs.scss?inline';
import { WithForm, WithFormInterface } from '../../mixins/withForm';

export interface InputProps extends WithFormInterface {
  type?: 'text' | 'password' | 'number' | 'tel' | 'email' | 'search' | 'file';
  value?: string;
  inputSize?: 'small' | 'medium' | 'large';
  messageType?: 'error' | 'success' | 'warning';
  helperText?: string[];
  adornment?: string;
  adornmentPosition?: 'start' | 'end';
}

@customElement('studs-input')
export class StudsInput extends WithForm(LitElement) {
  @property({ type: String }) type: InputProps['type'] = 'text';
  @property({ type: String }) value: InputProps['value'] = '';
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
      // const form = this.getForm(this);
      // if (form)
      //   form.dispatchEvent(
      //     new Event('submit', {
      //       bubbles: true,
      //       composed: true,
      //     })
      //   );
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
      [this.adornment && this.adornmentPosition ? this.adornmentPosition : '']:
        true,
    };

    const wrapperClasses = {
      inputWrapper: true,
      [`-${this.type}`]: !!this.type,
      [`-disabled`]: !!this.disabled,
      [`-${this.inputSize}`]: !!this.inputSize,
      [`-${this.messageType}`]: !!this.messageType,
    };

    return html`
      <div class=${`inputComponent`} part="studs-input">
        ${this.label
          ? html`<label ?required=${this.required}>${this.label}</label>`
          : ''}
        <div class=${classMap(wrapperClasses)}>
          ${this.adornment && this.adornmentPosition === 'start'
            ? html`<div class="adornment -start">${this.adornment}</div>`
            : ''}
          <input
            type="${ifDefined(this.type)}"
            name=${ifDefined(this.name)}
            value=${ifDefined(this.value)}
            placeholder=${ifDefined(this.placeholder)}
            ?disabled=${this.disabled}
            @input=${this.handleInput}
            class=${classMap(classes)}
          />
          ${this.adornment && this.adornmentPosition === 'end'
            ? html`<div class="adornment -end">${this.adornment}</div>`
            : ''}
          ${this.type === 'search'
            ? html`<div class="adornment -search">search</div>`
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

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}
