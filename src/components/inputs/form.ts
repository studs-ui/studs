import { createContext, provide } from "@lit-labs/context";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { FormGroupController } from "../../controllers/formGroup";
import { onSubmit } from "../../directives/submit";

export const formContext = createContext<any>("form");

@customElement("studs-form")
export class StudsForm extends LitElement {
  onSubmit(e: Event) {
    this.dispatchEvent(
      new CustomEvent("submit", { bubbles: true, composed: true })
    );
    console.log("submitting");
    console.log(this.form.value);
  }

  form = new FormGroupController(this, {});

  // @ts-ignore
  @provide({ context: formContext }) formController: any = this.form;

  render() {
    return html`
      <form ${onSubmit(this.onSubmit)}>
        <slot></slot>
      </form>
    `;
  }
}
