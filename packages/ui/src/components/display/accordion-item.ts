import style from '@studs/styles/components/accordion.scss?inline';
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
@customElement('studs-accordion-item')
export class StudsAccordionItem extends LitElement {
  @property({ type: Boolean, reflect: true }) open: boolean =
    false;
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: String }) variant: 'border' | 'borderless' =
    'borderless';
  @property({ type: String }) direction: 'start' | 'end' =
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
          button-type="tertiary"
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
