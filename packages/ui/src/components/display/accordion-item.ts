import style from '@studs/styles/components/accordion.scss?inline';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseAccordionProps } from './accordion';
import { classMap } from 'lit/directives/class-map.js';

export interface AccordionItemProps extends BaseAccordionProps {
  open: boolean;
}
@customElement('studs-accordion-item')
export class StudsAccordionItem extends LitElement {
  @property({ type: Boolean, reflect: true }) open: AccordionItemProps['open'] =
    false;
  @property({ type: Boolean, reflect: true })
  disabled: AccordionItemProps['disabled'] = false;
  @property({ type: String }) size: AccordionItemProps['size'] = 'medium';
  @property({ type: String }) variant: AccordionItemProps['variant'] =
    'borderless';
  @property({ type: String }) direction: AccordionItemProps['direction'] =
    'end';

  static styles = unsafeCSS(style);

  render() {
    return html`<div
      class=${classMap({
        'accordion -panel': true,
        [`-${this.size}`]: true,
        [`-${this.variant}`]: true,
        [`-${this.direction}`]: true,
      })}
      ?disabled=${this.disabled}
      aria-expanded=${this.open}
    >
      <header class="accordion -header" @click=${this.onToggle}>
        <slot name="toggle">Accordion Header</slot>
        <studs-button
          size="medium"
          button-type="close"
          icon="chevron_right"
          ?disabled=${this.disabled}
        ></studs-button>
      </header>
      <main aria-hidden=${!this.open}>
        <div class="content"><slot></slot></div>
      </main>
    </div>`;
  }

  private onToggle() {
    if (!this.disabled) this.open = !this.open;
  }
  public show() {
    if (!this.disabled) this.open = true;
  }
  public hide() {
    if (!this.disabled) this.open = false;
  }
}
