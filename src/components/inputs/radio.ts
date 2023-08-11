import { LitElement, TemplateResult, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { WithForm, WithFormInterface } from "../../mixins/withForm";
import { generateUniqueId } from "../../utils/shared";
import style from "styles/radioButton.scss?inline";

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

  private inputId = generateUniqueId("radio");

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.handleClick);
  }

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
    this.checked = !this.checked;
    this.dispatch(this.value);
  };

  handleChange = (event: Event) => {
    this.checked = (event.target as HTMLInputElement).checked;
    this.dispatch(this.value);
  };

  render() {
    const classes = {
      radioButton: true,
    };

    // console.log(this.inputId, this.label);

    return html`
      <div class="${classMap(classes)}">
        <input
          id="${this.inputId}"
          type="radio"
          name="${ifDefined(this.name)}"
          value="${ifDefined(this.value)}"
          ?disabled="${this.disabled}"
          @change="${this.handleChange}"
          ${this.control}
        />
        <label for="${this.inputId}">${this.label}</label>
      </div>
    `;
  }
}
