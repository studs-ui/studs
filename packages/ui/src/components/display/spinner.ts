import style from '@studs/styles/components/spinner.scss?inline';
import { LitElement, PropertyValueMap, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { getDocumentElement } from '../../utils/shared';

export interface SpinnerProps {
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  disableBackdrop?: boolean;
  color?: 'inherit' | 'primary' | 'secondary' | 'tertiary';
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
  @property({ type: Boolean }) open: boolean = false;

  static styles = [unsafeCSS(style)];

  connectedCallback(): void {
    super.connectedCallback();
    if (this.closeOnEscape)
      getDocumentElement(this).addEventListener('keydown', this.onEscapeClose);
  }

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.updated(_changedProperties);
    if (_changedProperties.has('closeOnEscape')) {
      if (this.closeOnEscape)
        getDocumentElement(this).addEventListener(
          'keydown',
          this.onEscapeClose
        );
      else
        getDocumentElement(this).removeEventListener(
          'keydown',
          this.onEscapeClose
        );
    }
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
        <div class=${classMap({
          'loader -spinner': true,
          [`-${this.color}`]: true,
        })}></div>
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
