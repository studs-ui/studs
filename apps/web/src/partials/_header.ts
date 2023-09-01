import { html } from 'lit';

export const Header = html`
  <button slot="tablist">Header</button>
  <div slot="Header">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-header></studs-header>
      </presentational-usage>
    </div>

    <div class="group">
      <h2>Examples</h2>
      <div class="componentGrid -single">
        <presentational-component>
          <studs-header></studs-header>
        </presentational-component>
      </div>
    </div>
  </div>
`;
