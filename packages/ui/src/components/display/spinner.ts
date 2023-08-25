import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '@studs/styles/components/spinner.scss?inline';
import { Icon, IconController } from '../../controllers/iconController';
import { classMap } from 'lit/directives/class-map.js';
import { getDocumentElement } from '../../utils/shared';

export interface SpinnerProps {
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  disableBackdrop?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'default';
  icon?: Icon;
  open?: boolean;
  toggleOpen?: () => void;
}

@customElement('studs-spinner')
export class StudsSpinner extends LitElement implements SpinnerProps {
  @property({ type: Boolean, attribute: 'close-on-overlay-click' })
  closeOnOverlayClick: SpinnerProps['closeOnOverlayClick'] = false;
  @property({ type: Boolean, attribute: 'close-on-escape' })
  closeOnEscape: SpinnerProps['closeOnEscape'] = false;
  @property({ type: Boolean, attribute: 'disable-backdrop' })
  disableBackdrop: SpinnerProps['disableBackdrop'] = false;
  @property({ type: String }) color: SpinnerProps['color'] = 'primary';
  @property({ type: String }) icon?: SpinnerProps['icon'];

  @property({ type: Boolean }) open: boolean = false;

  static styles = unsafeCSS(style);

  private iconController = new IconController();

  connectedCallback(): void {
    super.connectedCallback();
    if (this.closeOnEscape)
      getDocumentElement(this).addEventListener('keydown', this.onEscapeClose);
  }

  public toggleOpen(): void {
    this.open = !this.open;
  }

  protected render(): unknown {
    return html`<div class=${classMap({
      spinner: true,
      '-show': true,
    })} aria-hidden=${!this.open}>
      <div class="-overlay" ?disabled=${this.disableBackdrop} @click=${
      this.closeOnOverlayClick ? this.onOverlayClose : null
    }>
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

  private onOverlayClose(event: any) {
    if (event.target?.classList?.contains('-overlay')) {
      this.toggleOpen();
    }
  }

  private onEscapeClose = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.open = false;
    }
  };
}
