import style from '@studs/styles/components/dropdowns.scss?inline';
import { LitElement, PropertyValueMap, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { Icon, IconController } from '../../controllers/iconController';
import { PopperController } from '../../controllers/popperController';
import { WithForm, WithFormInterface } from '../../mixins/withForm';
import { WithPopper, WithPopperInterface } from '../../mixins/withPopper';

export interface DropdownProps extends WithFormInterface, WithPopperInterface {
  icon?: Icon;
  options: Option[];
  selected?: Option;
  placeholder?: string;
}

interface Option {
  label: string;
  value: string;
  icon?: Icon;
}

@customElement('studs-dropdown')
export class StudsDropdown extends WithForm(WithPopper(LitElement)) {
  // Element Properties
  @property({ type: String }) icon?: DropdownProps['icon'];
  // Dropdown Properties
  @property({ type: Object }) options: DropdownProps['options'] = [];
  @property({ type: Object }) selected?: DropdownProps['selected'];
  @query('.-toggle') toggleButton?: HTMLElement;

  constructor() {
    super();
    if (this.popperController) {
      this.popperController.options = {
        placement: 'bottom',
      };
      this.popperController.on = 'toggle';
    }
  }

  static styles = [
    unsafeCSS(style),
    IconController.styles,
    PopperController.styles,
  ];

  private iconController = new IconController();

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.firstUpdated(_changedProperties);
    if (this.popperController && this.toggleButton instanceof HTMLElement) {
      this.element = this.toggleButton;
      this.scheduleUpdate();
    }
  }

  get getSelected() {
    if (this.options) {
      if (this.selected) {
        const selected = this.options.find(
          (option) => option.value === this.selected?.value
        );
        return selected?.label;
      } else if (!this.placeholder) {
        return this.options[0].label;
      } else {
        return this.placeholder;
      }
    } else {
      return this.placeholder;
    }
  }

  renderDropdownOptions() {
    if (this.options)
      return map(this.options, (option: Option) => {
        return html`<button
          class=${classMap({
            '-option': true,
            '-selected': option.value === this.selected?.value,
          })}
          @click=${() => this.onSingleChange(option)}
        >
          ${option.label}
          ${this.selected?.value === option.value
            ? this.iconController.icon('check')
            : null}
        </button>`;
      });
  }

  render() {
    return html` <div
      class=${classMap({
        dropdown: true,
        '-wrapper': true,
      })}
      ?disabled=${this.disabled}
    >
      ${this.label ? html`<p>${this.label}</p>` : nothing}
      <div class="dropdown -content">
        <button
          class="dropdown -toggle"
          ?disabled=${this.disabled}
          aria-label="Toggle Dropdown"
        >
          ${this.icon ? this.iconController.icon(this.icon) : nothing}
          ${this.getSelected} ${this.iconController.icon('expand_more')}
        </button>

        <div class="dropdown -menu popper" role="menu">
          ${this.renderDropdownOptions()}
          <slot></slot>
          <div id="arrow"></div>
        </div>
      </div>
    </div>`;
  }

  onSingleChange(option: Option) {
    this.selected = option;
    this.dispatch(option);
    this.popperController?.hidePopper();
    if (this._internals?.form) {
      this._internals.setFormValue(option.value);
    }
  }
}
