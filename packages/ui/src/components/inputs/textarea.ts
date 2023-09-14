import style from '@studs/styles/components/textarea.scss?inline';
import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { WithForm, WithFormInterface } from '../../mixins/withForm';

export interface TextareaProps extends WithFormInterface {
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

  render() {
    return html`
      <div
        class=${classMap({
          textareaComponent: true,
          [`-${this.variant}`]: !!this.variant,
          [`${this.size}`]: !!this.size,
          [`${this.messageType}`]: !!this.messageType,
        })}
      >
        ${this.label
          ? html`<label
              >${this.label}${this.required
                ? html`<span class="-required"> *</span>`
                : ''}</label
            >`
          : ''}
        <textarea
          id=${this.inputId}
          name=${ifDefined(this.name)}
          placeholder=${ifDefined(this.placeholder)}
          rows=${ifDefined(this.rows)}
          cols=${ifDefined(this.cols)}
          maxlength=${ifDefined(this.maxLength)}
          ?required=${this.required}
          ?disabled=${this.disabled}
          @input=${this.onChange}
          .value=${this.value}
        ></textarea>
        ${this.characterCounter
          ? html`<div class="counter">
              ${this.value?.length ?? 0}/${this.maxLength}
            </div>`
          : ''}
        ${this.helperText
          ? this.helperText.map(
              (text: string, i: number) =>
                html`<p key=${i} class="helper-text">${text}</p>`
            )
          : nothing}
      </div>
    `;
  }
}
