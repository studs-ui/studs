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
          this.popper?.addEventListener('click', (e) => e.stopPropagation());
          trigger?.addEventListener('click', this.showPopper);
        }
      }
    }
  }

  hostDisconnected(): void {
    this.host.removeController(this);

    const trigger = this.trigger || (this.host as unknown as HTMLElement);

    if (this.on === 'hover') {
      trigger?.removeEventListener('mouseenter', this.showPopper);
      trigger?.removeEventListener('mouseleave', this.hidePopper);
      trigger?.removeEventListener('focus', this.showPopper);
      trigger?.removeEventListener('blur', this.hidePopper);
    } else if (this.on === 'click') {
      this.popper?.removeEventListener('click', (e) => e.stopPropagation());
      trigger?.removeEventListener('click', this.showPopper);
    }
    if (this.cleanup) this.cleanup();
  }

  static styles = unsafeCSS(style);

  public showPopper = (e: MouseEvent | FocusEvent) => {
    this.popper?.classList.add('-show');
    this.popper?.setAttribute('aria-hidden', 'false');
    this.updatePosition();
    if (this.on === 'click') e.stopPropagation();
  };

  public hidePopper = (e: MouseEvent | FocusEvent) => {
    this.popper?.classList.remove('-show');
    this.popper?.setAttribute('aria-hidden', 'true');
    if (this.on === 'click') e.stopPropagation();
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
