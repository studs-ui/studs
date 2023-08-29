import { Placement } from '@floating-ui/dom';
import style from '@studs/styles/components/popover.scss?inline';
import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

export interface PopoverProps {
  position: Placement;
  children?: TemplateResult | HTMLElement | string;
}

@customElement('studs-popover')
export class StudsPopover extends LitElement {
  @property({ type: String }) position: PopoverProps['position'] = 'bottom';

  static styles = unsafeCSS(style);

  render() {
    return html`<div
      class=${classMap({
        popper: true,
        popover: true,
      })}
    >
      <slot name="popover"></slot>
      <studs-button
        aria-label="Close popover"
        buttontype="close"
        icon="close"
      ></studs-button>
    </div>`;
  }
}
