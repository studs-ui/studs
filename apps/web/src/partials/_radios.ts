import { html } from 'lit';

export const Radios = html`
  <button slot="tablist">Radios</button>
  <div slot="Radios">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage></presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-radio
            name="option"
            value="option"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-radio>
        </presentational-component>
        <presentational-component>
          <studs-radio
            name="option1"
            value="option1"
            label="option 1"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-radio>
        </presentational-component>
        <presentational-component>
          <studs-radio
            name="option2"
            value="option2"
            label="checked"
            checked
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          ></studs-radio>
        </presentational-component>
        <presentational-component>
          <studs-radio
            name="option3"
            value="option3"
            label="Disabled"
            disabled
          ></studs-radio>
        </presentational-component>
        <presentational-component>
          <studs-radio-group name="group">
            <studs-radio
              name="group"
              value="groupValue1"
              label="Group 1"
              @change="${(e: CustomEvent) =>
                console.log('Selected value:', e.detail)}"
            ></studs-radio>
            <studs-radio
              name="group"
              value="groupValue2"
              label="Group 2"
              @change="${(e: CustomEvent) =>
                console.log('Selected value:', e.detail)}"
            ></studs-radio>
            <studs-radio
              name="group"
              value="groupValue3"
              label="Group 3"
              @change="${(e: CustomEvent) =>
                console.log('Selected value:', e.detail)}"
            ></studs-radio>
          </studs-radio-group>
        </presentational-component>
        <presentational-component>
          <studs-radio-group name="payment">
            <studs-radio
              name="payment"
              value="credit"
              label="Credit Card"
              @change="${(e: CustomEvent) =>
                console.log('Selected value:', e.detail)}"
            ></studs-radio>
            <studs-radio
              name="payment"
              value="debit"
              label="Debit Card"
              @change="${(e: CustomEvent) =>
                console.log('Selected value:', e.detail)}"
            ></studs-radio>
            <studs-radio
              name="payment"
              value="cash"
              label="Cash Payment"
              @change="${(e: CustomEvent) =>
                console.log('Selected value:', e.detail)}"
            ></studs-radio>
          </studs-radio-group>
        </presentational-component>
      </div>
    </div>
  </div>
`;
