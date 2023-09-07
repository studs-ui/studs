import style from '@studs/styles/components/radioGroup.scss?inline';
import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { generateUniqueId } from '../../utils/shared';

export interface RadioGroupProps {
  name: string;
  label?: string;
  display: 'inline' | 'block';
  selectedValue: string;
}

@customElement('studs-radio-group')
export class StudsRadioGroup extends LitElement {
  private inputId = generateUniqueId('radio-group');
  static styles = unsafeCSS(style);

  @property({ type: String }) name!: RadioGroupProps['name'];
  @property({ type: String }) label?: RadioGroupProps['label'];
  @property({ type: String }) selectedValue: RadioGroupProps['selectedValue'] =
    '';
  @property({ type: String }) display: RadioGroupProps['display'] = 'block';

  static formAssociated = true;
  @state() _internals?: ElementInternals;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', (event: Event) =>
      this.handleGroupChange(event as CustomEvent)
    );
    this._internals = this.attachInternals();
  }

  handleGroupChange = (event: CustomEvent) => {
    if (event.detail) {
      this.selectedValue = event.detail;
      this._internals?.setFormValue(event.detail);
    }
    this.requestUpdate();
  };

  // This method updates the checked status of each STUDS-RADIO element in the slot based on the selectedValue of the StudsRadioGroup.
  updated() {
    // Add Internals if not added
    if (!this._internals) {
      this._internals = this.attachInternals();
    }

    const slot = this.shadowRoot?.querySelector('slot');
    const radios = slot
      ?.assignedElements()
      .filter(
        (el: Element) =>
          el.tagName === 'STUDS-RADIO' && (el as any).name === this.name
      );
    radios?.forEach((radio: Element) => {
      const studsRadio = radio as any;
      studsRadio.checked = studsRadio.value === this.selectedValue;
      const radioButton = studsRadio.shadowRoot?.querySelector(
        'input[type="radio"]'
      );
      if (radioButton) {
        radioButton.checked = studsRadio.checked;
      }
    });
  }

  render() {
    return html`<fieldset
      name=${this.name}
      id=${this.inputId}
      class=${classMap({
        radioGroup: true,
        '-inline': this.display === 'inline',
      })}
    >
      ${this.label ? html`<legend>${this.label}</legend>` : nothing}
      <slot></slot>
    </fieldset>`;
  }
}
