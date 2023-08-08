import { LitElement, TemplateResult, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import style from "styles/radioButton.scss?inline";
import { WithForm, WithFormInterface } from "../../mixins/withForm";

export interface RadioProps extends WithFormInterface {
  value?: string;
  checked?: boolean;
  children?: HTMLElement | TemplateResult | string;
}

@customElement("studs-radio")
export class StudsRadio extends WithForm(LitElement) {
  static styles = unsafeCSS(style);

  @property({ type: String }) value: RadioProps["value"] = "";
  @property({ type: Boolean }) checked?: RadioProps["checked"];

  // Add event listener when the component is connected to the DOM
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.handleClick);
  }

  // Remove event listener when the component is disconnected from the DOM
  disconnectedCallback() {
    this.removeEventListener("click", this.handleClick);
    super.disconnectedCallback();
  }

  // Update the checked attribute of the native radio input when the checked property changes
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    if (changedProperties.has("checked")) {
      const input = this.shadowRoot?.querySelector("input");
      if (input) {
        input.checked = this.checked || false;
      }
    }
  }

  // Handle click event to ensure only one radio button in a group can be selected at a time
  handleClick = () => {
    if (this.disabled) {
      return;
    }
    const allRadios = document.querySelectorAll(
      `studs-radio[name=${this.name}]`
    );
    allRadios.forEach((radio: any) => {
      if (radio !== this) {
        radio.checked = false;
      }
    });
    this.checked = true;
    // Emit a custom event with the selected value
    // this.dispatchEvent(new CustomEvent("change", { detail: this.value }));
    this.dispatch(this.value);
  };

  render() {
    const classes = {
      radioButton: true,
    };

    return html`
      <label class="${classMap(classes)}">
        <input
          type="radio"
          name=${ifDefined(this.name)}
          name="${ifDefined(this.name)}"
          value="${ifDefined(this.value)}"
          ?disabled="${this.disabled}"
          ${this.control}
        />
        <slot></slot>
      </label>
    `;
  }
}
