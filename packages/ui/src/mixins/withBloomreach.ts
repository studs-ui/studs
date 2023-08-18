import { Page, initialize } from "@bloomreach/spa-sdk";
import axios from "axios";
import { LitElement } from "lit";
import { state } from "lit/decorators.js";

export interface Menu {
  name: string;
  link: {
    href: string;
    target?: string;
  };
  depth: number;
  selected: boolean;
  children: Menu[];
}

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class WithBloomreachInterface {
  _page?: Page;
  _isPreview: boolean;
  generateMenuCollection: (collection: any[]) => Menu[] | [];
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

    constructor(...args: any[]) {
      super(...args);
      this.init();
    }

    /**
     *
     * @param collection Array of Bloomreach Menu
     * @returns
     */
    protected generateMenuCollection(collection: any[]): Menu[] | [] {
      if (collection)
        return collection.map((item) => {
          return {
            name: item.getName(),
            link: item.getLink(),
            depth: item.getDepth(),
            selected: item.isSelected(),
            children: this.generateMenuCollection(item.getChildren()),
          };
        });

      return [];
    }
  }
  return WithBloomreachClass as unknown as Constructor<WithBloomreachInterface> &
    T;
};
