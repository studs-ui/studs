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
