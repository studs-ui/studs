import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '../../styles/lib/components/radioButton.scss?inline';

@customElement('studs-radio-group')
export class StudsRadioGroup extends LitElement {
  static styles = unsafeCSS(style);

  @property({ type: String }) name!: string;
  @property({ type: String }) selectedValue: string = '';

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('change', (event: Event) =>
      this.handleGroupChange(event as CustomEvent)
    );
  }

  handleGroupChange = (event: CustomEvent) => {
    this.selectedValue = event.detail;
    this.requestUpdate();
  };

  // This method updates the checked status of each STUDS-RADIO element in the slot based on the selectedValue of the StudsRadioGroup.
  updated() {
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
    return html` <slot></slot> `;
  }
}
