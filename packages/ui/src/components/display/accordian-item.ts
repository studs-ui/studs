import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import style from '@studs/styles/components/accordian.scss?inline';

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
          button-type="close"
          icon="expand_more"
          @click=${this.onToggle}
        ></studs-button>
      </header>
      <main>
        <div class="content"><slot></slot></div>
      </main>
    </div>`;
  }

  private onToggle() {
    this.open = !this.open;
  }
  public show() {
    this.open = true;
  }
  public hide() {
    this.open = false;
  }
}
