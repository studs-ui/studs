import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import style from '@studs/styles/components/tooltips.scss?inline';
import {
  getComputedStyle,
  getDocumentElement,
  getParentNode,
  getWindow,
} from '../../utils/shared';

export interface TooltipProps {
  open: boolean;
  direction: 'top' | 'bottom' | 'left' | 'right';
  arrowPosition: 'start' | 'center' | 'end';
  disabled: boolean;
  standalone?: boolean;
  element: HTMLElement;
  query?: string;
  children?: TemplateResult | HTMLElement | string;
}

@customElement('studs-tooltip')
export class StudsTooltip extends LitElement {
  @property({ type: Boolean }) open: TooltipProps['open'] = false;
  @property({ type: String }) direction: TooltipProps['direction'] = 'bottom';
  @property({ type: String }) arrowPosition: TooltipProps['arrowPosition'] =
    'center';
  @property({ type: Boolean }) disabled: TooltipProps['disabled'] = false;
  @property({ type: Boolean }) standalone: boolean = false;
  @property({ type: String }) query: TooltipProps['query'];

  @property({ type: HTMLElement }) element: Element = getParentNode(
    this
  ) as Element;
  @state() private _hovered: boolean = !this.open;

  static styles = unsafeCSS(style);

  protected _onParentHover = () => {
    this.open = !this.open;
    this.requestUpdate();
  };

  initParent() {
    const isParent =
      this.element?.tagName === (getParentNode(this) as Element)?.tagName;

    if (isParent) {
      const parentStyles = getComputedStyle(this.element);
      const parentPosition = parentStyles.getPropertyValue('position');
      if (parentPosition === 'static' || parentPosition === '') {
        (this.element as HTMLElement).style.setProperty('position', 'relative');
      }
    } else {
      const parentStyles = getComputedStyle(getParentNode(this) as Element);
      const parentPosition = parentStyles.getPropertyValue('position');
      if (parentPosition === 'static' || parentPosition === '') {
        (getParentNode(this) as HTMLElement).style.setProperty(
          'position',
          'relative'
        );
      }
    }
  }

  connectedCallback(): void {
    super.connectedCallback();

    if (this.query) {
      this.element = getDocumentElement(this).querySelector(
        this.query
      ) as HTMLElement;

      this.requestUpdate();
    }
    this.initParent();

    if (!this.disabled) {
      this.element?.addEventListener('mouseenter', this._onParentHover);
      this.element?.addEventListener('mouseleave', this._onParentHover);
    } else {
      this.element?.removeEventListener('mouseenter', this._onParentHover);
      this.element?.removeEventListener('mouseleave', this._onParentHover);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    if (!this.disabled) {
      this.element?.removeEventListener('mouseenter', this._onParentHover);
      this.element?.removeEventListener('mouseleave', this._onParentHover);
    }
  }

  render() {
    const wrapperClasses = {
      tooltip: true,
      '-wrapper': true,
      '-open': this.open,
      '-standalone': this.standalone,
    };
    const containerClasses = {
      tooltip: true,
      '-container': true,
      [`-${this.direction}`]: true,
      [`-${this.arrowPosition}Arrow`]: true,
    };

    return html`<div
      ?disabled=${this.disabled}
      class=${classMap(wrapperClasses)}
      role="tooltip"
    >
      <div class=${classMap(containerClasses)} aria-hidden=${!this._hovered}>
        <slot></slot>
      </div>
    </div>`;
  }
}
