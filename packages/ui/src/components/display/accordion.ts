import style from '@studs/styles/components/accordion.scss?inline';
import inputStyle from '@studs/styles/components/inputs.scss?inline';
import { LitElement, PropertyValueMap, html, nothing, unsafeCSS } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { StudsAccordionItem } from './accordion-item';


@customElement('studs-accordion')
export class StudsAccordion extends LitElement {
  @property({ type: Boolean, attribute: 'enable-header' })
  enableHeader: boolean = false;
  @property({ type: Boolean, attribute: 'enable-search' })
  enableSearch: boolean = false;
  @property({ type: String, reflect: true }) size: 'small' | 'medium' | 'large' =
    'medium';
  @property({ type: String, reflect: true })
  variant: 'border' | 'borderless' = 'borderless';
  @property({ type: String, reflect: true })
  direction: 'start' | 'end' = 'end';
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;
  @property({type: Boolean, attribute: 'default-open', reflect: true}) defaultOpen: boolean = false;

  @queryAssignedElements({ selector: 'studs-accordion-item' })
  items?: StudsAccordionItem[];
  @state() _items: HTMLElement[] = [];
  static styles = [unsafeCSS(style), unsafeCSS(inputStyle)];

  renderHeader() {
    if (this.enableHeader) {
      return html`<header>
        ${this.enableSearch
          ? html`<div class="accordion -search">
              <studs-input
                type="search"
                @change=${this.onSearch}
                ?disabled=${this.disabled}
              ></studs-input>
            </div>`
          : nothing}
        <div class="accordion -actions">
          <studs-button
            button-type="tertiary"
            @click=${this.onExpandAll}
            ?disabled=${this.disabled}
            icon="add_circle"
            icon-position="end"
            >Expand All</studs-button
          >
          <studs-button
            button-type="tertiary"
            @click=${this.onCollapseAll}
            ?disabled=${this.disabled}
            icon-position="end"
            icon="do_not_disturb_on"
            >Collapse All</studs-button
          >
        </div>
      </header>`;
    }
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
      if(this.defaultOpen) {
        this.onExpandAll();
      }
  }

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.updated(_changedProperties);
    if (this.items) {
      if (_changedProperties.has('disabled'))
        this.items.forEach((item) => {
          (item as StudsAccordionItem).disabled = this.disabled;
        });
      if (_changedProperties.has('size'))
        this.items.forEach((item) => {
          (item as StudsAccordionItem).size = this.size;
        });
      if (_changedProperties.has('variant'))
        this.items.forEach((item) => {
          (item as StudsAccordionItem).variant = this.variant;
        });
      if (_changedProperties.has('direction'))
        this.items.forEach((item) => {
          (item as StudsAccordionItem).direction = this.direction;
        });
    }
  }

  render() {
    return html`<div
      class=${classMap({
        'accordion -container': true,
        [`-${this.size}`]: true,
        [`-${this.variant}`]: true,
        [`-${this.direction}`]: true,
      })}
      ?disabled=${this.disabled}
    >
      ${this.renderHeader()}
      <slot></slot>
    </div>`;
  }

  onSearch(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    const query = target.value;

    if (query === '' || !query) {
      this.onCollapseAll();
    }

    // Search Inner text of all accordion items
    if (this.items)
      this.items.forEach((item) => {
        const innerText = item.innerText.toLowerCase();
        if (query.length > 2 && innerText.includes(query.toLowerCase())) {
          // item.focus();
          (item as StudsAccordionItem).show();
        } else {
          (item as StudsAccordionItem).hide();
        }
      });
  }

  onExpandAll() {
    if(this.items) this.items.forEach((item) => {
      (item as StudsAccordionItem).show();
    });
  }
  onCollapseAll() {
    if(this.items) this.items.forEach((item) => {
      (item as StudsAccordionItem).hide();
    });
  }
}
