import { createContext, provide } from "@lit-labs/context";
import { LitElement, html } from "lit";
import { customElement, queryAssignedElements, state } from "lit/decorators.js";
import { FormGroupController } from "../../controllers/formGroup";

export const formContext = createContext<any>("form");

@customElement("studs-form")
export class StudsForm extends LitElement {
  @state() private _elems: HTMLElement[] = [];
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

  @queryAssignedElements({ flatten: true }) _elements!: HTMLElement[];

  render() {
    return html`
      <form @change=${this.onSubmit}>
        <slot
          @slotchange=${() => {
            const button = this._elements.find(
              (e) =>
                e.tagName === "STUDS-BUTTON" &&
                e.getAttribute("type") === "submit"
            );
            if (!button?.getAttribute("@click")) {
              //   console.log(button);
              //   button?.setAttribute("onclick", this.onSubmit);
            }
          }}
        ></slot>
      </form>
    `;
  }
}
