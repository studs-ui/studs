import { html } from 'lit';

export const Tabs = html`
  <button slot="tablist">Tabs</button>
  <div slot="Tabs">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage></presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-tabs>
            <button slot="tab">Tab 1</button>
            <section slot="panel">Content for tab 1</section>

            <button slot="tab">Tab 2</button>
            <section slot="panel">Content for tab 2</section>

            <button slot="tab">Tab 3</button>
            <section slot="panel">Content for tab 3</section>
          </studs-tabs>
        </presentational-component>
        <presentational-component>
          <studs-tabs>
            <button slot="tab">Tab 1</button>
            <section slot="panel">Content for tab 1</section>

            <button slot="tab">Tab 2</button>
            <section slot="panel">Content for tab 2</section>
            <button slot="tab" disabled>Tab 3</button>
            <section slot="panel">Content for tab 3</section>
          </studs-tabs>
        </presentational-component>
        <presentational-component>
          <studs-tabs variant="contained">
            <button slot="tab">Tab 1</button>
            <section slot="panel">Content for tab 1</section>

            <button slot="tab">Tab 2</button>
            <section slot="panel">Content for tab 2</section>

            <button slot="tab">Tab 3</button>
            <section slot="panel">Content for tab 3</section>
          </studs-tabs>
        </presentational-component>
        <presentational-component>
          <studs-tabs tabDirection="column">
            <button slot="tab">Tab 1</button>
            <section slot="panel">Content for tab 1</section>

            <button slot="tab">Tab 2</button>
            <section slot="panel">Content for tab 2</section>

            <button slot="tab">Tab 3</button>
            <section slot="panel">Content for tab 3</section>
          </studs-tabs>
        </presentational-component>
      </div>
    </div>
  </div>
`;
