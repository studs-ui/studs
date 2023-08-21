import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import tableStyle from '../../styles/lib/components/table.scss?inline';
import paginationStyle from '../../styles/lib/demo/pagination.scss?inline';
import {
  VirtualizerHostElement,
  virtualize,
  virtualizerRef,
} from "@lit-labs/virtualizer/virtualize.js";
import { repeat } from "lit/directives/repeat.js";

export interface GridProps {
  wrapperProps?: object;
  tableCaption?: string;
  pageSize: number;
  itemsPerPageSelector?: Array<number>;
  showBorders: boolean;
  enableFiltering: boolean;
  enableColumnResizing: boolean;
  enableColumnReordering: boolean;
  // enableColumnHiding: boolean;
  enableInfiniteScroll: boolean;
  enablePagination: boolean;
  enableGlobalSearch: boolean;
  enableStickyHeader: boolean;
  enableSorting: boolean;
  columns: Array<any>;
  dataSource: Array<any>;
  sortedColumns: Array<string>;
  sortAscending: boolean;
}

interface FilteredColumns {
  key: string;
  type: string;
  value: string;
}

@customElement("studs-grid")
export class StudsGrid extends LitElement {
  // Table Properties
  @property({ type: Object }) wrapperProps: GridProps["wrapperProps"] = {};
  @property({ type: String }) tableCaption?: GridProps["tableCaption"];
  @property({ type: Number }) pageSize: GridProps["pageSize"] = 10;
  @property({ type: Array })
  itemsPerPageSelector?: GridProps["itemsPerPageSelector"] = [10, 25, 50, 100];
  @property({ type: Boolean }) showBorders: GridProps["showBorders"] = true;
  @property({ type: Boolean }) enableFiltering: GridProps["enableFiltering"] =
    true;
  @property({ type: Boolean })
  enableColumnResizing: GridProps["enableColumnResizing"] = true;
  @property({ type: Boolean })
  enableColumnReordering: GridProps["enableColumnReordering"] = true;
  // @property({ type: Boolean }) enableColumnHiding: boolean = true;
  @property({ type: Boolean })
  enableInfiniteScroll: GridProps["enableInfiniteScroll"] = true;
  @property({ type: Boolean }) enablePagination: GridProps["enablePagination"] =
    true;
  @property({ type: Boolean })
  enableGlobalSearch: GridProps["enableGlobalSearch"] = true;
  @property({ type: Boolean })
  enableStickyHeader: GridProps["enableStickyHeader"] = true;
  @property({ type: Boolean }) enableSorting: GridProps["enableSorting"] = true;

  @property({ type: Array }) columns: GridProps["columns"] = [];
  @property({ type: Array }) dataSource: GridProps["dataSource"] = [];
  @property({ type: Array }) sortedColumns: GridProps["sortedColumns"] = [];
  @property({ type: Boolean }) sortAscending: GridProps["sortAscending"] = true;

  @state() protected _searchTerm: string = "";
  @state() protected _currentPage: number = 1;
  @state() protected _psuedoCurrentPage: number = this._currentPage;
  @state() protected _filteredColumns: Array<FilteredColumns> = [];
  @state() protected _lastVisible: number = 0;

  // protected updated(
  //   _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  // ): void {
  //   if (this.enableInfiniteScroll) this.addIntersectionObserver();
  // }

  static styles = [unsafeCSS(tableStyle), unsafeCSS(paginationStyle)];

  protected get data() {
    return this.dataSource;
  }

  /** Functions
   * 1. Filters
   */

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
            case "contains":
              return String(value)
                .toLowerCase()
                .includes(column.value.toLowerCase());
            case "greater than":
              return parseInt(value) > parseInt(column.value);
            case "less than":
              return parseInt(value) < parseInt(column.value);
            case "equals":
              if (parseInt(column.value)) {
                return parseInt(value) === parseInt(column.value);
              }
              return value === column.value;
            case "not equals":
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
      return Math.ceil(this.filteredData.length / this.pageSize);
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
      const inputValue = column ? column?.value : "";
      const selectValue = column ? column?.type : "contains";
      // TODO : Implement filtering for equals, not equals, greater than, less than, contains
      // const type = "contains";

      return html`
        <form>
          <select name="type" @input=${this.onFilterType} .value=${selectValue}>
            <option>contains</option>
            <option>greater than</option>
            <option>less than</option>
            <option>equals</option>
            <option>not equals</option>
          </select>
          <input
            name=${key}
            type="text"
            @input=${this.onFilterInput}
            .value=${inputValue}
          />
        </form>
      `;
    }
  }

  protected renderCaption() {
    if (this.tableCaption) {
      return html` <caption>
        ${this.tableCaption}
      </caption>`;
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
              event?.dataTransfer?.setData("type", "column");
              // @ts-ignore
              event?.dataTransfer?.setData("data", index);
            }}
            @drop=${(event: DragEvent) => {
              event.preventDefault();
              const fromIndex = event?.dataTransfer?.getData("data");
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
                  ☰
                </div>`
              : ``}
            <p
              @click=${(event: MouseEvent) =>
                this.onSortTable(column.key, event)}
            >
              ${column.label}
              ${this.sortedColumns.includes(column.key) &&
              this.sortOrders[column.key] !== null
                ? html`<span
                    >${this.sortOrders[column.key] ? "↑" : "↓"}
                    ${this.sortedColumns?.length > 1
                      ? this.sortedColumns.findIndex((i) => i === column.key) +
                        1
                      : ""}</span
                  >`
                : ""}
            </p>
            ${this.renderColumnFilterField(column.key)}
            ${this.enableColumnResizing
              ? html`<div
                  class="resize-handle"
                  @mousedown=${this.onMouseMoveDown}
                >
                  ↔
                </div>`
              : ""}
          </th>
        `;
      });
    }
  }

  @state() protected _startIndex: number = 0;
  @state() protected _endIndex: number = 0;
  @state() protected _offset: number = 0;

  protected renderRows() {
    if (this.data) {
      this._startIndex = (this._currentPage - 1) * this.pageSize;
      this._endIndex = this._startIndex + this.pageSize + this._offset;

      const item = (row: { [x: string]: any }, index: number) => {
        return html`
          <tr
            data-index=${index}
            draggable=${this.enableColumnReordering}
            @dragstart=${(event: DragEvent) => {
              event?.dataTransfer?.setData("type", "row");
              // @ts-ignore
              event?.dataTransfer?.setData("data", index);
            }}
            @drop=${(event: DragEvent) => {
              event.preventDefault();
              const fromIndex = event?.dataTransfer?.getData("data");
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
            ${Object.keys(row).map((key) => html`<td>${row[key]}</td>`)}
          </tr>
        `;
      };

      const rows = this.isVirtualizedEnabled
        ? virtualize({
            scroller: true,
            items: this.filteredData?.slice(this._startIndex, this._endIndex),
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

  private renderPaginationPages() {
    if (this.totalPages) {
      if (this.totalPages > 10) {
        const _firstPages: number[] = Array.from(
          { length: 3 },
          (_, i) => i + 1
        );
        const _middlePages: number[] = [
          this._psuedoCurrentPage - 2,
          this._psuedoCurrentPage - 1,
          this._psuedoCurrentPage,
          this._psuedoCurrentPage + 1,
          this._psuedoCurrentPage + 2,
          // @ts-ignore
        ].filter((page) => page > 3 && page < this.totalPages - 2);
        const endingPages: number[] = Array.from(
          { length: 3 },
          // @ts-ignore
          (_, i) => this.totalPages - i
        ).reverse();
        const pages = [..._firstPages, ..._middlePages, ...endingPages];
        return pages.map(
          (page) => html`
            <li
              class="page-item ${this._psuedoCurrentPage === page
                ? "active"
                : ""}"
            >
              <a
                class="page-link"
                href="#"
                @click=${
                  // @ts-ignore
                  () => this.onPageClick(page)
                }
                >${page}</a
              >
            </li>
          `
        );
      } else {
        const pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        return pages.map(
          (page) => html`
            <li
              class="page-item ${this._psuedoCurrentPage === page
                ? "active"
                : ""}"
            >
              <a
                class="page-link"
                href="#"
                @click=${
                  // @ts-ignore
                  () => this.onPageClick(page)
                }
                >${page}</a
              >
            </li>
          `
        );
      }
    }
  }

  private renderPagination() {
    if (this.enablePagination)
      return html`
        <nav>
          <ul class="pagination">
            <li
              class="page-item ${this._psuedoCurrentPage === 1
                ? "disabled"
                : ""}"
            >
              <a
                class="page-link"
                href="#"
                aria-label="Previous"
                @click=${this.onPreviousClick}
              >
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            ${this.renderPaginationPages()}
            <li
              class="page-item ${this._psuedoCurrentPage === this.totalPages
                ? "disabled"
                : ""}"
            >
              <a
                class="page-link"
                href="#"
                aria-label="Next"
                @click=${this.onNextClick}
              >
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      `;
  }

  render() {
    const classes = {
      grid: true,
      "-virtualized": this.isVirtualizedEnabled,
    };
    const contentClasses = {
      content: true,
      "-withBorder": this.showBorders,
    };
    const theadClasses = {
      "-sticky": this.enableStickyHeader,
    };

    return html`
      <div class=${classMap(classes)} style=${this.wrapperProps}>
        <div class="grid -header">
          <input
            type="text"
            placeholder="Search..."
            .value=${this._searchTerm}
            @input=${this.onSearch}
          />
        </div>
        <div class=${classMap(contentClasses)}>
          <!-- @scroll=${this.onTableScroll} -->
          <table
            @scroll=${this.isVirtualizedEnabled ? this.onTableScroll : null}
          >
            ${this.renderCaption()}
            <thead class=${classMap(theadClasses)}>
              <tr>
                ${this.renderColumns()}
              </tr>
            </thead>
            <tbody
              @rangeChanged=${(e: any) => {
                this._lastVisible = e.last - 8;
              }}
            >
              ${this.renderRows()}
            </tbody>
          </table>
        </div>
      </div>
      <div class="tableFooter -actions">
        <div class="page-size">
          <label for="pageSize">Page Size:</label>
          <select
            class="form-control"
            id="pageSize"
            .value=${this.pageSize}
            @change="${(e: any) => {
              this.pageSize = parseInt(e?.target.value);
              this.setPage = 1; // Reset the pagination
            }}"
          >
            ${map(this.itemsPerPageSelector, (item) => {
              return html`
                <option value="${item}" selected=${this.pageSize === item}>
                  ${item}
                </option>
              `;
            })}
          </select>
        </div>
        <div class="page-input">
          <label for="page">Page:</label>
          <input
            class="form-control"
            type="number"
            .value=${this._psuedoCurrentPage}
            @input=${this.onPageInputChange}
          />
        </div>
      </div>
      ${this.renderPagination()}
    `;
  }

  /**
   * Event Handlers
   */

  /**
   * 1. Resizable Columns
   */

  @state() protected _startX: number = 0;
  @state() protected _pressed: HTMLElement | undefined;
  @state() protected _startWidth: number = 0;

  private onMouseMoveDown(e: any) {
    e.stopPropagation();
    this._pressed = e.target;
    this._startX = e.clientX;
    this._startWidth = e.target.closest("th").offsetWidth;

    this.addEventListener("mousemove", this.onMouseMove);
    this.addEventListener("mouseup", this.onMouseMoveUp);
  }

  private onMouseMoveUp() {
    this._pressed = undefined;
    this._startWidth = 0;
    this._startX = 0;
    this.removeEventListener("mousemove", this.onMouseMove);
    this.removeEventListener("mouseup", this.onMouseMoveUp);
  }

  private onMouseMove(e: any) {
    if (this._pressed) {
      const th = this._pressed.closest("th");
      const delta = e.clientX - this._startX;
      const width = Math.max(this._startWidth + delta, 50);

      // @ts-ignore
      th.style.width = `${width}px`;
    }
  }

  /**
   * 2. Virtualized / Infinite Scroll
   */
  @query("tbody") tableBodyRef!: VirtualizerHostElement;
  @query("table") tableRef!: HTMLTableElement;
  private _prevScrollDirection: number = 0;

  private onTableScroll(e: any) {
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
    const { scrollTop: scrollPosition } = e.target;
    if (scrollPosition % 15 === 0) {
      const scrollDirection =
        scrollPosition > this._prevScrollDirection ? "down" : "up";
      const end = this._offset;
      if (scrollDirection === "down") {
        const endOffset =
          end + 50 >= this.data?.length ? this.data?.length : end + 50;
        this._offset = endOffset;
        this.requestUpdate();
      }

      this._prevScrollDirection = scrollPosition;
    }
  }

  /**
   * 3. Pagination
   */

  private onPageClick(page: number) {
    this.setPage = page;
    this._lastVisible = 0;
    this._offset = 0;

    this.tableBodyRef[virtualizerRef]
      ?.element(this._lastVisible)
      ?.scrollIntoView();
  }

  private onPageInputChange(e: InputEvent) {
    const value = (e.target as HTMLInputElement).value;
    this.setPage = parseInt(value);
    this._lastVisible = 0;
    this._offset = 0;

    this.tableBodyRef[virtualizerRef]
      ?.element(this._lastVisible)
      ?.scrollIntoView();
  }

  private onPreviousClick() {
    if (this._currentPage > 1) {
      this.setPage = this._currentPage - 1;
      this._lastVisible = 0;
      this._offset = 0;

      this.tableBodyRef[virtualizerRef]
        ?.element(this._lastVisible)
        ?.scrollIntoView();
    }
  }

  private onNextClick() {
    // @ts-ignore
    if (this._currentPage < this.totalPages) {
      this.setPage = this._currentPage + 1;
      this._lastVisible = 0;
      this._offset = 0;

      this.tableBodyRef[virtualizerRef]
        ?.element(this._lastVisible)
        ?.scrollIntoView();
    }
  }

  /**
   * 4. Search
   */

  private onSearch(e: any) {
    this.setPage = 1;
    this._searchTerm = e?.target.value;
  }

  /**
   * 5. Filtering
   */

  private onFilterType(e: InputEvent | any) {
    const name = e?.target.parentElement?.querySelector("input")?.name;
    const value = e?.target.value;
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
        { key: name, type: value, value: "" },
      ];
      this._filteredColumns = newData;
    }
  }

  private onFilterInput(e: InputEvent | any) {
    const name = e?.target.name;
    const value = e?.target.value;
    const select = e?.target.parentElement?.querySelector("select")?.value;
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
        { key: name, type: "contains", value },
      ];
      this._filteredColumns = newData;
    }
  }

  /**
   * 6. Sorting
   */

  public clickCounts: { [key: string]: number } = {};

  // Store the original order of the data
  private originalData: Array<any> = [...this.dataSource];

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

  /**
   * Bugs
   * ?PageSize Option
   * ?Page Change Scroll Reset
   * ?Virtualize Scroll Apperance
   */

  /** Possible features to add
   * !Checkbox Selection
   */

  /**
   * !25 - 50 Row Offset
   */
}
