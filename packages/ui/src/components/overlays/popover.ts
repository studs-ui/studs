import style from '@studs/styles/components/popover.scss?inline';
import { LitElement, PropertyValueMap, html, nothing, unsafeCSS } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { PopperController } from '../../controllers/popperController';
import { WithPopper, WithPopperInterface } from '../../mixins/withPopper';
import { IconController } from '../../controllers/iconController';

export interface PopoverProps extends WithPopperInterface {
  children?: string | null | undefined;
  icon?: string | null | undefined;
}

@customElement('studs-popover')
export class StudsPopover extends WithPopper(LitElement) {
  @property({ type: String }) icon?: PopoverProps['icon'];
  constructor() {
    super();
    if (this.popperController) this.popperController.on = 'click';
  }

  static styles = [
    unsafeCSS(style),
    PopperController.styles,
    IconController.styles,
  ];

  @queryAssignedElements({ slot: 'footer' }) _footer!: HTMLElement[];
  @state() isFooter: boolean = false;

  iconController = new IconController();

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.firstUpdated(_changedProperties);
    if (this._footer.length > 0) {
      this.isFooter = true;
      this.scheduleUpdate();
    }
  }

  render() {
    return html`<div
      class=${classMap({
        popper: true,
        popover: true,
        '-wrapper': true,
        [`-${this.position}`]: true,
      })}
      role="popover"
    >
      <header class="popover -title">
        ${this.icon ? this.iconController.icon(this.icon) : nothing}
        <slot name="title"></slot>
        <studs-button
          aria-label="Close popover"
          button-type="close"
          size="small"
          icon="close"
          @click=${this.popperController?.hidePopper}
        ></studs-button>
      </header>
      <slot class="popover -media" name="media"></slot>
      <main><slot></slot></main>
      <!-- Renders Footer Container if Footer content is present
           Otherwise, returns slot for addition of content -->
      ${this.isFooter
        ? html`<footer class="popover -footer">
            <slot name="footer"></slot>
          </footer>`
        : html`<slot name="footer"></slot>`}
      <div id="arrow"></div>
    </div>`;
  }
}
