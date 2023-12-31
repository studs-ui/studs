import { Placement } from '@floating-ui/dom';
import { LitElement, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import { PopperController } from '../controllers/popperController';

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WithPopperInterface {
  popperController?: PopperController;
  element?: HTMLElement;
  position?: Placement;
  disabled?: boolean;
  query?: string;
}

export const WithPopper = <T extends Constructor<LitElement>>(
  superClass: T
) => {
  class WithPopperClass extends superClass {
    @property({ type: String }) position: Placement =
      'bottom';
    @property({ type: Boolean }) disabled: boolean =
      false;
    @property({ type: String }) query?: string;
    @property({ type: HTMLElement }) element!: Element;

    popperController = new PopperController(this, {
      options: { placement: this.position },
      trigger: this.element as HTMLElement,
      disabled: this.disabled,
    });

    connectedCallback(): void {
      this.element = this.parentElement as HTMLElement;
      super.connectedCallback();
      if (this.query) {
        this.element =
          (this.renderRoot.querySelector(this.query) as HTMLElement) ||
          (this.getRootNode() as Document).querySelector(this.query) as HTMLElement;
        this.requestUpdate();
      }
    }

    protected update(
      changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
    ): void {
      super.update(changedProperties);

      if (changedProperties.has('element')) {
        this.popperController.trigger = this.element as HTMLElement;
      }
      if (changedProperties.has('position')) {
        this.popperController.options = {
          placement: this.position,
        };
      }
      if (changedProperties.has('disabled')) {
        this.popperController.disabled = this.disabled;
      }
    }
  }
  return WithPopperClass as unknown as Constructor<WithPopperInterface> & T;
};
