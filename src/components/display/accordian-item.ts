import { LitElement, html, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import style from "styles/accordian.scss?inline";

@customElement("studs-accordian-item")
export class StudsAccordianItem extends LitElement {
  @state() _open: boolean = false;

  static styles = unsafeCSS(style);
  render() {
    const classes = {
      accordian: true,
      "-panel": true,
      "-open": this._open,
    };
    return html`<div class=${classMap(classes)} aria-hidden=${!this._open}>
      <header class="accordian -header">
        <slot name="toggle">Accordian Header</slot>
        <studs-button
          size="medium"
          buttontype="icon"
          icon='<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M11 7.33325L5.5 12.8333L6.7925 14.1258L11 9.92742L15.2075 14.1258L16.5 12.8333L11 7.33325Z" fill="#DF4907"/>
</svg>'
          @click=${this.onToggle}
        ></studs-button>
      </header>
      <main><slot></slot></main>
    </div>`;
  }

  onToggle() {
    this._open = !this._open;
  }
}
