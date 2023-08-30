import { html } from 'lit';

export const Cards = html`
  <button slot="tablist">Cards</button>
  <div slot="Cards">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage></presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-card
            imageUrl="https://via.placeholder.com/200x200"
            altText="Studs Card Media"
            title="Title"
            customClass="my-custom-class"
          >
            <div slot="main">This is my custom body content.</div>
            <div slot="footer">
              <studs-button buttontype="primary" onclick="alert('clicked')"
                >Learn more</studs-button
              >
            </div>
          </studs-card>
        </presentational-component>
        <presentational-component>
          <studs-card
            imageUrl="https://via.placeholder.com/200x200"
            altText="Studs Card Media"
            title="Title"
          >
            <div slot="main">This is my custom body content.</div>
            <div slot="footer">Footer</div>
          </studs-card>
        </presentational-component>
      </div>
    </div>
  </div>
`;
