import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { WithPopper, WithPopperInterface } from '../../mixins/withPopper';
import { PopperController } from '../../controllers/popperController';
import style from '@studs/styles/components/coachmark.scss?inline';

export interface CoachMarkProps extends WithPopperInterface {
  children?: TemplateResult | HTMLElement | string;
}

@customElement('studs-coach-mark')
export class StudsCoachMark extends WithPopper(LitElement) {
  constructor() {
    super();
    if (this.popperController) this.popperController.on = 'click';
  }

  static styles = [unsafeCSS(style), PopperController.styles];

  render() {
    return html`<div role="coachmark" class="popper coachmark -wrapper">
      <header class="coachmark -title">
        <slot name="title"></slot>
      </header>
      <slot name="coachmark -media"></slot>
      <main><slot></slot></main>
      <footer class="coachmark -footer">
        <slot name="footer"></slot>
      </footer>
      <div id="arrow"></div>
    </div>`;
  }
}
