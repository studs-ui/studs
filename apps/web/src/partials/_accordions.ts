import { html } from 'lit';

const AccordionChildren = html`
  <studs-accordion-item>
    <div slot="toggle">Accordion One</div>
    <div>
      <h3>Content</h3>
      <p>This allows for whatever</p>
      <studs-button>Test</studs-button>
    </div>
  </studs-accordion-item>
  <studs-accordion-item
    ><div slot="toggle">Accordion Two</div>
    Test
  </studs-accordion-item>
  <studs-accordion-item
    ><div slot="toggle">Accordion Three</div>
    Test
  </studs-accordion-item>
  <studs-accordion-item
    ><div slot="toggle">Accordion Four</div>
    Test
  </studs-accordion-item>
`;

export const Accordions = html`
  <button slot="tablist">Accordions</button>
  <div slot="Accordions">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-accordion enable-header enable-search>
          <studs-accordion-item>
            <div slot="toggle">Accordion One</div>
            <div>
              <h3>Content</h3>
            </div>
          </studs-accordion-item>
        </studs-accordion>
      </presentational-usage>
    </div>
    <div class="group">
      <h2>Examples</h2>
      <div class="componentGrid -single">
        <presentational-component>
          <studs-accordion ?enable-header=${true} ?enable-search=${true}>
            ${AccordionChildren}
          </studs-accordion>
        </presentational-component>
        <presentational-component>
          <studs-accordion ?enable-header=${false} ?enable-search=${false}>
            ${AccordionChildren}
          </studs-accordion>
        </presentational-component>
      </div>
    </div>
  </div>
`;
