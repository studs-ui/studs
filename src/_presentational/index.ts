import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import pjson from "../../package.json";
import { createStandardToast, createErrorToast, createWarningToast, createSuccessToast } from '../functions/toaster';

@customElement("presentational-page")
export class PresentationalPage extends LitElement {
  render() {
    return html`
    <studs-toaster></studs-toaster>
    <presentational-tabs tabs='["Buttons", "Button Groups", "Dropdowns", "Chips", "Carousels", "Tables", "Grids", "Modals", "Popovers", "Cards", "Tooltips", "Toasts", "Switches", "Steppers"]'>
      <div slot="Buttons">
        <div class="group">
          <h2>Usage</h2>
          <presentational-usage>
            <studs-button 
            onclick="alert('clicked')" 
            buttontype="primary" 
            size="medium"
            icon="<svg>...</svg>"
            contentdirection="horizontal"
            iconposition="start"
            disabled
            >
            CTA
          </studs-button>
          </presentational-usage>
        </div>
        <div class="group">
          <h2>Examples</h2>
          <div class="componentGrid">
            <presentational-component><studs-button onclick="alert('clicked')">CTA</studs-button></presentational-component>
            <presentational-component>
              <studs-button buttontype="primary" onclick="alert('clicked')">Primary</studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button buttontype="secondary" onclick="alert('clicked')">Secondary</studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button buttontype="tertiary" onclick="alert('clicked')">Tertiary</studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button buttontype="link" onclick="alert('clicked')">Link</studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button buttontype="floating" icon="<svg width=&quot;24px&quot; height=&quot;24px&quot; stroke-width=&quot;1.5&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; color=&quot;#000000&quot;><path d=&quot;M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path></svg>" onclick="alert('clicked')"></studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button buttontype="icon" icon="<svg width=&quot;24px&quot; height=&quot;24px&quot; stroke-width=&quot;1.5&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; color=&quot;#000000&quot;><path d=&quot;M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path></svg>" onclick="alert('clicked')"></studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button buttontype="primary" iconposition="start" icon="<svg width=&quot;24px&quot; height=&quot;24px&quot; stroke-width=&quot;1.5&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; color=&quot;#000000&quot;><path d=&quot;M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path></svg>" onclick="alert('clicked')">Icon Left</studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button buttontype="primary" iconposition="end" icon="<svg width=&quot;24px&quot; height=&quot;24px&quot; stroke-width=&quot;1.5&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; color=&quot;#000000&quot;><path d=&quot;M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path></svg>" onclick="alert('clicked')">Icon Right</studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button buttontype="primary" contentdirection="vertical" icon="<svg width=&quot;24px&quot; height=&quot;24px&quot; stroke-width=&quot;1.5&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; color=&quot;#000000&quot;><path d=&quot;M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path></svg>" onclick="alert('clicked')">Vertical</studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button buttontype="primary" disabled>Disabled</studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button buttontype="primary" size="large">Large</studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button buttontype="primary" size="small">Small</studs-button>
            </presentational-component>
          </div>
        </div>
      </div>
      <div slot="Button Groups">
        <div class="group">
          <h2>Usage</h2>
          <presentational-usage><studs-button-group>
            <studs-button buttontype="primary">One</studs-button>
            <studs-button buttontype="primary">Two</studs-button>
            <studs-button buttontype="primary">Three</studs-button>
          </studs-button-group></presentational-usage>
        </div>
        <div class="group">
          <h2>Examples</h2>
          <div class="componentGrid">
            <presentational-component>
              <studs-button-group>
                <studs-button buttontype="primary">One</studs-button>
                <studs-button buttontype="primary">Two</studs-button>
                <studs-button buttontype="primary">Three</studs-button>
              </studs-button-group>
            </presentational-component>
          </div>
        </div>
      </div>
      <div slot="Dropdowns">
        <div class="group">
          <h2>Usage</h2>
            <presentational-usage><studs-dropdown label="Dropdown" options='[{"label": "test","value":"test"}, {"label":"test2","value":"test2"}]'></studs-dropdown></presentational-usage>
        </div>
        <div class="group">
          <h2>Notes</h2>
          <ul>
            <li>When using inside of a framework, ei. <code>Blazor</code>, <code>Angular</code>, <code>React</code>, <code>etc.</code>, add a <code>.</code> in front of the options attribute.</li>
          </ul>
        </div>
        <div class="group">
          <h2>Examples</h2>
          <div class="componentGrid">
            <presentational-component>
              <studs-dropdown label="Dropdown" options='[{"label": "test","value":"test"}, {"label":"test2","value":"test2"}]'></studs-dropdown>
            </presentational-component>
            <presentational-component>
              <studs-dropdown disabled label="Disabled" options='[{"label": "test","value":"test"}, {"label":"test2","value":"test2"}]'></studs-dropdown>
            </presentational-component>
            <presentational-component>
              <studs-dropdown label="Placeholder" placeholder="Placeholder" options='[{"label": "test","value":"test"}, {"label":"test2","value":"test2"}]'></studs-dropdown>
            </presentational-component>
          </div>
        </div>
      </div>
      <div slot="Chips">
        <div class="group">
          <h2>Usage</h2>
          <presentational-usage><studs-chip>Chip</studs-chip></presentational-usage>
        </div>
        <div class="group">
          <h2>Examples</h2>
          <div class="componentGrid">
            <presentational-component>
              <studs-chip>Chip</studs-chip>
            </presentational-component>
            <presentational-component>
              <studs-chip size="small">Small</studs-chip>
            </presentational-component>
            <presentational-component>
              <studs-chip size="large">Large</studs-chip>
            </presentational-component>
            <presentational-component>
              <studs-chip  deletable @delete=${(e) => {
                e.target.parentNode.removeChild(e.target);
              }} clickable>Interactable</studs-chip>
            </presentational-component>
            <presentational-component>
              <studs-chip
              clickable><img slot="accessory" class="avatar" src="./placeholders/smallUX/smallUX-avatar-sage.svg" alt="avatar">Interactable</studs-chip>
            </presentational-component>
          </div>
        </div>
      </div>
      <div slot="Carousels">
        <div class="group">
          <h2>Usage</h2>
          <presentational-usage><studs-carousel perPage="3" slides='[{"id":0,"image":"https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg","alt":"image 1"},{"id":1,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 2"},{"id":2,"image":"https://www.shutterstock.com/image-photo/black-large-heavy-thick-metal-600w-1081705028.jpg","group":"image","alt":"image 3"},{"id":3,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 4"},{"id":4,"image":"https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg","group":"image","alt":"image 5"},{"id":5,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 6"},{"id":6,"image":"https://www.shutterstock.com/image-photo/welded-metal-chain-various-rigging-600w-2238426561.jpg","group":"image","alt":"image 7"},{"id":7,"image":"https://www.shutterstock.com/image-photo/linked-blocks-bank-currencies-money-600w-1962882805.jpg","group":"image","alt":"image 8"},{"id":8,"image":"https://www.shutterstock.com/image-illustration/background-silver-metal-chain-common-600w-2157514199.jpg","group":"image","alt":"image 9"}]'></studs-carousel></presentational-usage>
        </div>
        <div class="group">
          <h2>Examples</h2>
          <div class="componentGrid -single">
            <h2>Homebrew</h2>
            <presentational-component>
              <studs-carousel perPage="3" slides='[{"id":0,"image":"https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg","alt":"image 1"},{"id":1,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 2"},{"id":2,"image":"https://www.shutterstock.com/image-photo/black-large-heavy-thick-metal-600w-1081705028.jpg","group":"image","alt":"image 3"},{"id":3,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 4"},{"id":4,"image":"https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg","group":"image","alt":"image 5"},{"id":5,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 6"},{"id":6,"image":"https://www.shutterstock.com/image-photo/welded-metal-chain-various-rigging-600w-2238426561.jpg","group":"image","alt":"image 7"},{"id":7,"image":"https://www.shutterstock.com/image-photo/linked-blocks-bank-currencies-money-600w-1962882805.jpg","group":"image","alt":"image 8"},{"id":8,"image":"https://www.shutterstock.com/image-illustration/background-silver-metal-chain-common-600w-2157514199.jpg","group":"image","alt":"image 9"}]'></studs-carousel>
            </presentational-component>
            <h2>Splide</h2>
            <presentational-component>
              <studs-splide-carousel perPage="3" slides='[{"id":0,"image":"https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg","alt":"image 1"},{"id":1,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 2"},{"id":2,"image":"https://www.shutterstock.com/image-photo/black-large-heavy-thick-metal-600w-1081705028.jpg","group":"image","alt":"image 3"},{"id":3,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 4"},{"id":4,"image":"https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg","group":"image","alt":"image 5"},{"id":5,"image":"https://www.shutterstock.com/image-vector/short-custom-urls-url-shortener-600w-2233924609.jpg","group":"image","alt":"image 6"},{"id":6,"image":"https://www.shutterstock.com/image-photo/welded-metal-chain-various-rigging-600w-2238426561.jpg","group":"image","alt":"image 7"},{"id":7,"image":"https://www.shutterstock.com/image-photo/linked-blocks-bank-currencies-money-600w-1962882805.jpg","group":"image","alt":"image 8"},{"id":8,"image":"https://www.shutterstock.com/image-illustration/background-silver-metal-chain-common-600w-2157514199.jpg","group":"image","alt":"image 9"}]'></studs-carousel>
            </presentational-component>
          </div>
        </div>
      </div>
      <div slot="Tables">
        <div class="group">
          <h2>Usage</h2>
            <presentational-usage><studs-table fixedheader fixedoffset="-1.5rem">
              <table>
                <caption>Table</caption>
                <thead>
                  <tr>
                      <th>first column</th>
                      <th>second column</th>
                      <th>third column</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                  </tr>
                </tbody>
              </table>
            </presentational-usage>
        </div>
        <div class="group">
          <h2>Examples</h2>
          <div class="componentGrid">
            <presentational-component>
              <studs-table fixedheader fixedoffset="-1.5rem">
                <table>
                  <caption>Table</caption>
                  <thead>
                    <tr>
                        <th>first column</th>
                        <th>second column</th>
                        <th>third column</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                  </tfoot>
                </table>
              </studs-table>
            </presentational-component>
          </div>
        </div>
        
      </div>
      <div slot="Grids">
        <div class="group">
          <h2>Usage</h2>
          <presentational-usage> <studs-grid
            wrapperprops="{'style': {'width': '100%', 'margin': 'auto', 'height': '100%'}}"
            tablecaption="Local Data Grid"
            pagesize="25"
            itemsperpageselector="[10, 25, 50, 100]"
            showborders="true"
            allowcolumnresizing="true"
            enableglobalsearch="true"
          ></studs-grid></presentational-usage>
        </div>
        <div class="group">
          <div class="componentGrid -single">
            <presentational-component>
              <studs-grid
              wrapperprops="{'style': {'width': '100%', 'margin': 'auto', 'height': '100%'}}"
              tablecaption="Local Data Grid"
              pagesize="25"
              itemsperpageselector="[10, 25, 50, 100]"
              showborders="true"
              allowcolumnresizing="true"
              enableglobalsearch="true"
            ></studs-grid>
              
            </presentational-component>
          </div>
        </div>
      </div>
      <div slot="Modals">
        <div class="group">
          <h2>Usage</h2>
          <presentational-usage>               <studs-modal>
            <studs-button slot="toggle">Open</studs-button>
            <h2 slot="header" class="modal -title" id="modal-1-title">Micromodal</h2>
            <p>
              Try hitting the <code>tab</code> key and notice how the focus
              stays within the modal itself. Also, <code>esc</code> to close
              modal.
            </p>
            <div slot="footer">
              <studs-button size="small" buttontype="primary"
                >Action</studs-button
              >
              <studs-button
                size="small"
                buttontype="secondary"
                data-micromodal-close
                aria-label="Close this dialog window"
              >
                Close
              </studs-button>
            </div>
          </studs-modal></presentational-usage>
        </div>
        <div class="group">
          <div class="componentGrid -single">
            <presentational-component>
              <studs-modal>
                <studs-button slot="toggle">Open</studs-button>
                <h2 slot="header" class="modal -title" id="modal-1-title">Micromodal</h2>
                <p>
                  Try hitting the <code>tab</code> key and notice how the focus
                  stays within the modal itself. Also, <code>esc</code> to close
                  modal.
                </p>
                <div slot="footer">
                  <studs-button size="small" buttontype="primary"
                    >Action</studs-button
                  >
                  <studs-button
                    size="small"
                    buttontype="secondary"
                    aria-label="Close this dialog window"
                  >
                    Close
                  </studs-button>
                </div>
              </studs-modal>
              
            </presentational-component>
          </div>
        </div>
      </div>
      <div slot="Popovers">
        <div class="group">
          <h2>Usage</h2>
          <presentational-usage>
            <studs-popover direction="left" arrowPosition="center">
              <studs-button buttontype="primary">Left</studs-button>
              <div slot="popover">This is a left popover</div>
            </studs-popover>
          </presentational-usage>
        </div>
        <div class="group">
          <div class="componentGrid">
            <presentational-component>
              <studs-popover direction="left" arrowPosition="center">
                <studs-button buttontype="primary">Left</studs-button>
                <div slot="popover">This is a left popover</div>
              </studs-popover>
            </presentational-component>
            <presentational-component>
              <studs-popover direction="right" arrowPosition="center">
                <studs-button buttontype="primary">Right</studs-button>
                <div slot="popover">This is a right popover</div>
              </studs-popover>
            </presentational-component>
            <presentational-component>
              <studs-popover direction="top" arrowPosition="center">
                <studs-button buttontype="primary">Top</studs-button>
                <div slot="popover">This is a top popover</div>
              </studs-popover>
            </presentational-component>
            <presentational-component>
              <studs-popover direction="bottom" arrowPosition="center">
                <studs-button buttontype="primary">Bottom</studs-button>
                <div slot="popover">This is a bottom popover</div>
              </studs-popover>
            </presentational-component>
          </div>
        </div>
      </div>
      <div slot="Cards">
        <div class="group">
          <h2>Usage</h2>
          <presentational-usage></presentational-usage>
        </div>
        <div class="group">
          <div class="componentGrid">
            <presentational-component>
              <studs-card
                imageUrl="https://via.placeholder.com/200x200"
                altText="Studs Card Media"
                title="Title"
                customClass="my-custom-class"
              >
                <div slot="main">This is my custom body content.</div>
                <div slot="footer">
                  <studs-button buttontype="primary" onclick="alert('clicked')">Learn more</studs-button>
                </div>
              </studs-card>
            </presentational-component>
            <presentational-component>
              <studs-card
                imageUrl="https://via.placeholder.com/200x200"
                altText="Studs Card Media"
                title="Title"
                >
                <div slot="main">This is my custom body content.</div>
                <div slot="footer">Footer</div>
              </studs-card>
            </presentational-component>
          </div>
        </div>
      </div>
      <div slot="Tooltips">
        <div class="group">
          <h2>Usage</h2>
          <presentational-usage>
            <studs-tooltip direction="left" arrowPosition="end">
              <studs-button buttontype="primary">Left</studs-button>
              <div slot="tooltip">This is a left tooltip</div>
            </studs-tooltip>
          </presentational-usage>
        </div>
        <div class="group">
          <div class="componentGrid">
            <presentational-component>
              <studs-tooltip direction="left" arrowPosition="end">
                <studs-button buttontype="primary">Left</studs-button>
                <div slot="tooltip">This is a left tooltip</div>
              </studs-tooltip>
            </presentational-component>
            <presentational-component>
              <studs-tooltip direction="right" arrowPosition="end">
                <studs-button buttontype="primary">Right</studs-button>
                <div slot="tooltip">This is a right tooltip</div>
              </studs-tooltip>
            </presentational-component>
            <presentational-component>
              <studs-tooltip direction="top" arrowPosition="end">
                <studs-button buttontype="primary">Top</studs-button>
                <div slot="tooltip">This is a top tooltip</div>
              </studs-tooltip>
            </presentational-component>
            <presentational-component>
              <studs-tooltip direction="bottom" arrowPosition="end">
                <studs-button buttontype="primary">Bottom</studs-button>
                <div slot="tooltip">This is a bottom tooltip</div>
              </studs-tooltip>
            </presentational-component>
          </div>
        </div>
      </div> 
      <div slot="Toasts">
        <div class="group">
          <h2>Usage</h2>
          <presentational-usage>
            <studs-toast title="Toast"></studs-toast>
          </presentational-usage>
        </div>
        <div class="group">
          <div class="componentGrid">
            <presentational-component>
              <studs-toast open static heading="Info" type="info" message="Info Toast" action="Button" closeable onactionclick="alert('clicked')"></studs-toast>
            </presentational-component>
            <presentational-component>
              <studs-toast open static heading="Success" type="success" message="Success Toast" closeable onactionclick="alert('clicked')"></studs-toast>
            </presentational-component>
            <presentational-component>
              <studs-toast open static heading="Warning" type="warning" message="Warning Toast" onactionclick="alert('clicked')"></studs-toast>
            </presentational-component>
            <presentational-component>
              <studs-toast open static heading="Error" type="error" message="Error Toast"></studs-toast>
            </presentational-component>
            <presentational-component>
              <studs-toast open static heading="Custom Children" type="error" message="Children Toast"><studs-button buttontype="primary" size="small">Click me</studs-button></studs-toast>
            </presentational-component>
            <presentational-component>
              <studs-toast open static heading="Long Item" type="error" message="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"><studs-button buttontype="primary" size="small">Click me</studs-button></studs-toast>
            </presentational-component>
            <presentational-component>
              <studs-button @click=${createStandardToast}>Create Standard Toast</studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button @click=${createErrorToast}>Create Error Toast</studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button @click=${createWarningToast}>Create Warning Toast</studs-button>
            </presentational-component>
            <presentational-component>
              <studs-button @click=${createSuccessToast}>Create Success Toast</studs-button>
            </presentational-component>
          </div>
        </div>
      </div>
      <div slot="Switches">
        <div class="group">
          <h2>Usage</h2>
          <presentational-usage></presentational-usage>
        </div>
        <div class="group">
          <div class="componentGrid">
            <presentational-component>
              <studs-switch 
                checked="true" 
                label="Checked" 
                @switch-change=${(e: CustomEvent) => console.log(`Switch changed! Checked status: ${e.detail.checked}`)}
              ></studs-switch>
            </presentational-component>
            <presentational-component>
              <studs-switch></studs-switch>
            </presentational-component>
            <presentational-component>
              <studs-switch disabled label="Disabled"></studs-switch>
            </presentational-component>
            <presentational-component>
              <studs-switch size="medium" checked="true"></studs-switch>
            </presentational-component>
            <presentational-component>
              <studs-switch
                size="small"
                checked="true"
                label="Switch"
                label-position="start"
                name="test-switch"
              >
              </studs-switch>
            </presentational-component>
            <presentational-component>
              <studs-switch
                size="small"
                checked="true"
                label="Bottom label"
                label-position="bottom"
                name="test-switch"
              >
              </studs-switch>
            </presentational-component>
          </div>
        </div>
      </div>
      <div slot="Steppers">
        <div class="group">
          <h2>Usage</h2>
          <presentational-usage>
            <studs-stepper>
              <studs-step>Step 1</studs-step>
              <studs-step>Step 2</studs-step>
              <studs-step>Step 3</studs-step>
            </studs-stepper>
          </presentational-usage>
        </div>
        <div class="group">
          <div class="componentGrid -single">
            <presentational-component>
              <studs-stepper step=${1} .steps=${[
      {
        id: 1,
        label: "Step 1",
        description: "This is step 1",
      },
      {
        id: 2,
        label: "Step 2",
        description: "This is step 2",
      },
      {
        id: 3,
        label: "Step 3",
        description: "This is step 3",
      },
    ]}>
              </studs-stepper>
            </presentational-component>
            <presentational-component>
              <studs-stepper direction="vertical" step=${1} .steps=${[
      {
        id: 1,
        label: "Step 1",
        description: "This is step 1",
      },
      {
        id: 2,
        label: "Step 2",
        description: "This is step 2",
      },
      {
        id: 3,
        label: "Step 3",
        description: "This is step 3",
      },
    ]}>
              </studs-stepper>
            </presentational-component>
            <presentational-component>
              <studs-stepper step=${1} .steps=${[
      {
        id: 1,
        label: "Step 1",
      },
      {
        id: 2,
        label: "Step 2",
      },
      {
        id: 3,
        label: "Step 3",
      },
      {
        id: 4,
        label: "Step 4",
      },
      {
        id: 5,
        label: "Step 5",
      },
    ]}>
              </studs-stepper>
            </presentational-component>
          </div>
        </div>
      </div>
    </presentational-tabs>
    `;
  }

  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}

@customElement("presentational-tabs")
export class PresentationalTabs extends LitElement {
  @property({ type: Array }) tabs: string[] = [];
  @state() protected _activeTab: string = this.tabs[0];
  static styles = css`
    :host section {
      display: flex;
      flex-direction: column;
      @media (min-width: 767px) {
        flex-direction: row;
      }
      width: 100%;
      height: 100%;
      gap: 1rem;
    }
    .tabs {
      &.-header {
        padding: 1.5rem 1.25rem;
        width: 100%;
        text-align: center;
        color: var(--heading-color);
        font-weight: 600;
        > code {
          padding: 0.25rem;
          border-radius: 0.15rem;
          background-color: var(--info-bkg);
          color: var(--info-color);
        }
      }
      &.-list {
        display: flex;
        min-height: 5rem;
        border-right: 1px solid var(--nav-border);
        @media (max-width: 767px) {
          width: 100%;
        }
        @media (min-width: 767px) {
          min-width: 20rem;
          flex-direction: column;
          align-items: center;
        }
      }
      &.-panel {
        overflow-y: scroll;
        padding: 1.5rem;
        flex-grow: 1;
      }
    }
    .tab {
      outline: 0;
      border: 0;
      border-bottom: 1px solid var(--nav-border);
      padding: 0.75rem 1.25rem;
      cursor: pointer;
      width: 100%;
      font-size: 1em;
      font-family: inherit;
      &.-active,
      &:hover {
        background-color: var(--button-hover);
        color: var(--button-color);
      }
    }
  `;

  setInitialTab() {
    const params = new URLSearchParams(window.location.search);
    const activeTab = params.get("tab");
    if (activeTab) {
      this._activeTab = activeTab;
    } else if (this.tabs) {
      this._activeTab = this.tabs[0];
    }
  }

  changeTab(tab: string) {
    const params = new URLSearchParams(window.location.search);
    if (tab !== this._activeTab) this._activeTab = tab;
    params.set("tab", tab);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  }

  render() {
    if (!this._activeTab) this.setInitialTab();

    return html`<section>
      <div class="tabs -list">
        <div class="tabs -header">
          ${pjson.name} <code>${pjson.version}</code>
        </div>

        ${map(this.tabs, (tab) => {
          const tabClasses = {
            tab: true,
            "-active": tab === this._activeTab,
          };
          return html`<button
            class=${classMap(tabClasses)}
            @click=${() => this.changeTab(tab)}
          >
            ${tab}
          </button>`;
        })}
      </div>
      <div class="tabs -panel">
        <h2>${this._activeTab}</h2>
        <slot name=${this._activeTab}></slot>
      </div>
    </section>`;
  }
}

@customElement("presentational-component")
export class PresentationalComponent extends LitElement {
  @state() protected _codeBlocks: string = "";

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;
      height: 100%;
      gap: 1rem;
    }
  `;

  handleSlotchange(e: any) {
    const childNodes = e.target.assignedNodes({ flatten: true });
    // ... do something with childNodes ...
    this._codeBlocks = childNodes.map((node: any) => {
      const nodeCopy = node.cloneNode(true);
      nodeCopy.innerHTML = "";
      this._codeBlocks = nodeCopy.outerHTML;

      return nodeCopy.outerHTML ? nodeCopy.outerHTML : "";
    });
  }

  renderCodeBlock() {
    if (this._codeBlocks) {
      return html`<presentational-codeblock>
        ${this._codeBlocks}
      </presentational-codeblock>`;
    }
  }

  render() {
    return html`
      <slot @slotchange=${this.handleSlotchange}></slot>
      ${this.renderCodeBlock()}
    `;
  }
}

@customElement("presentational-codeblock")
export class PresentationalCodeblock extends LitElement {
  @property({ type: Boolean }) fullWidth: boolean = false;
  @state() protected _popoverOpen: boolean = false;
  static styles = css`
    .code {
      font-size: 0.8em;
      display: block;
      padding: 0.5rem;
      border-radius: 0.15rem;
      background-color: var(--info-bkg);
      color: var(--info-color);
      width: 100%;
      word-break: break-all;
      font-family: monospace;
      &:not(.-fullwidth) {
        max-width: 500px;
      }
      margin: 0.5rem auto;
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
    .popover {
      &.-container {
        position: relative;
        width: 100%;
      }
      &.-element {
        font-size: 0.8em;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.5rem;
        border-radius: 0.15rem;
        background-color: var(--tooltip-bkg);
        color: var(--tooltip-text);
        &::before {
          position: absolute;
          content: "";
          display: inline-block;
          width: 10px;
          height: 10px;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          border-left: 0.5rem solid transparent;
          border-right: 0.5rem solid transparent;
          border-bottom: 0.5rem solid var(--tooltip-bkg);
        }
      }
    }
  `;

  onMouseEnter() {
    this._popoverOpen = true;
  }

  onMouseLeave() {
    this._popoverOpen = false;
  }

  copyCodeBlockContents(e: any) {
    const content = e?.target
      ?.assignedNodes({ flatten: true })
      .find((node: any) => node.data.includes("<"))?.textContent;
    if (content) navigator.clipboard.writeText(content);
  }

  renderPopover() {
    if (this._popoverOpen) {
      return html`<div class="popover -container">
        <div class="popover -element">Copy Code</div>
      </div>`;
    }
  }

  render() {
    const classes = {
      code: true,
      "-fullwidth": this.fullWidth,
    };
    return html`<div
        class=${classMap(classes)}
        @mouseenter=${this.onMouseEnter}
        @mouseleave=${this.onMouseLeave}
      >
        <slot @click=${this.copyCodeBlockContents}></slot>
      </div>
      ${this.renderPopover()}`;
  }
}

@customElement("presentational-usage")
export class PresentationalUsage extends LitElement {
  @property({ type: String }) code: string = "";
  @state() protected _codeBlocks: string = "";
  handleSlotchange(e: any) {
    const childNodes = e.target.assignedNodes({ flatten: true });
    // ... do something with childNodes ...
    this._codeBlocks = childNodes.map((node: any) => {
      const nodeCopy = node.cloneNode(true);
      this._codeBlocks = nodeCopy.outerHTML;
      // Remove the node from the DOM
      node.innerHTML = "";

      return nodeCopy.outerHTML ? nodeCopy.outerHTML : "";
    });
  }
  renderCodeBlock() {
    if (this._codeBlocks) {
      return html`<presentational-codeblock fullwidth>
        ${this._codeBlocks}
      </presentational-codeblock> `;
    }
  }
  render() {
    return html`
      <div style="display: none">
        <slot @slotchange=${this.handleSlotchange}></slot>
      </div>
      ${this.renderCodeBlock()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "presentational-tabs": PresentationalTabs;
    "presentational-component": PresentationalComponent;
    "presentational-codeblock": PresentationalCodeblock;
    "presentational-usage": PresentationalUsage;
    "presentational-page": PresentationalPage;
  }
}
