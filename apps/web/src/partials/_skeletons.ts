import { html } from 'lit';

export const Skeletons = html`
  <button slot="tablist">Skeletons</button>
  <div slot="Skeletons">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-skeleton></studs-skeleton>
      </presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-skeleton width="300px" height="50px"></studs-skeleton>
        </presentational-component>
        <presentational-component>
          <studs-skeleton
            variant="circle"
            width="50px"
            height="50px"
          ></studs-skeleton>
        </presentational-component>
      </div>
    </div>
  </div>
`;
