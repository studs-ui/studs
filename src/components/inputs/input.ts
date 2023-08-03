import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import style from "styles/inputs.scss?inline";

export interface InputProps {
  type?: "text" | "password" | "number" | "email" | "search" | "file";
  name?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  variant?: "standard" | "outlined" | "filled";
  inputSize?: "small" | "medium" | "large";
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string[];
  adornment?: string;
  adornmentPosition?: "start" | "end";
}

@customElement("studs-input")
export class StudsInput extends LitElement {
  static styles = unsafeCSS(style);

  @property({ type: String }) type: InputProps["type"] = "text";
  @property({ type: String }) name?: InputProps["name"];
  @property({ type: String }) value: InputProps["value"] = "";
  @property({ type: String }) placeholder?: InputProps["placeholder"];
  @property({ type: String }) label?: InputProps["label"];
  @property({ type: String }) variant?: InputProps["variant"];
  @property({ type: String }) inputSize?: InputProps["inputSize"];
  @property({ type: Boolean }) disabled?: InputProps["disabled"];
  @property({ type: Boolean }) required?: InputProps["required"];
  @property({ type: Boolean }) error?: InputProps["error"];
  @property({ type: Array, attribute: "helper-text" }) helperText?: InputProps["helperText"] = [];
  @property({ type: String }) adornment?: InputProps["adornment"];
  @property({ type: String, attribute: "adornment-position" }) adornmentPosition?: InputProps["adornmentPosition"] = "end";

  handleInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    console.log(this.value);
    this.dispatchEvent(new CustomEvent("value-changed", { detail: this.value }));
  }

  handleClear() {
    this.value = "";
    this.dispatchEvent(new CustomEvent("value-changed", { detail: this.value }));
  }

  render() {
    const classes = {
      input: true,
      [`${this.variant}`]: !!this.variant,
      [`${this.inputSize}`]: !!this.inputSize,
      error: !!this.error,
      [this.adornment && this.adornmentPosition ? this.adornmentPosition : '']: true
    };

    return html`
      <div class=${`inputComponent`}>
        ${this.label ? html`<label ?required=${this.required}>${this.label}</label>` : ""}
        <div class="inputWrapper">
          ${this.adornment && this.adornmentPosition === "start" ? html`<div class="adornmentStart">${this.adornment}</div>` : ""}
          <input
            type="${ifDefined(this.type)}"
            value=${ifDefined(this.value)}
            placeholder=${ifDefined(this.placeholder)}
            ?disabled=${this.disabled}
            @input=${this.handleInput}
            class=${classMap(classes)}
          />
          ${this.adornment && this.adornmentPosition === "end" ? html`<div class="adornmentEnd">${this.adornment}</div>` : ""}
        </div>
        ${this.error && this.helperText ? this.helperText.map((text: string, i: number) => html`<p key=${i} class="error-text">${text}</p>`) : ""}
      </div>
    `;
  }
}
