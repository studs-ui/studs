import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import style from '@studs/styles/components/tooltips.scss?inline';

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

  @property({ type: HTMLElement }) element: HTMLElement = this
    .parentElement as HTMLElement;
  @state() private _hovered: boolean = !this.open;

  static styles = unsafeCSS(style);

  protected _onParentHover = () => {
    this.open = !this.open;
    this.requestUpdate();
  };

  connectedCallback(): void {
    super.connectedCallback();

    const isParent =
      this.parentElement?.tagName === this.element?.parentElement?.tagName;

    if (this.query) {
      this.element = document.querySelector(this.query) as HTMLElement;
      this.requestUpdate();
    } else if (isParent) {
      const parentStyles = window.getComputedStyle(
        this.element?.parentElement!
      );
      const parentPosition = parentStyles.getPropertyValue('position');
      if (parentPosition === 'static' || parentPosition === '') {
        this.element?.parentElement?.style.setProperty('position', 'relative');
      }
    }

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
