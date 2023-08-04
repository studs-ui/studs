import { LitElement } from "lit";
import { property } from "lit/decorators.js";

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WithFormInterface {
  name?: string;
  label?: string;
  disabled: boolean;
  placeholder?: string;
  required?: boolean;
  error: boolean;
  register?: Function;
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
    @property({ type: Function }) register: WithFormInterface["register"];

    protected dispatch(detail: object) {
      console.log(detail);
      if (detail) {
        this.dispatchEvent(
          new CustomEvent("value-changed", {
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
