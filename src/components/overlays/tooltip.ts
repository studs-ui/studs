import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import style from "styles/tooltips.scss?inline";
import { classMap } from "lit/directives/class-map.js";

export interface TooltipProps {
  direction: "top" | "bottom" | "left" | "right";
  arrowPosition: "start" | "center" | "end";
}

@customElement("studs-tooltip")
export class StudsTooltip extends LitElement {
  @property({ type: String }) direction: TooltipProps["direction"] = "bottom";
  @property({ type: String }) arrowPosition: TooltipProps["arrowPosition"] =
    "center";
  //   Do these open onclick, or stay open on hover if persistant?
  @state() private _hovered: boolean = false;
  static styles = unsafeCSS(style);

  render() {
    const containerClasses = {
      tooltip: true,
      "-container": true,
      [`-${this.direction}`]: true,
      [`-${this.arrowPosition}Arrow`]: true,
    };
    return html`<div
      @mouseenter=${() => (this._hovered = true)}
      @mouseleave=${() => (this._hovered = false)}
      class="tooltip -wrapper"
    >
      <slot></slot>
      <div class=${classMap(containerClasses)} aria-hidden=${!this._hovered}>
        <slot name="tooltip"></slot>
      </div>
    </div>`;
  }
}
