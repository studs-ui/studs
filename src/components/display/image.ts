import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { map } from "lit/directives/map.js";
import style from "styles/image.scss?inline";

interface Image {
  srcSet: string;
  type?: string;
  media?: string;
  sizes?: string;
  height?: string;
  width?: string;
}

export interface StudsImageProps {
  placeholder: boolean;
  src?: string;
  srcSet?: Image[];
  alt?: string;
}

@customElement("studs-image")
export class StudsImage extends LitElement {
  @property({ type: Boolean }) placeholder: StudsImageProps["placeholder"] =
    true;
  @property({ type: String }) src: StudsImageProps["src"];
  @property({ type: Array }) srcSet: StudsImageProps["srcSet"];
  @property({ type: String }) alt: StudsImageProps["alt"];
  static styles = unsafeCSS(style);

  getImageType(image: string) {
    const imageType = image.split(".").pop();
    if (imageType === "png") {
      return "image/png";
    } else if (imageType === "jpg" || imageType === "jpeg") {
      return "image/jpeg";
    } else if (imageType === "webp") {
      return "image/webp";
    } else if (imageType === "svg") {
      return "image/svg+xml";
    } else {
      return "";
    }
  }

  get getPlaceholder() {
    if (this.placeholder && !this.src) {
      return html`
        <div class="placeholder">
          <?xml version="1.0" encoding="UTF-8"?>
          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="var(--disabled)"
          >
            <path
              d="M21 3.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z"
              stroke="var(--disabled)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 16l7-3 11 5M16 10a2 2 0 110-4 2 2 0 010 4z"
              stroke="var(--disabled)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      `;
    }
  }

  get renderImages() {
    if (this.srcSet) {
      return html`${map(this.srcSet, (image: Image) => {
          return html`<source
            srcset=${image.srcSet}
            type=${ifDefined(image.type)}
            media=${ifDefined(image.media)}
            sizes=${ifDefined(image.sizes)}
            height=${ifDefined(image.height)}
            width=${ifDefined(image.width)}
          />`;
        })}
        <img src="${this.srcSet[0].srcSet}" alt=${ifDefined(this.alt)} />; `;
    }
    if (this.src) {
      return html` <source srcset=${this.src} />
        <img src="${this.src}" alt=${ifDefined(this.alt)} />`;
    } else {
      return this.getPlaceholder;
    }
  }

  render() {
    return html`<picture>${this.renderImages}</picture>`;
  }
}
