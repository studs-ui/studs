import { html } from 'lit';

export const Sliders = html`
  <button slot="tablist">Sliders</button>
  <div slot="Sliders">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage>
        <studs-slider label="label"></studs-slider>
      </presentational-usage>
    </div>
    <div class="group">
      <h2>Examples</h2>
      <div class="componentGrid -single">
        <presentational-component>
          <studs-slider style="width: 100%" label="label"></studs-slider>
        </presentational-component>
        <presentational-component>
          <studs-slider
            style="width: 100%"
            .rangeValue=${[0, 50]}
            .min=${0}
            .max=${100}
            .step=${1}
            label="Peanut Butter"
            rightlabel="Jelly"
            enableinput
            enabletooltip
            enablelabel
            .marks=${[
              { value: 0, label: '0°' },
              { value: 25, label: '25' },
              { value: 50, label: '50' },
              { value: 75, label: '75' },
              { value: 100, label: '100°' },
            ]}
            .calculateTooltipLabel=${(value: number) => {
              return value + ' for Jelly';
            }}
          ></studs-slider>
        </presentational-component>
      </div>
    </div>
  </div>
`;
