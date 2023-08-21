import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { WithForm, WithFormInterface } from '../../mixins/withForm';
import style from '../../styles/lib/components/textarea.scss?inline';
import { generateUniqueId } from '../../utils/shared';

export interface TextareaProps extends WithFormInterface {
  value?: string;
  rows?: number;
  cols?: number;
  characterCounter?: boolean;
  maxLength?: number;
  variant?: 'standard' | 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';
  messageType?: 'error' | 'success' | 'warning';
  helperText?: string[];
}

@customElement('studs-textarea')
export class StudsTextarea extends WithForm(LitElement) {
  static styles = unsafeCSS(style);

  @property({ type: String }) value: TextareaProps['value'] = '';
  @property({ type: Number }) rows: TextareaProps['rows'] = 3;
  @property({ type: Number }) cols: TextareaProps['cols'] = 40;
  @property({ type: Boolean, attribute: 'character-counter' })
  characterCounter: TextareaProps['characterCounter'] = false;
  @property({ type: Number }) maxLength: TextareaProps['maxLength'] = 100;
  @property({ type: String }) variant?: TextareaProps['variant'];
  @property({ type: String }) size?: TextareaProps['size'];
  @property({ type: String }) messageType?: TextareaProps['messageType'];
  @property({ type: Array, attribute: 'helper-text' })
  helperText?: TextareaProps['helperText'] = [];

  private textareaId = generateUniqueId('textarea');

  handleInput = (event: Event) => {
    this.value = (event.target as HTMLTextAreaElement).value;
    this.dispatch(this.value);
  };

  render() {
    const classes = {
      textareaComponent: true,
      [`-${this.variant}`]: !!this.variant,
      [`${this.size}`]: !!this.size,
      [`${this.messageType}`]: !!this.messageType,
    };

    return html`
      <div class="textareaComponent">
        ${this.label
          ? html`<label
              >${this.label}${this.required
                ? html`<span class="-required"> *</span>`
                : ''}</label
            >`
          : ''}
        <textarea
          id="${this.textareaId}"
          name="${ifDefined(this.name)}"
          placeholder="${ifDefined(this.placeholder)}"
          rows="${ifDefined(this.rows)}"
          cols="${ifDefined(this.cols)}"
          maxlength="${ifDefined(this.maxLength)}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          @input="${this.handleInput}"
          class=${classMap(classes)}
          ${this.control}
        >
${ifDefined(this.value)}</textarea
        >
        ${this.characterCounter
          ? html`<div class="counter">
              ${this.value?.length ?? 0}/${this.maxLength}
            </div>`
          : ''}
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
