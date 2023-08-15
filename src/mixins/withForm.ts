import { consume } from "@lit-labs/context";
import { LitElement, PropertyValueMap, nothing } from "lit";
import { property, query, state } from "lit/decorators.js";
import { formContext } from "../components/inputs/form";
import { FormController } from "../controllers/formController";

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WithFormInterface {
  name?: string;
  label?: string;
  disabled: boolean;
  placeholder?: string;
  required?: boolean;
  error: boolean;
  formController?: any;
  getForm: (
    element: HTMLElement | null,
    level?: number
  ) => HTMLFormElement | null;
  getName: () => string;
  control: () => Function;
  dispatch: Function;
}

export const WithForm = <T extends Constructor<LitElement>>(superClass: T) => {
  class WithFormClass extends superClass {
    @property({ type: String }) name?: WithFormInterface["name"];
    @property({ type: String }) label?: WithFormInterface["label"] = "";
    @property({ type: String }) placeholder?: WithFormInterface["placeholder"];
    @property({ type: Boolean }) required?: WithFormInterface["required"];
    @property({ type: Boolean }) error: WithFormInterface["error"] = false;
    @property({ type: Boolean }) disabled: WithFormInterface["disabled"] =
      false;
    // @ts-ignore
    @consume({ context: formContext }) public formController?;

    private getForm(
      element: HTMLElement | null,
      level: number = 0
    ): HTMLFormElement | null {
      if (level > 5) {
        return null;
      }
      if (element) {
        if (element.tagName === "FORM") {
          return element as HTMLFormElement;
        } else {
          return this.getForm(element.parentElement, level + 1);
        }
      } else {
        return null;
      }
    }

    @state() private _formData?: FormData;

    onInputFormChange(event: Event) {
      const target = event.target as
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement
        | any;

      this.formController.controls[this.getName].setValue(
        target.value || target.checked
      );
    }

    connectedCallback(): void {
      super.connectedCallback();
      if (this.formController) {
        this.addEventListener("input", this.onInputFormChange);
      }
      if (!this._formData) {
        const form = this.getForm(this);
        if (form) {
          this._formData = new FormData(form);
          this.requestUpdate();
        }
      }
    }

    disconnectedCallback(): void {
      super.disconnectedCallback();
      if (this.formController) {
        this.removeEventListener("input", this.onInputFormChange);
      }
    }

    get getName() {
      return this.name || this.label || "";
    }

    get control() {
      if (this.formController) {
        this.formController.addControl({
          [this.getName]: new FormController(this, ""),
        });
        return this.formController.registerControl(this.getName);
      } else {
        return nothing;
      }
    }

    protected dispatch(detail: object) {
      if (detail) {
        // Check if FormData Exists and if value exists, if not update it
        if (
          this._formData &&
          this._formData.get(this.getName) !== JSON.stringify(detail)
        ) {
          this._formData.set(this.getName, JSON.stringify(detail));
        }

        this.dispatchEvent(
          new CustomEvent("change", {
            detail,
            bubbles: true,
            composed: true,
          })
        );
      } else {
        throw new Error("No detail provided to onChange Event");
      }
    }
  }
  return WithFormClass as unknown as Constructor<WithFormInterface> & T;
};
