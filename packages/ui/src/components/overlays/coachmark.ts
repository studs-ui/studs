import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { WithPopper, WithPopperInterface } from '../../mixins/withPopper';
import { PopperController } from '../../controllers/popperController';
import style from '@studs/styles/components/coachmark.scss?inline';

export interface CoachMarkProps extends WithPopperInterface {
  children?: TemplateResult | HTMLElement | string;
}

@customElement('studs-coachmark')
export class StudsCoachMark extends WithPopper(LitElement) {
  @property({ type: Boolean, attribute: 'initial-open' }) initialOpen: boolean =
    false;
  constructor() {
    super();
    if (this.popperController) this.popperController.on = 'manual';
  }

  static styles = [unsafeCSS(style), PopperController.styles];

  connectedCallback(): void {
    super.connectedCallback();
    if (this.initialOpen) {
      this.show();
    }
  }

  public show() {
    this.popperController?.showPopper();
  }

  public hide() {
    this.popperController?.hidePopper();
  }

  render() {
    return html`<div role="coachmark" class="popper coachmark -wrapper">
      <header class="coachmark -title">
        <slot name="title"></slot>
      </header>
      <slot class="coachmark -media" name="media"></slot>
      <main><slot></slot></main>
      <footer class="coachmark -footer">
        <slot name="footer"></slot>
      </footer>
      <div id="arrow"></div>
    </div>`;
  }
} 
