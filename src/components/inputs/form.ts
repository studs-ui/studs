import { createContext, provide } from "@lit-labs/context";
import { LitElement, html } from "lit";
import { customElement, queryAssignedElements, state } from "lit/decorators.js";
import { FormGroupController } from "../../controllers/formGroup";

export const formContext = createContext<any>("form");

@customElement("studs-form")
export class StudsForm extends LitElement {
  @state() private _elems: HTMLElement[] = [];
  onSubmit(e: Event) {
    console.log(this.form.value);
  }

  form = new FormGroupController(this, {});
  // @ts-ignore
  @provide({ context: formContext }) formController: any = this.form;

  @queryAssignedElements({ flatten: true }) _elements!: HTMLElement[];

  render() {
    return html`
      <form>
        <slot></slot>
      </form>
    `;
  }
}
