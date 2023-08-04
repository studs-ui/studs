import { LitElement, html } from "lit";
import { customElement, queryAssignedElements } from "lit/decorators.js";
import { FormGroupController } from "../../controllers/formGroup";

@customElement("studs-form")
export class StudsForm extends LitElement {
  onSubmit(e: Event) {
    console.log(this.form.value);
  }

  form = new FormGroupController(this, {});

  @queryAssignedElements({ flatten: true }) _elements!: HTMLElement[];

  registerForm() {
    this._elements.forEach((el) => {
      switch (el.tagName.toLowerCase()) {
        case "studs-input":
        case "studs-textarea":
        case "studs-select":
        case "studs-radio":
        case "studs-checkbox":
        case "studs-switch":
        case "studs-slider":
          el.setAttribute("register", this.form);
          console.log({
            tag: el.tagName,
            attributes: el.attributes,
          });
          this.requestUpdate();
          break;
      }
    });
  }

  render() {
    return html`
      <form>
        <slot @slotchange=${this.registerForm}></slot>
      </form>
    `;
  }
}
