import { ReactiveController, ReactiveControllerHost } from "lit";
import { FormController } from "./formController";
import { controlDirective } from "../directives/control";

//@ts-ignore
export class FormGroupController<T extends Record<string, FormController>>
  implements ReactiveController
{
  constructor(private host: ReactiveControllerHost, public controls: T) {
    //@ts-ignore
    this.host.addController(this);
  }

  get value() {
    const value: Record<string, any> = {};

    for (const [key, control] of Object.entries(this.controls)) {
      value[key] = control.getValue();
    }

    return value;
  }

  get invalid() {
    return Object.values(this.controls).some((c) => c.invalid);
  }

  registerControl(name: string) {
    return controlDirective(this, name);
  }

  requestUpdate() {
    this.host.requestUpdate();
  }
}
