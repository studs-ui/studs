import style from '@studs/styles/components/radioButton.scss?inline';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { WithForm, WithFormInterface } from '../../mixins/withForm';

export interface RadioProps extends WithFormInterface {
  checked?: boolean;
}

@customElement('studs-radio')
export class StudsRadio extends WithForm(LitElement) {
  static styles = unsafeCSS(style);
  @property({ type: Boolean, reflect: true }) checked: RadioProps['checked'] =
    false;

  handleChange = (event: Event) => {
    this.checked = (event.target as HTMLInputElement).checked;
    this.dispatch(this.value);
  };

  render() {
    return html`
      <div class="radioButton">
        <input
          id="${this.inputId}"
          type="radio"
          name=${ifDefined(this.name)}
          value=${ifDefined(this.value)}
          .checked=${ifDefined(this.checked)}
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
