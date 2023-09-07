import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Icon, IconController } from '../../controllers/iconController';

export interface IconProps {
  icon: Icon;
  size: 'small' | 'medium' | 'large' | 'extraLarge';
  color: 'inherit' | 'primary' | 'secondary' | 'tertiary';
}

@customElement('studs-icon')
export class StudsIcon extends LitElement {
  @property({ type: String }) icon: IconProps['icon'] = 'info';
  @property({ type: String }) size: IconProps['size'] = 'medium';
  @property({ type: String }) color: IconProps['color'] = 'inherit';

  static styles = IconController.styles;

  private iconController = new IconController();

  render() {
    if (this.icon)
      return this.iconController.icon(this.icon, {
        size: this.size,
        color: this.color,
      });
    return null;
  }
}
