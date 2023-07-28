import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import style from "styles/toaster.scss?inline";
import { ToastProps } from "./toast";
import { classMap } from "lit/directives/class-map.js";

@customElement("studs-toaster")
export class StudsToaster extends LitElement {
  @property({ type: String }) position: ToastProps["position"] = "bottom-right";

  @state() toasts: Array<any> = [];

  static styles = unsafeCSS(style);

  public createToast() {
    this.toasts = [
      ...this.toasts,
      {
        type: "info",
        duration: 3000,
        closeable: true,
        heading: "New",
        message: "Toast",
        action: "Button",
      },
      {
        type: "info",
        duration: 3000,
        closeable: true,
        heading: "New Toast",
        message: "This one is longer",
        action: "Button",
      },
    ];
    this.requestUpdate();
  }

  render() {
    const classes = {
      toaster: true,
      [`-${this.position}`]: true,
    };
    return html`<div class=${classMap(classes)}>
      ${map(this.toasts, (toast) => {
        return html`<studs-toast
          static
          type=${toast.type}
          duration=${toast.duration}
          ?closeable=${toast.closeable}
          heading=${toast.heading}
          message=${toast.message}
          action=${toast.action}
        ></studs-toast>`;
      })}
    </div>`;
  }

  //   protected createRenderRoot(): Element | ShadowRoot {
  //     return this;
  //   }
}
