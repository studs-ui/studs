export type Validator = (value: unknown) => boolean;

export class FormController<T = any> {
  invalid = false;
  _modelChanged: Array<(v: T) => void> = [];

  constructor(private value: T, private validators?: Validator[]) {}

  setValue(value: T, { emitModelChange = true } = {}) {
    this.value = value;
    emitModelChange && this._modelChanged.forEach((cb) => cb(this.value));
  }

  getValue() {
    return this.value;
  }

  reset({ emitModelChange = true } = {}) {
    const value: T = null as any;
    this.value = value;
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
