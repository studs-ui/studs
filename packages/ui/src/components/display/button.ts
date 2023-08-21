import { LitElement, TemplateResult, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import styles from '../../styles/lib/components/buttons.scss?inline';

export interface ButtonProps {
  buttonType:
    | "cta"
    | "primary"
    | "secondary"
    | "tertiary"
    | "link"
    | "floating"
    | "icon";
  size: "small" | "medium" | "large";
  disabled: boolean;
  iconPosition: "start" | "end";
  contentDirection: "horizontal" | "vertical";
  btnClasses: string;
  icon?: string;
  children?: HTMLElement | TemplateResult | string;
  type: "button" | "submit" | "reset";
}

@customElement("studs-button")
export class StudsButton extends LitElement {
  // CSS Properties
  @property({ type: String }) buttonType: ButtonProps["buttonType"] = "cta";
  @property({ type: String }) size: ButtonProps["size"] = "medium";
  @property({ type: Boolean }) disabled: ButtonProps["disabled"] = false;
  @property() iconPosition: ButtonProps["iconPosition"] = "start";
  @property() contentDirection: ButtonProps["contentDirection"] = "horizontal";
  @property() btnClasses: ButtonProps["btnClasses"] = "";
  @property({ type: String }) icon?: ButtonProps["icon"];
  @property({ type: String }) type: ButtonProps["type"] = "button";

  static styles = unsafeCSS(styles);

  renderIcon() {
    if (this.icon)
      return html`<studs-icon
        icon="${this.icon}"
        size="${this.size || "medium"}"
      ></studs-icon>`;
  }

  render() {
    const classes = {
      button: true,
      [`-${this.buttonType}`]: this.buttonType,
      [`-${this.size}`]: true,
      "-disabled": this.disabled,
      [`-${this.contentDirection}`]: this.contentDirection,
      "-reverse": this.iconPosition === "end",
      [this.btnClasses]: this.btnClasses,
    };

    return html`<button
      class="${classMap(classes)}"
      ?disabled=${this.disabled}
      type=${ifDefined(this.type)}
    >
      ${this.renderIcon()} <slot></slot>
    </button>`;
  }
}
