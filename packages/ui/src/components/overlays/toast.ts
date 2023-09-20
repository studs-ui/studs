import { LitElement, PropertyValueMap, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import style from '@studs/styles/components/toasts.scss?inline';

export interface ToastProps {
  type: 'info' | 'success' | 'warning' | 'error';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
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

@customElement('studs-toast')
export class StudsToast extends LitElement {
  @property({ type: Boolean }) static: ToastElementProps['static'] = false;
  @property({ type: Boolean }) open: ToastElementProps['open'] = false;
  @property({ type: String }) type: ToastElementProps['type'] = 'info';
  @property({ type: String }) position: ToastElementProps['position'] =
    'bottom-right';
  @property({ type: String }) duration?: ToastElementProps['duration'];
  @property({ type: Function })
  onActionClick?: ToastElementProps['onActionClick'];
  @property({ type: Boolean }) closeable: ToastElementProps['closeable'] =
    false;
  //   @property({ type: String }) title: ToastProps["title"];
  @property({ type: String }) heading: ToastElementProps['heading'];
  @property({ type: String }) message: ToastElementProps['message'];
  @property({ type: String }) action: ToastElementProps['action'];

  get timeout() {
    if (this.duration) {
      if (this.duration < 1000) {
        return false;
      } else {
        return this.duration;
      }
    }
  }

  static styles = unsafeCSS(style);

  renderStatusIcon() {
    if (this.type) {
      switch (this.type) {
        case 'info':
          return html`<i class="icon -info">info</i>`;

        case 'success':
          return html`<i class="icon -success">check_circle</i>`;

        case 'warning':
          return html`<i class="icon -warning">warning</i>`;

        case 'error':
          return html`<i class="icon -error">error</i>`;

        default:
          return null;
      }
    } else {
      return null;
    }
  }

  // Duration Properties
  value = new Date();
  private _timerID?: any;

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (this.duration && this.open && !this._timerID) {
      this._timerID = setInterval(() => {
        this.value = new Date();
        // Update the host with new value
        this.onClose();
      }, this.duration);
    }
  }

  hostDisconnected() {
    // Clear the timer when the host is disconnected
    clearInterval(this._timerID);
    this._timerID = undefined;
  }

  render() {
    const classes = {
      toast: true,
      '-static': this.static,
      '-open': this.open,
      [`-${this.type}`]: true,
      [`-${this.position}`]: this.static ? false : true,
    };
      // '-row': (this.message && this.message?.length < 20) || false,

    return html`<div class=${classMap(classes)} aria-hidden=${!this.open}>
      <div class="toastMessage">
        ${this.renderStatusIcon()}
        <div>
          ${this.heading ? html`<strong>${this.heading}</strong>` : ''}
          ${this.message ? html`<p>${this.message}</p>` : ''}
        </div>
      </div>

      <slot></slot>

      ${this.action
        ? html`<div class="actions">
            <studs-button button-type="link" onclick=${this.onActionClick}
              >${this.action}</studs-button
            >
          </div>`
        : ''}
      ${this.closeable
        ? html`<studs-button
            button-type="close"
            size="small"
            icon="close"
            @click=${this.onClose}
          ></studs-button>`
        : ''}
    </div>`;
  }

  private onClose() {
    this.open = false;
  }
}
