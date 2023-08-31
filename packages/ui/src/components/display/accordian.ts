import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import style from '@studs/styles/components/accordian.scss?inline';
import { StudsAccordianItem } from './accordian-item';

export interface AccordionProps {
  enableHeader: boolean;
  enableSearch: boolean;
}

@customElement('studs-accordian')
export class StudsAccordian extends LitElement {
  @property({ type: Boolean }) enableHeader: AccordionProps['enableHeader'] =
    true;
  @property({ type: Boolean }) enableSearch: AccordionProps['enableSearch'] =
    true;

  @state() _items: HTMLElement[] = [];
  static styles = unsafeCSS(style);

  renderHeader() {
    if (this.enableHeader) {
      return html`<header>
        ${this.enableSearch
          ? html`<div class="accordian -search">
              <input @input=${this.onSearch} type="text" />
            </div>`
          : nothing}
        <div class="accordian -actions">
          <studs-button
            button-type="tertiary"
            @click=${this.onExpandAll}
            icon="add_circle"
            icon-position="end"
            >Expand All</studs-button
          >
          <studs-button
            button-type="tertiary"
            @click=${this.onCollapseAll}
            icon-position="end"
            icon="do_not_disturb_on"
            >Collapse All</studs-button
          >
        </div>
      </header>`;
    }
  }

  render() {
    return html`<div class="accordian -container">
      ${this.renderHeader()}
      <slot @slotchange=${this.onSlotChange}></slot>
    </div>`;
  }

  onSlotChange(e: any) {
    const childNodes = e.target.assignedNodes({ flatten: true });
    // Only Retrieve the child nodes that are of type StudsAccordianItem
    this._items = childNodes.filter(
      (node: any) => node.nodeName === 'STUDS-ACCORDIAN-ITEM'
    );
    this.requestUpdate();
  }

  onSearch(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    const query = target.value;
    // Search Inner text of all accordian items
    this._items.forEach((item) => {
      const innerText = item.innerText.toLowerCase();
      if (innerText.includes(query.toLowerCase())) {
        item.focus();
      } else {
        (item as StudsAccordianItem).hide();
      }
    });
  }

  onExpandAll() {
    this._items.forEach((item) => {
      item.setAttribute('open', 'true');
    });
  }
  onCollapseAll() {
    this._items.forEach((item) => {
      item.removeAttribute('open');
    });
  }
}
