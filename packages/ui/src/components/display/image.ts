import { LitElement, html, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import style from '@studs/styles/components/image.scss?inline';

export interface StudsImageProps {
  placeholder: boolean;
  src?: string;
  alt?: string;
  small?: string;
  medium?: string;
  large?: string;
}

@customElement('studs-image')
export class StudsImage extends LitElement implements StudsImageProps {
  @property({ type: Boolean }) placeholder: StudsImageProps['placeholder'] =
    true;
  @property({ type: String }) src: StudsImageProps['src'];
  @property({ type: String }) small: StudsImageProps['small'];
  @property({ type: String }) medium: StudsImageProps['medium'];
  @property({ type: String }) large: StudsImageProps['large'];
  @property({ type: String }) alt: StudsImageProps['alt'];

  static styles = unsafeCSS(style);

  get getPlaceholder() {
    if (this.placeholder && !this.src) {
      return html`
        <div class="placeholder">
          <?xml version="1.0" encoding="UTF-8"?>
          <svg
            width="100%"
            height="100%"
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
    const isSrcSet = this.small || this.medium || this.large;
    if (isSrcSet) {
      return html`
        ${this.small
          ? html` <source srcset=${this.small} media="(max-width: 600px)" /> `
          : nothing}
        ${this.medium
          ? html` <source srcset=${this.medium} media="(min-width: 600px)" /> `
          : nothing}
        ${this.large
          ? html` <source srcset=${this.large} media="(min-width: 905px)" /> `
          : nothing}
        <img
          src="${this.medium || this.large || this.small}"
          alt=${ifDefined(this.alt)}
        />
      `;
    } else if (this.src) {
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
