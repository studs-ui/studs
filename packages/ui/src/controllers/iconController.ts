import style from '@studs/styles/components/icons.scss?inline';
import { svg, unsafeCSS } from 'lit';

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
  static styles = unsafeCSS(style);
  private renderIcon(icon: IconControllerProps['icon']) {
    if (icon)
      switch (icon) {
        case 'info':
          return svg`<path d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`;
        case 'warning':
          return svg`<path d="M12 7v6M12 17.01l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`;
        case 'error':
          return svg`<path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`;
        case 'success':
          return svg`<path d="M7 12.5l3 3 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`;
        case 'download':
          return svg`<path d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`;
        case 'sort':
          return svg`<path d="M10 14H2M8 10H2M6 6H2M12 18H2M19 20V4m0 16l3-3m-3 3l-3-3m3-13l3 3m-3-3l-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`;
        case 'filter':
          return svg`<path d="M3 6h18M7 12h10M11 18h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`;
        case 'ellipsis':
          return svg`<path d="M20 12.5a.5.5 0 100-1 .5.5 0 000 1zM12 12.5a.5.5 0 100-1 .5.5 0 000 1zM4 12.5a.5.5 0 100-1 .5.5 0 000 1z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`;
        case 'add':
          return svg`<path d="M6 12h6m6 0h-6m0 0V6m0 6v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>`;
        default:
          return;
      }
  }

  private getSize(options?: IconOptions) {
    if (options && options.size) {
      switch (options.size) {
        case 'small':
          return '1rem';
        case 'medium':
          return '1.5rem';
        case 'large':
          return '2rem';
        case 'xlarge':
          return '2.5rem';
        case 'xxlarge':
          return '3rem';
      }
    }
    return '100%';
  }

  private getColor(options?: IconOptions) {
    if (options && options.color) {
      switch (options.color) {
        case 'primary':
          return 'var(--primary)';
        case 'secondary':
          return 'var(--secondary)';
        case 'tertiary':
          return 'var(--tertiary)';
        case 'success':
          return 'var(--success)';
        case 'warning':
          return 'var(--warning)';
        case 'error':
          return 'var(--error)';
        case 'info':
          return 'var(--info)';
        case 'white':
          return 'var(--white)';
        case 'black':
          return 'var(--black)';
      }
    }
    return 'currentColor';
  }

  public icon(icon: IconControllerProps['icon'], options?: IconOptions) {
    if (icon) {
      const size = this.getSize(options);
      const color = this.getColor(options);
      return svg`
        <svg width=${size} height=${size} stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color=${color}>
          ${this.renderIcon(icon)}
        </svg>
      `;
    }
  }
}
