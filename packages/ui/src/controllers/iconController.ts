import style from '@studs/styles/components/icons.scss?inline';
import { html, svg, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';

interface IconOptions {
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  color?: string;
}

export type Icon =
  | 'info'
  | 'warning'
  | 'error'
  | 'success'
  | 'download'
  | 'sort'
  | 'filter'
  | 'ellipsis'
  | 'add';

interface IconControllerProps {
  icon?: Icon;
  options?: IconOptions;
}

export class IconController {
  public icon(icon: IconControllerProps['icon'], options?: IconOptions) {
    if (icon) {
      return html`
        <span
          style=${styleMap({
            'font-variation-settings':
              "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48",
          })}
          class=${classMap({
            'material-symbols-outlined': true,
            icon: true,
            [`-${options?.size}`]: options?.size || false,
            [`-${options?.color}`]: options?.color || false,
          })}
          >${icon}</span
        >
      `;
    }
  }
}
