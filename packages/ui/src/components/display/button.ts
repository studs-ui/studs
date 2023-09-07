import style from '@studs/styles/components/buttons.scss?inline';
import {
  LitElement,
  PropertyValueMap,
  TemplateResult,
  html,
  unsafeCSS,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Icon, IconController } from '../../controllers/iconController';

export interface ButtonProps {
  buttonType:
    | 'cta'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'link'
    | 'floating'
    | 'icon'
    | 'square'
    | 'circle'
    | 'close';
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
  iconPosition: 'start' | 'end';
  contentDirection: 'horizontal' | 'vertical';
  icon?: Icon;
  type: 'button' | 'submit' | 'reset';
  children?: HTMLElement | TemplateResult | string;
}

@customElement('studs-button')
export class StudsButton extends LitElement {
  static formAssociated = true;
  // CSS Properties
  @property({ type: String, attribute: 'button-type' })
  buttonType: ButtonProps['buttonType'] = 'cta';
  @property({ type: String }) size: ButtonProps['size'] = 'medium';
  @property({ type: Boolean }) disabled: ButtonProps['disabled'] = false;
  @property({ type: String, attribute: 'icon-position' })
  iconPosition: ButtonProps['iconPosition'] = 'start';
  @property({ type: String, attribute: 'content-direction' })
  contentDirection: ButtonProps['contentDirection'] = 'horizontal';
  @property({ type: String }) icon?: ButtonProps['icon'];
  @property({ type: String }) type: ButtonProps['type'] = 'button';

  @state() _internals?: ElementInternals;

  static styles = [unsafeCSS(style), IconController.styles];

  private iconController = new IconController();

  connectedCallback(): void {
    super.connectedCallback();
    if (this.type === 'submit') {
      this._internals = this.attachInternals();
      this.addEventListener('click', this.submit);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.type === 'submit') {
      this.removeEventListener('click', this.submit);
    }
  }

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.updated(_changedProperties);
    if (_changedProperties.has('type')) {
      if (this.type === 'submit') {
        if (!this._internals) this._internals = this.attachInternals();
      }
    }
  }

  renderIcon() {
    if (this.icon)
      return this.iconController.icon(this.icon, {
        size: this.size,
        color: 'inherit',
      });
  }

  render() {
    const classes = {
      button: true,
      [`-${this.buttonType}`]: this.buttonType,
      [`-${this.size}`]: true,
      '-vertical': this.contentDirection === 'vertical',
      '-reverse': this.iconPosition === 'end',
    };

    return html`<button
      part="studs-button"
      class="${classMap(classes)}"
      ?disabled=${this.disabled}
      type=${ifDefined(this.type)}
    >
      ${this.renderIcon()} <slot></slot>
    </button>`;
  }

  public submit() {
    if (this._internals?.form) {
      this._internals.setFormValue(this._internals.form.noValidate ? '' : null);
      this._internals.form.submit();
    }
  }
}
