import { html } from 'lit';

export const Dropdowns = html`
  <button slot="tablist">Dropdowns</button>
  <div slot="Dropdowns">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage
        ><studs-dropdown
          label="Dropdown"
          options='[{"label": "test","value":"test"}, {"label":"test2","value":"test2"}]'
        ></studs-dropdown
      ></presentational-usage>
    </div>
    <div class="group">
      <h2>Notes</h2>
      <ul>
        <li>
          When using inside of a framework, e.g. <code>Blazor</code>,
          <code>Angular</code>, <code>React</code>, <code>etc.</code>, add a
          <code>.</code> in front of the options attribute.
        </li>
      </ul>
    </div>
    <div class="group">
      <h2>Examples</h2>
      <div class="componentGrid">
        <presentational-component>
          <studs-dropdown
            label="Dropdown"
            options='[{"label": "test","value":"test"}, {"label":"test2","value":"test2"}]'
          ></studs-dropdown>
        </presentational-component>
        <presentational-component>
          <studs-dropdown
            disabled
            label="Disabled"
            options='[{"label": "test","value":"test"}, {"label":"test2","value":"test2"}]'
          ></studs-dropdown>
        </presentational-component>
        <presentational-component>
          <studs-dropdown
            label="Placeholder"
            placeholder="Placeholder"
            options='[{"label": "test","value":"test"}, {"label":"test2","value":"test2"}]'
          ></studs-dropdown>
        </presentational-component>
      </div>
    </div>
  </div>
`;
