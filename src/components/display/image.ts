import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { map } from "lit/directives/map.js";
import style from "styles/image.scss";

export interface StudsImageProps {
  src: string | string[];
  alt?: string;
}

@customElement("studs-image")
export class StudsImage extends LitElement {
  @property({ type: String || Array }) src: StudsImageProps["src"] = "";
  @property({ type: String }) alt: StudsImageProps["alt"];
  static style = unsafeCSS(style);

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

  renderImages() {
    const type = typeof this.src;
    if (type === "string") {
      // @ts-ignore
      const imageType = this.getImageType(this.src);
      return html` <source srcset=${this.src} type=${imageType} />
        <img src="${this.src}" alt=${ifDefined(this.alt)} />`;
    } else if (type === "object") {
      return html` ${map(this.src, (image) => {
          const imageType = this.getImageType(image);
          return html`<source srcset=${image} type=${imageType} />`;
        })}
        <img src="${this.src[0]}" alt=${ifDefined(this.alt)} />`;
    }
  }

  render() {
    return html`<picture>${this.renderImages()}</picture>`;
  }
}
