import {
  LitElement,
  PropertyValueMap,
  TemplateResult,
  html,
  nothing,
  unsafeCSS,
} from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import { ChangeEvent } from "react";
import style from "styles/slider.scss?inline";

interface MarkProps {
  value: number;
  label?: string;
}

export interface SliderProps {
  rangevalue: number[];
  marks?: MarkProps[];
  defaultvalue: number;
  min: number;
  max: number;
  step: number;
  enableInput: boolean;
  enableTooltip: boolean;
  calculateTooltipLabel: (value: number) => string;
}

@customElement("studs-slider")
export class StudsSlider extends LitElement {
  @property({ type: Array }) rangevalue: SliderProps["rangevalue"] = [];
  @property({ type: Array }) marks: SliderProps["marks"];
  @property({ type: Boolean }) enableInput: SliderProps["enableInput"] = false;
  @property({ type: Boolean }) enableTooltip: SliderProps["enableTooltip"] =
    false;
  @property({ type: Number }) defaultValue: SliderProps["defaultvalue"] = 0;
  @property({ type: Number }) min: SliderProps["min"] = 0;
  @property({ type: Number }) max: SliderProps["max"] = 100;
  @property({ type: Number }) step: SliderProps["step"] = 1;
  @property({ type: Function })
  calculateTooltipLabel: SliderProps["calculateTooltipLabel"] = (
    value: number
  ) => {
    return value + "°";
  };

  getPercent = (value: number) => {
    return Math.round(((value - this.min) / (this.max - this.min)) * 100);
  };

  @state() _isRangeSlider: boolean = this.rangevalue.length > 1;
  @state() _minValue: number = this.rangevalue.length
    ? this.rangevalue[0]
    : this.defaultValue;
  @state() _maxValue: number = this.rangevalue.length
    ? this.rangevalue[1]
    : this.max;
  @state() _minPercentage: number = this.getPercent(this._minValue);
  @state() _maxPercentage: number = this.getPercent(this._maxValue);
  @state() _dragging: boolean = false;
  @state() _targetHandle?: HTMLElement | TemplateResult | null;

  @query(".sliderRange") _range!: HTMLElement;

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    // console.log({
    //   _isRangeSlider: this._isRangeSlider,
    //   _minValue: this._minValue,
    //   _maxValue: this._maxValue,
    //   _minPercentage: this._minPercentage,
    //   _maxPercentage: this._maxPercentage,
    //   _dragging: this._dragging,
    //   _targetHandle: this._targetHandle,
    // });
    if (this._range) {
      this._range.style.left = `${this._minPercentage}%`;
      this._range.style.width = `${this._maxPercentage}%`;
    }
  }

  static styles = unsafeCSS(style);

  private handleMinValue(event: ChangeEvent<HTMLInputElement>) {
    let value = Number(event.target.value);
    if (this._isRangeSlider) {
      value =
        event.target.value === ""
          ? ""
          : (Math.min(
              Number(event.target.value),
              this._maxValue - this.step
            ) as any);
    } else {
      value =
        event.target.value === ""
          ? ""
          : (Math.min(Number(event.target.value)) as any);
    }
    this._minValue = value;

    setTimeout(() => {
      this._dragging = false;
    }, 2000);

    this._dragging = true;

    this.requestUpdate();
  }

  private handleMaxValue(event: ChangeEvent<HTMLInputElement>) {
    const value =
      event.target.value === ""
        ? ""
        : (Math.max(
            Number(event.target.value),
            this._minValue + this.step
          ) as any);
    this._maxValue = value;

    setTimeout(() => {
      this._dragging = false;
    }, 2000);
    this._dragging = true;

    if (this.enableTooltip) {
      // if(component.refs.toolTipRight && component.refs.toolTipRight.current) {
      //   (component.refs.toolTipRight.current as Element)?.classList?.remove("hideTooltip");
      // }
    }

    this.requestUpdate();
  }

  protected handleMouseUp() {
    this.removeEventListener("mouseup", this.handleMouseUp);
    this._targetHandle = null;
    this._dragging = false;
    if (this.enableTooltip) {
      // (component.refs.toolTipLeft.current as Element)?.classList?.add("hideTooltip");
      // if(component.refs.toolTipRight && component.refs.toolTipRight.current) {
      //   (component.refs.toolTipRight.current as Element)?.classList?.add("hideTooltip");
      // }
    }
    this.requestUpdate();
  }

  private handleRangeMouseDown(event: MouseEvent) {
    this._targetHandle = event.target as HTMLInputElement;
    this.addEventListener("mouseup", this.handleMouseUp);

    this.requestUpdate();
  }

  private getToolTipValue(value: number) {
    if (this.calculateTooltipLabel) {
      return this.calculateTooltipLabel(value);
    }
    return value;
  }

  private renderInput(type: "min" | "max") {
    if (this.enableInput) {
      if (this._isRangeSlider) {
        if (type === "min")
          return html` <div class="inputNumber">
            <input
              class="inputNumber"
              type="number"
              min=${this.min}
              max=${this.max}
              step=${this.step}
              .value=${this._minValue}
              @input=${this.handleMinValue}
            />
          </div>`;
        if (type === "max")
          return html` <div class="inputNumber">
            <input
              class="inputNumber"
              type="number"
              min=${this.min}
              max=${this.max}
              step=${this.step}
              .value=${this._maxValue}
              @input=${this.handleMaxValue}
            />
          </div>`;
      }
      return html` <div class="inputNumber">
        <input
          class="inputNumber"
          type="number"
          min=${this.min}
          max=${this.max}
          step=${this.step}
          .value=${this._minValue}
          @input=${this.handleMinValue}
        />
      </div>`;
    }
  }

  private renderMarks() {
    if (this.marks)
      return map(this.marks, (mark, key) => {
        const leftMark = `${
          ((mark.value - this.marks[0]?.value) /
            (Math.abs(this.marks[0].value) +
              Math.abs(this.marks[this.marks.length - 1].value))) *
          100
        }%`;
        // console.log('leftMark ', leftMark)
        return html`
          <span style="left: ${leftMark}" className="sliderMarkValue"></span>
          <span style="left: ${leftMark}" className="sliderMarkLabel"
            >${mark.label}</span
          >
        `;
      });
  }

  render() {
    const leftTooltipClasses = {
      tooltip: true,
      "-left": true,
      hideTooltip: !this._dragging && this.enableTooltip,
    };
    const rightTooltipClasses = {
      tooltip: true,
      "-right": true,
      hideTooltip: !this._dragging && this.enableTooltip,
    };
    return html`<div class="slider">
      ${this.renderInput("min")}
      <div class="slider -wrapper">
        <div>
          <studs-tooltip
            direction="left"
            class=${classMap(leftTooltipClasses)}
            style="left: ${this._minPercentage}%"
            ?disabled=${this.enableTooltip}
          >
            <div slot="tooltip">${this.getToolTipValue(this._minValue)}</div>
            <input
              type="range"
              min=${this.min}
              max=${this.max}
              step=${this.step}
              .value=${this._minValue}
              @input=${this.handleMinValue}
              @mousedown=${this.handleRangeMouseDown}
              className="thumb thumbLeft"
            />
          </studs-tooltip>
          ${this._isRangeSlider
            ? html`
                <studs-tooltip
                  direction="right"
                  class=${classMap(rightTooltipClasses)}
                  style="left: ${this._maxPercentage}%"
                  ?disabled=${this.enableTooltip}
                >
                  <div slot="tooltip">
                    ${this.getToolTipValue(this._maxValue)}
                  </div>
                  <input
                    type="range"
                    min=${this.min}
                    max=${this.max}
                    step=${this.step}
                    .value=${this._maxValue}
                    @input=${this.handleMaxValue}
                    @mousedown=${this.handleRangeMouseDown}
                    className="thumb thumbRight"
                  />
                </studs-tooltip>
              `
            : nothing}
        </div>
        <div class="sliderTrack">
          ${this.renderMarks()}
          <div className="sliderRange"></div>
        </div>
        ${this.renderInput("max")}
      </div>
    </div> `;
  }
}
