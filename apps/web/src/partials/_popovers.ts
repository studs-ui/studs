import { html } from 'lit';

export const Popovers = html`
  <button slot="tablist">Popovers</button>
  <div slot="Popovers">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-button
          >Popover
          <studs-popover position="bottom" icon="info">
            <p slot="title">This is a popover</p>
            <main>Popover content</main>
          </studs-popover>
        </studs-button>
      </presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-button
            >Popover
            <studs-popover position="bottom" icon="info">
              <p slot="title">This is a popover</p>
              <studs-image
                src="https://ssttoolbox.widen.net/content/cusbzivu9t/jpeg/C_SCLC_InstPho_RI_Inst_StairCassetteLedgerConnector-exploded_C0.jpg?crop=true&amp;keep=c&amp;q=60&amp;w=900&amp;h=675"
                slot="media"
              ></studs-image>
              <main>Popover content</main>
              <studs-button button-type="primary" size="small" slot="footer"
                >Yes</studs-button
              >
            </studs-popover>
          </studs-button>
        </presentational-component>
        <presentational-component>
          <studs-button
            >Popover
            <studs-popover position="left" icon="info">
              <p slot="title">This is a popover</p>
              <main>Popover content</main>
              <studs-button button-type="primary" size="small" slot="footer"
                >Yes</studs-button
              >
            </studs-popover>
          </studs-button>
        </presentational-component>
      </div>
    </div>
  </div>
`;
