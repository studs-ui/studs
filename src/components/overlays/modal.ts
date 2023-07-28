import { LitElement, PropertyValueMap, html, unsafeCSS } from "lit";
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from "lit/decorators.js";
import style from "styles/modals.scss?inline";
import { classMap } from "lit/directives/class-map.js";

export interface ModalProps {
  open: boolean;
  closeOnOverlayClick?: boolean;
}

@customElement("studs-modal")
export class StudsModal extends LitElement {
  @property({ type: String }) id: string = "modal";
  @property({ type: Boolean }) open: ModalProps["open"] = false;
  @property({ type: Boolean })
  closeOnOverlayClick: ModalProps["closeOnOverlayClick"] = true;

  @state() private _hidden: boolean = !this.open;

  @queryAssignedElements({ slot: "toggle" }) toggle!: HTMLElement[];

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    const toggle = this.toggle[0];

    toggle.addEventListener("click", () => {
      this._hidden = !this._hidden;
      this.open = !this.open;
    });
  }

  static styles = unsafeCSS(style);

  render() {
    const classes = {
      modal: true,
      "-show": this.open,
      "-hide": !this.open,
    };

    return html`
      <slot name="toggle"></slot>
      <div class=${classMap(classes)} id="modal-1" aria-hidden=${this._hidden}>
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
                buttontype="icon"
                @click=${this.onClose}
                icon=${`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect width="16" height="16" fill="white" style="mix-blend-mode:multiply"/>
        <path d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z" fill="#161616"/>
        </svg>`}
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

  onClose() {
    this._hidden = true;
    setTimeout(() => {
      this.open = false;
    }, 300);
  }

  onOverlayClose(event: any) {
    if (event.target?.classList?.contains("-overlay")) {
      this.onClose();
    }
  }
}
