import { createContext, provide } from "@lit-labs/context";
import { LitElement, html } from "lit";
import { customElement, query, queryAssignedElements } from "lit/decorators.js";
import { FormGroupController } from '../../controllers/formGroup';
import { onSubmit } from '../../directives/submit';

export const formContext = createContext<any>("form");

@customElement("studs-form")
export class StudsForm extends LitElement {
  @query("form") formElement!: HTMLFormElement;
  onSubmit = () => {
    this.dispatchEvent(
      new CustomEvent("submit", {
        bubbles: true,
        detail: { value: this.form.value, form: this.formElement },
        composed: true,
      })
    );
  };

  form = new FormGroupController(this, {});

  // @ts-ignore
  @provide({ context: formContext }) formController: any = this.form;

  render() {
    return html`
      <form ${onSubmit(this.onSubmit)}>
        <slot @slotchange=${this.registerButtons}></slot>
      </form>
    `;
  }

  @queryAssignedElements({ flatten: true, selector: '[type="submit"]' })
  submitButtons!: HTMLElement[];
  @queryAssignedElements({ flatten: true, selector: '[type="reset"]' })
  resetButtons!: HTMLElement[];

  registerButtons() {
    const submit = this.submitButtons[0];
    const reset = this.resetButtons[0];

    if (submit) {
      submit.addEventListener("click", this.onButtonSubmit);
    }
    if (reset) {
      reset.addEventListener("click", this.onButtonReset);
    }
  }

  onButtonSubmit = (e) => {
    e.preventDefault();
    this.formElement.dispatchEvent(new Event("submit", { bubbles: true }));
  };
  onButtonReset = (e) => {
    e.preventDefault();
    this.form.reset();
    this.formElement.reset();
    this.formElement.dispatchEvent(new Event("reset", { bubbles: true }));
  };
}
