import { html } from 'lit';

export const Popovers = html`
  <button slot="tablist">Popovers</button>
  <div slot="Popovers">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-popover direction="left" arrowPosition="center">
          <studs-button buttontype="primary">Left</studs-button>
          <div slot="popover">This is a left popover</div>
        </studs-popover>
      </presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-popover direction="left" arrowPosition="center">
            <studs-button buttontype="primary">Left</studs-button>
            <div slot="popover">This is a left popover</div>
          </studs-popover>
        </presentational-component>
        <presentational-component>
          <studs-popover direction="right" arrowPosition="center">
            <studs-button buttontype="primary">Right</studs-button>
            <div slot="popover">This is a right popover</div>
          </studs-popover>
        </presentational-component>
        <presentational-component>
          <studs-popover direction="top" arrowPosition="center">
            <studs-button buttontype="primary">Top</studs-button>
            <div slot="popover">This is a top popover</div>
          </studs-popover>
        </presentational-component>
        <presentational-component>
          <studs-popover direction="bottom" arrowPosition="center">
            <studs-button buttontype="primary">Bottom</studs-button>
            <div slot="popover">This is a bottom popover</div>
          </studs-popover>
        </presentational-component>
      </div>
    </div>
  </div>
`;
