import {
  html,
  LitElement,
  TemplateResult,
  PropertyValues,
  unsafeCSS,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ResponsiveController } from '../../controllers/responsiveController';
import style from '@studs/styles/components/pagination.scss?inline';

export interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  hasJumper: boolean;
  jumperLabel: string;
  hasSelect: boolean;
  selectLabel: string;
  onChange: () => void;
}

@customElement('studs-pagination')
export class StudsPagination extends LitElement {
  static styles = unsafeCSS(style);

  @property({ attribute: 'current-page', type: Number, reflect: true })
  currentPage: PaginationProps['currentPage'] = 1;

  @property({ attribute: 'total-items', type: Number })
  totalItems: PaginationProps['totalItems'] = 0;

  @property({ attribute: 'items-per-page', type: Number, reflect: true })
  itemsPerPage: PaginationProps['itemsPerPage'] = 10;

  @property({ attribute: 'has-jumper', type: Boolean })
  hasJumper: PaginationProps['hasJumper'] = false;

  @property({ attribute: 'jumper-label', type: String })
  jumperLabel: PaginationProps['jumperLabel'] = 'Go To';

  @property({ attribute: 'has-select', type: Boolean })
  hasSelect: PaginationProps['hasSelect'] = false;

  @property({ attribute: 'select-label', type: String })
  selectLabel: PaginationProps['selectLabel'] = 'Show';

  @property({ type: Array, attribute: false })
  itemsPerPageOptions = [
    {
      label: '10 Items',
      value: '10',
    },
    {
      label: '25 Items',
      value: '25',
    },
    {
      label: '50 Items',
      value: '50',
    },
    {
      label: '100 Items',
      value: '100',
    },
  ];

  @state() private pages: Array<number | string> = [];

  protected mediaQuery = new ResponsiveController(this);

  connectedCallback() {
    super.connectedCallback();

    setTimeout(() => {
      this.getRootNode()?.addEventListener('resize', () => this._paginate());
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.getRootNode()?.removeEventListener('resize', this._paginate);
  }

  updated(changedProperties: PropertyValues<this>) {
    if (
      changedProperties.has('currentPage') ||
      changedProperties.has('itemsPerPage') ||
      changedProperties.has('totalItems')
    ) {
      this._paginate();
    }
  }

  private _paginate() {
    this.pages = [];
    const pageListLength =
      Math.ceil(Math.abs(this.totalItems / this.itemsPerPage)) || 1;

    if (pageListLength <= 8) {
      this.pages = Array.from(Array(pageListLength), (_, index) => index + 1);
      return;
    }

    this.pages.push(1);

    if (this.currentPage < 5) {
      this.pages.push(2, 3, 4, 5, '...');
    } else if (
      this.currentPage >= 5 &&
      this.currentPage <= pageListLength - 4
    ) {
      this.pages.push(
        '...',
        this.currentPage - 1,
        this.currentPage,
        this.currentPage + 1,
        '...'
      );
    } else {
      this.pages.push(
        '...',
        pageListLength - 4,
        pageListLength - 3,
        pageListLength - 2,
        pageListLength - 1
      );
    }

    this.pages.push(pageListLength);
  }

  private _changePage(selectedPage: number): void {
    const prevPage = this.currentPage;

    this.currentPage = selectedPage;
    const event = new CustomEvent('changePage', {
      detail: {
        selectedPage,
        prevPage,
        itemsPerPage: this.itemsPerPage,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  private _pageBack(): void {
    if (this.currentPage === 1) return;
    this._changePage(this.currentPage - 1);
  }

  private _pageForward(): void {
    if (this.currentPage === this._getLastPage()) return;
    this._changePage(this.currentPage + 1);
  }

  private _getLastPage(): number {
    return +this.pages[this.pages.length - 1];
  }

  private _inputHandler(event: CustomEvent) {
    event.stopPropagation();
    const inputValue = +(event.target as HTMLInputElement).value;
    const newPage =
      inputValue > 0 ? Math.min(this._getLastPage(), inputValue) : 1;

    this._changePage(newPage);
  }

  private _selectHandler(event: CustomEvent) {
    this.itemsPerPage = +event.detail.value || 100;
    this._changePage(1);
  }

  private _renderSinglePage(page: number | string) {
    if (typeof page === 'string') {
      return html`<li class="dots">
                    <i class="icon">more_horiz</i>
                  </li>`;
    }
    const ariaCurrent = this.currentPage === page ? 'page' : undefined;

    return html` <li>
      <studs-button
        @click="${() => this._changePage(page)}"
        button-type=${this.currentPage === page ? 'primary' : 'secondary'}
        size="small"
        label="Page ${page}"
        aria-current=${ifDefined(ariaCurrent)}
      >
        ${page}
      </studs-button>
    </li>`;
  }

  private renderPages() {
    return html`
      <div class="page-container">
        <studs-button
          @click="${this._pageBack}"
          button-type="tertiary"
          icon="chevron_left"
          class="previous"
          label="Previous"
          ?disabled=${this.currentPage === 1}
        ></studs-button>
        <ul class="page-list">
          ${this.mediaQuery.isMobile
            ? html`${this._renderSinglePage(this.currentPage)}`
            : this.pages.map((page) => html`${this._renderSinglePage(page)}`)}
        </ul>
        <studs-button
          @click="${this._pageForward}"
          button-type="tertiary"
          icon="chevron_right"
          class="next"
          label="Next"
          ?disabled=${this.currentPage === this._getLastPage()}
        ></studs-button>
      </div>
    `;
  }

  render(): TemplateResult {
    const selectEl = this.hasSelect
      ? html`
          <div class="select">
            <label>${this.selectLabel}</label>
            <studs-dropdown
              value=${this.itemsPerPage}
              .options=${this.itemsPerPageOptions}
              @change="${this._selectHandler}"
            >
            </studs-dropdown>
          </div>
        `
      : null;

    const jumperEl = this.hasJumper
      ? html` <div class="jumper">
          <label>${this.jumperLabel}</label>
          <studs-input
            value="${this.currentPage}"
            input-size="small"
            @change="${this._inputHandler}"
          ></studs-input>
        </div>`
      : null;

    const getHelperElements = () => {
      if (!this.hasSelect && !this.hasJumper) return;
      return html`
        <div class="pagination-helpers">${selectEl} ${jumperEl}</div>
      `;
    };

    return html` <nav class="pagination" aria-label="Pagination">
      ${getHelperElements()} ${this.renderPages()}
    </nav>`;
  }
}
