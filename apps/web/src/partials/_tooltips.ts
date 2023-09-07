import { html } from 'lit';

export const Tooltips = html`
  <button slot="tablist">Tooltips</button>
  <div slot="Tooltips">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-tooltip position="left" arrowPosition="end">
          <studs-button button-type="primary">Left</studs-button>
          <div slot="tooltip">This is a left tooltip</div>
        </studs-tooltip>
      </presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-button button-type="primary">
            Left
            <studs-tooltip position="left"
              >This is a left tooltip</studs-tooltip
            >
          </studs-button>
        </presentational-component>
        <presentational-component>
          <studs-button button-type="primary">
            Right
            <studs-tooltip position="right"
              >This is a right tooltip</studs-tooltip
            >
          </studs-button>
        </presentational-component>
        <presentational-component>
          <studs-button button-type="primary">
            Top
            <studs-tooltip position="top">This is a top tooltip</studs-tooltip>
          </studs-button>
        </presentational-component>
        <presentational-component>
          <studs-button button-type="primary">
            Bottom
            <studs-tooltip position="bottom"
              >This is a bottom tooltip</studs-tooltip
            >
          </studs-button>
        </presentational-component>
      </div>
    </div>
  </div>
`;
