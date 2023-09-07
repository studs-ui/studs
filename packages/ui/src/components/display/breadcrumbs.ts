import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import style from '@studs/styles/components/breadcrumbs.scss?inline';

export interface BreadcrumbsProps {
  separator: '/' | '>';
  children?: string;
}

@customElement('studs-breadcrumbs')
export class StudsBreadcrumbs extends LitElement {
  static styles = unsafeCSS(style);

  @property({ type: String })
  separator: BreadcrumbsProps['separator'] = '/';

  @state() private _children?: Element[];

  get crumbs() {
    if (this._children) {
      return this._children
        .filter((child: Node) => child instanceof HTMLAnchorElement)
        .map(
          (child: Element) =>
            html`<li class="crumb">${child as HTMLAnchorElement}</li>`
        );
    }
  }

  render() {
    const Classes = {
      breadcrumbs: true,
      '-slash': this.separator === '/',
      '-angle': this.separator === '>',
    };

    return html`
      <ul class=${classMap(Classes)}>
        ${this.crumbs}
      </ul>
      ${this._children
        ? nothing
        : html`<slot @slotchange=${this.onSlotChange}></slot>`}
    `;
  }

  onSlotChange(e: Event) {
    const assignedElements = (e.target as HTMLSlotElement).assignedElements();
    if (assignedElements.length > 0)
      this._children = (e.target as HTMLSlotElement).assignedElements();
  }
}
