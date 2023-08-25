import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Icon, IconController } from '../../controllers/iconController';
import { classMap } from 'lit/directives/class-map.js';
import style from '@studs/styles/components/badge.scss?inline';

export interface BadgeProps {
  icon?: Icon;
  count: number;
  max?: number;
  showZero?: boolean;
  size?: 'small' | 'medium' | 'large';
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  color?: string;
  marker?: boolean;
}

@customElement('studs-badge')
export class StudsBadge extends LitElement {
  @property({ type: String }) icon: BadgeProps['icon'];
  @property({ type: Number }) count: BadgeProps['count'] = 0;
  @property({ type: Number }) max: BadgeProps['max'] = 99;
  @property({ type: Boolean }) showZero?: BadgeProps['showZero'] = false;
  @property({ type: String }) size: BadgeProps['size'] = 'medium';
  @property({ type: String }) position: BadgeProps['position'] = 'top-right';
  @property({ type: String }) color: BadgeProps['color'] = 'primary';
  @property({ type: Boolean }) marker?: BadgeProps['marker'] = false;

  static styles = unsafeCSS(style);

  private iconController = new IconController();

  get badgeText() {
    if (this.count === 0 && !this.showZero) return;
    if (this.count === undefined || this.max === undefined) return;
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
          : nothing}
        ${this.badgeText
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
