import { html } from 'lit';

export const Accordions = html`
  <button slot="tablist">Accordions</button>
  <div slot="Accordions">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-accordian enableheader enablesearch>
          <studs-accordian-item>
            <div slot="toggle">Accordian One</div>
            <div>
              <h3>Content</h3>
            </div>
          </studs-accordian-item>
        </studs-accordian>
      </presentational-usage>
    </div>
    <div class="group">
      <h2>Examples</h2>
      <div class="componentGrid">
        <presentational-component>
          <studs-accordian enableheader enablesearch>
            <studs-accordian-item
              ><div slot="toggle">Accordian One</div>
              <div>
                <h3>Content</h3>
                <p>This allows for whatever</p>
                <studs-button>Test</studs-button>
              </div>
            </studs-accordian-item>
            <studs-accordian-item
              ><div slot="toggle">Accordian Two</div>
              Test
            </studs-accordian-item>
            <studs-accordian-item
              ><div slot="toggle">Accordian Three</div>
              Test
            </studs-accordian-item>
            <studs-accordian-item
              ><div slot="toggle">Accordian Four</div>
              Test
            </studs-accordian-item>
          </studs-accordian>
        </presentational-component>
      </div>
    </div>
  </div>
`;
