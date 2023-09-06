import { LitElement, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WithFormInterface {
  name?: string;
  label?: string;
  labelType?: 'inline' | 'block';
  disabled: boolean;
  placeholder?: string;
  required?: boolean;
  error: boolean;
  _internals?: ElementInternals;
  dispatch: () => void;
}

export const WithForm = <T extends Constructor<LitElement>>(superClass: T) => {
  class WithFormClass extends superClass {
    static formAssociated = true;
    @property({ type: String }) name?: WithFormInterface['name'];
    @property({ type: String }) label?: WithFormInterface['label'];
    @property({ type: String, attribute: 'label-type' }) labelType? = 'block';
    @property({ type: String }) placeholder?: WithFormInterface['placeholder'];
    @property({ type: Boolean }) required?: WithFormInterface['required'];
    @property({ type: Boolean }) error: WithFormInterface['error'] = false;
    @property({ type: Boolean }) disabled: WithFormInterface['disabled'] =
      false;

    @state() _internals?: WithFormInterface['_internals'];

    connectedCallback(): void {
      super.connectedCallback();
      this._internals = this.attachInternals();
    }

    protected updated(
      _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
    ): void {
      super.updated(_changedProperties);
      if (!this._internals) this._internals = this.attachInternals();
    }

    // The following properties and methods aren't strictly required,
    // but browser-level form controls provide them. Providing them helps
    // ensure consistency with browser-provided controls.
    get form() {
      if (this._internals) return this._internals.form;
    }
    get type() {
      if (this._internals) return this.localName;
    }
    get validity() {
      if (this._internals) return this._internals.validity;
    }
    get validationMessage() {
      if (this._internals) return this._internals.validationMessage;
    }
    get willValidate() {
      if (this._internals) return this._internals.willValidate;
    }

    checkValidity() {
      if (this._internals) return this._internals.checkValidity();
    }
    reportValidity() {
      if (this._internals) return this._internals.reportValidity();
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
