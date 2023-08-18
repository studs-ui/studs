import { AttributePart, noChange } from "lit";
import { AsyncDirective } from "lit/async-directive.js";
import { PartInfo, directive } from "lit/directive.js";
import { FormController } from "../controllers/formController";
import { FormGroupController } from "../controllers/formGroup";
import { valueAccessors } from "../accessors";

export class ControlDirective extends AsyncDirective {
  private _formController!: FormController;
  private _disposables: Array<VoidFunction> = [];

  constructor(private part: PartInfo) {
    super(part);
  }

  get host(): HTMLElement {
    return (this.part as AttributePart).element;
  }

  render(group: FormGroupController<any>, name: string) {
    if (!this._formController) {
      let valueAccessor: any = null;

      for (const [selector, accessor] of Object.entries(valueAccessors)) {
        if (this.host.matches(selector)) {
          valueAccessor = accessor;
          break;
        }
      }

      const { viewToModel, modelToView } =
        valueAccessor ?? valueAccessors["input"];

      //@ts-ignore
      this._formController = group.controls[name];

      // Set the initial control value
      modelToView(this.host, this._formController.getValue());
      this._applyValidators(group);

      const disposeModelChange = this._formController.onModelChange((value) => {
        modelToView(this.host, value);
        this._applyValidators(group);
      });

      const disposeViewToModel = viewToModel(this.host, (value: unknown) => {
        this._formController.setValue(value, { emitModelChange: false });
        this._applyValidators(group);
      });

      this._disposables.push(disposeViewToModel, disposeModelChange);
    }

    return noChange;
  }

  _applyValidators(group: FormGroupController<any>) {
    this._formController.applyValidators();
    this.host.classList.toggle("invalid", this._formController.invalid);

    // Update the controller to run detect changes on the host element
    group.requestUpdate();
  }

  protected disconnected() {
    this._disposables.forEach((dispose) => dispose());
  }
}

export const controlDirective = directive(ControlDirective);
