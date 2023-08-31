import { html } from 'lit';

export const Modals = html`
  <button slot="tablist">Modals</button>
  <div slot="Modals">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-modal>
          <studs-button slot="toggle">Open</studs-button>
          <h2 slot="header" class="modal -title" id="modal-1-title">
            Micromodal
          </h2>
          <p>
            Try hitting the <code>tab</code> key and notice how the focus stays
            within the modal itself. Also, <code>esc</code> to close modal.
          </p>
          <div slot="footer">
            <studs-button size="small" button-type="primary"
              >Action</studs-button
            >
            <studs-button
              size="small"
              button-type="secondary"
              data-micromodal-close
              aria-label="Close this dialog window"
            >
              Close
            </studs-button>
          </div>
        </studs-modal></presentational-usage
      >
    </div>
    <div class="group">
      <div class="componentGrid -single">
        <presentational-component>
          <studs-modal>
            <studs-button slot="toggle">Open</studs-button>
            <h2 slot="header" class="modal -title" id="modal-1-title">
              Micromodal
            </h2>
            <p>
              Try hitting the <code>tab</code> key and notice how the focus
              stays within the modal itself. Also, <code>esc</code> to close
              modal.
            </p>
            <div slot="footer">
              <studs-button size="small" button-type="primary"
                >Action</studs-button
              >
              <studs-button
                size="small"
                button-type="secondary"
                aria-label="Close this dialog window"
              >
                Close
              </studs-button>
            </div>
          </studs-modal>
        </presentational-component>
      </div>
    </div>
  </div>
`;
