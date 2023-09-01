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

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.updated(_changedProperties);
    if (this.fixedHeader && this.fixedOffset) {
      if (!this.thead?.style?.top)
        this.thead?.style.setProperty('top', this.fixedOffset);
    }

    if (!this.rows) {
      const rows = this.renderRoot.querySelectorAll('tbody tr');
      const data: Array<string[]> = [];
      rows.forEach((row) => {
        const rowData: string[] = [];
        row.querySelectorAll('td').forEach((cell) => {
          rowData.push(cell.innerHTML);
        });
        data.push(rowData);
      });
      // this.rows = data;
    }
  }

  render() {
    return html`<div
        class=${classMap({
          table: true,
          '-sticky-header': this.fixedHeader,
          [`-${this.size}`]: true,
        })}
      >
        ${map(this._children, (child) => {
          return html`${child}`;
        })}
      </div>
      ${!this._children
        ? html`<slot @slotchange=${this.onSlotChange}></slot>`
        : nothing} `;
  }

  onSlotChange(e: Event) {
    const assignedElements = (e.target as HTMLSlotElement).assignedElements();
    if (assignedElements.length > 0)
      this._children = (e.target as HTMLSlotElement).assignedElements();
  }
}
