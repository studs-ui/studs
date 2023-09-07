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
import style from '@studs/styles/components/resizerPane.scss?inline';

export interface StudsResizerPaneProps {
  direction?: 'horizontal' | 'vertical' | string;
  size?: number;
  min?: number;
  max?: number;
  children?: TemplateResult | HTMLElement | string;
}

@customElement('studs-resizer-pane')
export class StudsResizerPane extends LitElement {
  @property({ type: String }) direction: StudsResizerPaneProps['direction'];
  @property({ type: Number }) size?: StudsResizerPaneProps['size'];
  @property({ type: Number }) min: StudsResizerPaneProps['min'] = 50;
  @property({ type: Number }) max: StudsResizerPaneProps['max'];

  static styles = unsafeCSS(style);

  @query('.pane') pane!: HTMLElement;
  @queryAssignedElements({ slot: 'header' }) header!: HTMLCollection[];
  @queryAssignedElements({ slot: 'content' }) content!: HTMLCollection[];

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.firstUpdated(_changedProperties);
    if (this.direction === 'horizontal') {
      if (!this.size && !this.classList.contains('-last')) {
        this.size = this.pane.getBoundingClientRect().width;
      }
      if (!this.max) {
        this.max = this.parentElement?.getBoundingClientRect().width;
      }
    } else if (this.direction === 'vertical') {
      if (!this.size && !this.classList.contains('-last')) {
        this.size = this.pane.getBoundingClientRect().height;
      }
      if (!this.max) {
        this.max = this.parentElement?.getBoundingClientRect().height;
      }
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
        @mousemove=${this.onMouseMove}
        @mouseup=${this.onMouseMoveUp}
        @mouseleave=${this.onMouseLeave}
        style=${styleMap({
          [this.direction === 'horizontal' ? 'width' : 'height']:
            this.size + 'px',
        })}
        ?disabled=${this.classList.contains('-last')}
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
    if (this.direction === 'horizontal') {
      this._position = e.clientX;
      this._initialSize =
        (e.target as HTMLElement)?.closest('.pane')?.getBoundingClientRect()
          .width ||
        this.size ||
        0;
      this.requestUpdate();
    } else {
      this._position = e.clientY;
      this._initialSize =
        (e.target as HTMLElement)?.closest('.pane')?.getBoundingClientRect()
          .height ||
        this.size ||
        0;
      this.requestUpdate();
    }
  }
  private _delta: number = 0;
  private onMouseMove(e: MouseEvent) {
    if (this._pressed) {
      if (this.direction === 'horizontal') {
        this._delta = e.clientX - this._position;
      } else if (this.direction === 'vertical') {
        this._delta = e.clientY - this._position;
      }

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
  }

  private onMouseMoveUp() {
    this._pressed = false;
    this._initialSize = 0;
    this._position = 0;
  }

  private onMouseLeave(e: MouseEvent) {
    if (this._pressed) {
      this.onMouseMoveUp();
    }
  }
}
