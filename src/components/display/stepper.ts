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

  private renderNumber(index: number) {
    if (index < this.step) {
      return html`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M15.1437 2.25H13.8955C13.7205 2.25 13.5544 2.33036 13.4472 2.46786L6.08475 11.7946L2.55439 7.32143C2.50098 7.25362 2.43291 7.1988 2.35528 7.16106C2.27765 7.12333 2.19249 7.10368 2.10617 7.10357H0.857959C0.738316 7.10357 0.672245 7.24107 0.745459 7.33393L5.63653 13.5304C5.8651 13.8196 6.30439 13.8196 6.53475 13.5304L15.2562 2.47857C15.3294 2.3875 15.2633 2.25 15.1437 2.25Z"
          fill="#607D64"
        />
      </svg>`;
    } else {
      return html`<span>${index + 1}</span>`;
    }
  }

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
            <div class="step -number">${this.renderNumber(index)}</div>
            <div class="step -container">
              <div class="step -label"><p>${step.label}</p></div>
              ${step.description
                ? html`<div class="step -description">${step.description}</div>`
                : ""}
            </div>
          </div>`;
        })}
      </div>
    `;
  }
}
