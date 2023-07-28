import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import style from "styles/card.scss?inline";

export interface CardProps {
  title: string;
  imageUrl: string;
  altText: string;
}

@customElement("studs-card")
export class StudsCard extends LitElement {
  static styles = unsafeCSS(style);

  @property({ type: String }) title: CardProps["title"] = "";
  @property({ type: String }) imageUrl: CardProps["imageUrl"] = "";
  @property({ type: String }) altText: CardProps["altText"] = "";
  @property({ type: String }) customClass: string = "";

  render() {
    const classes = {
      card: true,
      [this.customClass]: true,
    };

    return html`
      <div class="${classMap(classes)}">
        ${this.imageUrl
          ? html`
              <div class="cardMedia">
                <img src="${this.imageUrl}" alt="${this.altText}" />
              </div>
            `
          : ""}
        ${this.title
          ? html`
              <header>
                <h2>${this.title}</h2>
              </header>
            `
          : ""}
        <main>
          <slot name="main"></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    `;
  }
}
