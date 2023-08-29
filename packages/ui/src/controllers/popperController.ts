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
  public on: 'click' | 'hover' = 'hover';
  public trigger?: HTMLElement;
  private _open: boolean = false;
  private cleanup?: Function;
  public disabled: boolean = false;
  public options?: ComputePositionConfig = {
    placement: 'bottom',
  };
  public popper?: HTMLElement;
  public arrow?: HTMLElement;

  constructor(
    host: ReactiveControllerHost,
    {
      options,
      on,
      trigger,
      disabled,
    }: {
      options?: ComputePositionConfig;
      on?: 'click' | 'hover';
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
    const trigger = this.trigger || (this.host as unknown as HTMLElement);
    if (!this.popper) {
      const popper = (
        this.host as unknown as LitElement
      ).renderRoot.querySelector('[role]');
      if (popper) {
        if (!this.arrow) {
          const arrow = popper.querySelector('#arrow');
          if (arrow) this.arrow = arrow as HTMLElement;
        }
        this.cleanup = autoUpdate(
          trigger,
          popper as HTMLElement,
          this.updatePosition
        );
        this.popper = popper as HTMLElement;
        popper.setAttribute('aria-hidden', 'true');
      }

      if (!this.disabled) {
        if (this.on === 'hover') {
          trigger?.addEventListener('mouseenter', this.showPopper);
          trigger?.addEventListener('mouseleave', this.hidePopper);
          trigger?.addEventListener('focus', this.showPopper);
          trigger?.addEventListener('blur', this.hidePopper);
        } else if (this.on === 'click') {
          trigger?.addEventListener('click', this.togglePopper);
        }
      }
    }
  }

  hostDisconnected(): void {
    this.host.removeController(this);

    if (this.on === 'hover') {
      this.popper?.removeEventListener('mouseenter', this.showPopper);
      this.popper?.removeEventListener('mouseleave', this.hidePopper);
      this.popper?.removeEventListener('focus', this.showPopper);
      this.popper?.removeEventListener('blur', this.hidePopper);
    } else if (this.on === 'click') {
      this.popper?.removeEventListener('click', this.togglePopper);
    }
    if (this.cleanup) this.cleanup();
  }

  static styles = unsafeCSS(style);

  public showPopper = () => {
    this._open = true;
    this.popper?.classList.add('-show');
    this.popper?.setAttribute('aria-hidden', 'false');
    this.updatePosition();
  };

  public hidePopper = () => {
    this._open = false;
    this.popper?.classList.remove('-show');
    this.popper?.setAttribute('aria-hidden', 'true');
  };

  public togglePopper = () => {
    if (this._open) {
      this.hidePopper();
    } else {
      this.showPopper();
    }
  };

  private updatePosition = () => {
    const trigger = this.trigger || (this.host as unknown as HTMLElement);
    const popper = this.popper as HTMLElement;
    const arrowElement = this.arrow as HTMLElement;
    if (popper)
      autoUpdate(trigger, popper, () => {
        computePosition(trigger, popper, {
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
