import { html } from 'lit';

export const Tooltips = html`
  <button slot="tablist">Tooltips</button>
  <div slot="Tooltips">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-tooltip direction="left" arrowPosition="end">
          <studs-button buttontype="primary">Left</studs-button>
          <div slot="tooltip">This is a left tooltip</div>
        </studs-tooltip>
      </presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-button buttontype="primary">
            Left
            <studs-tooltip direction="left"
              >This is a left tooltip</studs-tooltip
            >
          </studs-button>
        </presentational-component>
        <presentational-component>
          <studs-button buttontype="primary">
            Right
            <studs-tooltip direction="right"
              >This is a right tooltip</studs-tooltip
            >
          </studs-button>
        </presentational-component>
        <presentational-component>
          <studs-button buttontype="primary">
            Top
            <studs-tooltip direction="top">This is a top tooltip</studs-tooltip>
          </studs-button>
        </presentational-component>
        <presentational-component>
          <studs-button buttontype="primary">
            Bottom
            <studs-tooltip direction="bottom"
              >This is a bottom tooltip</studs-tooltip
            >
          </studs-button>
        </presentational-component>
      </div>
    </div>
  </div>
`;
