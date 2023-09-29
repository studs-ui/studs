import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Icon, IconController } from '../../controllers/iconController';
import { classMap } from 'lit/directives/class-map.js';
import style from '@studs/styles/components/badge.scss?inline';

@customElement('studs-badge')
export class StudsBadge extends LitElement {
  @property({ type: String }) icon?: Icon;
  @property({ type: Number }) count: number = 0;
  @property({ type: Number }) max: number = 99;
  @property({ type: Boolean, attribute: 'show-zero' })
  showZero?: boolean = false;
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: String }) position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center' = 'top-right';
  @property({ type: String }) color: string = 'primary';
  @property({ type: Boolean }) marker?: boolean = false;

  static styles = [unsafeCSS(style), IconController.styles];

  private iconController = new IconController();

  get badgeText() {
    if (this.count === 0 && !this.showZero) return null;
    if (this.count === undefined || this.max === undefined) return null;
    else if (this.count > this.max) return `${this.max}+`;
    return this.count;
  }

  render() {
    return html`
      <div
        class=${classMap({
          badge: true,
          [`-${this.size}`]: true,
          [`-${this.position}`]: true,
          [`-${this.color}`]: true,
        })}
      >
        ${this.marker && (this.count ? this.count : 0) > 0
          ? html`<div
              class=${classMap({
                dot: true,
                [`-${this.position}`]: true,
              })}
            ></div>`
          : this.badgeText || this.badgeText === 0
          ? html`<span
              class=${classMap({
                badgeContent: true,
                '-badge': true,
                [`-${this.position}`]: true,
              })}
              >${this.badgeText}</span
            >`
          : nothing}
        ${this.iconController.icon(this.icon, { size: 'medium' })}
      </div>
    `;
  }
}
