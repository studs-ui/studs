import { html } from 'lit';

export const Steppers = html`
  <button slot="tablist">Steppers</button>
  <div slot="Steppers">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-stepper>
          <studs-step>Step 1</studs-step>
          <studs-step>Step 2</studs-step>
          <studs-step>Step 3</studs-step>
        </studs-stepper>
      </presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid -single">
        <presentational-component>
          <studs-stepper
            step=${1}
            .steps=${[
              { id: 1, label: 'Step 1', description: 'This is step 1' },
              { id: 2, label: 'Step 2', description: 'This is step 2' },
              { id: 3, label: 'Step 3', description: 'This is step 3' },
            ]}
          >
          </studs-stepper>
        </presentational-component>
        <presentational-component>
          <studs-stepper
            direction="vertical"
            step=${1}
            .steps=${[
              { id: 1, label: 'Step 1', description: 'This is step 1' },
              { id: 2, label: 'Step 2', description: 'This is step 2' },
              { id: 3, label: 'Step 3', description: 'This is step 3' },
            ]}
          >
          </studs-stepper>
        </presentational-component>
        <presentational-component>
          <studs-stepper
            step=${1}
            .steps=${[
              { id: 1, label: 'Step 1' },
              { id: 2, label: 'Step 2' },
              { id: 3, label: 'Step 3' },
              { id: 4, label: 'Step 4' },
              { id: 5, label: 'Step 5' },
            ]}
          >
          </studs-stepper>
        </presentational-component>
      </div>
    </div>
  </div>
`;
