import { ReactiveController, ReactiveControllerHost } from 'lit';
import { createRef, Ref } from 'lit/directives/ref.js';

// Define Types

interface Options {
  placement: string;
}
export class PopperController implements ReactiveController {
  host: ReactiveControllerHost;
  public options?: Options;
  public popper?: Ref<HTMLElement> = createRef();

  constructor(host: ReactiveControllerHost, options?: Options) {
    (this.host = host).addController(this);
    this.options = options;
  }

  hostConnected(): void {}

  hostDisconnected(): void {
    this.host.removeController(this);
  }
}
