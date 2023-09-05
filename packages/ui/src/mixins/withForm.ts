import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WithFormInterface {
  name?: string;
  label?: string;
  labelType?: 'inline' | 'block';
  disabled: boolean;
  placeholder?: string;
  required?: boolean;
  error: boolean;
  dispatch: () => void;
}

export const WithForm = <T extends Constructor<LitElement>>(superClass: T) => {
  class WithFormClass extends superClass {
    @property({ type: String }) name?: WithFormInterface['name'];
    @property({ type: String }) label?: WithFormInterface['label'];
    @property({ type: String, attribute: 'label-type' }) labelType? = 'inline';
    @property({ type: String }) placeholder?: WithFormInterface['placeholder'];
    @property({ type: Boolean }) required?: WithFormInterface['required'];
    @property({ type: Boolean }) error: WithFormInterface['error'] = false;
    @property({ type: Boolean }) disabled: WithFormInterface['disabled'] =
      false;

    protected dispatch(detail: object) {
      if (detail !== undefined) {
        this.dispatchEvent(
          new CustomEvent('change', {
            detail,
            bubbles: true,
            composed: true,
          })
        );
      } else {
        throw new Error('No detail provided to onChange Event');
      }
    }
  }
  return WithFormClass as unknown as Constructor<WithFormInterface> & T;
};
