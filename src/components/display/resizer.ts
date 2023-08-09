import {
  LitElement,
  PropertyValueMap,
  TemplateResult,
  html,
  unsafeCSS,
} from "lit";
import {
  customElement,
  property,
  query,
  queryAssignedElements,
  state,
} from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import style from "styles/resizer.scss?inline";

export interface StudsResizerPaneProps {
  direction: "horizontal" | "vertical";
  size?: number;
  min?: number;
  max?: number;
  children?: TemplateResult | HTMLElement | string;
}

@customElement("studs-resizer-pane")
export class StudsResizerPane extends LitElement {
  @property({ type: String }) direction: StudsResizerProps["direction"] =
    "horizontal";
  @property({ type: Number }) size?: StudsResizerPaneProps["size"];
  @property({ type: Number }) min: StudsResizerPaneProps["min"] = 0;
  @property({ type: Number }) max: StudsResizerPaneProps["max"];

  static styles = unsafeCSS(style);

  @query(".pane") pane!: HTMLElement;

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (!this.size) {
      this.size = this.pane.getBoundingClientRect().width;
    }
    if (!this.max) {
      if (this.direction === "horizontal") {
        this.max = this.parentElement?.getBoundingClientRect().width;
      } else {
        this.max = this.parentElement?.getBoundingClientRect().height;
      }
    }
  }

  render() {
    const paneClasses = {
      pane: true,
      [`-${this.direction}`]: true,
    };
    const stylemap = {
      [this.direction === "horizontal" ? "width" : "height"]: this.size + "px",
    };
    return html`
      <div
        class=${classMap(paneClasses)}
        @mouseleave=${this.onMouseLeave}
        style=${styleMap(stylemap)}
      >
        <slot></slot>
        <span
          role="presentation"
          class="handle"
          @mousedown=${this.onMouseMoveDown}
        ></span>
      </div>
    `;
  }

  @state() private _pressed: boolean = false;
  @state() private _position: number = 0;
  @state() private _startCoords: number = 0;

  private onMouseMoveDown(e: MouseEvent) {
    e.stopPropagation();
    this._pressed = true;
    if (this.direction === "horizontal") {
      this._position = e.clientX;
      this._startCoords =
        (e.target as HTMLElement)?.closest(".pane")?.getBoundingClientRect()
          .width || 0;
    } else {
      this._position = e.clientY;
      this._startCoords =
        (e.target as HTMLElement)?.closest(".pane")?.getBoundingClientRect()
          .height || 0;
    }
    this.addEventListener("mousemove", this.onMouseMove);
    this.addEventListener("mouseup", this.onMouseMoveUp);
  }

  private onMouseMoveUp() {
    this._pressed = false;
    this._startCoords = 0;
    this._position = 0;

    this.removeEventListener("mousemove", this.onMouseMove);
    this.removeEventListener("mouseup", this.onMouseMoveUp);
  }

  private onMouseMove(e: MouseEvent) {
    if (this._pressed) {
      const delta = e.clientX - this._position;
      const coords = Math.max(this._startCoords + delta, 50);

      this.size = coords;
    }
  }

  private onMouseLeave(e: MouseEvent) {
    if (this._pressed) {
      this.onMouseMoveUp();
    }
  }
}

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
    this.panes.forEach((pane) => {
      pane.setAttribute("direction", this.direction);
    });
  }
}
