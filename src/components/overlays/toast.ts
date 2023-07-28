import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import style from "styles/toasts.scss?inline";

export interface ToastProps {
  type: "info" | "success" | "warning" | "error";
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  duration?: number;
  onActionClick?: () => void;
  closeable: boolean;
  heading?: string;
  message?: string;
  action?: string;
}

// Extended Interface for Function Reusability of ToastProps
export interface ToastElementProps extends ToastProps {
  static: boolean;
  open: boolean;
  reverse: boolean;
}

@customElement("studs-toast")
export class StudsToast extends LitElement {
  @property({ type: Boolean }) static: ToastElementProps["static"] = false;
  @property({ type: Boolean }) open: ToastElementProps["open"] = false;
  @property({ type: String }) type: ToastElementProps["type"] = "info";
  @property({ type: String }) position: ToastElementProps["position"] =
    "bottom-right";
  @property({ type: String }) duration: ToastElementProps["duration"] = 3000;
  @property({ type: Function })
  onActionClick?: ToastElementProps["onActionClick"];
  @property({ type: Boolean }) closeable: ToastElementProps["closeable"] =
    false;
  //   @property({ type: String }) title: ToastProps["title"];
  @property({ type: String }) heading: ToastElementProps["heading"];
  @property({ type: String }) message: ToastElementProps["message"];
  @property({ type: String }) action: ToastElementProps["action"];

  static styles = unsafeCSS(style);

  renderStatusIcon() {
    if (this.type) {
      switch (this.type) {
        case "info":
          return html` <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <rect
              width="20"
              height="20"
              fill="white"
              style="mix-blend-mode:multiply"
            />
            <path
              d="M10 1.25C8.26942 1.25 6.57769 1.76318 5.13876 2.72464C3.69983 3.6861 2.57832 5.05267 1.91606 6.65152C1.25379 8.25037 1.08051 10.0097 1.41813 11.707C1.75575 13.4044 2.58911 14.9635 3.81282 16.1872C5.03653 17.4109 6.59563 18.2443 8.29296 18.5819C9.9903 18.9195 11.7496 18.7462 13.3485 18.0839C14.9473 17.4217 16.3139 16.3002 17.2754 14.8612C18.2368 13.4223 18.75 11.7306 18.75 10C18.75 7.67936 17.8281 5.45376 16.1872 3.81282C14.5462 2.17187 12.3206 1.25 10 1.25V1.25ZM10 5C10.1854 5 10.3667 5.05498 10.5209 5.158C10.675 5.26101 10.7952 5.40743 10.8661 5.57873C10.9371 5.75004 10.9557 5.93854 10.9195 6.1204C10.8833 6.30225 10.794 6.4693 10.6629 6.60041C10.5318 6.73152 10.3648 6.82081 10.1829 6.85699C10.001 6.89316 9.81254 6.87459 9.64124 6.80364C9.46993 6.73268 9.32352 6.61252 9.2205 6.45835C9.11749 6.30418 9.0625 6.12292 9.0625 5.9375C9.0625 5.68886 9.16128 5.4504 9.33709 5.27459C9.51291 5.09877 9.75136 5 10 5ZM12.5 15.0781H7.5V13.6719H9.29688V10.0781H8.125V8.67188H10.7031V13.6719H12.5V15.0781Z"
              fill="#0043CE"
            />
          </svg>`;
        case "success":
          return html`<svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <rect
              width="20"
              height="20"
              fill="white"
              style="mix-blend-mode:multiply"
            />
            <path
              d="M10 1.25C8.26942 1.25 6.57769 1.76318 5.13876 2.72464C3.69983 3.6861 2.57832 5.05267 1.91606 6.65152C1.25379 8.25037 1.08051 10.0097 1.41813 11.707C1.75575 13.4044 2.58911 14.9635 3.81282 16.1872C5.03653 17.4109 6.59563 18.2442 8.29296 18.5819C9.9903 18.9195 11.7496 18.7462 13.3485 18.0839C14.9473 17.4217 16.3139 16.3002 17.2754 14.8612C18.2368 13.4223 18.75 11.7306 18.75 10C18.75 7.67936 17.8281 5.45376 16.1872 3.81282C14.5462 2.17187 12.3206 1.25 10 1.25ZM8.75 13.4942L5.625 10.3692L6.61913 9.375L8.75 11.5058L13.3813 6.875L14.3786 7.86619L8.75 13.4942Z"
              fill="#24A148"
            />
          </svg>`;
        case "warning":
          return html`<svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <rect
              width="20"
              height="20"
              fill="white"
              style="mix-blend-mode:multiply"
            />
            <path
              d="M10 1.25C5.1875 1.25 1.25 5.1875 1.25 10C1.25 14.8125 5.1875 18.75 10 18.75C14.8125 18.75 18.75 14.8125 18.75 10C18.75 5.1875 14.8125 1.25 10 1.25ZM9.3125 5H10.6875V11.875H9.3125V5V5ZM10 15.625C9.5 15.625 9.0625 15.1875 9.0625 14.6875C9.0625 14.1875 9.5 13.75 10 13.75C10.5 13.75 10.9375 14.1875 10.9375 14.6875C10.9375 15.1875 10.5 15.625 10 15.625Z"
              fill="#F1C21B"
            />
          </svg>`;
        case "error":
          return html`<svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <rect
              width="20"
              height="20"
              fill="white"
              style="mix-blend-mode:multiply"
            />
            <path
              d="M10 1.24999C8.84899 1.24285 7.70796 1.4643 6.64314 1.9015C5.57832 2.3387 4.61089 2.98295 3.79695 3.79689C2.98301 4.61083 2.33876 5.57826 1.90156 6.64308C1.46436 7.7079 1.24291 8.84892 1.25005 9.99998C1.24291 11.151 1.46436 12.2921 1.90156 13.3569C2.33876 14.4217 2.98301 15.3891 3.79695 16.2031C4.61089 17.017 5.57832 17.6613 6.64314 18.0985C7.70796 18.5357 8.84899 18.7571 10 18.75C11.1511 18.7571 12.2921 18.5357 13.3569 18.0985C14.4218 17.6613 15.3892 17.017 16.2031 16.2031C17.0171 15.3891 17.6613 14.4217 18.0985 13.3569C18.5357 12.2921 18.7572 11.151 18.75 9.99998C18.7572 8.84892 18.5357 7.7079 18.0985 6.64308C17.6613 5.57826 17.0171 4.61083 16.2031 3.79689C15.3892 2.98295 14.4218 2.3387 13.3569 1.9015C12.2921 1.4643 11.1511 1.24285 10 1.24999ZM13.4031 14.375L5.62505 6.5973L6.59736 5.62499L14.375 13.403L13.4031 14.375Z"
              fill="#DA1E28"
            />
          </svg>`;
        default:
          return null;
      }
    } else {
      return null;
    }
  }

  render() {
    const classes = {
      toast: true,
      "-static": this.static,
      "-open": this.open,
      [`-${this.type}`]: true,
      [`-${this.position}`]: true,
    };

    return html`<div class=${classMap(classes)}>
      ${this.renderStatusIcon()}
      ${this.heading ? html`<strong>${this.heading}</strong>` : ""}
      ${this.message ? html`<p>${this.message}</p>` : ""}
      <slot></slot>
      ${this.action
        ? html`<div class="actions">
            <studs-button buttontype="link" onclick=${this.onActionClick}
              >${this.action}</studs-button
            >
          </div>`
        : ""}
      ${this.closeable
        ? html`<studs-button
            buttontype="icon"
            icon=${`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="16" height="16" fill="white" style="mix-blend-mode:multiply"/>
        <path d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z" fill="#161616"/>
        </svg>`}
          ></studs-button>`
        : ""}
    </div>`;
  }
}
