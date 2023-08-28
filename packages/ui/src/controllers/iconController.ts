import style from '@studs/styles/components/icons.scss?inline';
import { html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

interface IconOptions {
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'xxlarge';
  color?: 'inherit' | 'primary' | 'secondary' | 'tertiary';
}

export type Icon = string;

interface IconControllerProps {
  icon?: Icon;
  options?: IconOptions;
}

export class IconController {
  public static styles = unsafeCSS(style);
  public icon(icon: IconControllerProps['icon'], options?: IconOptions) {
    if (icon) {
      return html`
        <i
          class=${classMap({
            'studs-icon': true,
            icon: true,
            [`-${options?.size}`]: options?.size || false,
            [`-${options?.color}`]: options?.color || false,
          })}
          >${icon}</i
        >
      `;
    }
  }
}
