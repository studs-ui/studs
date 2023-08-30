import { html } from 'lit';
import {
  createErrorToast,
  createStandardToast,
  createSuccessToast,
  createWarningToast,
} from '@studs/ui';

export const Toasts = html`
  <button slot="tablist">Toasts</button>
  <div slot="Toasts">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-toast title="Toast"></studs-toast>
      </presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-toast
            open
            static
            heading="Info"
            type="info"
            message="Info Toast"
            action="Button"
            closeable
            onactionclick="alert('clicked')"
          ></studs-toast>
        </presentational-component>
        <presentational-component>
          <studs-toast
            open
            static
            heading="Success"
            type="success"
            message="Success Toast"
            closeable
            onactionclick="alert('clicked')"
          ></studs-toast>
        </presentational-component>
        <presentational-component>
          <studs-toast
            open
            static
            heading="Warning"
            type="warning"
            message="Warning Toast"
            onactionclick="alert('clicked')"
          ></studs-toast>
        </presentational-component>
        <presentational-component>
          <studs-toast
            open
            static
            heading="Error"
            type="error"
            message="Error Toast"
          ></studs-toast>
        </presentational-component>
        <presentational-component>
          <studs-toast
            open
            static
            heading="Custom Children"
            type="error"
            message="Children Toast"
            ><studs-button buttontype="primary" size="small"
              >Click me</studs-button
            ></studs-toast
          >
        </presentational-component>
        <presentational-component>
          <studs-toast
            open
            static
            heading="Long Item"
            type="error"
            message="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
            ><studs-button buttontype="primary" size="small"
              >Click me</studs-button
            ></studs-toast
          >
        </presentational-component>
        <presentational-component>
          <!-- <studs-button @click=${createStandardToast}>Create Standard Toast</studs-button> -->
        </presentational-component>
        <presentational-component>
          <!-- <studs-button @click=${createErrorToast}>Create Error Toast</studs-button> -->
        </presentational-component>
        <presentational-component>
          <!-- <studs-button @click=${createWarningToast}>Create Warning Toast</studs-button> -->
        </presentational-component>
        <presentational-component>
          <!-- <studs-button @click=${createSuccessToast}>Create Success Toast</studs-button> -->
        </presentational-component>
      </div>
    </div>
  </div>
`;
