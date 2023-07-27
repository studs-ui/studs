import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import style from "styles/icons.scss?inline";

export interface IconProps {
  icon: string;
  size: "small" | "medium" | "large";
}

@customElement("studs-icon")
export class StudsIcon extends LitElement {
  @property({ type: String }) icon: IconProps["icon"] = "";
  @property({ type: String }) size: IconProps["size"] = "medium";

  static styles = unsafeCSS(style);

  render() {
    const isSVG = this.icon?.includes("<svg") ? true : false;
    const classes = {
      icon: true,
      [`-${this.size}`]: true,
      [`-file`]: isSVG,
      [`-font`]: !isSVG,
    };
    if (this.icon)
      return html`<div class="${classMap(classes)}">
        ${unsafeHTML(this.icon)}
      </div>`;
    return null;
  }
}
