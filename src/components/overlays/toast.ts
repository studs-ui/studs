import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import style from "styles/toasts.scss?inline";

export interface ToastProps {
  demo: boolean;
  open: boolean;
  reverse: boolean;
  type: "info" | "success" | "warning" | "error";
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  duration: string;
  onClick?: () => void;

  closeable: boolean;
  title?: string;
  message?: string;
  action?: string;
}

@customElement("studs-toast")
export class StudsToast extends LitElement {
  @property({ type: Boolean }) demo: ToastProps["demo"] = false;
  @property({ type: Boolean }) open: ToastProps["open"] = false;
  @property({ type: String }) type: ToastProps["type"] = "info";
  @property({ type: String }) position: ToastProps["position"] = "bottom-right";
  @property({ type: String }) duration: ToastProps["duration"] = "3000";
  @property({ type: Function }) onClick?: ToastProps["onClick"];
  @property({ type: Boolean }) closeable: ToastProps["closeable"] = false;
  //   @property({ type: String }) title: ToastProps["title"];
  @property({ type: String }) message: ToastProps["message"];
  @property({ type: String }) action: ToastProps["action"];

  static styles = unsafeCSS(style);

  render() {
    const classes = {
      toast: true,
      "-demo": this.demo,
      "-open": this.open,
      [`-${this.type}`]: true,
      [`-${this.position}`]: true,
    };

    return html`<div class=${classMap(classes)}>
      ${this.title ? html`<strong>${this.title}</strong>` : ""}
      ${this.message ? html`<p>${this.message}</p>` : ""}
      <slot></slot>
      ${this.action
        ? html`<div class="actions">
            <studs-button buttontype="tertiary" onclick=${this.onClick}
              >${this.action}</studs-button
            >
          </div>`
        : ""}
      ${this.closeable
        ? html`<studs-button buttontype="icon"><?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`
        : ""}
    </div>`;
  }
}
