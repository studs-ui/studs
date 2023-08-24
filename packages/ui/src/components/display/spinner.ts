import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '@studs/styles/components/spinner.scss?inline';
import { Icon, IconController } from '../../controllers/iconController';
import { classMap } from 'lit/directives/class-map.js';

export interface SpinnerProps {
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  disabledBackdrop?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'default';
  icon?: Icon;
}

@customElement('studs-spinner')
export class StudsSpinner extends LitElement {
  @property({ type: Boolean })
  closeOnOutsideClick: SpinnerProps['closeOnOutsideClick'] = true;
  @property({ type: Boolean }) closeOnEscape: SpinnerProps['closeOnEscape'] =
    true;
  @property({ type: Boolean })
  disabledBackdrop: SpinnerProps['disabledBackdrop'] = false;
  @property({ type: String }) color: SpinnerProps['color'] = 'primary';
  @property({ type: String }) icon?: SpinnerProps['icon'];

  static styles = unsafeCSS(style);

  private iconController = new IconController();

  protected render(): unknown {
    return html`<div class="spinner">
      <div class="-overlay">
        ${
          !this.icon
            ? html`<div
                class=${classMap({
                  'loader -spinner': true,
                  [`-${this.color}`]: true,
                })}
              ></div>`
            : html`
                <div class="loader -icon">
                  ${this.iconController.icon(this.icon, {
                    color: this.color,
                  })}
                </div>
              `
        }
        </div>
      </div>
    </div>`;
  }
}
