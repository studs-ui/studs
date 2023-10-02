import style from "@studs/styles/components/menu.scss?inline";
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PopperController } from '../../controllers/popperController';
import { WithPopper } from '../../mixins/withPopper';

@customElement('studs-menu') 
export class StudsMenu extends WithPopper(LitElement) {
    static styles = [unsafeCSS(style), PopperController.styles];

    constructor() {
        super();
        this.query = '.-wrapper';
        if (this.popperController) {
            this.popperController.on = 'toggle';
        }
    }

    render() {
        return html`
        <div class="menu -wrapper">
            <slot name="trigger"></slot>
            <div role="menu" class="popper">
                <slot></slot>
                <div id="arrow"></div>
            </div>
        </div>
        `
    }
} 