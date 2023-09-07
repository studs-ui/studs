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
        <presentational-component>
          <div style="display: flex; gap: 10px;">
            <studs-skeleton
              variant="circle"
              width="75px"
              height="75px"
            ></studs-skeleton>
            <div
              style="display: flex; flex-direction: column; gap: 10px; align-items: center; justify-content: center;"
            >
              <studs-skeleton
                variant="text"
                width="100px"
                height="15px"
              ></studs-skeleton>
              <studs-skeleton
                variant="text"
                width="100px"
                height="15px"
              ></studs-skeleton>
              <studs-skeleton
                variant="text"
                width="100px"
                height="15px"
              ></studs-skeleton>
            </div>
          </div>
          <div style="display: block; padding: 10px;">
            <studs-skeleton
              variant="rect"
              width="300px"
              height="50px"
            ></studs-skeleton>
          </div>
        </presentational-component>
      </div>
    </div>
  </div>
`;
