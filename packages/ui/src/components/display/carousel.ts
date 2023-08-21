import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { map } from 'lit/directives/map.js';
import style from '../../styles/lib/components/carousel.scss?inline';

export interface CarouselProps {
  nextIcon: string;
  prevIcon: string;
  perPage: number;
  initialSlide: number;
  slides: any[];
}

@customElement('studs-carousel')
export class StudsCarousel extends LitElement {
  //   Button Properties
  @property({ type: String }) nextIcon: CarouselProps['nextIcon'] =
    '<svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  @property({ type: String }) prevIcon: CarouselProps['prevIcon'] =
    '<svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  // Carousel Properties
  @property({ type: Number }) perPage: CarouselProps['perPage'] = 3;
  @property({ type: Number }) initialSlide: CarouselProps['initialSlide'] = 0;
  @property({ type: Array }) slides: CarouselProps['slides'] = [];

  @state() private _currentSlide: number = this.initialSlide;
  @state() protected _direction: string = '';
  @state() protected _shouldMove: boolean = false;

  static styles = unsafeCSS(style);

  /**
   * Functions
   */
  private setCurrentSlide(index: number) {
    this._shouldMove = true;
    if (index < this._currentSlide) this._direction = 'prev';
    if (index > this._currentSlide) this._direction = 'next';
    if (index !== this._currentSlide) this._currentSlide = index;
    if (index === this.slides.length) this._currentSlide = 0;
  }

  private calculateOrder(
    index: number,
    currentActiveIndex: number,
    totalItems: number
  ) {
    const order = index - currentActiveIndex;
    if (order < 0) return totalItems;
    return order;
  }

  /**
   * Render Slides
   * @param slides
   * @returns
   */
  protected renderContainer(slides: any) {
    if (slides.length > 0) {
      return html` <style>
          .slide {
            flex: 0 0 calc(100% / ${this.perPage});
          }
        </style>
        <div class="slideContainer">
          ${map(slides, (item: any, index: number) => {
            const currentItem = index === this._currentSlide;
            const classes = {
              slide: true,
              '-active': currentItem,
              '-side': !currentItem,
            };

            const order = this.calculateOrder(
              index,
              this._currentSlide,
              slides.length
            );

            return html`
              <div
                class=${classMap(classes)}
                id=${item.id || `slide-${index}`}
                @click=${() => this.setCurrentSlide(index)}
                style=${styleMap({
                  order: order,
                })}
              >
                <img
                  src=${item.image}
                  alt=${item.alt || 'image'}
                  class="image"
                />
              </div>
            `;
          })}
        </div>`;
    }
  }

  render() {
    const slideItems = this.slides;
    const classes = {
      carousel: true,
    };

    return html`
      <div class=${classMap(classes)}>
        <div class="carouselPrevBtn">
          <studs-button
            buttonType="primary"
            icon=${this.prevIcon}
            btnClasses="prevBtn"
            @click=${() => this.setCurrentSlide(this._currentSlide - 1)}
          ></studs-button>
        </div>
        ${this.renderContainer(slideItems)}
        <div class="carouselNextBtn">
          <studs-button
            buttonType="primary"
            icon=${this.nextIcon}
            btnClasses="nextBtn"
            @click=${() => this.setCurrentSlide(this._currentSlide + 1)}
          ></studs-button>
        </div>
      </div>
    `;
  }
}
