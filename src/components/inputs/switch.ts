import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "styles/switch.scss?inline";

export interface SwitchProps {
  checked: boolean;
  disabled: boolean;
  label: string;
  labelPosition: "start" | "end" | "top" | "bottom";
  name: string;
  size: "small" | "medium" | "large";
}
@customElement("studs-switch")
export class StudsSwitch extends LitElement {
  static styles = unsafeCSS(style);

  @property({ type: Boolean }) checked: SwitchProps["checked"] = false;
  @property({ type: Boolean }) disabled: SwitchProps["disabled"] = false;
  @property({ type: String }) label: SwitchProps["label"] = "";
  @property({ type: String, attribute: "label-position" }) labelPosition: SwitchProps["labelPosition"] = "end";
  @property({ type: String }) name: SwitchProps["name"] = "";
  @property({ type: String }) size: SwitchProps["size"] = "small";

  render() {
    return html`
      <div class="switch ${this.labelPosition}">
        <label class="switch-label ${this.size}">
          <input type="checkbox" ?checked=${this.checked} ?disabled=${this.disabled} @change=${this.onChange} />
          <span class="slider"></span>
        </label>
        <span>${this.label}</span>
      </div>
    `;
  }

  onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.checked = target.checked;

    this.dispatchEvent(
      new CustomEvent("switch-change", {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      })
    );
  }
}
