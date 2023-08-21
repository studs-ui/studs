import { noChange } from 'lit';
import {
  AsyncDirective,
  AttributePart,
  PartInfo,
  directive,
} from 'lit/async-directive.js';

class SubmitDirective extends AsyncDirective {
  _cb!: (e: Event) => void;

  constructor(private part: PartInfo) {
    super(part);
  }

  get host() {
    return (this.part as AttributePart).element;
  }

  render(onSubmit: (e: Event) => void) {
    if (!this._cb) {
      this._cb = (e) => {
        e.preventDefault();
        onSubmit(e);
      };

      this.host.addEventListener('submit', this._cb);
    }

    return noChange;
  }

  disconnected() {
    this.host.removeEventListener('submit', this._cb);
  }
}

export const onSubmit = directive(SubmitDirective);
