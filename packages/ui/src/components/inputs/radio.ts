import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { WithForm, WithFormInterface } from '../../mixins/withForm';
import style from '../../styles/lib/components/radioButton.scss?inline';
import { generateUniqueId } from '../../utils/shared';

export interface RadioProps extends WithFormInterface {
  value?: string;
  checked?: boolean;
}

@customElement('studs-radio')
export class StudsRadio extends WithForm(LitElement) {
  static styles = unsafeCSS(style);

  @property({ type: String }) value: RadioProps['value'] = '';
  @property({ type: Boolean, reflect: true }) checked: RadioProps['checked'] =
    false;
  @property({ type: String }) name?: RadioProps['name'];

  private inputId = generateUniqueId('radio');

  handleChange = (event: Event) => {
    this.checked = (event.target as HTMLInputElement).checked;
    this.dispatch(this.value);
  };

  render() {
    const classes = {
      radioButton: true,
    };

    return html`
      <div class="${classMap(classes)}">
        <input
          id="${this.inputId}"
          type="radio"
          name="${ifDefined(this.name)}"
          value="${ifDefined(this.value)}"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          @change="${this.handleChange}"
          ${this.control}
        />
        <label for="${this.inputId}">${this.label}</label>
      </div>
    `;
  }
}
