import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import style from '../../styles/lib/components/accordian.scss?inline';

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
            buttontype="link"
            @click=${this.onExpandAll}
            iconposition="end"
            icon='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
<g clip-path="url(#clip0_13874_4085)">
<rect width="14" height="14" transform="translate(0 0.5)" fill="var(--cta)"/>
<path d="M11.0832 8.08341H7.58317V11.5834H6.4165V8.08341H2.9165V6.91675H6.4165V3.41675H7.58317V6.91675H11.0832V8.08341Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_13874_4085">
<rect width="14" height="14" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>'
            >Expand All</studs-button
          >
          <studs-button
            buttontype="link"
            @click=${this.onCollapseAll}
            iconposition="end"
            icon='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
<path d="M11.0832 8.08341H7.58317V11.5834H6.4165V8.08341H2.9165V6.91675H6.4165V3.41675H7.58317V6.91675H11.0832V8.08341Z" fill="var(--cta)"/>
</svg>'
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
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
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
