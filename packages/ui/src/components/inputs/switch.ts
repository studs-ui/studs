import style from '@studs/styles/components/switch.scss?inline';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { WithForm, WithFormInterface } from '../../mixins/withForm';

export interface SwitchProps extends WithFormInterface {
  labelPosition: 'start' | 'end' | 'top' | 'bottom';
  size: 'small' | 'medium' | 'large';
}
@customElement('studs-switch')
export class StudsSwitch extends WithForm(LitElement) {
  static styles = unsafeCSS(style);
  @property({ type: String, attribute: 'label-position' })
  labelPosition: SwitchProps['labelPosition'] = 'end';
  @property({ type: String }) size: SwitchProps['size'] = 'medium';

  render() {
    return html`
      <div class="switch -${this.labelPosition} -${this.size}">
        <input
          type="checkbox"
          id="${this.inputId}"
          name=${ifDefined(this.name)}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.onChange}
        />

        <label for="${this.inputId}" class="">
          <div class="wrapper">
            <span class="slider"></span>
            <span class="value">Value</span>
          </div>
          ${this.label}
        </label>
      </div>
    `;
  }
}
