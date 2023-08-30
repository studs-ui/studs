import { html } from 'lit';

export const Breadcrumbs = html`
  <button slot="tablist">Breadcrumbs</button>
  <div slot="Breadcrumbs">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage></presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-breadcrumbs>
            <a href="http://www.strongtie.com">Home</a>
            <a href="https://www.strongtie.com/about">About Us</a>
            <a href="https://www.strongtie.com/contact">Contact</a>
          </studs-breadcrumbs>
        </presentational-component>
        <presentational-component>
          <studs-breadcrumbs separator=">">
            <a href="http://www.strongtie.com">Home</a>
            <a href="https://www.strongtie.com/about">About Us</a>
            <a href="https://www.strongtie.com/contact">Contact</a>
          </studs-breadcrumbs>
        </presentational-component>
      </div>
    </div>
  </div>
`;
