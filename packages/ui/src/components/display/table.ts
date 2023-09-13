import { LitElement, PropertyValueMap, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import style from '@studs/styles/components/table.scss?inline';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';

export interface TableProps {
  fixedHeader: boolean;
  fixedOffset: string;
  size: 'small' | 'medium' | 'large';
  sortable: boolean;
  filterable: boolean;
  disabled: boolean;
  searchable: boolean;
  children?: string;
}

// Basic Table
@customElement('studs-table')
export class StudsTable extends LitElement {
  static styles = unsafeCSS(style);

  @query('thead') thead?: HTMLTableSectionElement;

  // Options
  @property({ type: Boolean, attribute: 'fixed-header' })
  fixedHeader: TableProps['fixedHeader'] = false;
  @property({ type: String, attribute: 'fixed-offset' })
  fixedOffset: TableProps['fixedOffset'] = '0px';
  @property({ type: String })
  size: TableProps['size'] = 'medium';
  @property({ type: Boolean })
  sortable: TableProps['sortable'] = false;
  @property({ type: Boolean })
  filterable: TableProps['filterable'] = false;
  @property({ type: Boolean })
  disabled: TableProps['disabled'] = false;
  @property({ type: Boolean })
  searchable: TableProps['searchable'] = false;

  @state() rows?: Array<any>;
  @state() _children?: Element[];

  render() {
    return html`
        <slot @slotchange=${this.onSlotChange}></slot>  
      `
  }

  onSlotChange(e: Event) {
    const assignedElements = (e.target as HTMLSlotElement).assignedElements();
    if (assignedElements.length > 0) {
      const table = assignedElements.find((el) => el.tagName === 'TABLE');
      table?.classList.add('table');
      table?.classList.add(`-${this.size}`)
      if(this.fixedHeader) {
        table?.classList.add('-sticky-header');
        const thead = table?.querySelector('thead')
        console.log(thead);
      }
    }
      
  }
}
