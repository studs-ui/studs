import { LitElement, TemplateResult, html, unsafeCSS, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { WithForm, WithFormInterface } from "../../mixins/withForm";
import { generateUniqueId } from "../../utils/shared";
import style from "styles/checkbox.scss?inline";

export interface CheckboxProps extends WithFormInterface {
  value?: string;
  checked?: boolean;
  children?: HTMLElement | TemplateResult | string;
  label?: string;
}

@customElement("studs-checkbox")
export class StudsCheckbox extends WithForm(LitElement) {
  static styles = unsafeCSS(style);

  @property({ type: String }) value: CheckboxProps["value"] = "";
  @property({ type: Boolean }) checked?: CheckboxProps["checked"];
  @property({ type: String }) label?: CheckboxProps["label"];

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", this.handleChange);
  }

  disconnectedCallback() {
    this.removeEventListener("change", this.handleChange);
    super.disconnectedCallback();
  }

  handleChange = (e: Event) => {
    if (this.disabled) {
      return;
    }

    // Update the checked property based on the checkbox state
    const input = e.target as HTMLInputElement;
    const newChecked = input.checked;
    if (newChecked !== this.checked) {
      this.checked = newChecked;

      // Emit a custom event with the checked state
      // this.dispatchEvent(new CustomEvent("change", { detail: this.checked }));
      this.dispatch(this.value);
    }
  };

  render() {
    const classes = {
      checkbox: true,
    };

    const inputId = generateUniqueId("checkbox");

    return html`
      <div class="${classMap(classes)}">
        <input
          id="${inputId}"
          type="checkbox"
          name="${ifDefined(this.name)}"
          value="${ifDefined(this.value)}"
          ?checked="${this.checked}"
          ?disabled="${this.disabled}"
          @change="${this.handleChange}"
          ${this.control}
        />
        ${this.label ? html`<label for="${inputId}">${this.label}</label>` : ""}
      </div>
    `;
  }
}
