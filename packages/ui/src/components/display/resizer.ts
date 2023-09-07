import {
  LitElement,
  PropertyValueMap,
  TemplateResult,
  html,
  unsafeCSS,
} from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import style from '@studs/styles/components/resizer.scss?inline';
import { StudsResizerPane } from './resizer-pane';

export interface StudsResizerProps {
  direction: 'horizontal' | 'vertical';
  children?: TemplateResult | HTMLElement | string;
}

@customElement('studs-resizer')
export class StudsResizer extends LitElement {
  @property({ type: String }) direction: StudsResizerProps['direction'] =
    'horizontal';

  static styles = unsafeCSS(style);

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.updated(_changedProperties);
    if (_changedProperties.has('direction')) {
      this.panes.forEach((pane) => {
        (pane as StudsResizerPane).direction = this.direction;
      });
    }
  }

  render() {
    const classes = {
      resizer: true,
      '-wrapper': true,
      [`-${this.direction}`]: true,
    };

    return html`
      <div class=${classMap(classes)}>
        <slot @slotchange=${this.registerResizerPanes}></slot>
      </div>
    `;
  }

  @queryAssignedElements({ flatten: true }) panes!: HTMLElement[];

  registerResizerPanes() {
    this.panes.forEach((pane, index) => {
      if (index === this.panes.length - 1) {
        pane.classList.add('-last');
      }
    });
  }
}
