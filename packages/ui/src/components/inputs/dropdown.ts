import style from '@studs/styles/components/dropdowns.scss?inline';
import { LitElement, PropertyValueMap, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { map } from 'lit/directives/map.js';
import { Icon, IconController } from '../../controllers/iconController';
import { PopperController } from '../../controllers/popperController';
import { WithForm } from '../../mixins/withForm';
import { WithPopper } from '../../mixins/withPopper';
import { StudsCheckbox } from './checkbox';
import { repeat } from 'lit/directives/repeat.js';

interface Option {
  label?: string;
  value?: string;
  name?: string;
  icon?: Icon;
  image?: string | URL;
  options?: Option[];
}

@customElement('studs-dropdown')
export class StudsDropdown extends WithForm(WithPopper(LitElement)) {
  // Element Properties
  @property({ type: String }) icon?: Icon;
  // Dropdown Properties
  @property({ type: Array }) options: Option[] = [];
  @property({ type: Object }) selected?: Option | Option[] | null;
  @property({ type: String }) size?: 'small' | 'medium' = 'medium';
  @property({ type: String }) type?: 'default' | 'search' | 'multi' = 'default';

  @state() private _query: string = '';

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
              return (this.selected as Option[]).map(
                (option: Option) => option
              );
            },
          ],
        ]);
      } else if (!this.placeholder) {
        if (this.type === 'default') return this.options[0].label;
      } else if (this.placeholder) {
        return this.placeholder;
      } else {
        return;
      }
    } else {
      return this.placeholder || '';
    }
  }

  private renderAdornment(option: Option) {
    if (option.image) {
      return html`<studs-image src=${option.image}></studs-image>`;
    } else if (option.icon) {
      return html`<span class="adornment"
        >${this.iconController.icon(option.icon)}</span
      >`;
    } else {
      return nothing;
    }
  }

  private getOptionTemplate(option: Option): TemplateResult | undefined {
    if(option.options && option.options?.length > 0) {
      return html`<li class="group">
        ${option.name ? html`<span>${option.name}</span>` : nothing}
        <ul>
          <!-- ${this.getOptions(option.options)} -->
          ${repeat(option.options, (option) => option.value || option.name, (option: Option) => {
            return this.getOptionTemplate(option);
          })}
        </ul>
      </li>`
    } else {
      return choose(this.type, [
        ['multi', () => {
            const selected = (this.selected as Option[]).some((selectedOption: Option) => selectedOption.value === option.value);
            return html`
              <li
                @click=${(event: MouseEvent) => this.onMultiChange(event, option)}
                role="option"
                aria-selected=${selected}
              >
                <studs-checkbox name=${ifDefined(this.name)} label=${ifDefined(option.label)} .checked=${selected} @change=${
              (event: Event) => {
                event.stopPropagation();
                this.onMultiChange(event as MouseEvent, option);
                }}></studs-checkbox>
                ${this.renderAdornment(option)}
              </li>
            `;
          },
        ],
      ],
      () => html` <li @click=${(event: MouseEvent) => this.onSingleChange(event, option)} role="option" aria-selected=${option.value === (this.selected as Option)?.value}>
        <input type="radio" id=${option.value} name=${this.name} value=${option.value} .checked=${option.value} />
        <label for=${ifDefined(option.value)}>${option.label}</label>
        ${this.renderAdornment(option)}
        ${(this.selected as Option)?.value === option.value
          ? html`<span class="selected">${this.iconController.icon('check')}</span>`
          : null}
      </li>`
    );
    }
  }

  private getOptions(options?: Option[]) {
    if (options)
      return choose(this.type, [
          [
            'default',
            () => {
              return repeat(this.options, (option) => option.value || option.name, (option: Option) => {
                return this.getOptionTemplate(option);
              });
            }
          ],
        ],
        () => {
          const options = this._query ? this.options.filter((option: Option) => option.label.toLowerCase().includes(this._query.toLowerCase())) : this.options;
          if (options.length > 0)
            return html` ${this.options && this.options.length > 5 && !this._query
              ? html`<li @click=${this.onSelectAllChange} role="option">
                  <studs-checkbox
                    name=${this.name}
                    label=${this.selected === this.options
                      ? 'Deselect All'
                      : 'Select All'}
                    @change=${(event: Event) => {
                      event.stopPropagation();
                      this.onSelectAllChange(event as MouseEvent);
                    }}
                  ></studs-checkbox>
                </li>`
              : null}
            ${repeat(options, (option) => option.value || option.name,(option: Option) => this.getOptionTemplate(option))}`;
          return html`<li>No options found</li>`;
        }
      );
  }

  private getToggle() {
    return choose(this.type, [
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
            type="search"
            placeholder=${ifDefined(this.placeholder)}
            .value=${this._query || (this.getSelected as string) || ''}
            @input=${(event: InputEvent) => {
              this.onSearchChange(event);
              if (this._query === '' || typeof this._query === undefined)
                this.selected = undefined;
            }}
          />${this.iconController.icon('expand_more')}</span
        >`,
      ],
      [
        'multi',
        () => html`<span class="toggle -item"
          >${map(
            this.getSelected as any,
            (option: Option) =>
              html`<studs-chip
                deletable
                @delete=${() => this.onSelectedDelete(option)}
                >${option?.label}</studs-chip
              >`
          )}<input
            type="search"
            placeholder=${this.placeholder || 'Search'}
            .value=${this._query}
            @input=${this.onSearchChange}
          />${this.iconController.icon('expand_more')}</span
        >`,
      ],
    ]);
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
          ${this.getToggle()}
          ${this.icon
            ? html`<studs-button
                class="dropdown -action"
                icon=${this.icon}
                button-type="tertiary"
                size="small"
                @click=${this.onActionButtonClick}
              ></studs-button>`
            : nothing}
        </div>

        <ul
          class="popper"
          role="listbox"
          aria-activedescendant=${ifDefined(
            this.type !== 'multi'
              ? (this.selected as Option)?.value
              : JSON.stringify(this.selected)
          )}
          aria-multiselectable=${this.type === 'multi'}
          aria-required=${ifDefined(this.required)}
        >
          ${this.getOptions(this.options)}
          <slot></slot>
          <div id="arrow"></div>
        </ul>
      </div>
    </div>`;
  }

  private onSearchChange(event: InputEvent) {
    if (this.popperController && !this.popperController.open) {
      this.popperController.showPopper();
    }
    this._query = (event.target as HTMLInputElement).value;
  }

  private onSingleChange(event: MouseEvent | PointerEvent, option: Option) {
    this.selected = option;
    if (this.type === 'search') this._query = undefined;
    this.dispatch(option);
    if ((event as PointerEvent).pointerId !== -1)
      this.popperController?.hidePopper();
    if (this.form) {
      this.setFormValue(option.value);
    }
  }

  private onMultiChange(event: MouseEvent, option: Option) {
    const target = event.target as HTMLElement;
    const checkbox = target.querySelector('studs-checkbox');

    if (this.selected) {
      const selected = this.selected as Option[];
      const index = selected.findIndex(
        (selectedOption: Option) => selectedOption.value === option.value
      );
      if (index > -1) {
        selected.splice(index, 1);
        if (checkbox) {
          checkbox.checked = false;
        } else if (target instanceof StudsCheckbox) {
            target.checked = false;
        }
      } else {
        selected.push(option);
        if (checkbox) {
          checkbox.checked = true;
        } else if (target instanceof StudsCheckbox) {
            target.checked = true;
        }
      }
      this.selected = selected;
    } else {
      this.selected = [option];
    }

    this._query = '';
    this.requestUpdate();
    this.dispatch(this.selected);

    if (this.form) {
      this.setFormValue(JSON.stringify(this.selected));
    }
  }

  private onSelectAllChange(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const checkbox = target.querySelector('studs-checkbox');
    if (this.selected === this.options) {
      this.selected = [];
      if (checkbox) {
        checkbox.checked = false;
      }
    } else {
      this.selected = this.options;
      if (checkbox) {
        checkbox.checked = true;
      }
    }
    this._query = '';
    this.requestUpdate();
    this.dispatch(this.selected);
    if (this.form) {
      this.setFormValue(JSON.stringify(this.selected));
    }
  }

  private onSelectedDelete = (option: Option) => {
    const selected = this.selected as Option[];
    const index = selected.findIndex(
      (selectedOption: Option) => selectedOption.value === option?.value
    );
    selected.splice(index, 1);
    this.selected = selected;
    this.requestUpdate();
    this.dispatch(this.selected);
    if (this.form) {
      this.setFormValue(JSON.stringify(this.selected));
    }
  };

  private onActionButtonClick() {
    this.dispatchEvent(
      new CustomEvent('action-button-click', { bubbles: true, composed: true })
    );
  }
}
