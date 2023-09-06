import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { WithForm, WithFormInterface } from '../../mixins/withForm';

export interface InputProps extends WithFormInterface {
  type?: 'text' | 'password' | 'number' | 'tel' | 'email' | 'search' | 'file';
  value?: string;
  inputSize?: 'small' | 'medium' | 'large';
  messageType?: 'error' | 'success' | 'warning';
  helperText?: string[];
  adornmentType?: 'icon' | 'text';
  adornment?: string;
  adornmentPosition?: 'start' | 'end';
  clear?: () => void;
}

@customElement('studs-input')
export class StudsInput extends WithForm(LitElement) {
  @property({ type: String }) type: InputProps['type'] = 'text';
  @property({ type: String }) value: InputProps['value'] = '';
  @property({ type: String, attribute: 'input-size' })
  inputSize?: InputProps['inputSize'];
  @property({ type: String }) messageType?: InputProps['messageType'];
  @property({ type: Array, attribute: 'helper-text' })
  helperText?: InputProps['helperText'] = [];
  @property({ type: String, attribute: 'adornment-type' }) adornmentType?:
    | InputProps['adornmentType'] = 'text';
  @property({ type: String }) adornment?: InputProps['adornment'];
  @property({ type: String, attribute: 'adornment-position' })
  adornmentPosition?: InputProps['adornmentPosition'] = 'end';

  // If the Type is Password, provide the ability to show.
  @state() showPassword = false;
  private get inputType() {
    if (this.type === 'password' && this.showPassword) {
      return 'text';
    }
    return this.type;
  }

  connectedCallback(): void {
    super.connectedCallback();
    if (this.type === 'search') {
      this.addEventListener('keydown', this.handleEnterSubmit);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.type === 'search') {
      this.removeEventListener('keydown', this.handleEnterSubmit);
    }
  }

  private renderAdornment(position: InputProps['adornmentPosition']) {
    return html`<div
      class=${classMap({
        adornment: true,
        [`-${position}`]: true,
        '-icon': this.adornmentType === 'icon' || false,
      })}
    >
      ${this.adornment}
    </div>`;
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
      <div
        class=${classMap({
          inputComponent: true,
          [`-${this.labelType}`]: this.labelType === 'block',
        })}
        part="studs-input"
      >
        ${this.label
          ? html`<label ?required=${this.required}>${this.label}</label>`
          : nothing}
        <div class=${classMap(wrapperClasses)}>
          ${this.adornment && this.adornmentPosition === 'start'
            ? this.renderAdornment('start')
            : nothing}
          <input
            type=${this.inputType}
            name=${ifDefined(this.name)}
            value=${ifDefined(this.value)}
            placeholder=${ifDefined(this.placeholder)}
            ?disabled=${this.disabled}
            @input=${this.handleInput}
            class=${classMap(classes)}
          />
          ${this.adornment && this.adornmentPosition === 'end'
            ? this.renderAdornment('end')
            : nothing}
          ${this.type === 'search'
            ? html`<div class="adornment -search">
                <studs-button
                  type="submit"
                  button-type="tertiary"
                  icon="search"
                  size="small"
                ></studs-button>
              </div>`
            : nothing}
          ${this.type === 'password'
            ? html`<div class="adornment -password">
                <studs-button
                  type="button"
                  button-type="tertiary"
                  icon=${this.showPassword ? 'visibility_off' : 'visibility'}
                  @click=${() => {
                    this.showPassword = !this.showPassword;
                  }}
                  size="small"
                ></studs-button>
              </div>`
            : nothing}
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

  private onSubmit() {
    // e.preventDefault();
    this.dispatchEvent(
      new CustomEvent('submit', {
        detail: {
          value: this.value,
        },
        bubbles: true,
        composed: true,
      })
    );
    if (this._internals?.form) this._internals.form.submit();
  }

  private handleEnterSubmit(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.onSubmit(e as unknown as SubmitEvent);
    }
  }

  private handleInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatch(this.value);
  }

  public clear() {
    this.value = '';
    this.dispatch(this.value);
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}
