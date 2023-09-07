import { html } from 'lit';

export const Footer = html`
  <button slot="tablist">Footer</button>
  <div slot="Footer">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-footer></studs-footer>
      </presentational-usage>
    </div>

    <div class="group">
      <h2>Examples</h2>
      <div class="componentGrid -single">
        <presentational-component>
          <studs-footer></studs-footer>
        </presentational-component>
      </div>
    </div>
  </div>
`;
