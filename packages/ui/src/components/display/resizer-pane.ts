import style from '@studs/styles/components/resizerPane.scss?inline';
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
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export interface StudsResizerPaneProps {
  direction?: 'horizontal' | 'vertical' | string;
  size?: number;
  min?: number;
  max?: number;
  single: boolean;
  disabled?: boolean;
  children?: TemplateResult | HTMLElement | string;
}

@customElement('studs-resizer-pane')
export class StudsResizerPane extends LitElement {
  @property({ type: String }) direction: StudsResizerPaneProps['direction'];
  @property({ type: Number }) size?: StudsResizerPaneProps['size'];
  @property({ type: Number }) min: StudsResizerPaneProps['min'] = 50;
  @property({ type: Number }) max: StudsResizerPaneProps['max'];
  @property({type: Boolean}) disabled: StudsResizerPaneProps['disabled'] = false;

  static styles = unsafeCSS(style);

  @query('.pane') pane!: HTMLElement;
  @queryAssignedElements({ slot: 'header' }) header!: HTMLCollection[];
  @queryAssignedElements({ slot: 'content' }) content!: HTMLCollection[];

  get axis(): { direction: 'width' | 'height'; client: 'clientX' | 'clientY' } {
    if(this.direction === 'vertical') {
      return {
        direction: 'height',
        client: 'clientY',
      }
    }
    return {
      direction: 'width',
      client: 'clientX',
    }
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.firstUpdated(_changedProperties);
    if (!this.size && !this.disabled) {
      this.size = this.pane.getBoundingClientRect()[this.axis.direction];
    }
    if (!this.max) {
      this.max = this.parentElement?.getBoundingClientRect()[this.axis.direction];
    }
  }

  render() {
    return html`
      <div
        class=${classMap({
          pane: true,
          '-wrapper': true,
          [`-${this.direction}`]: true,
          '-resizing': this._pressed,
        })}
        style=${styleMap({
          [this.direction === 'horizontal' ? 'width' : 'height']:
            this.size + 'px',
        })}
        ?disabled=${this.disabled}
      >
        <slot
          name="header"
          class=${classMap({
            pane: true,
            '-header': this.header && this.header.length > 0,
          })}
        ></slot>
        <slot
          name="content"
          class=${classMap({
            pane: true,
            '-content': this.content && this.content.length > 0,
          })}
        ></slot>
        <slot></slot>
        <span
          role="presentation"
          class="handle"
          @mousedown=${this.onMouseMoveDown}
        ></span>
      </div>
    `;
  }

  @state() private _pressed: boolean = false;
  @state() private _initialSize: number = 0;
  @state() private _position: number = 0;

  private onMouseMoveDown(e: MouseEvent) {
    this._pressed = true;
    this._position = e[this.axis.client];
    this._initialSize = (e.target as HTMLElement)?.closest('.pane')?.getBoundingClientRect()[this.axis.direction] || this.size || 0;
    this.requestUpdate();
    (this.getRootNode() as Document)?.addEventListener('mousemove', this.onMouseMove);
    (this.getRootNode() as Document)?.addEventListener('mouseup', this.onMouseMoveUp);
  }

  private _delta: number = 0;
  private onMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (this._pressed) {
      this._delta = e[this.axis.client] - this._position;

      let newSize = this._initialSize + this._delta;
      if (this.min && newSize <= this.min) {
        this.size = this.min;
      }
      if (this.max && newSize >= this.max) {
        this.size = this.max;
      }

      this.size = newSize;
      this.requestUpdate();

      this.dispatchEvent(
        new CustomEvent('resize', {
          detail: {
            size: this.size,
          },
        })
      );
    }
  };

  private onMouseMoveUp = () => {
    this._pressed = false;
    this._initialSize = 0;
    this._position = 0;
    this.requestUpdate();

    (this.getRootNode() as Document)?.removeEventListener(
      'mousemove',
      this.onMouseMove
    );
    (this.getRootNode() as Document)?.removeEventListener(
      'mouseup',
      this.onMouseMoveUp
    );
  };

}
