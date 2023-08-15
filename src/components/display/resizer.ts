import { LitElement, TemplateResult, html, unsafeCSS } from "lit";
import {
  customElement,
  property,
  queryAssignedElements,
} from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import style from "styles/resizer.scss?inline";

export interface StudsResizerProps {
  direction: "horizontal" | "vertical";
  children?: TemplateResult | HTMLElement | string;
}

@customElement("studs-resizer")
export class StudsResizer extends LitElement {
  @property({ type: String }) direction: StudsResizerProps["direction"] =
    "horizontal";

  static styles = unsafeCSS(style);

  render() {
    const classes = {
      resizer: true,
      "-wrapper": true,
      [`-${this.direction}`]: true,
    };

    return html`
      <div class=${classMap(classes)}>
        <slot @slotchange=${this.registerResizerPanes}></slot>
      </div>
    `;
  }

  @queryAssignedElements({ flatten: true }) panes!: HTMLElement[];

  registerResizerPanes() {
    this.panes.forEach((pane, index) => {
      if (index === this.panes.length - 1) {
        pane.classList.add("-last");
      }
    });
  }
}