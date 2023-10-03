import style from '@studs/styles/components/modals.scss?inline';
import {
  LitElement,
  html,
  unsafeCSS
} from 'lit';
import {
  customElement,
  property
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('studs-modal')
export class StudsModal extends LitElement {
  @property({ type: String }) id: string = 'modal';
  @property({ type: Boolean }) open: boolean = false;
  @property({ type: Boolean })
  closeOnOverlayClick: boolean = true;
  @property({ type: Boolean }) closeOnEscape: boolean =
    true;

  connectedCallback(): void {
    super.connectedCallback();
    if (this.closeOnEscape) {
      this.getRootNode().addEventListener('keydown', this.onEscapeClose);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.closeOnEscape) {
      this.getRootNode().removeEventListener(
        'keydown',
        this.onEscapeClose
      );
    }
  }

  static styles = unsafeCSS(style);

  render() {
    const classes = {
      modal: true,
      '-show': this.open,
      '-hide': !this.open,
    };

    return html`
      <slot name="toggle" @click=${this.toggle}></slot>
      <div class=${classMap(classes)} id="modal-1" aria-hidden=${!this.open}>
        <div
          class="modal -overlay"
          tabindex="-1"
          @click=${this.closeOnOverlayClick ? this.onOverlayClose : null}
        >
          <div
            class="modal -container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-1-title"
            @click=${null}
          >
            <header>
              <slot name="header"></slot>
              <studs-button
                aria-label="Close modal"
                button-type="close"
                @click=${this.onClose}
                icon="close"
              ></studs-button>
            </header>
            <main id="modal-1-content">
              <slot></slot>
            </main>
            <footer>
              <slot name="footer"></slot>
            </footer>
          </div>
        </div>
      </div>
    `;
  }

  private onOverlayClose(event: any) {
    if (event.target?.classList?.contains('-overlay')) {
      this.onClose();
    }
  }

  private onEscapeClose = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.onClose();
    }
  };

  public onOpen() {
    this.open = true;
  }

  public toggle() {
    this.open = !this.open;
  }

  public onClose() {
    this.open = false;
  }
}
