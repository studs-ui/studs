import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import style from '@studs/styles/components/toaster.scss?inline';
import { ToastProps } from './toast';
import { classMap } from 'lit/directives/class-map.js';

@customElement('studs-toaster')
export class StudsToaster extends LitElement {
  @property({ type: String }) position: ToastProps['position'] = 'bottom-right';

  @state() toasts: Array<any> = [];

  static styles = unsafeCSS(style);

  public createToast(data: ToastProps) {
    this.toasts = [...this.toasts, data];
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
          open
          type=${toast?.type || 'info'}
          duration=${toast?.duration || 3000}
          ?closeable=${toast?.closeable || true}
          heading=${toast?.heading}
          message=${toast?.message}
          action=${toast?.action}
          onActionClick=${toast?.onActionClick}
        ></studs-toast>`;
      })}
    </div>`;
  }
}
