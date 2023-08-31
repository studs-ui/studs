import { html } from 'lit';

export const Checkboxes = html`
  <button slot="tablist">Checkboxes</button>
  <div slot="Checkboxes">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage></presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-checkbox
            name="option"
            value="option"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-checkbox>
        </presentational-component>
        <presentational-component>
          <studs-checkbox
            name="option1"
            value="option1"
            label="Option 1"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-checkbox>
        </presentational-component>
        <presentational-component>
          <studs-checkbox
            name="option2"
            value="option2"
            label="Checked"
            checked
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-checkbox>
        </presentational-component>
        <presentational-component>
          <studs-checkbox
            name="option3"
            value="option3"
            label="Disabled"
            disabled
          ></studs-checkbox>
        </presentational-component>
        <presentational-component>
          <studs-checkbox
            name="option1"
            value="option1"
            label="Indeterminate"
            indeterminate
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-checkbox>
        </presentational-component>
        <presentational-component>
          <studs-checkbox
            name="option2"
            value="option2"
            label="Indeterminate"
            .indeterminate="${true}"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-checkbox>
        </presentational-component>
        <presentational-component>
          <studs-checkbox
            name="group1"
            value="group1"
            label="Group Option 1"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-checkbox>
          <studs-checkbox
            name="group2"
            value="group2"
            label="Group Option 2"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-checkbox>
          <studs-checkbox
            name="group3"
            value="group3"
            label="Group Option 3"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-checkbox>
        </presentational-component>
      </div>
    </div>
  </div>
`;
