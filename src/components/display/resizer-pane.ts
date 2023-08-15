import {
  LitElement,
  PropertyValueMap,
  TemplateResult,
  html,
  unsafeCSS,
} from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";
import style from "styles/resizerPane.scss?inline";

export interface StudsResizerPaneProps {
  direction?: "horizontal" | "vertical" | string;
  size?: number;
  min?: number;
  max?: number;
  children?: TemplateResult | HTMLElement | string;
}

@customElement("studs-resizer-pane")
export class StudsResizerPane extends LitElement {
  @property({ type: String }) direction: StudsResizerPaneProps["direction"];
  @property({ type: Number }) size?: StudsResizerPaneProps["size"];
  @property({ type: Number }) min: StudsResizerPaneProps["min"] = 50;
  @property({ type: Number }) max: StudsResizerPaneProps["max"];

  static styles = unsafeCSS(style);

  @query(".pane") pane!: HTMLElement;

  connectedCallback(): void {
    super.connectedCallback();
    if (!this.direction)
      this.direction =
        this.parentElement?.getAttribute("direction") || "horizontal";
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.firstUpdated(_changedProperties);
    if (this.direction === "horizontal") {
      if (!this.size && !this.classList.contains("-last")) {
        this.size = this.pane.getBoundingClientRect().width;
      }
      if (!this.max) {
        this.max = this.parentElement?.getBoundingClientRect().width;
      }
    } else if (this.direction === "vertical") {
      if (!this.size && !this.classList.contains("-last")) {
        this.size = this.pane.getBoundingClientRect().height;
      }
      if (!this.max) {
        this.max = this.parentElement?.getBoundingClientRect().height;
      }
    }
  }

  render() {
    const paneClasses = {
      pane: true,
      [`-${this.direction}`]: true,
      "-disabled": this.classList.contains("-last"),
    };
    const stylemap = {
      [this.direction === "horizontal" ? "width" : "height"]: this.size + "px",
    };
    return html`
      <div
        class=${classMap(paneClasses)}
        @mousemove=${this.onMouseMove}
        @mouseup=${this.onMouseMoveUp}
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
  @state() private _initialSize: number = 0;
  @state() private _position: number = 0;

  private onMouseMoveDown(e: MouseEvent) {
    this._pressed = true;
    if (this.direction === "horizontal") {
      this._position = e.clientX;
      this._initialSize =
        (e.target as HTMLElement)?.closest(".pane")?.getBoundingClientRect()
          .width ||
        this.size ||
        0;
      this.requestUpdate();
    } else {
      this._position = e.clientY;
      this._initialSize =
        (e.target as HTMLElement)?.closest(".pane")?.getBoundingClientRect()
          .height ||
        this.size ||
        0;
      this.requestUpdate();
    }
  }
  private _delta: number = 0;
  private onMouseMove(e: MouseEvent) {
    if (this._pressed) {
      if (this.direction === "horizontal") {
        this._delta = e.clientX - this._position;
      } else if (this.direction === "vertical") {
        this._delta = e.clientY - this._position;
      }

      let newSize = this._initialSize + this._delta;
      if (this.min && newSize <= this.min) {
        this.size = this.min;
      }
      if (this.max && newSize >= this.max) {
        this.size = this.max;
      }
      this.size = newSize;
      this.requestUpdate();
      this.dispatchEvent(
        new CustomEvent("resize", {
          detail: {
            size: this.size,
          },
        })
      );
    }
  }

  private onMouseMoveUp() {
    this._pressed = false;
    this._initialSize = 0;
    this._position = 0;
  }

  private onMouseLeave(e: MouseEvent) {
    if (this._pressed) {
      this.onMouseMoveUp();
    }
  }
}