import { html } from 'lit';

export const Resizers = html`
  <button slot="tablist">Resizers</button>
  <div slot="Resizers">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-resizer direction="horizontal">
          <studs-resizer-pane size="50">Panel One</studs-resizer-pane>
          <studs-resizer-pane>Panel Two</studs-resizer-pane>
        </studs-resizer>
      </presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-resizer
            style="height: 300px; display: block;"
            direction="horizontal"
          >
            <studs-resizer-pane size="50">Panel One</studs-resizer-pane>
            <studs-resizer-pane>Panel Two</studs-resizer-pane>
          </studs-resizer>
        </presentational-component>
        <presentational-component>
          <studs-resizer
            style="width: 300px; display: block;"
            direction="vertical"
          >
            <studs-resizer-pane size="50">Panel One</studs-resizer-pane>
            <studs-resizer-pane>Panel Two</studs-resizer-pane>
          </studs-resizer>
        </presentational-component>
        <presentational-component>
          <div style="width: 400px; height: 400px; display: block">
            <studs-resizer direction="horizontal">
              <studs-resizer-pane size="150">Panel One</studs-resizer-pane>
              <studs-resizer-pane size="250">
                <studs-resizer direction="vertical">
                  <studs-resizer-pane size="50">Panel One</studs-resizer-pane>
                  <studs-resizer-pane>Panel Two</studs-resizer-pane>
                </studs-resizer>
              </studs-resizer-pane>
            </studs-resizer>
          </div>
        </presentational-component>
        <presentational-component>
          <div style="width: 800px; height: 400px; display: block">
            <studs-resizer direction="horizontal">
              <studs-resizer-pane size="150">Panel One</studs-resizer-pane>
              <studs-resizer-pane size="250">
                <studs-resizer direction="vertical">
                  <studs-resizer-pane size="50">Panel One</studs-resizer-pane>
                  <studs-resizer-pane>Panel Two</studs-resizer-pane>
                </studs-resizer>
              </studs-resizer-pane>
              <studs-resizer-pane size="250">
                <studs-resizer direction="vertical">
                  <studs-resizer-pane size="50">Panel One</studs-resizer-pane>
                  <studs-resizer-pane>Panel Two</studs-resizer-pane>
                </studs-resizer>
              </studs-resizer-pane>
            </studs-resizer>
          </div>
        </presentational-component>
      </div>
    </div>
  </div>
`;
