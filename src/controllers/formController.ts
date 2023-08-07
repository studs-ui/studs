export type Validator = (value: unknown) => boolean;

export class FormController<T = any> {
  invalid = false;
  _modelChanged: Array<(v: T) => void> = [];

  constructor(
    private host: HTMLElement,
    private value: T,
    private validators?: Validator[]
  ) {}

  setValue(value: T, { emitModelChange = true } = {}) {
    this.value = value;
    emitModelChange && this._modelChanged.forEach((cb) => cb(this.value));
  }

  getValue() {
    return this.value;
  }

  reset({ emitModelChange = true } = {}) {
    const select = this.host?.shadowRoot?.querySelector("select");
    const checkbox = this.host?.shadowRoot?.querySelector(
      "input[type=checkbox]"
    );
    const input = this.host?.shadowRoot?.querySelector("input");

    if (select) {
      (select as HTMLSelectElement).selectedIndex = 0;
    } else if (checkbox) {
      (checkbox as HTMLInputElement).checked = false;
    } else if (input) {
      (input as HTMLInputElement).value = "";
    }

    const value: T = null as any;
    this.value = value;
    // this.host.value = value;
    emitModelChange && this._modelChanged.forEach((cb) => cb(this.value));
  }

  applyValidators() {
    if (!this.validators?.length) return;

    this.invalid = this.validators.some((validator) => validator(this.value));
  }

  onModelChange(cb: (v: T) => void) {
    this._modelChanged.push(cb);

    return () => {
      this._modelChanged = this._modelChanged.filter((c) => c !== cb);
    };
  }
}
