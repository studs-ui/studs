import { html } from 'lit';

export const Buttons = html`
  <button slot="tablist">Buttons</button>
  <div slot="Buttons">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-button
          onclick="alert('clicked')"
          button-type="primary"
          size="medium"
          icon="<svg>...</svg>"
          contentdirection="horizontal"
          iconposition="start"
          disabled
        >
          CTA
        </studs-button>
      </presentational-usage>
    </div>
    <div class="group">
      <h2>Examples</h2>
      <div class="componentGrid">
        <presentational-component
          ><studs-button onclick="alert('clicked')"
            >CTA Button</studs-button
          ></presentational-component
        >
        <presentational-component>
          <studs-button button-type="primary" onclick="alert('clicked')"
            >Primary</studs-button
          >
        </presentational-component>
        <presentational-component>
          <studs-button button-type="secondary" onclick="alert('clicked')"
            >Secondary</studs-button
          >
        </presentational-component>
        <presentational-component>
          <studs-button button-type="tertiary" onclick="alert('clicked')"
            >Tertiary</studs-button
          >
        </presentational-component>
        <presentational-component>
          <studs-button button-type="link" onclick="alert('clicked')"
            >Link</studs-button
          >
        </presentational-component>
        <presentational-component>
          <studs-button
            button-type="floating"
            icon="info"
            onclick="alert('clicked')"
          ></studs-button>
        </presentational-component>
        <presentational-component>
          <studs-button
            button-type="icon"
            icon="info"
            onclick="alert('clicked')"
          ></studs-button>
        </presentational-component>
        <presentational-component>
          <studs-button
            button-type="primary"
            icon-position="start"
            icon="info"
            onclick="alert('clicked')"
            >Icon Left</studs-button
          >
        </presentational-component>
        <presentational-component>
          <studs-button
            button-type="primary"
            icon-position="end"
            icon="info"
            onclick="alert('clicked')"
            >Icon Right</studs-button
          >
        </presentational-component>
        <presentational-component>
          <studs-button
            button-type="primary"
            content-direction="vertical"
            icon="info"
            onclick="alert('clicked')"
            >Vertical</studs-button
          >
        </presentational-component>
        <presentational-component>
          <studs-button button-type="primary" disabled>Disabled</studs-button>
        </presentational-component>
        <presentational-component>
          <studs-button button-type="primary" size="large">Large</studs-button>
        </presentational-component>
        <presentational-component>
          <studs-button button-type="primary" size="small">Small</studs-button>
        </presentational-component>
      </div>
    </div>
  </div>
`;
