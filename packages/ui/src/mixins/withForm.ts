import { consume } from '@lit-labs/context';
import { LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { formContext } from '../components/inputs/form';
import { FormController } from '../controllers/formController';

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WithFormInterface {
  name?: string;
  label?: string;
  disabled: boolean;
  placeholder?: string;
  required?: boolean;
  error: boolean;
  getName: () => string;
  dispatch: Function;
}

export const WithForm = <T extends Constructor<LitElement>>(superClass: T) => {
  class WithFormClass extends superClass {
    @property({ type: String }) name?: WithFormInterface['name'];
    @property({ type: String }) label?: WithFormInterface['label'] = '';
    @property({ type: String }) placeholder?: WithFormInterface['placeholder'];
    @property({ type: Boolean }) required?: WithFormInterface['required'];
    @property({ type: Boolean }) error: WithFormInterface['error'] = false;
    @property({ type: Boolean }) disabled: WithFormInterface['disabled'] =
      false;

    get getName() {
      return this.name || this.label || '';
    }

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
