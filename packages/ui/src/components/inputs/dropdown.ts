import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import style from '@studs/styles/components/dropdowns.scss?inline';
import { WithForm, WithFormInterface } from '../../mixins/withForm';
import { Icon, IconController } from '../../controllers/iconController';

export interface DropdownProps extends WithFormInterface {
  icon?: Icon;
  options: Option[];
  selected?: Option;
  placeholder?: string;
}

interface Option {
  label: string;
  value: string;
}

@customElement('studs-dropdown')
export class StudsDropdown extends WithForm(LitElement) {
  // Element Properties
  @property({ type: String }) icon?: DropdownProps['icon'];

  // Dropdown Properties
  @property({ type: Boolean }) disabled: DropdownProps['disabled'] = false;
  @property({ type: Object }) options: DropdownProps['options'] = [];
  @property({ type: Object }) selected?: DropdownProps['selected'];
  @property({ type: String }) label: DropdownProps['label'] = 'Toggle Dropdown';

  static styles = [unsafeCSS(style), IconController.styles];

  // Internal Properties
  @state() private _open: boolean = false;

  toggle() {
    this._open = !this._open;
  }

  private iconController = new IconController();

  renderIcon() {
    if (this.icon) return this.iconController.icon(this.icon);
  }

  getSelected() {
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
        const classes = {
          '-option': true,
          '-selected': option.value === this.selected?.value,
        };
        return html`<button
          class=${classMap(classes)}
          @click=${() => this.onChange(option)}
        >
          ${option.label}
          ${this.selected?.value === option.value
            ? html`<svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 3.5L4 6L9 1"
                  stroke="#231F20"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> `
            : null}
        </button>`;
      });
  }

  render() {

    return html` <div
      class=${classMap({
        dropdown: true,
        '-container': true,
        '-open': this._open,
      })}
      ?disabled=${this.disabled}
    >
      ${this.label ? html`<p>${this.label}</p>` : nothing}
      <div class="-content">
        <button
          class="-toggle"
          ?disabled=${this.disabled}
          aria-label="Toggle Dropdown"
          @click=${() => this.toggle()}
        >
          ${this.renderIcon()} ${this.getSelected()}
          <svg
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 4L9 1"
              stroke="#383838"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="-menuWrapper" ?hidden=${!this._open}>
          <div class="-menu">${this.renderDropdownOptions()}</div>
        </div>
      </div>
    </div>`;
  }

  onChange(option: Option) {
    this.selected = option;
    this.dispatch(option);
    this.toggle();
  }
}
