import style from '@studs/styles/components/radioButton.scss?inline';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { WithForm, WithFormInterface } from '../../mixins/withForm';

export interface RadioProps extends WithFormInterface {
}

@customElement('studs-radio')
export class StudsRadio extends WithForm(LitElement) {
  static styles = unsafeCSS(style);

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
          @change="${this.onChange}"
        />
        <label for="${this.inputId}">${this.label}</label>
      </div>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
