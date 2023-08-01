import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import style from "styles/accordian.scss?inline";

export interface AccordionProps {}

@customElement("studs-accordian")
export class StudsAccordian extends LitElement {
  static styles = unsafeCSS(style);
  render() {
    return html`<div class="accordian"><slot></slot></div>`;
  }
}
