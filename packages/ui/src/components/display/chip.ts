import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import style from '@studs/styles/components/chip.scss?inline';
import { Icon, IconController } from '../../controllers/iconController';

export interface ChipProps {
  icon?: Icon;
  iconPosition?: 'start' | 'end';
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary';
  contentDirection: 'horizontal' | 'vertical';
  disabled: boolean;
  selected: boolean;
  clickable: boolean;
  deletable: boolean;
  children?: TemplateResult | HTMLElement | string;
}

@customElement('studs-chip')
export class StudsChip extends LitElement {
  // Define Properties
  @property({ type: String }) icon?: ChipProps['icon'];
  @property({ type: String }) iconPosition?: ChipProps['iconPosition'];
  @property({ type: String }) size: ChipProps['size'] = 'medium';
  @property({ type: String }) variant: ChipProps['variant'] = 'primary';
  @property({ type: String }) contentDirection: ChipProps['contentDirection'] =
    'horizontal';
  @property({ type: Boolean }) disabled: ChipProps['disabled'] = false;
  @property({ type: Boolean }) selected: ChipProps['selected'] = false;
  @property({ type: Boolean }) clickable: ChipProps['clickable'] = false;
  @property({ type: Boolean }) deletable: ChipProps['deletable'] = false;

  static styles = [unsafeCSS(style), IconController.styles];

  renderDeleteButton() {
    if (this.deletable) {
      return html`<studs-button
        size="small"
        button-type="close"
        icon="close"
        @click=${this.onDelete}
      ></studs-button>`;
    }
  }

  private iconController = new IconController();

  renderIcon() {
    if (this.icon)
      return this.iconController.icon(this.icon, {
        size: this.size,
        color: 'inherit',
      });
  }

  render() {
    const classes = {
      chip: true,
      [`-${this.size}`]: this.size,
      [`-${this.contentDirection}`]: this.contentDirection,
      [`-${this.variant}`]: this.variant,
      '-reverse': this.iconPosition === 'start',
      '-selected': this.selected,
      '-clickable': this.clickable,
      '-deletable': this.deletable,
    };

    return html`
      <div class="${classMap(classes)}" ?disabled=${this.disabled}>
        <slot name="accessory"></slot>
        ${this.renderIcon()}
        <span class="text"><slot></slot></span>
        ${this.renderDeleteButton()}
      </div>
    `;
  }

  onDelete() {
    const event = new CustomEvent('delete', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}
