import {
  ComputePositionConfig,
  arrow,
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/dom';
import style from '@studs/styles/components/poppers.scss?inline';
import {
  LitElement,
  ReactiveController,
  ReactiveControllerHost,
  unsafeCSS,
} from 'lit';

// Define Types
export class PopperController implements ReactiveController {
  host: ReactiveControllerHost;
  public on: 'click' | 'hover' | 'manual' | 'toggle' = 'hover';
  public open: boolean = false;
  public trigger?: HTMLElement;
  private cleanup?: Function;
  public disabled: boolean = false;
  public options?: ComputePositionConfig = {
    placement: 'bottom',
  };
  public popper?: HTMLElement;
  public arrow?: HTMLElement;
  _trigger?: HTMLElement;

  constructor(
    host: ReactiveControllerHost,
    {
      options,
      on,
      trigger,
      disabled,
    }: {
      options?: ComputePositionConfig;
      on?: 'click' | 'hover' | 'manual';
      trigger?: HTMLElement;
      disabled?: boolean;
    }
  ) {
    (this.host = host).addController(this);
    this.options = options;
    if (trigger) this.trigger = trigger;
    if (on) this.on = on;
    if (disabled) this.disabled = disabled;
  }

  hostUpdated(): void {
    this.host.updateComplete.then(() => {
      this._trigger = this.trigger || (this.host as unknown as HTMLElement);
      console.log(this._trigger);
      if (!this.popper) {
        const popper = (
          this.host as unknown as LitElement
        ).renderRoot.querySelector('[role]');
        if (popper) {
          this._trigger.setAttribute(
            'aria-haspopup',
            popper.getAttribute('role') || 'true'
          );
          this._trigger.setAttribute('aria-expanded', 'false');
          if (!this.arrow) {
            const arrow = popper.querySelector('#arrow');
            if (arrow) this.arrow = arrow as HTMLElement;
          }
          this.cleanup = autoUpdate(
            this._trigger,
            popper as HTMLElement,
            this.updatePosition
          );
          this.popper = popper as HTMLElement;
          popper.setAttribute('aria-hidden', 'true');
        }
        if (!this.disabled) {
          this.init();
        }
      }
    });
  }

  hostDisconnected(): void {
    this.host.removeController(this);
    this.destroy();
    if (this.cleanup) this.cleanup();
  }

  static styles = unsafeCSS(style);

  public init() {
    if (this.on === 'hover') {
      this._trigger?.addEventListener('mouseenter', this.showPopper);
      this._trigger?.addEventListener('mouseleave', this.hidePopper);
      this._trigger?.addEventListener('focus', this.showPopper);
      this._trigger?.addEventListener('blur', this.hidePopper);
    } else if (this.on === 'click') {
      this.popper?.addEventListener('click', (e) => e.stopPropagation());
      this._trigger?.addEventListener('click', this.showPopper);
    } else if (this.on === 'toggle') {
      this._trigger?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.popper?.getAttribute('aria-hidden') === 'true') {
          this.showPopper(e);
        } else {
          this.hidePopper(e);
        }
      });
    }
  }

  public destroy() {
    if (this.on === 'hover') {
      this._trigger?.removeEventListener('mouseenter', this.showPopper);
      this._trigger?.removeEventListener('mouseleave', this.hidePopper);
      this._trigger?.removeEventListener('focus', this.showPopper);
      this._trigger?.removeEventListener('blur', this.hidePopper);
    } else if (this.on === 'click') {
      this.popper?.removeEventListener('click', (e) => e.stopPropagation());
      this._trigger?.removeEventListener('click', this.showPopper);
    }
  }

  public update() {
    this.destroy();
    this.init();
  }

  public disable() {
    this.destroy();
    this.disabled = true;
  }

  public enable() {
    this.disabled = false;
    this.init();
  }

  public showPopper = (e?: MouseEvent | FocusEvent) => {
    this.host.updateComplete.then(() => {
      this.open = true;
      this.popper?.setAttribute('aria-hidden', 'false');
      if (this._trigger) {
        this._trigger.setAttribute('aria-expanded', 'true');
        if (
          this.popper?.getAttribute('role') === 'listbox' ||
          this.popper?.getAttribute('role') === 'menu'
        ) {
          const activeDescendant: HTMLElement | null =
            this.popper.querySelector('[aria-selected="true"]');
          if (activeDescendant) activeDescendant.focus();
        }
      }
      this.updatePosition();
      if (this.on === 'click' && e) e.stopPropagation();
    });
  };

  public hidePopper = (e?: MouseEvent | FocusEvent) => {
    this.host.updateComplete.then(() => {
      this.open = false;
      this.popper?.setAttribute('aria-hidden', 'true');
      if (this._trigger) {
        this._trigger.setAttribute('aria-expanded', 'false');
      }
      if (this.on === 'click' && e) e.stopPropagation();
    });
  };

  private updatePosition = () => {
    const popper = this.popper as HTMLElement;
    const arrowElement = this.arrow as HTMLElement;
    if (popper && this._trigger)
      autoUpdate(this._trigger, popper, () => {
        computePosition(this._trigger as HTMLElement, popper, {
          ...this.options,
          middleware: [
            offset(6),
            flip(),
            shift({ padding: 5 }),
            arrowElement ? arrow({ element: arrowElement, padding: 5 }) : null,
          ],
        }).then(({ x, y, placement, middlewareData }) => {
          Object.assign(popper.style, {
            left: `${x}px`,
            top: `${y}px`,
          });

          // Accessing the data
          if (arrowElement) {
            const { x: arrowX, y: arrowY } = middlewareData.arrow;
            const staticSide = {
              top: 'bottom',
              right: 'left',
              bottom: 'top',
              left: 'right',
            }[placement.split('-')[0]];

            Object.assign(arrowElement.style, {
              left: arrowX != null ? `${arrowX}px` : '',
              top: arrowY != null ? `${arrowY}px` : '',
              right: '',
              bottom: '',
              [staticSide as any]: '-4px',
            });
          }
        });
      });
  };
}
