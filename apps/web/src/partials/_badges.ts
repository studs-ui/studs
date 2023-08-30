import { html } from 'lit';

export const Badges = html`
  <button slot="tablist">Badges</button>
  <div slot="Badges">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-badge
          icon="info"
          count="1"
          max="99"
          size="medium"
          position="top-right"
          color="primary"
        ></studs-badge>
      </presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-badge
            icon="info"
            count="1"
            max="99"
            size="medium"
            position="top-right"
            color="primary"
          ></studs-badge>
        </presentational-component>
        <presentational-component>
          <studs-badge
            icon="info"
            count="1"
            max="99"
            size="medium"
            position="top-right"
            color="secondary"
          ></studs-badge>
        </presentational-component>
        <presentational-component>
          <studs-badge
            icon="info"
            count="1"
            max="99"
            size="medium"
            position="top-right"
            color="tertiary"
          ></studs-badge>
        </presentational-component>
        <presentational-component>
          <studs-badge
            icon="info"
            count="1"
            max="99"
            size="medium"
            position="top-right"
            color="success"
          ></studs-badge>
        </presentational-component>
        <presentational-component>
          <studs-badge
            icon="info"
            count="1"
            max="99"
            size="medium"
            position="top-right"
            color="warning"
          ></studs-badge>
        </presentational-component>
        <presentational-component>
          <studs-badge
            icon="info"
            count="1"
            max="99"
            size="medium"
            position="top-right"
            color="danger"
          ></studs-badge>
        </presentational-component>
      </div>
    </div>
  </div>
`;
