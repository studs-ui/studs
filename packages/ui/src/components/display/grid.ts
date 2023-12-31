import { LitElement, PropertyValueMap, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import tableStyle from '@studs/styles/components/datagrid.scss?inline';
import paginationStyle from '@studs/styles/components/pagination.scss?inline';
import {
  VirtualizerHostElement,
  virtualize,
  virtualizerRef,
} from '@lit-labs/virtualizer/virtualize.js';
import { repeat } from 'lit/directives/repeat.js';
import { IconController } from '../../controllers/iconController';
import { StudsDropdown, StudsInput } from '../..';
import { styleMap } from "lit/directives/style-map.js";
import { queryAll } from 'lit/decorators.js';
import { RangeChangedEvent } from '@lit-labs/virtualizer/events.js';
import { getWindow } from '../../utils/shared';

// !TODO - Sort Multi Doesn't work anymore

interface FilteredColumns {
  key: string;
  type: string;
  value: string;
}

@customElement('studs-grid')
export class StudsGrid extends LitElement {
  // Table Properties
  @property({ type: String }) tableCaption?: string;
  @property({ type: Number }) pageSize: number = 10;
  @property({ type: Array })
  itemsPerPageSelector?: number[] = [10, 25, 50, 100];
  @property({ type: Boolean }) showBorders: boolean = true;
  @property({ type: Boolean }) enableFiltering: boolean =
    true;
  @property({ type: Boolean })
  enableColumnResizing: boolean = true;
  @property({ type: Boolean })
  enableColumnReordering: boolean = true;
  @property({ type: Boolean })
  enableInfiniteScroll: boolean = false;
  @property({ type: Boolean }) enablePagination: boolean =
    true;
  @property({ type: Boolean })
  enableGlobalSearch: boolean = true;
  @property({ type: Boolean })
  enableStickyHeader: boolean = true;
  @property({ type: Boolean }) enableSorting: boolean = true;

  @property({ type: Array }) columns: any[] = [];
  @property({ type: Array }) dataSource: any[] = [];
  @property({ type: Array }) sortedColumns: string[] = [];
  @property({ type: Boolean }) sortAscending: boolean = true;

  @state() protected _searchTerm: string = '';
  @state() protected _currentPage: number = 1;
  @state() protected _psuedoCurrentPage: number = this._currentPage;
  @state() protected _filteredColumns: FilteredColumns[] = [];
  @state() protected _lastVisible: number = 0;

  static styles = [unsafeCSS(tableStyle), unsafeCSS(paginationStyle), IconController.styles];

  private iconController = new IconController();

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
      // Set initial width of row cells
      const cells = this.shadowRoot?.querySelectorAll('td');
      cells?.forEach((cell) => {
        const columnId = cell.getAttribute('data-column');
        const column = this.shadowRoot?.querySelector(`#${columnId}`);
        const width = column?.getBoundingClientRect().width;
        if(width)
        cell.style.width = `${width - 25.6}px`;
      })
  }

  protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
      // Reset Properties on Load Type
      if(_changedProperties.has('enableInfiniteScroll')) {
        this.setPage = 1;
      }
  }

  connectedCallback(): void {
    super.connectedCallback();
    if(this.isVirtualizedEnabled)
    getWindow(this).addEventListener('resize', this.onWindowResize);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if(this.isVirtualizedEnabled)
    getWindow(this).removeEventListener('resize', this.onWindowResize);
  }

  protected get data() {
    return this.dataSource;
  }

  protected get filterSearchResults() {
    return this.data.filter((row) => {
      return Object.values(row).some((value) =>
        String(value).toLowerCase().includes(this._searchTerm.toLowerCase())
      );
    });
  }

  /**
   * Getters and Setters
   */

  protected filterResults(data: object[]) {
    if (data) {
      const filtered = data.filter((row: any) => {
        const filteredResults = this._filteredColumns.every((column) => {
          const value = row[column.key];
          switch (column.type) {
            case 'contains':
              return String(value)
                .toLowerCase()
                .includes(column.value.toLowerCase());
            case 'greater than':
              return parseInt(value) > parseInt(column.value);
            case 'less than':
              return parseInt(value) < parseInt(column.value);
            case 'equals':
              if (parseInt(column.value)) {
                return parseInt(value) === parseInt(column.value);
              }
              return value === column.value;
            case 'not equals':
              if (parseInt(column.value)) {
                return parseInt(value) !== parseInt(column.value);
              }
              return value !== column.value;
            default:
              return true;
          }
        });
        return filteredResults;
      });
      if (filtered.length === 0) return data;
      return filtered;
    }
  }

  // Getters

  protected get filteredData() {
    const filterColumns = this._filteredColumns.length > 0;

    if (filterColumns && this._searchTerm) {
      const searchFilter = this.filterSearchResults;
      return this.filterResults(searchFilter);
    }
    if (filterColumns) {
      return this.filterResults(this.data);
    }

    if (this._searchTerm) return this.filterSearchResults;

    return this.data;
  }

  protected get totalPages() {
    if (this.filteredData)
      return Math.ceil(this.filteredData.length);
  }

  protected get startIndex() {
    return (this._currentPage - 1) * this.pageSize;
  }

  protected get endIndex() {
    return this.startIndex + this.pageSize;
  }

  protected get isVirtualizedEnabled() {
    // Getter that checks length of items and value of enableInfiniteScroll
    if (this.filteredData) {
      if (
        this.filteredData?.length > this.pageSize &&
        this.enableInfiniteScroll
      )
        return true;
    }
    return false;
  }

  protected set setPage(page: number) {
    this._currentPage = page;
    this._psuedoCurrentPage = page;
  }

  /**
   * Render Items
   */

  protected renderColumnFilterField(key: string) {
    if (this.enableFiltering) {
      const column = this._filteredColumns.find((column) => column.key === key);
      const inputValue = column ? column?.value : '';
      const selectValue = column ? column?.type : 'contains';
      const options = [
        {
          label: "Contains",
          value: "contains"
        },
        {
          label: "Greater Than",
          value: "greater than"
        },
        {
          label: "Less Than",
          value: "less than"
        },
        {
          label: "Equals",
          value: "equals"
        },
        {
          label: "Not Equals",
          value: "not equals"
        }
      ];
      return html`
        <form>
          <studs-dropdown size="small" .options=${options} @change=${this.onFilterType} .selected=${selectValue}></studs-dropdown>
          <studs-input size="small" name=${key} type="text" @change=${this.onFilterInput} .value=${inputValue}></studs-input>
        </form>
      `;
    }
  }

  public sortOrders: { [key: string]: boolean } = {};
  @state() private _draggableColumn?: number;

  protected renderColumns() {
    if (this.columns) {
      return map(this.columns, (column, index) => {
        return html`
          <th
            id=${column.key}
            .key=${column.key}
            draggable=${this.enableColumnReordering &&
            this._draggableColumn === index}
            @dragstart=${(event: DragEvent) => {
              event.stopPropagation();
              event?.dataTransfer?.setData('type', 'column');
              // @ts-ignore
              event?.dataTransfer?.setData('data', index);
            }}
            @drop=${(event: DragEvent) => {
              event.preventDefault();
              const fromIndex = event?.dataTransfer?.getData('data');
              const toIndex = index;
              // @ts-ignore
              if (fromIndex !== toIndex) {
                // Update columns array with new order
                const newColumns = [...this.columns];
                // @ts-ignore
                const [removed] = newColumns.splice(fromIndex, 1);
                // removed.key = this.columns[toIndex].key; // change the name of the key to its intended key
                newColumns.splice(toIndex, 0, removed);
                this.columns = newColumns;
                // Update dataSource array with new order
                const newDataSource = [...this.data].reduce((acc, row) => {
                  const newRow = this.reorderObject(
                    row,
                    //@ts-ignore
                    parseInt(fromIndex, 10),
                    toIndex
                  );

                  return [...acc, newRow];
                }, []);
                this.dataSource = newDataSource;
                this._draggableColumn = undefined;
              }
            }}
            @dragover=${(event: DragEvent) => {
              event.preventDefault();
            }}
          >
            ${this.enableColumnReordering
              ? html`<div
                  class="reorder-handle"
                  @mousedown=${() => {
                    this._draggableColumn = index;
                  }}
                  @mouseup=${() => {}}
                >
                ${this.iconController.icon("reorder", {
                  color: 'primary',
                  size: 'small',
                })}
                </div>`
              : ``}
              <span>
              ${this.sortedColumns.includes(column.key) &&
              this.sortOrders[column.key] !== null
                ? html`<span
                    >${this.sortOrders[column.key] ? '↑' : '↓'}
                    ${this.sortedColumns?.length > 1
                      ? this.sortedColumns.findIndex((i) => i === column.key) +
                        1
                      : ''}</span
                  >`
                : ''}
            <p
              @click=${(event: MouseEvent) =>
                this.onSortTable(column.key, event)}
            >
            
              ${column.label}
            </p>
            <studs-button button-type="tertiary" size="small" icon="filter_list"></studs-button>
            </span>

            ${this.enableColumnResizing
              ? html`<div
                  class="resize-handle"
                  @mousedown=${this.onMouseMoveDown}
                >
                  ${this.iconController.icon("width", {
                    color: 'primary',
                    size: 'small'
                  })}
                </div>`
              : ''}
            <studs-popover>
              <p slot="title">Filter</p>
              ${this.renderColumnFilterField(column.key)}
            </studs-popover>
          </th>
        `;
      });
    }
  }

  @state() protected _startIndex: number = 0;
  @state() protected _endIndex: number = 0;

  protected renderRows() {
    if (this.data) {
      this._startIndex = (this._currentPage - 1) * this.pageSize;
      this._endIndex = this._startIndex + this.pageSize;

      const item = (row: { [x: string]: any }, index: number) => {
        return html`
          <tr
            data-index=${index}
            draggable=${this.enableColumnReordering}
            @dragstart=${(event: DragEvent) => {
              event?.dataTransfer?.setData('type', 'row');
              // @ts-ignore
              event?.dataTransfer?.setData('data', index);
            }}
            @drop=${(event: DragEvent) => {
              event.preventDefault();
              const fromIndex = event?.dataTransfer?.getData('data');
              const toIndex = index;
              // @ts-ignore
              if (fromIndex !== toIndex) {
                // Update dataSource array with new order
                const newDataSource = [...this.data];
                // @ts-ignore
                const [removed] = newDataSource.splice(fromIndex, 1);
                newDataSource.splice(toIndex, 0, removed);
                this.dataSource = newDataSource;
              }
            }}
            @dragover=${(event: DragEvent) => {
              event.preventDefault();
            }}
          >
            ${Object.keys(row).map((key, index) => {
              const columnKey = this.columns[index].key;
              const column = this.shadowRoot?.querySelector(`#${columnKey}`);
              // Get correct width of the column
              const width = column?.getBoundingClientRect().width;
              return html`<td data-column=${columnKey} style=${this.isVirtualizedEnabled ? styleMap({
              width: column ? `${width - 25.6}px` : 'auto',
            }) : nothing}>${row[key]}</td>`})}
          </tr>
        `;
      };

      const rows = this.isVirtualizedEnabled
        ? virtualize({
            scroller: true,
            items: this.filteredData,
            renderItem: (row, index) => {
              return item(row, index);
            },
          })
        : repeat(
            // @ts-ignore
            this.filteredData?.slice(this._startIndex, this._endIndex),
            (row) => row.id,
            (row, index) => {
              return item(row, index);
            }
          );
      return rows;
    }

    return null;
  }

  render() {
    
    return html`
      <div class=${classMap({
      grid: true,
      '-virtualized': this.isVirtualizedEnabled,
    })}>
        <div class="grid -header">
          <studs-input type="search" placeholder="Search..." .value=${this._searchTerm} @change=${this.onSearch}></studs-input>
        </div>
        <div class=${classMap({
            content: true,
            '-withBorder': this.showBorders,
          })}>
          <table>
            ${this.tableCaption ? html`<caption>${this.tableCaption}</caption>` : ''}
            <thead class=${classMap({
                '-sticky': this.enableStickyHeader,
              })}>
              <tr>
                ${this.renderColumns()}
              </tr>
            </thead>
            <tbody
              @scroll=${this.isVirtualizedEnabled ? this.onTableScroll : nothing}
              @visibilityChanged=${this.isVirtualizedEnabled ? this.onVisibilityChanged : nothing}
            >
              ${this.renderRows()}
            </tbody>
          </table>
        </div>
      </div>
      <div class="tableFooter -actions">
        ${this.enablePagination ? html`
        <studs-pagination current-page=${this._psuedoCurrentPage} total-items=${this.totalPages} items-per-page=${String(this.pageSize)} has-jumper ?has-select=${!this.isVirtualizedEnabled} @changePage=${this.onPageClick} @changeItemsPerPage=${(e: CustomEvent) => {
          this.pageSize = e.detail.itemsPerPage;
        }}></studs-pagination>
        ` : ''}
      </div>
    `;
  }

  /**
   * Event Handlers
   */

  /**
   *  Global Events
   */
  @queryAll('td') cells!: NodeListOf<Element>;
  private onWindowResize = () => {
    // Resize Cells on Window Resize
    requestAnimationFrame(() => {
      this.cells?.forEach((cell) => {
        const columnId = cell.getAttribute('data-column');
        const column = this.shadowRoot?.querySelector(`#${columnId}`);
        const width = column?.getBoundingClientRect().width;
        if(width)
        (cell as HTMLTableCellElement).style.width = `${width - 25.6}px`;
      })
    });
  }

  /**
   * 1. Resizable Columns
   */

  @state() protected _startX: number = 0;
  @state() protected _pressed: HTMLElement | undefined;
  @state() protected _startWidth: number = 0;
  @state() protected _activeRows?: NodeListOf<Element>;

  private onMouseMoveDown(e: MouseEvent) {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    const th = target.closest('th');
    const id = th?.getAttribute('id');
    if(this.isVirtualizedEnabled){
      const rows = this.shadowRoot?.querySelectorAll(`td[data-column=${id}]`);
      if(rows) this._activeRows = rows;
    }
    this._pressed = target;
    this._startX = e.clientX;
    this._startWidth = target.closest('th')?.offsetWidth || 0;

    this.addEventListener('mousemove', this.onMouseMove);
    this.addEventListener('mouseup', this.onMouseMoveUp);
  }

  private onMouseMoveUp() {
    this._pressed = undefined;
    this._startWidth = 0;
    this._startX = 0;
    this._activeRows = undefined;
    this.removeEventListener('mousemove', this.onMouseMove);
    this.removeEventListener('mouseup', this.onMouseMoveUp);
  }

  private onMouseMove(e: any) {
    if (this._pressed) {
      const th = this._pressed.closest('th');
      const delta = e.clientX - this._startX;
      const width = Math.max(this._startWidth + delta, 50);
      if(th){
        requestAnimationFrame(() => {
          if(this.isVirtualizedEnabled) {
            Object.assign(th.style, {
              flex: `0 0 ${width}px`,
            })
            this._activeRows?.forEach((row) => {
              (row as HTMLTableCellElement).style.width = `${width - 25.6}px`;
            })
          } else {
            Object.assign(th.style, {
              width: `${width}px`,
            })
          }
        });
    }
  }
}

  /**
   * 2. Virtualized / Infinite Scroll
   */
  @query('tbody') tableBodyRef!: VirtualizerHostElement;
  @query('table') tableRef!: HTMLTableElement;

  private onVisibilityChanged(e: RangeChangedEvent) {
    if(this.totalPages){
      const isFirst = e.first === 0;
      const isLast = e.last === this.totalPages - 1;
      const lastPage = this.totalPages / this.pageSize
      if(isFirst) {
        this._psuedoCurrentPage = 1
        this._lastVisible = this.pageSize;
      } else if(isLast) {
        this._psuedoCurrentPage = lastPage
        this._lastVisible = this.totalPages - 1;
      } else {
        this._lastVisible = e.last;
      }
    }
  }

  private onTableScroll() {
    if (this.enablePagination) {
      if (this._currentPage > 1) {
        const page = Math.floor(
          (this._currentPage * this.pageSize + this._lastVisible) /
            this.pageSize
        );
        if (page !== this._psuedoCurrentPage) {
          this._psuedoCurrentPage = page <= 0 ? 1 : page;
          this.requestUpdate();
        }
      } else {
        const page = Math.ceil(this._lastVisible / this.pageSize);
        if (page !== this._psuedoCurrentPage) {
          this._psuedoCurrentPage = page <= 0 ? 1 : page;
          this.requestUpdate();
        }
      }
    }
  }

  /**
   * 3. Pagination
   */

  private onPageClick(e: CustomEvent) {
    const page = e.detail.selectedPage;
    if(this.isVirtualizedEnabled) {

    const scrollToElement = page * this.pageSize - this.pageSize + 1;
    this.tableBodyRef[virtualizerRef]
      ?.element(scrollToElement)
      ?.scrollIntoView();
    this._lastVisible = scrollToElement;
    // Force a recalculation
    // @ts-ignore
    this.setPage = null;
    } else {
      this.setPage = page;
    }

  }

  /**
   * 4. Search
   */

  private onSearch(e: CustomEvent) {
    this.setPage = 1;
    this._searchTerm = e.detail;
  }

  /**
   * 5. Filtering
   */

  private onFilterType(e: CustomEvent) {
    const name = (e?.target as StudsDropdown).parentElement?.querySelector('studs-input')?.name;
    const value = e.detail.value;
    const column = this._filteredColumns.find((column) => column.key === name);
    if (column) {
      const newData = this._filteredColumns.map((el) => {
        if (el.key == name)
          return Object.assign({}, el, { type: value, value: column?.value });
        return el;
      });

      this._filteredColumns = newData;
    } else {
      const newData = [
        ...this._filteredColumns,
        { key: name, type: value, value: '' },
      ];
      this._filteredColumns = newData;
    }
  }

  private onFilterInput = (e: CustomEvent) => {
    const name = (e?.target as StudsInput).name;
    const value = e?.detail;
    const select = (e?.target as StudsInput).parentElement?.querySelector('studs-dropdown')?.selected;
    const column = this._filteredColumns.find((column) => column.key === name);
    if (column) {
      const newData = this._filteredColumns.map((el) => {
        if (el.key == name)
          return Object.assign({}, el, { type: select, value });
        return el;
      });

      this._filteredColumns = newData;
    } else {
      const newData = [
        ...this._filteredColumns,
        { key: name, type: 'contains', value },
      ];
      this._filteredColumns = newData;
    }
  }

  /**
   * 6. Sorting
   */

  public clickCounts: { [key: string]: number } = {};

  // Store the original order of the data
  @state() originalData: Array<any> = [...this.dataSource];

  private onSortTable(column: string, event: MouseEvent) {
    if (!this.enableSorting) {
      return;
    }

    // Initialize the click count for the column if it doesn't exist
    if (!this.clickCounts[column]) {
      this.clickCounts[column] = 0;
    }

    // Increment the click count for the column
    this.clickCounts[column]++;

    if (event.shiftKey) {
      // If the Shift key is held down, add the column to sortedColumns
      if (!this.sortedColumns.includes(column)) {
        this.sortedColumns.push(column);
      }
    } else {
      // If the Shift key is not held down, replace sortedColumns with the column
      this.sortedColumns = [column];
    }

    // Depending on the click count, set the sort order or reset the column to default order
    if (this.clickCounts[column] % 3 === 1) {
      // Set Initial Data on First Click before Sorting Data
      this.originalData = [...this.dataSource];
      this.sortOrders[column] = true;
    } else if (this.clickCounts[column] % 3 === 2) {
      this.sortOrders[column] = false;
    } else {
      //@ts-ignore
      this.sortOrders[column] = null; // Reset to default order
    }

    if (this.sortOrders[column] === null) {
      // If the sort order is null, revert to the original order
      this.dataSource = [...this.originalData];
    } else {
      // Otherwise, sort the data
      this.dataSource.sort((a, b) => {
        for (let i = 0; i < this.sortedColumns.length; i++) {
          const col = this.sortedColumns[i];
          if (a[col] < b[col]) {
            return this.sortOrders[col] ? -1 : 1;
          } else if (a[col] > b[col]) {
            return this.sortOrders[col] ? 1 : -1;
          }
        }
        return 0;
      });
    }

    this.requestUpdate();
  }

  /**
   * 7. Drag and Drop Columns
   */

  private reorderObject(obj: object, fromIndex: number, toIndex: number) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const removedKey = keys.splice(fromIndex, 1)[0];
    const removedValue = values.splice(fromIndex, 1)[0];
    keys.splice(toIndex, 0, removedKey);
    values.splice(toIndex, 0, removedValue);
    const reordered: any = {};
    keys.forEach((key, index) => {
      reordered[key] = values[index];
    });
    return reordered;
  }
}
