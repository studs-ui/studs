import style from '@studs/styles/components/slider.scss?inline';
import {
  LitElement,
  TemplateResult,
  html,
  nothing,
  unsafeCSS
} from 'lit';
import { customElement, property, queryAsync, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { WithForm, WithFormInterface } from '../../mixins/withForm';

// #ref: https://github.com/carbon-design-system/carbon-web-components/tree/main

interface MarkProps {
  value: number;
  label?: string;
}

export interface SliderProps extends WithFormInterface {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  rangeValue: number[];
  marks?: MarkProps[];
  rightLabel?: string;
  enableInput: boolean;
  enableLabel: boolean;
  enableTooltip: boolean;
  calculateTooltipLabel: (value: number) => string;
}

@customElement('studs-slider')
export class StudsSlider extends WithForm(LitElement) {
  @property({ type: Number }) min: SliderProps['min'] = 0;
  @property({ type: Number }) max: SliderProps['max'] = 100;
  @property({ type: Number }) step: SliderProps['step'] = 1;
  @property({ type: Number }) defaultValue: SliderProps['defaultValue'] = 0;
  @property({ type: Array }) rangeValue: SliderProps['rangeValue'] = [];
  @property({ type: Array }) marks: SliderProps['marks'];
  @property({ type: String }) rightLabel: SliderProps['rightLabel'] = '';
  @property({ type: Boolean }) enableInput: SliderProps['enableInput'] = false;
  @property({ type: Boolean }) enableLabel: SliderProps['enableLabel'] = false;
  @property({ type: Boolean }) enableTooltip: SliderProps['enableTooltip'] =
    false;
  @property({ type: Function })
  calculateTooltipLabel: SliderProps['calculateTooltipLabel'] = (
    value: number
  ) => {
    return value + '°';
  };

  getPercent = (value: number) => {
    return Math.round(((value - this.min) / (this.max - this.min)) * 100);
  };

  @state() _minValue: number = this.rangeValue.length
    ? this.rangeValue[0]
    : this.defaultValue;
  @state() _maxValue: number = this.rangeValue.length
    ? this.rangeValue[1]
    : this.max;
  @state() _minPercentage: number = this.getPercent(this._minValue);
  @state() _maxPercentage: number = this.getPercent(this._maxValue);
  @state() _dragging: boolean = false;
  @state() _targetHandle?: HTMLElement | TemplateResult | null;

  static styles = unsafeCSS(style);

  private handleMinValue(event: Event) {
    const target = (event.target as HTMLInputElement)
    let value = Number(target.value);
    if (this.rangeValue?.length > 1) {
      value = target.value === '' ? '' : (Math.min(Number(target.value),this._maxValue - this.step)) as any;
    } else {
      value = target.value === '' ? '' : (Math.min(Number(target.value)) as any);
    }
    this._minValue = value;
    this._minPercentage = this.getPercent(value);

    setTimeout(() => {
      this._dragging = false;
    }, 2000);

    this._dragging = true;

    this.requestUpdate();

    this.setFormValue(JSON.stringify(value));
    this.dispatch({
      name: this.name,
      min: this._minValue,
      max: this._maxValue,
    });
  }

  private handleMaxValue(event: Event) {
    const target = (event.target as HTMLInputElement)
    const value = target.value === '' ? '' : (Math.max(Number(target.value),this._minValue + this.step) as any);
    this._maxValue = value;
    this._maxPercentage = this.getPercent(value);

    setTimeout(() => {
      this._dragging = false;
    }, 2000);
    this._dragging = true;

    this.requestUpdate();

    this.setFormValue(JSON.stringify(value));
    this.dispatch({
      name: this.name,
      min: this._minValue,
      max: this._maxValue,
    });
  }

  protected handleMouseUp() {
    this.removeEventListener('mouseup', this.handleMouseUp);
    this._targetHandle = null;
    this._dragging = false;
    this.requestUpdate();
  }

  private handleRangeMouseDown(event: MouseEvent) {
    this._targetHandle = event.target as HTMLInputElement;
    this.addEventListener('mouseup', this.handleMouseUp);

    this.requestUpdate();
  }

  private getToolTipValue(value: number) {
    if (this.calculateTooltipLabel) {
      return this.calculateTooltipLabel(value);
    }
    return value;
  }

  /**
   * Render Components
   */

  private renderLabel(position: 'left' | 'right') {
    if (this.enableLabel) {
      if (position === 'left') {
        return html`<div className="leftTxt">
          ${this.label ? this.label?.substring(0, 15) : nothing}
        </div>`;
      }
      if (position === 'right') {
        return html`<div className="rightTxt">
          ${this.rightLabel ? this.rightLabel?.substring(0, 15) : nothing}
        </div>`;
      }
    }
    return nothing;
  }

  private renderInput(type: 'min' | 'max') {
    if (this.enableInput) {
      if (this.rangeValue?.length > 1) {
        if (type === 'min')
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
        if (type === 'max')
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
      if (type === 'max')
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

  private renderRange() {
    const isRangeStyles = {
      left: `${this._minPercentage}%`,
      width: `${this._maxPercentage - this._minPercentage}%`,
    };
    const isMarkStyles = {
      width: '0%',
    };
    const defaultStyles = {
      width: `${this._minPercentage}%`,
    };
    const classes = {
      sliderRange:
        Boolean(this.rangeValue?.length > 1) || Boolean(this.marks) || false,
    };
    return html`<div
      class=${classMap(classes)}
      style=${styleMap(
        this.rangeValue?.length > 1
          ? isRangeStyles
          : this.marks
          ? isMarkStyles
          : defaultStyles
      )}
    ></div>`;
  }

  private renderMarks() {
    if (this.marks) {
      return map(this.marks, (mark) => {
        const leftMark = `${
          // @ts-ignore
          ((mark.value - this.marks[0]?.value) /
            // @ts-ignore
            (Math.abs(this.marks[0]?.value) +
              // @ts-ignore
              Math.abs(this.marks[this.marks.length - 1]?.value))) *
          100
        }%`;
        return html`
          <span style="left: ${leftMark}" class="sliderMarkValue"></span>
          <span style="left: ${leftMark}" class="sliderMarkLabel"
            >${mark.label}</span
          >
        `;
      });
    }
  }

  @state() private _thumbLeft?: HTMLInputElement;
  @state() private _thumbRight?: HTMLInputElement;

  @queryAsync('.thumbLeft') private thumbLeft!: Promise<HTMLInputElement>;
  @queryAsync('.thumbRight') private thumbRight!: Promise<HTMLInputElement>;

  private renderTooltip(position: 'left' | 'right') {
    if (position === 'left') {
      this.thumbLeft.then((res) => {
        this._thumbLeft = res;
      });
      if (this._thumbLeft)
        return html`<studs-tooltip
          .element=${this._thumbLeft}
          position="left"
          class="tooltip"
        >
          ${this.getToolTipValue(this._minValue)}
        </studs-tooltip>`;
    }
    if (position === 'right') {
      this.thumbRight.then((res) => {
        this._thumbRight = res;
      });
      if (this._thumbRight)
        return html`<studs-tooltip
          .element=${this._thumbRight}
          position="right"
          class="tooltip"
          >${this.getToolTipValue(this._maxValue)}</studs-tooltip
        >`;
    }
  }

  render() {
    return html`<div class="slider">
      ${this.renderInput('min')} ${this.renderLabel('left')}
      <div class="sliderWrapper">
        <div>
          ${this.enableTooltip ? this.renderTooltip('left') : nothing}
          <input
            name=${this.name ? `${this.name}-min` : nothing}
            type="range"
            class="thumb thumbLeft"
            min=${this.min}
            max=${this.max}
            step=${this.step}
            .value=${this._minValue}
            @input=${this.handleMinValue}
            @mousedown=${this.handleRangeMouseDown}
          />

          ${this.rangeValue?.length > 1
            ? html`
                ${this.enableTooltip ? this.renderTooltip('right') : nothing}
                <input
                  name=${this.name ? `${this.name}-max` : nothing}
                  type="range"
                  class="thumb thumbRight"
                  min=${this.min}
                  max=${this.max}
                  step=${this.step}
                  .value=${this._maxValue}
                  @input=${this.handleMaxValue}
                  @mousedown=${this.handleRangeMouseDown}
                />
              `
            : nothing}
        </div>
        <div class="sliderTrack">
          ${this.renderMarks()} ${this.renderRange()}
        </div>
      </div>
      ${this.renderLabel('right')} ${this.renderInput('max')}
    </div> `;
  }
}
