import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Buttons } from '../partials/_buttons';
import { ButtonGroups } from '../partials/_buttongroups';
import { Dropdowns } from '../partials/_dropdowns';
import { Chips } from '../partials/_chips';
import { Carousels } from '../partials/_carousels';
import { Tables } from '../partials/_tables';
import { Grids } from '../partials/_grids';
import { Modals } from '../partials/_modals';
import { Popovers } from '../partials/_popovers';
import { Tooltips } from '../partials/_tooltips';
import { Toasts } from '../partials/_toasts';
import { Switches } from '../partials/_switches';
import { Steppers } from '../partials/_steppers';
import { Inputs } from '../partials/_inputs';
import { Radios } from '../partials/_radios';
import { Checkboxes } from '../partials/_checkboxes';
import { Textareas } from '../partials/_textarea';
import { Tabs } from '../partials/_tabs';
import { Breadcrumbs } from '../partials/_breadcrumbs';
import { Accordions } from '../partials/_accordions';
import { Badges } from '../partials/_badges';
import { Images } from '../partials/_images';
import { Resizers } from '../partials/_resizers';
import { Skeletons } from '../partials/_skeletons';
import { Spinners } from '../partials/_spinners';
import { Sliders } from '../partials/_sliders';
import { Header } from '../partials/_header';
import { Footer } from '../partials/_footer';
import { Cards } from '../partials/_cards';
import { Paginations } from '../partials/_paginations';
import { Sidebar } from '../partials/_sidebar';   

@customElement('presentational-page')
export class PresentationalPage extends LitElement {
  render() {
    return html`
      <studs-toaster></studs-toaster>
      <presentational-tabs>
        <div slot="tabgroup">Display</div>
        <!-- Accordions -->
        ${Accordions}
        <!-- Badges -->
        ${Badges}
        <!-- Breadcrumbs -->
        ${Breadcrumbs}
        <!-- Buttons-->
        ${Buttons}
        <!-- Button Groups-->
        ${ButtonGroups}
        <!-- Carousels-->
        ${Carousels}
        <!-- Chips-->
        ${Chips}
        <!-- Grids-->
        ${Grids}
        <!-- Images -->
        ${Images}
        <!-- Resizers -->
        ${Resizers}
        <!-- Skeletons -->
        ${Skeletons}
        <!-- Spinners -->
        ${Spinners}
        <!-- Steppers-->
        ${Steppers}
        <!-- Tables-->
        ${Tables}
        <!-- Tabs-->
        ${Tabs}
        <!-- Paginations -->
        ${Paginations}

        <div slot="tabgroup">Inputs</div>
        <!-- Checkboxes-->
        ${Checkboxes}
        <!-- Dropdowns-->
        ${Dropdowns}
        <!-- Inputs-->
        ${Inputs}
        <!-- Radios-->
        ${Radios}
        <!-- Slider -->
        ${Sliders}
        <!-- Switches-->
        ${Switches}
        <!-- Textarea-->
        ${Textareas}

        <div slot="tabgroup">Navigation</div>
        <!-- Header -->
        ${Header}
        <!-- Footer -->
        ${Footer}
        <!-- Sidebar -->
        ${Sidebar}

        <div slot="tabgroup">Overlays</div>
        <!-- Modals-->
        ${Modals}
        <!-- Popovers-->
        ${Popovers}
        <!-- Toasts-->
        ${Toasts}
        <!-- Tooltips-->
        ${Tooltips}
        <!-- Coachmarks -->
        <div slot="tabgroup">Surfaces</div>
        <!-- Card -->
        ${Cards}
      </presentational-tabs>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'presentational-page': PresentationalPage;
  }
}
