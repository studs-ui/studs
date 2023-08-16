import { LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { Page, initialize } from "@bloomreach/spa-sdk";
import axios from "axios";

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WithBloomreachInterface {
  _page?: Page;
  _isPreview: boolean;
  init: () => Promise<void>;
}

export const WithBloomreach = <T extends Constructor<LitElement>>(
  superClass: T
) => {
  class WithBloomreachClass extends superClass {
    @state() protected _page?: any;
    @state() protected _isPreview: boolean = false;

    private async init() {
      const url = new URL(window.location.href);
      const isStrongtie =
        url.host === "www.strongtie.com" ||
        url.host === "strongtie.bloomreach.io" ||
        url.host === "www2.strongtie.com";
      this._page = await initialize({
        path: isStrongtie ? url.toString() : `https://www.strongtie.com`,
        endpoint:
          "https://strongtie.bloomreach.io/delivery/site/v1/channels/sst-site/pages",
        httpClient: axios,
      });
      this._isPreview = this._page.isPreview();
    }

    connectedCallback() {
      super.connectedCallback();
      this.init();
    }
  }
  return WithBloomreachClass as unknown as Constructor<WithBloomreachInterface> &
    T;
};
