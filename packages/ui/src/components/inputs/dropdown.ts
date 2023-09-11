import style from '@studs/styles/components/dropdowns.scss?inline';
import { LitElement, PropertyValueMap, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { map } from 'lit/directives/map.js';
import { Icon, IconController } from '../../controllers/iconController';
import { PopperController } from '../../controllers/popperController';
import { WithForm, WithFormInterface } from '../../mixins/withForm';
import { WithPopper, WithPopperInterface } from '../../mixins/withPopper';
import { choose } from 'lit/directives/choose.js';

export interface DropdownProps extends WithFormInterface, WithPopperInterface {
  icon?: Icon;
  options: Option[];
  selected?: Option | Option[] | null;
  size: 'small' | 'medium';
  type: 'default' | 'search' | 'multi';
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
  @property({ type: String }) size?: DropdownProps['size'] = 'medium';
  @property({ type: String }) type?: DropdownProps['type'] = 'default';

  @state() private _query?: string;

  @query('.toggle.-wrapper') toggleButton?: HTMLElement;

  /**
   * Initiate PopperController
   */

  constructor() {
    super();
    if (this.popperController) {
      this.popperController.options = {
        placement: 'bottom',
      };
      this.popperController.on = 'toggle';
    }
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.firstUpdated(_changedProperties);
    if (this.popperController && this.toggleButton instanceof HTMLElement) {
      this.element = this.toggleButton;
      this.scheduleUpdate();
    }
  }

  static styles = [
    unsafeCSS(style),
    IconController.styles,
    PopperController.styles,
  ];

  private iconController = new IconController();

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.updated(_changedProperties);
    if (this.options?.length > 5 && this.type === 'default') {
      this.type = 'search';
    }
  }

  get getSelected(): string | string[] | undefined {
    if (this.options) {
      if (this.selected) {
        return choose(this.type, [
          [
            'default',
            () => {
              return (this.selected as Option)?.label;
            },
          ],
          [
            'search',
            () => {
                this._query = (this.selected as Option)?.label;
                this.requestUpdate();
                return (this.selected as Option)?.label;
              },
          ],
          [
            'multi',
            () => {
              return (this.selected as Option[]).map((option: Option) => option.label);
            },
          ],
        ]);
      } else if (!this.placeholder) {
        if(this.type === "default") return this.options[0].label;
      } else if(this.placeholder) {
        return this.placeholder
      } else {
        return;
      }
    } else {
      return this.placeholder || '';
    }
  }

  private getTemplate(option: Option) {
    return choose (this.type, [
      ['multi', () => {
        const selected = (this.selected as Option[]).some((selectedOption: Option) => selectedOption.value === option.value);
        return html`
          <li class=${classMap({
            dropdown: true,
            '-option': true,
            '-selected': selected,
          })}
          @click=${() => this.onMultiChange(option)}
          >
            <studs-checkbox label=${option.label} .checked=${selected}></studs-checkbox>
          </li>
        `
      }],
    ], () => html`
        <li>
            <button
              class=${classMap({
                dropdown: true,
                '-option': true,
                '-selected':
                  option.value === (this.selected as Option)?.value,
              })}
              @click=${() => this.onSingleChange(option)}
            >
              ${option.label}
              ${(this.selected as Option)?.value === option.value
                ? this.iconController.icon('check')
                : null}
            </button>
        </li>`);
    } 
  

  private getOptions() {
    if (this.options)
      return choose(this.type, [
          [
            'search',
            () => {
            const options = this._query ? this.options.filter((option: Option) => option.label.toLowerCase().includes(this._query.toLowerCase())) : this.options;
            return map(options, (option: Option) => {
              return this.getTemplate(option);
            });
          },
          ]
      ], 
      () => {
        return map(this.options, (option: Option) => {
          return this.getTemplate(option);
        });
      }
      );
  }

  render() {
    return html` <div
      class=${classMap({
        dropdown: true,
        '-wrapper': true,
        [`-${this.size}`]: this.size || false,
        '-icon': this.icon || false,
      })}
      ?disabled=${this.disabled}
    >
      ${this.label ? html`<p>${this.label}</p>` : nothing}
      <div class="dropdown -content">
        <div
          class="toggle -wrapper"
          ?disabled=${this.disabled}
          aria-label="Toggle Dropdown"
        >
          ${choose(this.type, [
            [
              'default',
              () =>
                html`<button class="toggle -item">
                  ${this.getSelected} ${this.iconController.icon('expand_more')}
                </button>`,
            ],
            [
              'search',
              () => html`<span class="toggle -item"
                ><input
                  type="text"
                  placeholder=${this.placeholder}
                  .value=${this._query || this.getSelected || ''}
                  @input=${(e: any) => {
                    this._query = e.target.value;
                    if (this._query === '' || typeof this.query === undefined) this.selected = undefined;
                    this.dispatch(e.target.value);
                  }}
                />${this.iconController.icon('expand_more')}</span
              >`,
            ],
            [
              'multi',
              () => html`<span class="toggle -item">${map(this.getSelected as any, (option: Option) => html`<studs-chip deletable @delete=${() => this.onSelectedDelete(option)}>${option}</studs-chip>`)}${this.iconController.icon('expand_more')}`,
            ],
          ])}
          ${this.icon
            ? html`<studs-button
                class="dropdown -action"
                icon=${this.icon}
                button-type="text"
                size="small"
                @click=${this.onActionButtonClick}
              ></studs-button>`
            : nothing}
        </div>

        <ul class="dropdown -menu popper" role="menu">
          ${this.getOptions()}
          <slot></slot>
          <div id="arrow"></div>
        </ul>
      </div>
    </div>`;
  }

  private onSingleChange(option: Option) {
    this.selected = option;
    if(this.type === "search") this._query = undefined;
    this.dispatch(option);
    this.popperController?.hidePopper();
    if (this._internals?.form) {
      this._internals.setFormValue(option.value);
    }
  }

  private onSelectedDelete(option: Option) {
    const selected = this.selected as Option[];
    const index = selected.findIndex((selectedOption: Option) => selectedOption.value === option.value);
    selected.splice(index, 1);
    this.selected = selected;
    this.requestUpdate();
    this.dispatch(this.selected);
    this.popperController?.hidePopper();
    if (this._internals?.form) {
      this._internals.setFormValue(JSON.stringify(this.selected));
    }
  }

  private onMultiChange(option: Option) {
    if(this.selected) {
      const selected = this.selected as Option[];
      const index = selected.findIndex((selectedOption: Option) => selectedOption.value === option.value);
      if(index > -1) {
        selected.splice(index, 1);
      } else {
        selected.push(option);
      }
      this.selected = selected;
    } else {
      this.selected = [option];
    }
    this.requestUpdate();
    this.dispatch(this.selected);
    if (this._internals?.form) {
      this._internals.setFormValue(JSON.stringify(this.selected));
    }
  }


  private onActionButtonClick() {
    this.dispatchEvent(
      new CustomEvent('action-button-click', { bubbles: true, composed: true })
    );
  }
}
