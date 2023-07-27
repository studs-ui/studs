import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import style from "styles/chip.scss?inline";

export interface ChipProps {
  label?: string;
  icon?: string;
  iconPosition?: "start" | "end";
  size: "small" | "medium" | "large";
  variant: "primary" | "secondary";
  contentDirection: "horizontal" | "vertical";
  disabled: boolean;
  selected: boolean;
  clickable: boolean;
  deletable: boolean;
  onDelete?: Function;
}

@customElement("studs-chip")
export class StudsChip extends LitElement {
  // Define Properties
  @property() label?: ChipProps["label"];
  @property({ type: String }) icon?: ChipProps["icon"];
  @property({ type: String }) iconPosition?: ChipProps["iconPosition"];
  @property({ type: String }) size: ChipProps["size"] = "medium";
  @property({ type: String }) variant: ChipProps["variant"] = "primary";
  @property({ type: String }) contentDirection: ChipProps["contentDirection"] =
    "horizontal";
  @property({ type: Boolean }) disabled: ChipProps["disabled"] = false;
  @property({ type: Boolean }) selected: ChipProps["selected"] = false;
  @property({ type: Boolean }) clickable: ChipProps["clickable"] = false;
  @property({ type: Boolean }) deletable: ChipProps["deletable"] = false;
  @property({ type: Function }) onDelete?: ChipProps["onDelete"];

  static styles = unsafeCSS(style);

  renderDeleteButton() {
    if (this.deletable || this.onDelete) {
      return html`<studs-button
        class="-close"
        buttontype="icon"
        icon='<svg stroke-width="1.5" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
        @click=${this.onDelete}
      ></studs-button>`;
    }
  }

  renderIcon() {
    if (this.icon)
      return html`<studs-icon
        icon="${this.icon}"
        size="${this.size}"
      ></studs-icon>`;
  }

  render() {
    const classes = {
      chip: true,
      [`-${this.size}`]: this.size,
      [`-${this.contentDirection}`]: this.contentDirection,
      [`-${this.variant}`]: this.variant,
      "-reverse": this.iconPosition === "end",
      "-disabled": this.disabled,
      "-selected": this.selected,
      "-clickable": this.clickable,
      "-deletable": this.deletable,
    };

    return html`
      <div class="${classMap(classes)}">
        ${this.renderDeleteButton()} ${this.renderIcon()}
        <slot name="accessory"></slot>
        <span class="text"><slot></slot></span>
      </div>
    `;
  }
}
