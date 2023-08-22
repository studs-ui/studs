import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { map } from 'lit/directives/map.js';
import style from '@studs/styles/components/header.scss?inline';
import { WithBloomreach } from '../../mixins/withBloomreach';
import {
  analyticsNavigationAction,
  analyticsSearch,
  getUrlFromLinkCompound,
} from '../../utils/_analytics';
import { isMobileDevice, isTablet } from '../../utils/shared';

export interface StudsHeaderProps {
  gtag?: string;
}

interface Menu {
  name: string;
  link: {
    href: string;
    target?: string;
  };
  depth: number;
  selected: boolean;
  children: Menu[];
}

@customElement('studs-header')
export class StudsHeader extends WithBloomreach(LitElement) {
  @property({ type: String }) gtag?: StudsHeaderProps['gtag'];

  static styles = unsafeCSS(style);

  @query('header') header!: HTMLElement;

  /**
   * Declare Internal States
   */
  private _menuBreakpoint: number = 905;
  private _resizeTimer: NodeJS.Timeout | undefined;
  private _scrollTimer: NodeJS.Timeout | undefined;

  @state() private _open: boolean = false;
  @state() private _activeMenu?: string;
  @state() private _big: boolean = true;

  connectedCallback(): void {
    super.connectedCallback();

    document.addEventListener('scroll', this.onWindowScroll);
    window.addEventListener('resize', this.onWindowResize);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    document.removeEventListener('scroll', this.onWindowScroll);
    window.removeEventListener('resize', this.onWindowResize);
  }

  private get _doc() {
    if (this._page) {
      const { document: docRef }: any = this._page
        ?.getComponent('header')
        ?.getModels();
      return this._page.getContent(docRef);
    }
  }

  /**
   * Render GTAG
   * @returns Google Tag Script with GTAG
   */
  private get renderGoogleTag() {
    if (this.gtag) {
      return html`<script id="gtag-base">
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', this.gtag);
      </script>`;
    }
  }
  /**
   * TODO: Turn this into a reusable component
   * @returns Header Logo
   */
  private get renderLogo() {
    return html`
      <div
        class="logo"
        @click=${() => analyticsNavigationAction('Logo', 'header')}
      >
        <a href="http://strongtie.com">
          <svg
            class="sstLogo"
            version="1.1"
            viewBox="0 0 225 139.6"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect class="sstLogoTopBlackBar" width="225" height="59.7" />
            <rect
              class="sstLogoBottomOrangeBar"
              y="65.6"
              width="225"
              height="74"
            />
            <path
              class="sstLogoTextColor"
              d="m149.9 93.8h3.6c0-2 1.7-3.6 2.5-4.2 0.6-0.3 1.7-0.6 2.8-0.6v18.4 2.5c0 0.3-0.3 0.6-0.6 0.6-0.6 0.3-0.8 0.3-2.5 0.3v3.9h14.5v-3.9c-1.7 0-2.2-0.3-2.5-0.3-0.3-0.3-0.6-0.3-0.6-0.6v-2.5-18.3c1.1 0 2 0.3 2.5 0.3 0.6 0.3 1.1 0.8 1.7 1.4 0.3 0.6 1.1 1.4 1.4 3.1h3.6v-8.9h-26.2v8.9h-0.2z"
            />
            <path
              class="sstLogoTextColor"
              d="m187.3 111.1c-0.3-0.3-0.3-0.8-0.3-2v-15.3h-9.5v3.9h0.6c0.8 0 1.4 0.3 1.4 0.3 0.3 0.3 0.3 1.1 0.3 2.2v8.9c0 0.8 0 1.4-0.3 1.7s-0.8 0.3-1.4 0.3h-0.6v3.6h11.5v-3.6h-0.3c-0.8 0.3-1.4 0.3-1.4 0z"
            />
            <rect
              class="sstLogoTextColor"
              x="146.3"
              y="102.7"
              width="9.5"
              height="5"
            />
            <path
              class="sstLogoTextColor"
              d="m143.5 99.9c0.6 0.6 1.1 0.8 2 0.8 0.6 0 1.1-0.3 1.4-0.6 0.8-0.6 1.4-1.4 1.4-2.8 0-1.1-0.3-2-1.1-2.8-0.8-1.1-2-1.4-3.3-1.4-0.8 0-1.4 0.3-2 0.3-0.6 0.3-1.4 0.8-2.2 1.7-1.1-0.8-2-1.4-2.8-1.7s-2-0.3-3.1-0.3c-2.5 0-4.5 0.6-6.1 1.7-2 1.4-2.8 3.6-2.8 6.7 0 1.1 0.3 2.2 0.6 3.1 0.3 0.8 0.8 2 2 3.1-1.1 0.6-2 1.4-2.5 2-0.6 0.6-0.6 1.4-0.6 2.5 0 0.8 0.3 1.7 0.6 2.5 0.3 0.6 1.1 1.4 2.2 2-1.1 0.3-2 0.8-2.5 1.4-0.6 0.6-0.8 1.4-0.8 2.2 0 2.8 3.3 4.5 9.8 4.5 4.5 0 7.5-0.6 9.2-1.4 0.8-0.6 1.7-1.4 2.2-2.2 0.6-0.8 0.8-2 0.8-3.1 0-2-0.6-3.3-1.7-4.5-1.1-0.8-2.8-1.4-5.3-1.4h-2.5-1.1c-2.5 0-4.2 0-4.7-0.3-0.8-0.3-1.1-0.6-1.1-1.4 0-0.3 0-0.8 0.3-1.1 1.7 0.6 2.8 0.8 3.9 0.8 2.5 0 4.5-0.6 6.1-2 0.8-0.6 1.7-1.7 2.2-2.8 0.6-1.1 0.8-2.5 0.8-3.9 0-0.8 0-1.7-0.3-2.5s-0.6-1.4-1.1-2.2c0.8-0.8 1.7-1.4 2.2-1.4 0.3 0 0.6 0.3 0.8 0.6-0.8 0.8-1.1 1.7-1.1 2.2-0.4 0.6-0.1 1.5 0.2 1.7zm-14.5 18.2c1.1-0.3 2.8-0.3 5.3-0.3 2.2 0 3.9 0 5 0.3s1.4 0.6 1.4 1.4c0 0.6 0 0.8-0.3 1.1s-0.8 0.6-1.7 0.6c-1.1 0.3-2.8 0.3-4.7 0.3-4.5 0-6.4-0.6-6.4-2 0-0.6 0.5-1.1 1.4-1.4zm5.6-12.3c-0.3 0.8-0.8 1.4-1.4 1.4-1.4 0-2-2-2-5.3 0-2 0.3-3.6 0.6-4.5 0.3-0.8 0.8-1.4 1.4-1.4 0.8 0 1.1 0.6 1.4 1.4s0.3 2.2 0.3 4.5c0.2 1.7-0.1 3.1-0.3 3.9z"
            />
            <path
              class="sstLogoTextColor"
              d="m120.6 111.1c-0.3-0.3-0.3-0.8-0.3-1.7v-8.1l-0.3-3.9c-0.3-0.8-0.6-1.7-1.1-2.2-1.1-1.1-2.8-2-5-2-1.4 0-2.8 0.3-3.9 0.8-0.8 0.6-2 1.4-3.1 2.8v-3.3h-8.7v3.6h0.3c0.6 0 1.1 0.3 1.4 0.3s0.3 0.8 0.3 1.7v9.8c0 0.8 0 1.4-0.3 1.7s-0.6 0.3-1.4 0.3v3.6h10.6v-3.6c-0.6 0-1.1-0.3-1.4-0.3-0.3-0.3-0.3-0.8-0.3-1.7v-7.3c0-1.7 0.3-2.8 0.8-3.6 0.6-0.8 1.1-1.1 2.2-1.1 1.7 0 2.5 1.4 2.5 3.9v8.1c0 0.8 0 1.4-0.3 1.7s-0.6 0.3-1.4 0.3v3.6h10.8v-3.6c-0.8 0.5-1.4 0.5-1.4 0.2z"
            />
            <path
              class="sstLogoTextColor"
              d="m73.4 94.4c-0.8-0.6-1.7-0.8-2.8-0.8-0.8 0-2 0.3-2.5 0.6-0.8 0.3-1.4 1.1-2.5 2.2v-2.2h-9.5v3.6h1.1c0.6 0 1.1 0.3 1.4 0.3 0.3 0.3 0.3 0.8 0.3 1.7v9.8c0 0.8 0 1.4-0.3 1.7s-0.6 0.3-1.4 0.3h-0.3v3.6h11.4v-3.6h-0.3c-0.8 0-1.1-0.3-1.4-0.3-0.3-0.3-0.3-0.8-0.3-1.7v-6.7c0-2 0.3-3.3 0.8-4.5 0.6-1.1 1.4-2 2.2-2 0.3 0 0.6 0 1.1 0.3-0.6 0.3-1.1 0.6-1.4 1.1-0.3 0.3-0.6 0.8-0.6 1.7 0 0.8 0.3 1.4 0.6 2 0.6 0.8 1.4 1.1 2.2 1.1 1.1 0 2-0.3 2.5-1.1 0.6-0.8 0.8-2 0.8-3.1 0.3-1.8-0.2-3.2-1.1-4z"
            />
            <path
              class="sstLogoTextColor"
              d="m207.7 96.3c-1.7-2-4.2-3.1-7.3-3.1-3.3 0-5.9 1.1-7.5 3.3-1.7 2-2.5 4.7-2.5 8.1 0 3.6 1.1 6.7 3.3 8.7 1.7 1.7 3.9 2.5 6.7 2.5 5 0 8.4-2.5 9.5-7.8h-4.7c-0.3 1.1-0.6 2-0.8 2.2-0.6 0.8-1.7 1.4-3.1 1.4s-2.5-0.6-3.1-1.7c-0.3-0.6-0.6-1.1-0.6-1.7-0.3-0.6-0.3-1.7-0.3-2.8h13.1v-0.8c-0.2-3.5-1-6.3-2.7-8.3zm-10.3 5.6c0-1.7 0.3-2.5 0.6-3.3 0.3-0.6 0.6-0.8 1.1-1.1 0.6-0.3 0.8-0.3 1.4-0.3 1.1 0 2 0.6 2.5 1.4 0.3 0.8 0.6 2 0.6 3.3h-6.2z"
            />
            <path
              class="sstLogoTextColor"
              d="m215.2 125.9c-2 0-3.9 1.7-3.9 3.6 0 2.2 1.7 3.9 3.9 3.9 2 0 3.9-1.7 3.9-3.9 0-1.9-1.6-3.6-3.9-3.6zm0 7c-1.7 0-3.1-1.4-3.1-3.3s1.4-3.1 3.1-3.1 3.1 1.4 3.1 3.1c0 1.9-1.4 3.3-3.1 3.3z"
            />
            <path
              class="sstLogoTextColor"
              d="m51.1 106.9c0 2 0 3.1-0.3 3.6 0 0.8-0.6 1.1-0.8 1.1-0.6 0-0.8-0.3-1.1-0.8-0.3-0.3-0.3-1.1-0.3-2.5v-11.2h4.4v-3.6h-4.5v-8.1h-4.5c-0.3 5-2.2 8.1-5 8.4v3.3h2.2v10c0 1.7 0 2.8 0.3 3.6 0 0.8 0.3 1.4 0.8 2.2 1.1 1.7 2.8 2.5 5.6 2.5 2.5 0 4.5-0.8 5.6-2.5 0.6-0.6 0.8-1.4 0.8-2 0.3-0.8 0.3-1.7 0.3-3.1v-2.8h-3.6c0.1 0 0.1 1.9 0.1 1.9z"
            />
            <path
              class="sstLogoTextColor"
              d="m182.8 92.1c1.1 0 2-0.3 2.5-1.1 0.8-0.8 1.1-1.7 1.1-2.5s-0.3-2-1.1-2.5c-0.8-0.8-1.7-1.1-2.5-1.1s-2 0.3-2.5 1.1c-0.8 0.8-1.1 1.7-1.1 2.8s0.3 2 1.1 2.8c0.6 0.2 1.4 0.5 2.5 0.5z"
            />
            <path
              class="sstLogoTextColor"
              d="m36 98.8c-0.8-0.8-2-1.4-3.3-2-1.4-0.6-3.6-1.1-6.7-2-1.4-0.3-2.2-0.8-2.8-1.1s-0.8-0.8-0.8-1.7c0-0.8 0.3-1.7 1.1-2.5s1.7-1.1 3.1-1.1c2 0 3.6 0.6 5 1.7 0.8 0.6 2.2 2.2 2.5 3.6h3.6v-8.1h-3.3l-0.8 1.1c-1.4-0.8-2.5-1.7-3.6-2s-2.5-0.6-4.5-0.6c-3.9 0-6.7 1.1-8.7 3.1-1.4 1.7-2.2 3.6-2.2 6.4 0 2.5 0.8 4.7 2.5 6.4 1.4 1.4 4.5 2.8 9.5 3.9 1.7 0.3 2.8 0.8 3.6 1.4 0.6 0.6 1.1 1.4 1.1 2.5s-0.3 2-1.1 2.5c-1.4 0.8-2.5 1.1-3.9 1.1-2 0-3.9-0.8-5.3-2.2-0.8-0.8-2.2-2.8-2.5-4.5h-3.6v10.6h3.3l1.1-2.2c1.1 0.8 2.2 1.4 3.3 1.7 2 0.6 3.9 0.8 5.3 0.8s2.5-0.3 4.2-0.6c1.7-0.6 3.1-1.1 4.2-2.2 2-2 2.8-4.2 2.8-7s-1.1-5.3-3.1-7z"
            />
            <path
              class="sstLogoTextColor"
              d="m217.2 128.7c0-0.8-0.6-1.4-1.4-1.4h-1.7v4.5h0.8v-2h0.8l1.1 2h0.8l-1.4-2c0.4 0 1-0.3 1-1.1zm-2.5 0.8v-1.4h0.8c0.6 0 0.8 0 0.8 0.6 0 0.8-0.6 0.8-1.1 0.8h-0.5z"
            />
            <path
              class="sstLogoTextColor"
              d="m86.5 93.2c-3.3 0-6.1 1.1-8.1 3.1s-3.1 4.7-3.1 8.1c0 3.6 1.1 6.4 3.1 8.4s4.7 3.1 8.1 3.1c3.3 0 6.1-1.1 8.1-3.1s3.1-4.7 3.1-8.1c0-3.3-1.1-6.4-3.1-8.4-1.9-2.2-4.7-3.1-8.1-3.1zm2.3 17.1c-0.3 1.1-1.1 1.7-2.2 1.7s-2-0.6-2.2-1.7c-0.3-1.1-0.6-3.1-0.6-5.9s0.3-4.7 0.6-5.9c0.3-1.1 1.1-1.7 2.2-1.7s2 0.6 2.2 1.7c0.6 1.1 0.6 3.1 0.6 5.9 0.2 2.8-0.1 4.8-0.6 5.9z"
            />

            <polygon
              class="sstLogoTextColor"
              points="74.8 35.5 74.5 35.5 69.5 15.6 58.1 15.6 58.1 45.5 65.3 45.5 65.3 22.9 65.3 22.9 71.7 45.5 77.6 45.5 83.7 22.9 84 22.9 84 45.5 91.3 45.5 91.3 15.6 79.8 15.6"
            />
            <path
              class="sstLogoTextColor"
              d="m32.9 27.4c-4.5-1.1-8.7-1.7-8.7-3.9 0-2 2-2.5 3.6-2.5 2.5 0 5 0.8 4.7 3.6h7.8c0-6.7-6.1-9.5-12-9.5-5.6 0-12.3 2.5-12.3 9.2 0 5.6 4.5 7.5 8.7 8.7 4.5 1.1 8.7 1.7 8.7 4.5 0 2.2-2.5 3.1-4.7 3.1-3.3 0-5.6-1.1-5.6-4.7h-7.5c0 7.5 6.1 10.6 12.8 10.6s12.8-2.5 12.8-10c0.4-5.8-4.1-7.7-8.3-9.1z"
            />
            <rect
              class="sstLogoTextColor"
              x="45.2"
              y="15.6"
              width="7.8"
              height="29.9"
            />
            <polygon
              class="sstLogoTextColor"
              points="201.8 15.6 201.8 34.1 201.8 34.1 191.5 15.6 183.4 15.6 183.4 45.5 190.7 45.5 190.7 26.8 190.9 26.8 201.3 45.5 209.1 45.5 209.1 15.6"
            />
            <path
              class="sstLogoTextColor"
              d="m139.6 27.4c-4.5-1.1-8.7-1.7-8.7-3.9 0-2 2.2-2.5 3.9-2.5 2.5 0 5 0.8 4.7 3.6h7.8c0-6.7-6.1-9.5-12-9.5-5.6 0-12.3 2.5-12.3 9.2 0 5.6 4.5 7.5 8.7 8.7 4.5 1.1 8.7 1.7 8.7 4.5 0 2.2-2.5 3.1-4.7 3.1-3.3 0-5.6-1.1-5.6-4.7h-7.8c0 7.5 6.1 10.6 12.8 10.6s13.1-2.5 12.8-10c0.3-5.8-4.1-7.7-8.3-9.1z"
            />
            <path
              class="sstLogoTextColor"
              d="m110.3 15.6h-14.3v29.9h7.8v-10h6.4c6.7 0 10.9-2.8 10.9-10.3-0.2-7.1-5.5-9.6-10.8-9.6zm-1.4 13.7h-5.3v-7.5h5.3c2.5 0 4.2 1.1 4.2 3.9s-1.7 3.6-4.2 3.6z"
            />
            <path
              class="sstLogoTextColor"
              d="m165.5 15.1c-9.5 0-14.8 7-14.8 15.6s5.3 15.6 14.8 15.6 14.8-7 14.8-15.6c-0.2-8.9-5.5-15.6-14.8-15.6zm0 24.3c-5 0-7-4.5-7-8.9s2-8.9 7-8.9 7 4.5 7 8.9c-0.3 4.4-1.9 8.9-7 8.9z"
            />
          </svg>
        </a>
      </div>
    `;
  }
  /**
   * Render Searchbox
   * @returns Studs Input Search
   */
  private get renderSearchInput() {
    return html`
      <form
        name="search_form"
        method="get"
        action="/search/"
        @submit=${this.onSearchSubmit}
      >
        <studs-input
          name="q"
          id="search"
          type="search"
          inputsize="small"
        ></studs-input>
        <label for="search">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="icon-search"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.7873 9.37369C10.9804 9.45181 11.171 9.57386 11.3591 9.73985L14.9527 12.757C15.2497 13.0206 15.4081 13.3355 15.4279 13.7017C15.4477 14.0679 15.3289 14.3828 15.0715 14.6464C14.8042 14.9003 14.485 15.0174 14.1137 14.9979C13.7425 14.9784 13.4232 14.8222 13.1559 14.5292L10.0012 10.8732C9.88079 10.724 9.78892 10.5732 9.72556 10.4209C9.64636 10.2305 9.61171 10.0572 9.62161 9.90096C9.12661 10.3208 8.56231 10.6504 7.92871 10.8896C7.29511 11.1288 6.62687 11.2484 5.92397 11.2484C5.13197 11.2484 4.39443 11.102 3.71133 10.809C3.01833 10.5161 2.41196 10.1133 1.89221 9.60071C1.37246 9.08809 0.964087 8.49003 0.667087 7.80653C0.370086 7.13279 0.221588 6.40536 0.221588 5.62422C0.221588 4.84307 0.370086 4.11564 0.667087 3.4419C0.964087 2.7584 1.37246 2.16035 1.89221 1.64772C2.41196 1.13509 3.01833 0.732321 3.71133 0.439392C4.39443 0.146462 5.13197 0 5.92397 0C6.71597 0 7.45351 0.146462 8.13661 0.439392C8.82961 0.732321 9.43598 1.13509 9.95573 1.64772C10.4755 2.16035 10.8839 2.7584 11.1809 3.4419C11.4779 4.11564 11.6264 4.84307 11.6264 5.62422C11.6264 6.31748 11.5051 6.97656 11.2625 7.60148C11.02 8.22639 10.6859 8.78295 10.2602 9.27117C10.4186 9.2614 10.5943 9.29558 10.7873 9.37369ZM4.61128 9.25095C5.07658 9.44623 5.57158 9.54388 6.09628 9.54388C6.62098 9.54388 7.11597 9.44623 7.58127 9.25095C8.03667 9.05566 8.43762 8.78715 8.78412 8.4454C9.13062 8.10365 9.40287 7.7082 9.60087 7.25904C9.79887 6.80012 9.89786 6.31191 9.89786 5.7944C9.89786 5.27689 9.79887 4.78868 9.60087 4.32976C9.40287 3.8806 9.13062 3.48515 8.78412 3.1434C8.43762 2.80165 8.03667 2.53314 7.58127 2.33785C7.11597 2.14256 6.62098 2.04492 6.09628 2.04492C5.57158 2.04492 5.07658 2.14256 4.61128 2.33785C4.15588 2.53314 3.75494 2.80165 3.40844 3.1434C3.06193 3.48515 2.78969 3.8806 2.59169 4.32976C2.39369 4.78868 2.29469 5.27689 2.29469 5.7944C2.29469 6.31191 2.39369 6.80012 2.59169 7.25904C2.78969 7.7082 3.06193 8.10365 3.40844 8.4454C3.75494 8.78715 4.15588 9.05566 4.61128 9.25095Z"
            />
          </svg>
        </label>
      </form>
    `;
  }
  /**
   * Render Dealer Locator Button
   * @returns Dealer Location Button with Data from Bloomreach
   */
  private get renderDealerLocator() {
    if (this._page) {
      const { dealerLocatorTitle, dealerLocatorUrl: dealerLocatorUrlRef } =
        this._doc.getData();
      return html`<a
        href=${getUrlFromLinkCompound(dealerLocatorUrlRef, this._page).link}
        @click=${() => {
          analyticsNavigationAction(dealerLocatorTitle, 'header');
        }}
        class="locator"
        >${dealerLocatorTitle}</a
      >`;
    }
  }
  /**
   * Render Region Selector with Modal
   * @returns Region Selector Button + Modal
   */
  private get renderRegionSelector() {
    if (this._page) {
      const { regionText } = this._doc.getData();
      // Get Region Selector Data
      // @ts-ignore
      const { document: regionSelectorRef } = this._page
        ?.getComponent('header')
        ?.getComponent('regionSelector')
        ?.getModels();
      const regionSelectorDocument =
        regionSelectorRef && this._page.getContent(regionSelectorRef);
      const { title, items } = regionSelectorDocument?.getData() ?? {};
      if (items)
        return html`
          <studs-modal>
            <studs-button
              class="location regionSelector"
              slot="toggle"
              buttontype="link"
              size="small"
              icon='<svg
                class="directionIcon"
                width="0.75rem"
                fill="var(--text-color)"
                viewBox="0 0 12 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m5.9999 7.9992c0.4125 0 0.76575-0.14701 1.0598-0.44101 0.2935-0.2935 0.44025-0.6465 0.44025-1.059 0-0.4125-0.14675-0.76575-0.44025-1.0598-0.294-0.29349-0.64725-0.44024-1.0598-0.44024s-0.7655 0.14675-1.059 0.44024c-0.294 0.29401-0.441 0.64726-0.441 1.0598 0 0.41249 0.147 0.76549 0.441 1.059 0.2935 0.294 0.6465 0.44101 1.059 0.44101zm0 5.5124c1.525-1.4 2.6562-2.672 3.3938-3.816 0.73746-1.1435 1.1063-2.159 1.1063-3.0465 0-1.3625-0.4345-2.4782-1.3035-3.3472-0.8685-0.8685-1.934-1.3028-3.1965-1.3028s-2.3282 0.43425-3.1972 1.3028c-0.8685 0.869-1.3028 1.9847-1.3028 3.3472 0 0.8875 0.36875 1.903 1.1062 3.0465 0.7375 1.144 1.8688 2.416 3.3938 3.816zm0 1.9875c-2.0125-1.7125-3.5155-3.3032-4.509-4.7722-0.994-1.4685-1.491-2.8278-1.491-4.0778 0-1.875 0.60325-3.3687 1.8097-4.4812 1.206-1.1125 2.6028-1.6688 4.1902-1.6688s2.9842 0.55625 4.1902 1.6688c1.2065 1.1125 1.8098 2.6062 1.8098 4.4812 0 1.25-0.4968 2.6093-1.4903 4.0778-0.99396 1.469-2.4972 3.0597-4.5097 4.7722z"
                />
              </svg>'
            >
              <span>${regionText || 'Region Selector'}</span>
            </studs-button>
            ${title ? html`<h4 slot="header">${title}</h4>` : nothing}
            <div class="regionsWrapper">
              ${map(items, (region) => {
                const { title, items } = region;
                return html`
                  <div class="regionsItem">
                    <h5>${title}</h5>
                    <ul class="regionsList">
                      ${map(items, (item) => {
                        return html`
                          <li>
                            <a
                              href="${getUrlFromLinkCompound(
                                item.ctaLink,
                                this._page
                              ).link}"
                              target="${ifDefined(
                                item.ctaNewWindow ? '_blank' : ''
                              )}"
                              >${item.ctaText}</a
                            >
                          </li>
                        `;
                      })}
                    </ul>
                  </div>
                `;
              })}
            </div>
          </studs-modal>
        `;
    }
  }
  /**
   *
   * @param item
   * @returns
   */
  private renderNavItem(item: Menu) {
    const analyticsParentName = `${item.name} |`;
    const hasChildren = item.children.length > 0;

    return html`
      <li
        class=${classMap({
          navCategory: true,
          '-title': true,
          active: this._activeMenu === item.name,
        })}
        @click=${() => this.onNavItemClick(item)}
      >
        <a
          href=${hasChildren ? '#' : item.link.href}
          @click=${hasChildren
            ? () => analyticsNavigationAction(item.name, 'header')
            : nothing}
          class=${classMap({
            'toggle-link': hasChildren,
            'direct-link': !hasChildren,
          })}
          >${item.name}
        </a>
        ${hasChildren
          ? html`
              <div class="navCategory -wrapper">
                <div class="navCategory -header">${item.name}</div>
                <ul class="navCategory -sections">
                  ${map(item.children, (child) => {
                    const analyticsChildName = `${analyticsParentName} ${child.name} |`;
                    const childHasChildren = child.children.length > 0;
                    return html`
                      <li class="navSection -wrapper">
                        <a
                          class="navSection -header"
                          href=${child.link ? child.link.href : nothing}
                          @click=${() =>
                            analyticsNavigationAction(
                              `${analyticsParentName} ${child.name}`,
                              'header'
                            )}
                          >${child.name}
                        </a>
                        ${childHasChildren
                          ? html`
                              <ul class="navSection -links">
                                ${map(child.children, (link) => {
                                  return html`
                                    <li class="pageLink">
                                      <a
                                        href=${link.link
                                          ? link.link.href
                                          : nothing}
                                        @click=${() =>
                                          analyticsNavigationAction(
                                            `${analyticsChildName} ${link.name}`,
                                            'header'
                                          )}
                                        >${link.name}</a
                                      >
                                    </li>
                                  `;
                                })}
                              </ul>
                            `
                          : nothing}
                      </li>
                    `;
                  })}
                </ul>
              </div>
            `
          : nothing}
      </li>
    `;
  }
  /** Render MenuItems
   * @returns MenuItems with Data from Bloomreach
   */
  private get renderMenuItems() {
    if (this._page) {
      // @ts-ignore
      const { menu: menuRef } = this._page
        ?.getComponent('header', 'menu')
        ?.getModels();
      // Receive Content from Menu
      const menu = this._page.getContent(menuRef);
      // @ts-ignore
      const _menuItems = menu.getItems();
      const menuItems = this.generateMenuCollection(_menuItems);
      return html`<ul
        id="topNav"
        class=${classMap({
          active: this._open,
          mobile: isTablet() && this._open,
        })}
      >
        ${map(menuItems, (item) => this.renderNavItem(item))}
        ${isTablet()
          ? html`<div class="navCategory -title -locator">
              ${this.renderDealerLocator}
            </div>`
          : nothing}
      </ul>`;
    }
  }

  render() {
    return html`
      ${this.renderGoogleTag}
      <header
        id="siteHeader"
        class=${classMap({
          '-big': this._big,
        })}
      >
        <nav id="mainNav">
          ${this.renderLogo}
          <div class="siteSearch">
            ${this.renderSearchInput} ${this.renderDealerLocator}
            ${this.renderRegionSelector}
          </div>
          <studs-button
            id="returnToMenu"
            class=${classMap({
              textButton: true,
              active: this._activeMenu || false,
            })}
            buttontype="link"
            @click=${this.onReturnClick}
          >
            <span>Main Menu</span>
          </studs-button>
          <studs-button
            id="mobileToggle"
            @click=${this.onMobileNavToggle}
            class=${classMap({
              textButton: true,
              active: this._open,
            })}
            size="large"
            buttontype="link"
          >
            <div class="menuIcon"></div>
            <span>Menu</span>
          </studs-button>

          ${this.renderMenuItems}
        </nav>
      </header>
    `;
  }

  private onNavItemClick(item: Menu) {
    this._activeMenu = item.name;
  }
  /**
   * Return to Main Menu
   */
  private onReturnClick() {
    // this._open = false;
    this._activeMenu = undefined;
    this.requestUpdate();
  }
  /**
   *
   */
  public onMobileNavToggle() {
    this._activeMenu = undefined;
    this._open = !this._open;
    this.requestUpdate();
    if (this._open && isTablet()) {
      // on Open, prevent scroll on body
      document.body.style.overflow = 'hidden';
    } else {
      // on Close, restore scroll on body
      document.body.style.overflow = 'auto';
    }
  }

  /**
   *
   */
  private onWindowScroll = () => {
    let posY = window.scrollY;
    clearTimeout(this._scrollTimer);
    this._scrollTimer = setTimeout(() => {
      // check if page has scrolled more than 50px.
      // if so, remove .-big class so header is smaller
      if (this.header.offsetWidth > this._menuBreakpoint + 1) {
        if (posY < 50) {
          this._big = true;
        } else {
          this._big = false;
        }
      } else {
        this._big = true;
      }
    }, 10);
  };
  private onWindowResize = () => {
    const resizeEvents = () => {
      this._open = false;
      this._activeMenu = undefined;
      this._big = true;
      this.header.style.removeProperty('--tr-s');
      this.header.style.removeProperty('--tr-m');
      this.header.style.removeProperty('--tr-l');
    };

    if (!isMobileDevice()) {
      clearTimeout(this._resizeTimer);
      this.header.style.setProperty('--tr-s', '0');
      this.header.style.setProperty('--tr-m', '0');
      this.header.style.setProperty('--tr-l', '0');
      this._resizeTimer = setTimeout(resizeEvents, 50);
    }
  };

  /**
   * On Search Submit
   * @param e - Custom Event for Form submission
   */
  public onSearchSubmit(e: CustomEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get('q');
    const fallbackQuery = formData.get('search');
    analyticsSearch(searchQuery || fallbackQuery, 'onsite');

    (e.target as HTMLFormElement).submit();
  }
}
