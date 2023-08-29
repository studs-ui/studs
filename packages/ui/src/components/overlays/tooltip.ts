import { Placement } from '@floating-ui/dom';
import style from '@studs/styles/components/tooltips.scss?inline';
import {
  LitElement,
  PropertyValueMap,
  TemplateResult,
  html,
  unsafeCSS,
} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { PopperController } from '../../controllers/popperController';
import { getDocumentElement, getParentNode } from '../../utils/shared';

export interface TooltipProps {
  position: Placement;
  disabled: boolean;
  element: HTMLElement;
  query?: string;
  children?: TemplateResult | HTMLElement | string;
}

@customElement('studs-tooltip')
export class StudsTooltip extends LitElement {
  @property({ type: String }) position: TooltipProps['position'] = 'bottom';
  @property({ type: Boolean }) disabled: TooltipProps['disabled'] = false;
  @property({ type: String }) query: TooltipProps['query'];
  @property({ type: HTMLElement }) element: Element = getParentNode(
    this
  ) as Element;

  static styles = [unsafeCSS(style), PopperController.styles];

  popperController = new PopperController(this, {
    options: { placement: this.position },
    trigger: this.element as HTMLElement,
    disabled: this.disabled,
  });

  connectedCallback(): void {
    super.connectedCallback();

    if (this.query) {
      this.element = getDocumentElement(this).querySelector(
        this.query
      ) as HTMLElement;
      this.requestUpdate();
    }
  }

  protected update(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.update(changedProperties);

    if (changedProperties.has('element')) {
      this.popperController.trigger = this.element as HTMLElement;
    }
    if (changedProperties.has('position')) {
      this.popperController.options = {
        placement: this.position,
      };
    }
    if (changedProperties.has('disabled')) {
      this.popperController.disabled = this.disabled;
    }
  }

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
