import { html } from 'lit';

export const Switches = html`
  <button slot="tablist">Switches</button>
  <div slot="Switches">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage></presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-switch
            checked="true"
            label="Checked"
            @switch-change=${(e: CustomEvent) =>
              console.log(
                `Switch changed! Checked status: ${e.detail.checked}`
              )}
          ></studs-switch>
        </presentational-component>
        <presentational-component>
          <studs-switch></studs-switch>
        </presentational-component>
        <presentational-component>
          <studs-switch disabled label="Disabled"></studs-switch>
        </presentational-component>
        <presentational-component>
          <studs-switch size="medium" checked="true"></studs-switch>
        </presentational-component>
        <presentational-component>
          <studs-switch
            size="small"
            checked="true"
            label="Switch"
            label-position="start"
            name="test-switch"
          >
          </studs-switch>
        </presentational-component>
        <presentational-component>
          <studs-switch
            size="small"
            checked="true"
            label="Bottom label"
            label-position="bottom"
            name="test-switch"
          >
          </studs-switch>
        </presentational-component>
      </div>
    </div>
  </div>
`;
