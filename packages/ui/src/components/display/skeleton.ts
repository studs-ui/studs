import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '@studs/styles/components/skeleton.scss?inline';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export interface SkeletonProps {
  variant?: 'text' | 'circle' | 'rect';
  width?: string;
  height?: string;
  animation?: 'wave' | 'pulse' | 'linear';
}

@customElement('studs-skeleton')
export class StudsSkeleton extends LitElement {
  @property({ type: String }) variant: SkeletonProps['variant'] = 'rect';
  @property({ type: String }) width: SkeletonProps['width'] = '100%';
  @property({ type: String }) height: SkeletonProps['height'] = '100%';
  @property({ type: String }) animation: SkeletonProps['animation'] = 'linear';

  static styles = unsafeCSS(style);
  render() {
    return html`<div
      class=${classMap({
        skeleton: true,
        [`-${this.variant}`]: true,
        [`-${this.animation}`]: true,
      })}
      styleMap=${styleMap({
        width: this.width || '100%',
        height: this.height || '100%',
      })}
    ></div>`;
  }
}
