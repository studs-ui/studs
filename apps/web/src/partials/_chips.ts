import { html } from 'lit';

export const Chips = html`
  <button slot="tablist">Chips</button>
  <div slot="Chips">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-chip>Chip</studs-chip>
      </presentational-usage>
    </div>
    <div class="group">
      <h2>Examples</h2>
      <div class="componentGrid">
        <presentational-component>
          <studs-chip>Chip</studs-chip>
        </presentational-component>
        <presentational-component>
          <studs-chip size="small">Small</studs-chip>
        </presentational-component>
        <presentational-component>
          <studs-chip size="large" clickable selected>Large</studs-chip>
        </presentational-component>
        <presentational-component>
          <studs-chip
            deletable
            @delete=${(e: Event) => {
              const element = e.target as HTMLElement;
              element?.parentNode?.removeChild(element);
            }}
            clickable
            >Interactable</studs-chip
          >
        </presentational-component>
        <presentational-component>
          <studs-chip clickable>
            <img
              slot="accessory"
              class="avatar"
              src="./placeholders/smallUX/smallUX-avatar-sage.svg"
              alt="avatar"
            />
            Interactable
          </studs-chip>
        </presentational-component>
      </div>
    </div>
  </div>
`;
