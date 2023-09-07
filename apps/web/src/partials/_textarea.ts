import { html } from 'lit';

export const Textareas = html`
  <button slot="tablist">Textarea</button>
  <div slot="Textarea">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage></presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-textarea
            label="With Label and Placeholder"
            placeholder="Enter your text here"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          >
          </studs-textarea>
        </presentational-component>
        <presentational-component>
          <studs-textarea
            label="With Character counter"
            placeholder="Enter your text here"
            character-counter
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          >
          </studs-textarea>
        </presentational-component>
        <presentational-component>
          <studs-textarea
            label="Required"
            placeholder="Enter your text here"
            required
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          >
          </studs-textarea>
        </presentational-component>
        <presentational-component>
          <studs-textarea
            label="Disabled"
            placeholder="Enter your text here"
            disabled
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          >
          </studs-textarea>
        </presentational-component>
        <presentational-component>
          <studs-textarea
            label="With custom rows and cols"
            placeholder="Enter your text here"
            rows="8"
            cols="60"
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          >
          </studs-textarea>
        </presentational-component>
        <presentational-component>
          <studs-textarea
            label="With Error and Helper Text"
            placeholder="Enter your text here"
            maxlength="2"
            error
            messagetype="error"
            .helperText=${['First error', 'Second error']}
            @change="${(e: CustomEvent) =>
              console.log('Selected value:', e.detail)}"
          >
          </studs-textarea>
        </presentational-component>
      </div>
    </div>
  </div>
`;
