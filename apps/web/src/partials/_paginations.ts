import { html } from 'lit';

export const Paginations = html`
  <button slot="tablist">Paginations</button>
  <div slot="Paginations">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage></presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <h2>Simple Pagination</h2>
          <studs-pagination current-page="1" total-items="1500">
          </studs-pagination>
        </presentational-component>
        <presentational-component>
          <h2>Jumper</h2>
          <studs-pagination
            current-page="1"
            total-items="1500"
            has-jumper="true"
          >
          </studs-pagination>
        </presentational-component>
        <presentational-component>
          <h2>Select</h2>
          <studs-pagination
            current-page="1"
            total-items="1500"
            has-select="true"
          >
          </studs-pagination>
        </presentational-component>
        <presentational-component>
          <h2>Customization Labels</h2>
          <studs-pagination
            current-page="1"
            total-items="1500"
            items-per-page="10"
            has-jumper="true"
            jumper-label="Go"
            has-select="true"
            select-label="Show Items"
          >
          </studs-pagination>
        </presentational-component>
      </div>
    </div>
  </div>
`;
