import style from '@studs/styles/components/tooltips.scss?inline';
import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { PopperController } from '../../controllers/popperController';
import { WithPopper, WithPopperInterface } from '../../mixins/withPopper';

export interface TooltipProps extends WithPopperInterface {
  children?: TemplateResult | HTMLElement | string;
}

@customElement('studs-tooltip')
export class StudsTooltip extends WithPopper(LitElement) {
  static styles = [unsafeCSS(style), PopperController.styles];

  render() {
    const wrapperClasses = {
      tooltip: true,
      popper: true,
      '-wrapper': true,
    };

    return html`<div
      ?disabled=${this.disabled}
      class=${classMap(wrapperClasses)}
      role="tooltip"
    >
      <slot></slot>
      <div id="arrow"></div>
    </div>`;
  }
}
