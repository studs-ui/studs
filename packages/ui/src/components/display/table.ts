import { LitElement, PropertyValueMap, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '@studs/styles/components/table.scss?inline';

// https://github.com/lit/lit-element/issues/642

export interface TableProps {
  fixedHeader: boolean;
  fixedOffset: string;
}

// Basic Table
@customElement('studs-table')
export class StudsTable extends LitElement {
  static styles = unsafeCSS(style);

  get _headers(): (HTMLTableSectionElement | null)[] | undefined {
    const slot = this.shadowRoot?.querySelector('slot');
    return slot?.assignedElements().map((node) => {
      return node.querySelector('thead');
    });
  }

  // Options
  @property({ type: Boolean }) fixedHeader: TableProps['fixedHeader'] = false;
  @property({ type: String }) fixedOffset: TableProps['fixedOffset'] = '0px';

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (this.fixedHeader) {
      this._headers?.forEach((header) => {
        header?.classList.add('-sticky');
        if (this.fixedOffset) {
          header?.style.setProperty('top', this.fixedOffset);
        }
      });
    }
  }

  render() {
    return html`<div><slot></slot></div>`;
  }
}
