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
import inputStyles from "@studs/styles/components/checkbox.scss?inline"
import { ifDefined } from 'lit/directives/if-defined.js';

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
  image?: string | URL;
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
    unsafeCSS(inputStyles),
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
              return (this.selected as Option[]).map((option: Option) => option);
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

  private renderAdornment(option: Option) {
    if(option.image) {
      return html`<studs-image src=${option.image}></studs-image>`
    } else if (option.icon) {
      return html`<span class="adornment">${this.iconController.icon(option.icon)}</span>`
    } else {
      return nothing;
    }
  }

  private getOptionTemplate(option: Option) {
    return choose (this.type, [
      ['multi', () => {
        const selected = (this.selected as Option[]).some((selectedOption: Option) => selectedOption.value === option.value);
        return html`
          <li 
          @click=${(event: MouseEvent) => this.onMultiChange(event, option)}
          role='option'
          aria-selected=${selected}
          >
            <studs-checkbox name=${this.name} label=${option.label} .checked=${selected}></studs-checkbox>
            ${this.renderAdornment(option)}
          </li>
        `
      }],
    ], () => html`
        <li @click=${(event: MouseEvent) => this.onSingleChange(event, option)} role='option' aria-selected=${option.value === (this.selected as Option)?.value}>
            <input type="radio" id=${option.value} name=${this.name} value=${option.value} .checked=${option.value}>
            <label for=${option.value}>${option.label}</label>
              ${this.renderAdornment(option)}
              ${(this.selected as Option)?.value === option.value
                ? html`<span class="selected">${this.iconController.icon('check')}</span>`
                : null}
        </li>`);
    } 
  
  private getOptions() {
    if (this.options)
      return choose(this.type, [
          [
            'default',
            () => {
              return map(this.options, (option: Option) => {
                return this.getOptionTemplate(option);
              });
            }
          ],
      ], 
      () => {
        const options = this._query ? this.options.filter((option: Option) => option.label.toLowerCase().includes(this._query.toLowerCase())) : this.options;
        return map(options, (option: Option) => {
          return this.getOptionTemplate(option);
        });
      },
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
            placeholder=${this.placeholder}
            .value=${this._query || this.getSelected || ''}
            @input=${(e: any) => {
              this._query = e.target.value;
              if (this._query === '' || typeof this._query === undefined) this.selected = undefined;
            }}
          />${this.iconController.icon('expand_more')}</span
        >`,
      ],
      [
        'multi',
        () => html`<span class="toggle -item">${map(this.getSelected as any, (option: Option) => html`<studs-chip deletable @delete=${() => this.onSelectedDelete(option)}>${option?.label}</studs-chip>`)}<input
        type="search"
        placeholder=${this.placeholder || 'Search'}
        .value=${this._query}
        @input=${(e: any) => {
          this._query = e.target.value;
        }}
      />${this.iconController.icon('expand_more')}`,
      ],
    ])
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
                button-type="text"
                size="small"
                @click=${this.onActionButtonClick}
              ></studs-button>`
            : nothing}
        </div>

        <ul class="popper" role="listbox" aria-activedescendant=${ifDefined(this.type !== 'multi' ? (this.selected as Option)?.value : JSON.stringify(this.selected))} aria-multiselectable=${this.type === 'multi'} ?aria-required=${this.required}>
          ${this.getOptions()}
          <slot></slot>
          <div id="arrow"></div>
        </ul>
      </div>
    </div>`;
  }

  private onSingleChange(event: MouseEvent | PointerEvent, option: Option) {
    this.selected = option;
    if(this.type === "search") this._query = undefined;
    this.dispatch(option);
    if((event as PointerEvent).pointerId !== -1) this.popperController?.hidePopper();
    if (this.form) {
      this.setFormValue(option.value);
    }
  }

  private onMultiChange(event: MouseEvent, option: Option) {
    const target = event.target as HTMLElement;
    const checkbox = target.querySelector('studs-checkbox')
    if(this.selected) {
      const selected = this.selected as Option[];
      const index = selected.findIndex((selectedOption: Option) => selectedOption.value === option.value);
      if(index > -1) {
        selected.splice(index, 1);
        if(checkbox) {
          checkbox.checked = false;
        }
      } else {
        selected.push(option);
        if(checkbox) {
          checkbox.checked = true;
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

  private onSelectedDelete(option: Option) {
    const selected = this.selected as Option[];
    const index = selected.findIndex((selectedOption: Option) => selectedOption.value === option?.value);
    selected.splice(index, 1);
    this.selected = selected;
    this.requestUpdate();
    this.dispatch(this.selected);
    if (this.form) {
      this.setFormValue(JSON.stringify(this.selected));
    }
    this.popperController?.hidePopper();
  }

  private onActionButtonClick() {
    this.dispatchEvent(
      new CustomEvent('action-button-click', { bubbles: true, composed: true })
    );
  }
}
