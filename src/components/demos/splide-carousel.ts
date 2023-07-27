import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import style from "../../styles/lib/components/carousel.scss?inline";

@customElement("studs-splide-carousel")
export class StudsSplideCarousel extends LitElement {
  @property({ type: String }) class: string = "";
  //   Button Properties
  @property({ type: String }) icon: string =
    '<svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  @property({ type: String }) prevIcon: string =
    '<svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  // Carousel Properties
  @property({ type: Boolean }) isDecoration: boolean = false;
  @property({ type: String }) type: "slide" | "loop" | "fade" = "loop";
  @property({ type: Boolean }) rewind: boolean = false;
  @property({ type: Number }) perPage: number = 3;
  @property({ type: Number }) perMove: number = 1;
  @property({ type: Boolean }) pagination: boolean = false;
  @property({ type: Boolean }) autoplay: boolean = false;
  @property({ type: Number }) interval: number = 5000;
  @property({ type: String }) lazyLoad: boolean | "nearby" | "sequential" =
    false;
  // Requires imgs to have data-splide-lazy="path-to-the-image" props
  @property({ type: Number }) initialSlide: number = 0;
  @property({ type: Array }) slides = [];
  // States
  @state() private _splide: Splide | null = null;

  static styles = [unsafeCSS(style)];

  get _interval() {
    if (this.interval < 1000 && this.autoplay) {
      return 1000;
    }
    return this.interval;
  }

  firstUpdated() {
    if (this.slides) {
      // @ts-ignore
      const splide = new Splide(this.querySelector(".splide"), {
        type: this.type,
        breakpoints: {
          1024: {
            gap: "2rem",
            perPage: this.perPage > 3 ? 3 : this.perPage,
          },
          767: {
            gap: "2rem",
            perPage: this.perPage > 2 ? 2 : this.perPage,
          },
          551: {
            perPage: 1,
          },
        },
        perPage: this.perPage,
        rewind: this.rewind,
        start: this.initialSlide,
        perMove: this.perMove,
        pagination: this.pagination,
        autoplay: this.autoplay,
        interval: this._interval,
        lazyLoad: this.lazyLoad,
        arrowPath: "M9 6l6 6-6 6",
        gap: "2rem",
        width: "90%",
      }).mount();

      if (splide) {
        this._splide = splide;
      }
    }
  }

  updated(changedProperties: Map<string, any>) {
    if (this._splide && changedProperties)
      this._splide.options = {
        perPage: this.perPage,
        rewind: this.rewind,
        start: this.initialSlide,
        perMove: this.perMove,
        pagination: this.pagination,
        autoplay: this.autoplay,
        interval: this._interval,
        lazyLoad: this.lazyLoad,
      };
  }

  render() {
    const classes = {
      splide: true,
    };
    return html`
      <section
        class=${classMap(classes)}
        ${this.isDecoration ? `role="group"` : ""}
      >
        <div class="splide__arrows">
          <studs-button
            buttonType="primary"
            icon=${this.icon}
            class="splide__arrow splide__arrow--prev"
          ></studs-button>
        </div>
        <div class="splide__track">
          <ul class="splide__list">
            ${map(this.slides, (slide: any, index) => {
              return html` <li class="splide__slide">
                <div id=${slide.id || `slide-${index}`}>
                  <img
                    src=${slide.image}
                    alt=${slide.alt || "image"}
                    class="image"
                  />
                </div>
              </li>`;
            })}
          </ul>
        </div>
        <div class="splide__arrows">
          <studs-button
            buttonType="primary"
            icon=${this.icon}
            class="splide__arrow splide__arrow--next"
          ></studs-button>
        </div>
      </section>
    `;
  }
}
