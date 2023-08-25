import { ReactiveController, ReactiveControllerHost } from 'lit';
import { getWindow } from '../utils/shared';

export class ResponsiveController implements ReactiveController {
  host: ReactiveControllerHost;
  private window: Window;
  private _mobile: MediaQueryList;
  private _tablet: MediaQueryList;

  public isMobile: boolean = false;
  public isTablet: boolean = false;

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
    this.window = getWindow(this.host as unknown as HTMLElement);
    this._mobile = this.getMediaQuery(600);
    this._tablet = this.getMediaQuery(900);
  }

  private getMediaQuery(width: number, parameter = 'max') {
    return this.window.matchMedia(`(${parameter}-width: ${width}px)`);
  }

  private handleMobileChange = (e: MediaQueryListEvent) => {
    this.isMobile = e.matches;
  };

  private handleTabletChange = (e: MediaQueryListEvent) => {
    this.isTablet = e.matches;
  };

  hostConnected(): void {
    this._mobile.addEventListener('change', this.handleMobileChange);
    this._tablet.addEventListener('change', this.handleTabletChange);
  }

  hostDisconnected(): void {
    this.host.removeController(this);
    this._mobile.removeEventListener('change', this.handleMobileChange);
    this._tablet.removeEventListener('change', this.handleTabletChange);
  }
}
