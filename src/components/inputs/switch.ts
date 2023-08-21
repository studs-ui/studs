import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "styles/switch.scss?inline";
import { WithForm, WithFormInterface } from "../../mixins/withForm";
import { ifDefined } from "lit/directives/if-defined.js";
import { generateUniqueId } from "../../utils/shared";


export interface SwitchProps extends WithFormInterface {
  checked: boolean;
  disabled: boolean;
  label: string;
  labelPosition: "start" | "end" | "top" | "bottom";
  name: string;
  size: "small" | "medium" | "large";
}
@customElement("studs-switch")
export class StudsSwitch extends WithForm(LitElement) {
  static styles = unsafeCSS(style);

  @property({ type: Boolean }) checked: SwitchProps["checked"] = false;
  @property({ type: String, attribute: "label-position" })
  labelPosition: SwitchProps["labelPosition"] = "end";
  @property({ type: String }) size: SwitchProps["size"] = "medium";

  private inputId = generateUniqueId("checkbox");

  render() {
    return html`
      <div class="switch -${this.labelPosition} -${this.size}">
        <input
          type="checkbox"
          id="${this.inputId}"
          name=${ifDefined(this.name)}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.onChange}
          ${this.control}
        />

        <label for="${this.inputId}" class="">
          <div class='wrapper'>
            <span class="slider"></span>
            <span class="value">Value</span>
          </div>
          ${this.label}
        </label>
      </div>
    `;
  }

  onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.checked = target.checked;

    this.dispatch({ checked: this.checked });
  }
}
