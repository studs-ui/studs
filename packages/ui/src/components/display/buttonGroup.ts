import { LitElement, PropertyValueMap, html, unsafeCSS } from "lit";
import {
  customElement,
  query,
  queryAssignedElements,
  state,
} from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import styles from '../../styles/lib/components/buttonGroup.scss?inline';

@customElement("studs-button-group")
export class StudsButtonGroup extends LitElement {
  @queryAssignedElements() items!: HTMLElement[];

  static styles = unsafeCSS(styles);

  @state() private _selected?: HTMLElement;
  @query(".-selected") selected!: HTMLElement;

  attachSelectedListener(event: any) {
    if (this._selected) this._selected.classList.remove("-selected");
    this._selected = event.target;
    event.target.classList.add("-selected");
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    this.items.forEach((elem: HTMLElement) => {
      elem.addEventListener("click", this.attachSelectedListener);
    });
  }

  render() {
    const classes = {
      buttonGroup: true,
    };
    return html`<div class=${classMap(classes)}>
      <slot></slot>
    </div>`;
  }
}
