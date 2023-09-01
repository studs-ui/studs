import { html } from 'lit';

export const Images = html`
  <button slot="tablist">Images</button>
  <div slot="Images">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-image src="linktoimage" alt="alt"></studs-image>
      </presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-image
            src="https://picsum.photos/200/300"
            alt="Random Image"
            width="200"
            height="300"
          ></studs-image>
        </presentational-component>
        <presentational-component>
          <studs-image
            src="https://picsum.photos/400/300"
            alt="Random Image"
          ></studs-image>
        </presentational-component>
      </div>
    </div>
  </div>
`;
