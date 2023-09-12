import style from '@studs/styles/components/radioGroup.scss?inline';
import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { WithForm, WithFormInterface } from '../../mixins/withForm';
import { StudsRadio } from './radio';
import { ifDefined } from 'lit/directives/if-defined.js';

export interface RadioGroupProps extends WithFormInterface {
  
}

@customElement('studs-radio-group')
export class StudsRadioGroup extends WithForm(LitElement) {
  static styles = unsafeCSS(style);

  onChange(event: Event) {
    const target = event.target as StudsRadio;
    this.value = target.value;
    this.dispatch(this.value);
  }


  // This method updates the checked status of each STUDS-RADIO element in the slot based on the valueValue of the StudsRadioGroup.
  initRadios(e: Event) {
    const radios = (e.target as HTMLSlotElement).assignedElements();
    radios?.forEach((radio: Element) => {
      const studsRadio = radio as StudsRadio;
      const isChecked = studsRadio.value === this.value;
      studsRadio.name = this.name;
      studsRadio.setAttribute('role', 'radio');
      if(isChecked) {
        studsRadio.setAttribute('aria-checked', 'true')
        studsRadio.checked = isChecked
      } else {
        studsRadio.setAttribute('aria-checked', 'false')
        studsRadio.checked = false
      };
      radio.addEventListener('change', this.onChange.bind(this));
    });
  }

  render() {
    return html`<fieldset
      name=${this.name}
      id=${this.inputId}
      role='radiogroup'
      aria-labelledby=${this.name}
      ?aria-required=${this.required}
      aria-errormessage=${ifDefined(this.error)}
      class=${classMap({
        radioGroup: true,
        '-inline': this.display === 'inline',
      })}
    >
      ${this.label ? html`<legend>${this.label}</legend>` : nothing}
      <slot @slotchange=${this.initRadios}></slot>
    </fieldset>`;
  }
}
