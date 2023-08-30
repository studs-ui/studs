import { html } from 'lit';

export const ButtonGroups = html`
  <button slot="tablist">Button Groups</button>
  <div slot="Button Groups">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage
        ><studs-button-group>
          <studs-button buttontype="primary">One</studs-button>
          <studs-button buttontype="primary">Two</studs-button>
          <studs-button buttontype="primary">Three</studs-button>
        </studs-button-group></presentational-usage
      >
    </div>
    <div class="group">
      <h2>Examples</h2>
      <div class="componentGrid">
        <presentational-component>
          <studs-button-group>
            <studs-button button-type="primary">One</studs-button>
            <studs-button button-type="primary">Two</studs-button>
            <studs-button button-type="primary">Three</studs-button>
          </studs-button-group>
        </presentational-component>
      </div>
    </div>
  </div>
`;
