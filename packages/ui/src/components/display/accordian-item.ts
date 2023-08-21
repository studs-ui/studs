import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import style from '../../styles/lib/components/accordian.scss?inline';

export interface AccordionItemProps {
  open: boolean;
}
@customElement('studs-accordian-item')
export class StudsAccordianItem extends LitElement {
  @property({ type: Boolean, reflect: true }) open: AccordionItemProps['open'] =
    false;

  static styles = unsafeCSS(style);
  render() {
    const classes = {
      accordian: true,
      '-panel': true,
      '-open': this.open,
    };
    return html`<div class=${classMap(classes)} aria-hidden=${!this.open}>
      <header class="accordian -header">
        <slot name="toggle">Accordian Header</slot>
        <studs-button
          size="medium"
          buttontype="icon"
          icon='<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M11 7.33325L5.5 12.8333L6.7925 14.1258L11 9.92742L15.2075 14.1258L16.5 12.8333L11 7.33325Z" fill="var(--cta)"/>
</svg>'
          @click=${this.onToggle}
        ></studs-button>
      </header>
      <main>
        <div class="content"><slot></slot></div>
      </main>
    </div>`;
  }

  onToggle() {
    this.open = !this.open;
  }
}
