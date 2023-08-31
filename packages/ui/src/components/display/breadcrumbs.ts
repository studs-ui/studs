import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
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

  render() {
    const Classes = {
      breadcrumbs: true,
      '-slash': this.separator === '/',
      '-angle': this.separator === '>',
    };

    const crumbs = Array.from(this.children)
      .filter((child: Node) => child instanceof HTMLAnchorElement)
      .map(
        (child: Element) =>
          html`<li class="crumb">${child as HTMLAnchorElement}</li>`
      );

    return html`
      <ul class=${classMap(Classes)}>
        ${crumbs}
      </ul>
    `;
  }
}
