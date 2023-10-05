import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import style from '@studs/styles/components/stepper.scss?inline';

interface Step {
  id?: string;
  label: string;
  description?: string;
}

export interface StepperProps {
  steps: Array<Step>;
  step: number;
  direction: 'horizontal' | 'vertical';
  color?: 'primary' | 'secondary' | 'initial';
}

@customElement('studs-stepper')
export class StudsStepper extends LitElement {
  @property({ type: Array }) steps: StepperProps['steps'] = [];
  @property({ type: Number }) step: StepperProps['step'] = 0;
  @property({ type: String }) direction: StepperProps['direction'] =
    'horizontal';
  @property({ type: String }) color: StepperProps['color'] = 'initial';

  static styles = unsafeCSS(style);

  private renderNumber(index: number) {
    if (index < this.step) {
      return html`<i class="icon">check</i>`;
    } else {
      return html`<span>${index + 1}</span>`;
    }
  }

  render() {
    const classes = {
      stepper: true,
      [`-${this.direction}`]: true,
      [`-${this.color}`]: true,
    };

    return html`
      <div class=${classMap(classes)}>
        ${map(this.steps, (step, index) => {
          const classes = {
            step: true,
            '-wrapper': true,
            '-active': index === this.step,
            '-complete': index < this.step,
          };

          return html`<div class=${classMap(classes)}>
            <div class="step -number">${this.renderNumber(index)}</div>
            <div class="step -container">
              <div class="step -label"><p>${step.label}</p></div>
              ${step.description
                ? html`<div class="step -description">${step.description}</div>`
                : ''}
            </div>
          </div>`;
        })}
      </div>
    `;
  }
}
