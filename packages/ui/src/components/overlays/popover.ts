import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import style from '@studs/styles/components/popover.scss?inline';
import { classMap } from 'lit/directives/class-map.js';

export interface PopoverProps {
  direction: 'top' | 'bottom' | 'left' | 'right';
  arrowPosition: 'start' | 'center' | 'end';
  children?: TemplateResult | HTMLElement | string;
}

@customElement('studs-popover')
export class StudsPopover extends LitElement {
  @property({ type: String }) direction: PopoverProps['direction'] = 'bottom';
  @property({ type: String }) arrowPosition: PopoverProps['arrowPosition'] =
    'center';
  //   Do these open onclick, or stay open on hover if persistant?
  @state() private _open: boolean = false;
  @state() private _hidden: boolean = !this._open;

  static styles = unsafeCSS(style);

  render() {
    const containerClasses = {
      popover: true,
      '-container': true,
      '-show': this._open,
      [`-${this.direction}`]: true,
      [`-${this.arrowPosition}Arrow`]: true,
    };
    return html`<div
      @click=${() => {
        this._open = !this._open;
        this._hidden = !this._hidden;
      }}
      class="popover -wrapper"
    >
      <slot></slot>
      <div class=${classMap(containerClasses)} aria-hidden=${this._hidden}>
        <slot name="popover"></slot>
        <studs-button
          aria-label="Close popover"
          buttontype="icon"
          @click=${this.onClose}
          icon="close"
        ></studs-button>
      </div>
    </div>`;
  }

  onClose() {
    this._hidden = true;
    setTimeout(() => {
      this._open = false;
    }, 300);
  }
}
