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
/**
 * A custom dropdown component that extends LitElement and includes WithForm and WithPopper mixins.
 * @fires StudsDropdown#change - Fired when the selected option(s) change.
 * @fires StudsDropdown#input - Fired when the user types in the search input (only for search and multi type dropdowns).
 * @fires StudsDropdown#toggle - Fired when the dropdown is opened or closed.
 */
export class StudsDropdown extends WithForm(WithPopper(LitElement)) {
  // Element Properties
  @property({ type: String }) icon?: Icon;
  // Dropdown Properties
  @property({ type: Array }) options: Option[] = [];
  @property({ type: Object }) selected?: string | string[] | null;
  @property({ type: String }) size?: 'small' | 'medium' = 'medium';
  @property({ type: String }) type?: 'default' | 'search' | 'multi' = 'default';

  @state() private _query?: string = '';

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
    const groupOptions = this.options?.reduce((acc: Option[], option: Option) => {
      if(option.options) {
        acc.push(...option.options);
      }
      return acc;
    }, []);
    if ((this.options?.length > 5 || groupOptions?.length > 5) && this.type === 'default') {
      this.type = 'search';
    }
  }

  /**
   * Returns an array of options that match the current query.
   * If there is no query, returns all options.
   * @returns An array of Option objects.
   */
  get filteredOptions(): Option[] {
    if (!this._query) {
      return this.options;
    }
  
    const filteredOptions: Option[] = [];
  
    for (const option of this.options) {
      if (option.options) {
        const filteredSubOptions = option.options.filter(subOption => subOption.label?.toLowerCase().includes(this._query.toLowerCase()));
        if (filteredSubOptions.length > 0) {
          filteredOptions.push({ ...option, options: filteredSubOptions });
        }
      } else if (option.label?.toLowerCase().includes(this._query.toLowerCase())) {
        filteredOptions.push(option);
      }
    }
  
    return filteredOptions;
  }

  /**
   * Returns the total number of options in the dropdown, including nested options.
   * @returns The total number of options in the dropdown.
   */
  get length(): number {
    const combinedOptions = this.options?.reduce((acc: Option[], option: Option) => {
      if(option.options) {
        acc.push(...option.options);
      } else {
        acc.push(option);
      }
      return acc;
    }
    , []);
    return combinedOptions?.length || 0;
  }

  /**
   * Returns the selected option(s) label(s) based on the dropdown type.
   * @returns The selected option(s) label(s) or undefined if no option is selected.
   */
  get getSelected(): string | string[] | undefined {
    if (this.options) {
      if (this.selected) {
        return choose(this.type, [
          [
            'default',
            () => {
              const selected = this.options.find(
                (option: Option) => {
                  if(option.options) 
                    return option.options.some((subOption: Option) => subOption.value === this.selected);
                  return option.value === this.selected
                }
              )
              if(!selected?.label && selected?.options) {
                return selected?.options.find((option: Option) => option.value === this.selected)?.label;
              } else {
                return selected?.label;
              }
            },
          ],
          [
            'search',
            () => {
              const selected = this.options.find(
                (option: Option) => {
                  if(option.options) 
                    return option.options.some((subOption: Option) => subOption.value === this.selected);
                  return option.value === this.selected
                }
              )
              if(!selected?.label && selected?.options) {
                this._query = selected?.options.find((option: Option) => option.value === this.selected)?.label;;
                this.requestUpdate();
                return selected?.options.find((option: Option) => option.value === this.selected)?.label;
              } else {
                this._query = selected?.label;
                this.requestUpdate();
              }
              
              return selected?.label;
            },
          ],
          [
            'multi',
            () => {
              const selected: Option[] = [];
              (this.selected as string[]).forEach((option: string) => {
                const selectedOption = this.options.find(
                  (selectedOption: Option) => {
                    if(selectedOption.options) 
                      return selectedOption.options.some((subOption: Option) => subOption.value === option);
                    return selectedOption.value === option
                  }
                );
                if(!selectedOption?.label && selectedOption?.options) {
                  selected.push(selectedOption?.options.find((subOption: Option) => subOption.value === option) as Option);
                } 
                else {
                  selected.push(selectedOption as Option)
                }
              });
              return selected.map(
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

  /**
   * Renders the adornment for a given option in the dropdown.
   * @param option - The option to render the adornment for.
   * @returns The rendered adornment element.
   */
  private renderAdornment(option: Option) {
    if (option.image) {
      return html`<studs-image class="adornment" src=${option.image}></studs-image>`;
    } else if (option.icon) {
      return html`<span class="adornment"
        >${this.iconController.icon(option.icon)}</span
      >`;
    } else {
      return nothing;
    }
  }

  /**
   * Returns a TemplateResult for the given option, based on the type of the dropdown.
   * @param option - The option to render.
   * @returns A TemplateResult for the given option.
   */
  /**
   * Returns a TemplateResult for rendering a single option in the dropdown.
   * @param option - The option to render.
   * @returns A TemplateResult for the option.
   */
  private getOptionTemplate(option: Option): TemplateResult | undefined {
      return choose(this.type, [
        ['multi', () => {
            const selected = (this.selected as string[])?.some((selectedOption: string) => selectedOption === option.value);
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
      () => html` <li @click=${(event: MouseEvent) => this.onSingleChange(event, option)} role="option" aria-selected=${option.value === this.selected}>
        <input type="radio" id=${option.value} name=${this.name} value=${option.value} .checked=${option.value} />
        <label for=${ifDefined(option.value)}>${option.label}</label>
        ${this.renderAdornment(option)}
        ${this.selected === option.value
          ? html`<span class="selected">${this.iconController.icon('check')}</span>`
          : null}
      </li>`
    );
    
  }

  /**
   * Renders the option type for the dropdown component.
   * @param option - The option to render.
   * @returns The HTML template for the option.
   */
  private renderOptionType(option: Option) {
    if(option.options && option.options?.length > 0) {
      return html`<li class="group -wrapper">
        ${option.name ? html`<span class="group -header">${option.name}</span>` : nothing}
        <ul>
          ${repeat(option.options, (option) => option.value || option.name, (option: Option) => {
            return this.getOptionTemplate(option);
          })}
        </ul>
      </li>`
    }
    return this.getOptionTemplate(option);
  }

  /**
   * Returns a TemplateResult of the options to be rendered in the dropdown.
   * If `this.options` is defined, it will render the options based on the `type` property.
   * If `this.filteredOptions` is empty, it will render a "No options found" message.
   * @returns {TemplateResult | undefined} A TemplateResult of the options to be rendered in the dropdown.
   */
  private getOptions(): TemplateResult | undefined {
    if (this.options)
      return choose(this.type, [
          [
            'default',
            () => {
              return repeat(this.options, (option) => option.value || option.name, (option: Option) => {
                return this.renderOptionType(option);
              });
            }
          ],
        ],
        () => {
          if (this.filteredOptions.length > 0)
            return html` ${this.options && this.length > 5 && !this._query && this.type === 'multi'
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

            ${repeat(this.filteredOptions, (option) => option.value || option.name,(option: Option) => this.renderOptionType(option))}`;
          return html`<li>No options found</li>`;
        }
      ) as TemplateResult;
  }

  /**
   * Returns the toggle element for the dropdown component based on the type of dropdown.
   * @returns {TemplateResult} The toggle element as a TemplateResult.
   */
  private getToggle(): TemplateResult {
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
            this.getSelected as Option[],
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
          /><studs-badge position='center' count=${this.selected?.length || 0}></studs-badge>${this.iconController.icon('expand_more')}</span
        >`,
      ],
    ]);
  }

  render() {
    return html` <div
      part="base"
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
          ${this.getOptions()}
          <slot></slot>
          <div id="arrow"></div>
        </ul>
      </div>
    </div>`;
  }

  /**
   * Handles the change event of the search input element.
   * If the popper controller is not open, it shows the popper.
   * Sets the query to the value of the input element.
   * @param event - The input event.
   */
  private onSearchChange(event: InputEvent) {
    if (this.popperController && !this.popperController.open) {
      this.popperController.showPopper();
    }
    this._query = (event.target as HTMLInputElement).value;
  }

  /**
   * Handles the change event for a single-select dropdown.
   * @param event - The mouse or pointer event that triggered the change.
   * @param option - The selected option.
   */
  private onSingleChange(event: MouseEvent | PointerEvent, option: Option) {
    this.selected = option.value;
    if (this.type === 'search') this._query = undefined;
    this.dispatch(option);
    if ((event as PointerEvent).pointerId !== -1)
      this.popperController?.hidePopper();
    if (this.form && option.value) {
      this.setFormValue(option.value);
    }
  }

  /**
   * Handles the change event for a multi-select dropdown.
   * @param event - The mouse event that triggered the change.
   * @param option - The option that was selected or deselected.
   */
  private onMultiChange(event: MouseEvent, option: Option) {
    const target = event.target as HTMLElement;
    const checkbox = target.querySelector('studs-checkbox');

    if (this.selected) {
      const selected = this.selected as string[];
      const index = selected.findIndex(
        (selectedOption: string) => selectedOption === option.value
      );
      if (index > -1) {
        selected.splice(index, 1);
        if (checkbox) {
          checkbox.checked = false;
        } else if (target instanceof StudsCheckbox) {
            target.checked = false;
        }
      } else {
        if(option.value) selected.push(option.value);
        if (checkbox) {
          checkbox.checked = true;
        } else if (target instanceof StudsCheckbox) {
            target.checked = true;
        }
      }
      this.selected = selected;
    } else {
      if(option.value)
      this.selected = [option.value];
    }

    this._query = '';
    this.requestUpdate();
    this.dispatch(this.selected);

    if (this.form) {
      this.setFormValue(JSON.stringify(this.selected));
    }
  }

  /**
   * Handles the change event when the "Select All" checkbox is clicked.
   * @param event - The MouseEvent object.
   */
  private onSelectAllChange(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const checkbox = target.querySelector('studs-checkbox');
    const options: string[] = [];

    this.options.forEach((option: Option) => {
      if (option.options) {
        option.options.forEach((subOption: Option) => {
          if (subOption.value) options.push(subOption.value);
        });
      }
      else if (option.value) options.push(option.value);
    });

    if (JSON.stringify(this.selected) === JSON.stringify(options)) {
      this.selected = [];
      if (checkbox) {
        checkbox.checked = false;
      }
    } else {
      this.selected = options;
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

  /**
   * Callback function that is called when an option is deleted from the selected options.
   * @param option - The option that was deleted.
   */
  private onSelectedDelete = (option: Option) => {
    const selected = this.selected as string[];
    const index = selected.findIndex(
      (selectedOption: string) => selectedOption === option?.value
    );
    selected.splice(index, 1);
    this.selected = selected;
    this.requestUpdate();
    this.dispatch(this.selected);
    if (this.form) {
      this.setFormValue(JSON.stringify(this.selected));
    }
  };

  /**
   * Dispatches a custom event when the action button is clicked.
   * 
   * @returns void
   */
  private onActionButtonClick() {
    this.dispatchEvent(
      new CustomEvent('action-button-click', { bubbles: true, composed: true })
    );
  }
}
