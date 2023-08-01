import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import style from "styles/slider.scss?inline";

export interface SliderProps {
  enableInput: boolean;
  enableTooltip: boolean;
  min: number;
  max: number;
  step: number;
}

@customElement("studs-slider")
export class StudsSlider extends LitElement {
  @property({ type: Boolean }) enableInput: SliderProps["enableInput"] = false;
  @property({ type: Boolean }) enableTooltip: SliderProps["enableTooltip"] =
    false;
  @property({ type: Number }) min: SliderProps["min"] = 0;
  @property({ type: Number }) max: SliderProps["max"] = 100;
  @property({ type: Number }) step: SliderProps["step"] = 1;

  @state() _minValue: number = 0;

  static styles = unsafeCSS(style);

  onInputChange(e: any) {
    this._minValue = e.target.value;
  }

  handleMinValue(e: any) {
    this._minValue = e.target.value;
  }

  handleRangeMouseDown(e: any) {
    this._minValue = e.target.value;
  }

  renderInput() {
    if (this.enableInput) {
      return html` <div class="slider -input">
        <input
          type="number"
          min=${this.min}
          max=${this.max}
          step=${this.step}
          .value=${this._minValue}
          @input=${this.onInputChange}
        />
      </div>`;
    }
  }

  render() {
    return html`<div class="slider">
      ${this.renderInput()}
      <div class="slider -wrapper">
        <div>
          <studs-tooltip direction="left">
            <div slot="tooltip">Tooltip</div>
            <input
              type="range"
              min=${this.min}
              max=${this.max}
              step=${this.step}
              value=${this._minValue}
              @input=${(event: any) => events.handleMinValue(component, event)}
              @mousedown=${(event: any) =>
                events.handleRangeMouseDown(component, event)}
              className="thumb thumbLeft"
            />
          </studs-tooltip>
        </div>
      </div>
    </div> `;
  }
}
