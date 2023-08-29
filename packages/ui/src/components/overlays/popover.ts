import style from '@studs/styles/components/popover.scss?inline';
import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { PopperController } from '../../controllers/popperController';
import { WithPopper, WithPopperInterface } from '../../mixins/withPopper';

export interface PopoverProps extends WithPopperInterface {
  children?: TemplateResult | HTMLElement | string;
}

@customElement('studs-popover')
export class StudsPopover extends WithPopper(LitElement) {
  constructor() {
    super();
    if (this.popperController) this.popperController.on = 'click';
  }
  static styles = [unsafeCSS(style), PopperController.styles];

  render() {
    return html`<div
      class=${classMap({
        popper: true,
        popover: true,
        [`-${this.position}`]: true,
      })}
      role="popover"
    >
      <slot></slot>
      <studs-button
        aria-label="Close popover"
        button-type="close"
        size="small"
        icon="close"
        @click=${this.popperController?.hidePopper}
      ></studs-button>
      <div id="arrow"></div>
    </div>`;
  }
}
