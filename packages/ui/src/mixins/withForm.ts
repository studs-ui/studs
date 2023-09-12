import { LitElement, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import { generateUniqueId } from '../utils/shared';
import { choose } from 'lit/directives/choose.js';

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WithFormInterface {
  public name?: string;
  protected label?: string;
  protected display?: 'inline' | 'block';
  public value?: string;
  public disabled: boolean;
  public placeholder?: string;
  protected required?: boolean;
  public error: boolean;
  private _internals?: ElementInternals;
  protected inputId?: string;
  protected dispatch: (value: any) => void;
  public form?: HTMLFormElement | null;
  public type?: string;
  public validity?: ValidityState;
  public validationMessage?: string;
  public willValidate?: boolean;
  public checkValidity?: () => boolean;
  public reportValidity?: () => boolean;
  public setFormValue: (value: string) => void;
}

export const WithForm = <T extends Constructor<LitElement>>(superClass: T) => {
  class WithFormClass extends superClass {
    static formAssociated = true;
    @property({ type: String }) protected name?: WithFormInterface['name'];
    @property({ type: String }) protected label?: WithFormInterface['label'];
    @property({ type: String }) protected display?: WithFormInterface['display'] = 'block';
    @property({ type: String }) public value?: WithFormInterface['value'];
    @property({ type: String }) public placeholder?: WithFormInterface['placeholder'];
    @property({ type: Boolean }) protected required?: WithFormInterface['required'];
    @property({ type: Boolean }) public error: WithFormInterface['error'] = false;
    @property({ type: Boolean }) public disabled: WithFormInterface['disabled'] =
      false;

    @state() private _internals?: WithFormInterface['_internals'];

    connectedCallback(): void {
      super.connectedCallback();
      this._internals = this.attachInternals();
    }

    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        // Sets Initial Form Value
        choose(this.tagName.toLowerCase(), [
          ['studs-checkbox', () => this.setFormValue(this.value || 'false')],
        ],
        () => this.setFormValue(this.value || '')
        );

        // React to Form Reset
        if(this.form) {
          this.form.addEventListener('reset', () => {
            this.setFormValue(this.value || '');
            this.value = '';
            this.requestUpdate();
          });
        }
    }

    protected updated(
      _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
    ): void {
      super.updated(_changedProperties);
      if (!this._internals) this._internals = this.attachInternals();
    }

    protected inputId = generateUniqueId(this.tagName.split('-')[1].toLowerCase());

    // The following properties and methods aren't strictly required,
    // but browser-level form controls provide them. Providing them helps
    // ensure consistency with browser-provided controls.
    public get form() {
      if (this._internals) return this._internals.form;
    }
    public get type() {
      if (this._internals) return this.localName;
    }
    public get validity() {
      if (this._internals) return this._internals.validity;
    }
    public get validationMessage() {
      if (this._internals) return this._internals.validationMessage;
    }
    public get willValidate() {
      if (this._internals) return this._internals.willValidate;
    }

    public checkValidity() {
      if (this._internals) return this._internals.checkValidity();
    }
    public reportValidity() {
      if (this._internals) return this._internals.reportValidity();
    }

    public setFormValue(value: string) {
      if (this._internals) return this._internals.setFormValue(value);
    }

    // Sets form Value & Dispatches custom Change Event.
    protected dispatch(detail: object) {
      if (detail !== undefined) {
        if(this.form) this.setFormValue(JSON.stringify(detail));
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
