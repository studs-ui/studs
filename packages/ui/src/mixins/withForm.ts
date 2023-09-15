import { LitElement, PropertyValueMap } from 'lit';
import { property, state } from 'lit/decorators.js';
import { generateUniqueId } from '../utils/shared';
import { choose } from 'lit/directives/choose.js';

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WithFormInterface {
  public name?: string;
  public label?: string;
  public display?: 'inline' | 'block';
  public value?: string;
  public checked?: boolean;
  public disabled: boolean;
  public placeholder?: string;
  public required?: boolean;
  public error: boolean;
  private _internals?: ElementInternals;
  protected inputId?: string;
  public dispatch: (value: any) => void;
  public form?: HTMLFormElement | null;
  public validity?: ValidityState;
  public validationMessage?: string;
  public willValidate?: boolean;
  public checkValidity?: () => boolean;
  public reportValidity?: () => boolean;
  public setFormValue: (value: string) => void;
  protected onChange: (e: Event) => void;
}

export const WithForm = <T extends Constructor<LitElement>>(superClass: T) => {
  class WithFormClass extends superClass {
    static formAssociated = true;
    protected inputId = generateUniqueId(this.tagName.split('-')[1].toLowerCase());
    @property({ type: String }) protected name?: WithFormInterface['name'] = this.inputId;
    @property({ type: String }) protected label?: WithFormInterface['label'];
    @property({ type: String }) protected display?: WithFormInterface['display'] = 'block';
    @property({ type: String }) public value?: WithFormInterface['value'] = '';
    @property({ type: Boolean}) public checked?: WithFormInterface['checked'];
    @property({ type: String }) public placeholder?: WithFormInterface['placeholder'];
    @property({ type: Boolean }) protected required?: WithFormInterface['required'];
    @property({ type: Boolean }) public error: WithFormInterface['error'] = false;
    @property({ type: Boolean }) public disabled: WithFormInterface['disabled'] =
      false;

    @state() private _internals?: WithFormInterface['_internals'];

    connectedCallback(): void {
      super.connectedCallback();
      this._internals = this.attachInternals();
      if(this.form) this.form.addEventListener('reset', this.reset);
    }

    disconnectedCallback(): void {
      super.disconnectedCallback();
      if(this.form) this.form.removeEventListener('reset', this.reset);
    }

    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        // Sets Initial Form Value
        choose(this.tagName.toLowerCase(), [
          ['studs-checkbox', () => this.setFormValue(this.value || 'false')],
          ['studs-switch', () => this.setFormValue(this.value || 'false')],
        ],
        () => {
          this.setFormValue(this.value || '')
        }
        );
    }

    protected updated(
      _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
    ): void {
      super.updated(_changedProperties);
      if (!this._internals) this._internals = this.attachInternals();
    }

    public get form() {
      if (this._internals) return this._internals.form;
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
    // Change Handler for resuability accross form elements
    protected onChange(e: Event) {
      if(!this.disabled)
        switch(this.tagName.toLowerCase()) {
            case 'studs-checkbox':
            case 'studs-switch':{
              const target = e.target as HTMLInputElement;
              if(target.checked !== this.checked){
                this.checked = target.checked;
                this.dispatch(this.checked);
                if(this.form) this.setFormValue(JSON.stringify(this.checked));
              }
              break;
            }
            case 'studs-radio': {
              const target = e.target as HTMLInputElement;
              this.checked = target.checked;
              if(this.value) this.dispatch(this.value);
              if(this.form) this.setFormValue(JSON.stringify(this.value));
              break;
            }
            default: {
              const target = e.target as HTMLInputElement | HTMLTextAreaElement;
              this.value = target.value;
              if(this.value) this.dispatch(this.value);
              if(this.form) this.setFormValue(JSON.stringify(this.value));
              break;
          }
        }
    }
    // Sets form Value & Dispatches custom Change Event.
    protected dispatch(detail: object | string | boolean) {
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
    // Resets the form value to the initial value.
    private reset = () => {
      switch(this.tagName.toLowerCase()) {
        case 'studs-checkbox':
        case 'studs-switch':{
          this.setFormValue('false')
          this.checked = false; 
          break;
        }
        case 'studs-radio': {
          this.setFormValue('')
          this.checked = false;
          break;
        }
        default: {
          this.setFormValue('')
          this.value = '';
          break;
        }
      }

      this.requestUpdate();
    }
  }
  return WithFormClass as unknown as Constructor<WithFormInterface> & T;
};
