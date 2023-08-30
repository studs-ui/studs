import { html } from 'lit';

export const Inputs = html`
  <button slot="tablist">Inputs</button>
  <div slot="Inputs">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage></presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-input
            type="text"
            variant="outlined"
            inputSize="large"
            label="My Label"
            placeholder="Enter your name"
            adornment="lbs"
            adornment-position="start"
          >
          </studs-input>
        </presentational-component>
        <presentational-component>
          <studs-input
            autocomplete="off"
            name="fname"
            type="text"
            value="John"
            label="Adornment End"
            variant="outlined"
            input-size="normal"
            adornment="lbs"
            adornment-position="end"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-input>
        </presentational-component>
        <presentational-component>
          <studs-input
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-input>
        </presentational-component>
        <presentational-component>
          <studs-input
            type="search"
            name="search"
            label="Search"
            variant="outlined"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-input>
        </presentational-component>
        <presentational-component>
          <studs-input
            type="number"
            name="number"
            label="Number"
            variant="outlined"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-input>
        </presentational-component>
        <presentational-component>
          <studs-input
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-input>
        </presentational-component>
      </div>
    </div>
  </div>
`;
