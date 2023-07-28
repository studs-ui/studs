import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import style from "styles/stepper.scss?inline";

interface Step {
  label: string;
  description: string;
}

export interface StepperProps {
  steps: Array<any>;
  step: number;
  direction: "horizontal" | "vertical";
}

@customElement("studs-stepper")
export class StudsStepper extends LitElement {
  @property({ type: Array }) steps: Array<any> = [];
  @property({ type: Number }) step: number = 0;
  @property({ type: String }) direction: "horizontal" | "vertical" =
    "horizontal";

  static styles = unsafeCSS(style);

  render() {
    const classes = {
      stepper: true,
      [`-${this.direction}`]: true,
    };

    return html`
      <div class=${classMap(classes)}>
        ${map(this.steps, (step, index) => {
          const classes = {
            step: true,
            "-wrapper": true,
            "-active": index === this.step,
            "-complete": index < this.step,
          };

          return html`<div class=${classMap(classes)}>
            <div class="step -number">
              <span>${index + 1}</span>
            </div>
            <div class="step -container">
              <div class="step -label"><p>${step.label}</p></div>
              <div class="step -description">${step.description}</div>
            </div>
          </div>`;
        })}
      </div>
    `;
  }
}
