import { LitElement, TemplateResult, html, nothing, unsafeCSS } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import style from "styles/footer.scss?inline";
import {
  analyticsEmailSumbission,
  analyticsFormErrors,
  analyticsForms,
  analyticsSocialMediaFollow,
} from "../../utils/_analytics";
import { WithBloomreach } from "../../mixins/withBloomreach";
import { map } from "lit/directives/map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { isMobile } from "../../utils/shared";
import { classMap } from "lit/directives/class-map.js";

export interface StudsFooterProps {}

@customElement("studs-footer")
export class StudsFooter
  extends WithBloomreach(LitElement)
  implements StudsFooterProps
{
  static styles = unsafeCSS(style);

  @state() _selected?: string;
  @state() _formStarted = false;
  @state() _mediaQueryList?: MediaQueryList;

  //   @query("#footerMainNav") _footerMainNav?: HTMLElement;

  //   connectedCallback(): void {
  //     super.connectedCallback();

  //     const mediaQueryList = window.matchMedia("screen and (max-width: 905px)");

  //     this._mediaQueryList = mediaQueryList;
  //     this._mediaQueryList.addEventListener("change", this.onMediaQueryChange);
  //     if (mediaQueryList.matches) {
  //       this.onMediaQueryChange(mediaQueryList);
  //     }
  //   }

  get menuItems() {
    if (this._page) {
      // Get Main Menu
      // @ts-ignore
      const { menu: menuRef } = this._page
        ?.getComponent("footer", "menu")
        ?.getModels();
      // Receive Content from Menu
      const menu = this._page?.getContent(menuRef);
      // @ts-ignore
      const _menuItems = menu?.getItems();
      const menuItems = this.generateMenuCollection(_menuItems);

      return menuItems;
    }
    return;
  }

  get legalMenuItems() {
    if (this._page) {
      // Get Legal Menu
      const { menu: legalMenuRef } = this._page
        ?.getComponent("footer", "bottomMenu")
        ?.getModels();
      const legalMenu = this._page?.getContent(legalMenuRef);
      const _legalMenuItems = legalMenu?.getItems();
      const legalMenuItems = this.generateMenuCollection(_legalMenuItems);

      return legalMenuItems;
    }
    return;
  }

  get newsletterFormData() {
    if (this._page) {
      const { document: formRef } = this._page
        ?.getComponent("footer", "newsletterForm")
        ?.getModels();
      const footerForm = this._page?.getContent(formRef);

      return footerForm?.getData();
    }
    return null;
  }

  private generateLinks(links?: any[]): Generator<unknown> | undefined {
    if (links)
      return map(links, (el) => {
        return html`
          <li>
            <a href=${el.link && el.link.href ? el.link.href : nothing}
              >${el.name}</a
            >
            ${el.children?.length > 0
              ? html`<ul>
                  ${this.generateLinks(el.children)}
                </ul>`
              : nothing}
          </li>
        `;
      });
  }

  private generateErrorMessage(message: string, htmlFor: string) {
    const p = document.createElement("p");
    p.classList.add("inputError");
    p.setAttribute("for", htmlFor);
    p.innerText = message;

    return p;
  }

  private renderFooterNav() {
    return html`
      <nav id="footerMainNav">
        ${map(this.menuItems, (item) => {
          return html`
            <div
              class=${classMap({
                footerNavSection: true,
                "-active":
                  (isMobile() && this._selected === item.name) || false,
              })}
            >
              <div
                @click=${() => this.onAccordianClick(item.name)}
                class="footerNavSection -header"
              >
                ${item.name}
              </div>
              ${item.children?.length > 0
                ? html`<ul class="footerNavSection -sections">
                    ${this.generateLinks(item.children)}
                  </ul>`
                : nothing}
            </div>
          `;
        })}
      </nav>
    `;
  }

  private renderLegalNav() {
    return html`<ul>
      ${this.generateLinks(this.legalMenuItems)}
    </ul>`;
  }

  private renderNewsletterForm() {
    if (this.newsletterFormData) {
      const { name, title, inputPlaceholder, cta, consentDisclaimer } =
        this.newsletterFormData;
      return html`
        <div class="newsletterForm">
          <div class="newsletterSection">
            <div class="newsletterSection -header">${title}</div>
            <iframe
              name="newsletterFormTarget"
              src="https://go.strongtie.com/l/213452/2018-12-06/423yx"
              style="display: none;"
            ></iframe>
            <form
              id=${name}
              action="https://go.strongtie.com/l/213452/2022-10-25/2fjydb"
              method="POST"
              target="newsletterFormTarget"
              novalidate
              @submit=${this.onSubmit}
            >
              <div class="newsletter -input">
                <input
                  type="email"
                  name="email"
                  placeholder="${inputPlaceholder}"
                  required
                  @focus=${this.onFormStarted}
                />
              </div>
              <button type="submit" class="newsletter -submit" formnovalidate>
                ${cta.ctaText}
              </button>
              <div class="newsletter -checkbox">
                <input
                  type="checkbox"
                  id="Opt_In_Privacy_Policy_Agreement"
                  name="Data Privacy"
                  value="true"
                  required
                  @focus=${this.onFormStarted}
                />
                <label for="Opt_In_Privacy_Policy_Agreement"
                  >${unsafeHTML(consentDisclaimer)}</label
                >
              </div>
            </form>
          </div>
          <div class="newsletterSection">
            <div class="newsletterSection -header">Connect With Us</div>
            <div class="footerSocials">
              <a href="https://www.facebook.com/strongtie" target="_blank">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_11029_9722)">
                    <path
                      d="M5.11263 0C2.28046 0 0 2.28046 0 5.11263V22.8874C0 25.7196 2.28046 28 5.11263 28H14.7464V17.0538H11.8519V13.1128H14.7464V9.74576C14.7464 7.10046 16.4566 4.67163 20.3963 4.67163C21.9914 4.67163 23.1709 4.82476 23.1709 4.82476L23.0781 8.50503C23.0781 8.50503 21.8752 8.49366 20.5625 8.49366C19.1418 8.49366 18.914 9.14824 18.914 10.2349V13.1128H23.191L23.0046 17.0538H18.914V28.0001H22.8874C25.7195 28.0001 28 25.7196 28 22.8874V5.11266C28 2.28049 25.7195 2.8e-05 22.8874 2.8e-05H5.1126L5.11263 0Z"
                      fill="#F4F4F4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11029_9722">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="https://www.instagram.com/strongtie/" target="_blank">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.709 1.24399C10.0775 1.18099 10.5138 1.16699 13.9998 1.16699C17.4858 1.16699 17.9222 1.18216 19.2895 1.24399C20.6568 1.30583 21.5902 1.52399 22.4068 1.84016C23.262 2.16333 24.0378 2.66849 24.6795 3.32183C25.3328 3.96233 25.8368 4.73699 26.1588 5.59333C26.4762 6.40999 26.6932 7.34333 26.7562 8.70833C26.8192 10.0792 26.8332 10.5155 26.8332 14.0003C26.8332 17.4863 26.818 17.9227 26.7562 19.2912C26.6943 20.6562 26.4762 21.5895 26.1588 22.4062C25.8368 23.2626 25.332 24.0386 24.6795 24.68C24.0378 25.3333 23.262 25.8373 22.4068 26.1593C21.5902 26.4767 20.6568 26.6937 19.2918 26.7567C17.9222 26.8197 17.4858 26.8337 13.9998 26.8337C10.5138 26.8337 10.0775 26.8185 8.709 26.7567C7.344 26.6948 6.41067 26.4767 5.594 26.1593C4.73758 25.8373 3.96163 25.3325 3.32017 24.68C2.66728 24.0391 2.16204 23.2635 1.83967 22.4073C1.5235 21.5907 1.3065 20.6573 1.2435 19.2923C1.1805 17.9215 1.1665 17.4852 1.1665 14.0003C1.1665 10.5143 1.18167 10.078 1.2435 8.71066C1.30534 7.34333 1.5235 6.40999 1.83967 5.59333C2.16251 4.73709 2.66814 3.96152 3.32134 3.32066C3.96188 2.66791 4.73705 2.16268 5.59284 1.84016C6.4095 1.52399 7.34284 1.30699 8.70784 1.24399H8.709ZM19.1857 3.55399C17.8323 3.49216 17.4263 3.47933 13.9998 3.47933C10.5733 3.47933 10.1673 3.49216 8.814 3.55399C7.56217 3.61116 6.88317 3.81999 6.4305 3.99616C5.832 4.22949 5.40384 4.50599 4.95467 4.95516C4.52889 5.36939 4.20121 5.87365 3.99567 6.43099C3.8195 6.88366 3.61067 7.56266 3.5535 8.81449C3.49167 10.1678 3.47884 10.5738 3.47884 14.0003C3.47884 17.4268 3.49167 17.8328 3.5535 19.1862C3.61067 20.438 3.8195 21.117 3.99567 21.5697C4.201 22.1262 4.52884 22.6313 4.95467 23.0455C5.36884 23.4713 5.874 23.7992 6.4305 24.0045C6.88317 24.1807 7.56217 24.3895 8.814 24.4467C10.1673 24.5085 10.5722 24.5213 13.9998 24.5213C17.4275 24.5213 17.8323 24.5085 19.1857 24.4467C20.4375 24.3895 21.1165 24.1807 21.5692 24.0045C22.1677 23.7712 22.5958 23.4947 23.045 23.0455C23.4708 22.6313 23.7987 22.1262 24.004 21.5697C24.1802 21.117 24.389 20.438 24.4462 19.1862C24.508 17.8328 24.5208 17.4268 24.5208 14.0003C24.5208 10.5738 24.508 10.1678 24.4462 8.81449C24.389 7.56266 24.1802 6.88366 24.004 6.43099C23.7707 5.83249 23.4942 5.40433 23.045 4.95516C22.6308 4.52941 22.1265 4.20174 21.5692 3.99616C21.1165 3.81999 20.4375 3.61116 19.1857 3.55399ZM12.3607 17.9565C13.2761 18.3376 14.2954 18.389 15.2446 18.102C16.1937 17.815 17.0138 17.2074 17.5647 16.3829C18.1156 15.5585 18.3632 14.5683 18.2652 13.5816C18.1672 12.5949 17.7297 11.6728 17.0273 10.9728C16.5796 10.5254 16.0383 10.1828 15.4422 9.96966C14.8462 9.75655 14.2103 9.67825 13.5804 9.74038C12.9505 9.80251 12.3422 10.0035 11.7993 10.329C11.2564 10.6544 10.7924 11.0962 10.4407 11.6225C10.089 12.1488 9.85839 12.7465 9.76544 13.3726C9.67249 13.9987 9.71951 14.6377 9.90313 15.2434C10.0868 15.8492 10.4024 16.4067 10.8273 16.8758C11.2523 17.345 11.776 17.714 12.3607 17.9565ZM9.3355 9.33599C9.94803 8.72346 10.6752 8.23758 11.4755 7.90608C12.2758 7.57458 13.1336 7.40396 13.9998 7.40396C14.8661 7.40396 15.7238 7.57458 16.5242 7.90608C17.3245 8.23758 18.0516 8.72346 18.6642 9.33599C19.2767 9.94852 19.7626 10.6757 20.0941 11.476C20.4256 12.2763 20.5962 13.1341 20.5962 14.0003C20.5962 14.8666 20.4256 15.7243 20.0941 16.5246C19.7626 17.325 19.2767 18.0521 18.6642 18.6647C17.4271 19.9017 15.7493 20.5967 13.9998 20.5967C12.2504 20.5967 10.5726 19.9017 9.3355 18.6647C8.09845 17.4276 7.40347 15.7498 7.40347 14.0003C7.40347 12.2509 8.09845 10.573 9.3355 9.33599ZM22.0592 8.38633C22.211 8.24314 22.3325 8.07095 22.4165 7.87996C22.5006 7.68897 22.5454 7.48306 22.5485 7.27441C22.5515 7.06577 22.5127 6.85863 22.4342 6.66527C22.3558 6.47191 22.2393 6.29625 22.0918 6.1487C21.9442 6.00115 21.7686 5.88471 21.5752 5.80626C21.3819 5.72782 21.1747 5.68896 20.9661 5.69201C20.7574 5.69505 20.5515 5.73992 20.3605 5.82397C20.1695 5.90802 19.9974 6.02954 19.8542 6.18132C19.5757 6.47653 19.4232 6.86863 19.4292 7.27441C19.4351 7.68019 19.5989 8.06768 19.8859 8.35464C20.1728 8.6416 20.5603 8.80543 20.9661 8.81134C21.3719 8.81726 21.764 8.6648 22.0592 8.38633Z"
                    fill="#F4F4F4"
                  />
                </svg>
              </a>
              <a href="https://twitter.com/strongtie" target="_blank">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.5836 5.75952C26.6094 6.19118 25.5629 6.48285 24.4628 6.61468C25.5979 5.93544 26.4472 4.86639 26.8521 3.60702C25.7856 4.2405 24.6183 4.68641 23.4011 4.92535C22.5825 4.05136 21.4983 3.47206 20.3168 3.2774C19.1353 3.08274 17.9225 3.28361 16.8669 3.84881C15.8112 4.41402 14.9717 5.31194 14.4786 6.40317C13.9855 7.4944 13.8666 8.71789 14.1401 9.88368C11.9791 9.77518 9.865 9.21349 7.93509 8.23507C6.00519 7.25665 4.30258 5.88337 2.93776 4.20435C2.47109 5.00935 2.20276 5.94268 2.20276 6.93668C2.20224 7.83151 2.4226 8.71263 2.84429 9.50187C3.26597 10.2911 3.87595 10.9641 4.6201 11.461C3.75708 11.4336 2.91311 11.2004 2.15843 10.7808V10.8508C2.15834 12.1059 2.59247 13.3223 3.38714 14.2937C4.18182 15.2651 5.2881 15.9316 6.51826 16.1802C5.71768 16.3969 4.87832 16.4288 4.0636 16.2735C4.41068 17.3534 5.08676 18.2977 5.99719 18.9743C6.90762 19.6508 8.00683 20.0257 9.14093 20.0465C7.21573 21.5578 4.83813 22.3776 2.3906 22.374C1.95704 22.3741 1.52385 22.3488 1.09326 22.2982C3.57765 23.8956 6.46966 24.7433 9.42326 24.74C19.4216 24.74 24.8874 16.459 24.8874 9.27702C24.8874 9.04368 24.8816 8.80802 24.8711 8.57468C25.9343 7.80582 26.852 6.85373 27.5813 5.76302L27.5836 5.75952Z"
                    fill="#F4F4F4"
                  />
                </svg>
              </a>
              <a href="http://www.pinterest.com/strongtie/" target="_blank">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_11029_9727)">
                    <path
                      d="M0 14C0 19.9768 3.74617 25.0798 9.01833 27.0877C8.89 25.9945 8.7535 24.192 9.0475 22.9273C9.30067 21.84 10.682 15.9997 10.682 15.9997C10.682 15.9997 10.2655 15.1655 10.2655 13.93C10.2655 11.9933 11.3878 10.5467 12.7867 10.5467C13.9767 10.5467 14.5507 11.4392 14.5507 12.509C14.5507 13.7048 13.7888 15.4922 13.3957 17.15C13.0678 18.5372 14.0922 19.6688 15.4595 19.6688C17.9363 19.6688 19.8415 17.0567 19.8415 13.286C19.8415 9.94817 17.4428 7.616 14.0187 7.616C10.0543 7.616 7.72683 10.5898 7.72683 13.664C7.72683 14.8622 8.18767 16.1455 8.764 16.8443C8.81314 16.8971 8.84785 16.9617 8.86481 17.0317C8.88177 17.1018 8.8804 17.1751 8.86083 17.2445C8.75467 17.6855 8.519 18.6317 8.4735 18.8253C8.41167 19.0797 8.27167 19.1345 8.00683 19.0108C6.26617 18.2012 5.17883 15.6567 5.17883 13.6127C5.17883 9.2155 8.372 5.17883 14.3862 5.17883C19.2208 5.17883 22.9787 8.624 22.9787 13.2277C22.9787 18.0308 19.9512 21.8972 15.7465 21.8972C14.3337 21.8972 13.0072 21.1622 12.5522 20.2953C12.5522 20.2953 11.8533 22.9577 11.6842 23.6087C11.3552 24.8733 10.4428 26.474 9.877 27.3828C11.1813 27.7842 12.565 28 14 28C21.7315 28 28 21.7315 28 14C28 6.2685 21.7315 0 14 0C6.2685 0 0 6.2685 0 14Z"
                      fill="#F4F4F4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11029_9727">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/simpson-strong-tie"
                target="_blank"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.0007 10.4635H15.3337V12.6218C15.9578 11.3805 17.5585 10.2652 19.963 10.2652C24.5725 10.2652 25.6668 12.7362 25.6668 17.2698V25.6663H21.0002V18.3023C21.0002 15.7205 20.376 14.2645 18.787 14.2645C16.5832 14.2645 15.6673 15.8337 15.6673 18.3012V25.6663H11.0007V10.4635ZM2.9985 25.468H7.66516V10.2652H2.9985V25.468ZM8.33366 5.30801C8.33384 5.69916 8.25626 6.08645 8.10545 6.44736C7.95463 6.80827 7.73359 7.13561 7.45516 7.41034C6.89096 7.97107 6.12727 8.28494 5.33183 8.28301C4.53778 8.28248 3.77586 7.96941 3.21083 7.41151C2.93341 7.13584 2.71311 6.80814 2.56256 6.44718C2.41201 6.08622 2.33417 5.6991 2.3335 5.30801C2.3335 4.51818 2.6485 3.76217 3.212 3.20451C3.77653 2.64586 4.53878 2.33266 5.333 2.33301C6.12866 2.33301 6.89166 2.64684 7.45516 3.20451C8.0175 3.76217 8.33366 4.51818 8.33366 5.30801Z"
                    fill="#F4F4F4"
                  />
                </svg>
              </a>
              <a href="http://www.youtube.com/user/strongtie" target="_blank">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_11029_9731)">
                    <path
                      d="M27.4169 7.59175C27.2584 7.02619 26.9495 6.51415 26.5232 6.11008C26.0849 5.69359 25.5477 5.39566 24.9622 5.24442C22.7712 4.66692 13.9932 4.66692 13.9932 4.66692C10.3338 4.62528 6.67523 4.80841 3.03823 5.21525C2.45279 5.37767 1.91656 5.68225 1.47723 6.10192C1.04557 6.51725 0.732898 7.02942 0.569565 7.59058C0.177207 9.70429 -0.0134275 11.8505 0.000231766 14.0003C-0.0137682 16.1481 0.176398 18.2936 0.569565 20.4099C0.729398 20.9688 1.0409 21.4786 1.47373 21.8904C1.90656 22.3023 2.44557 22.5998 3.03823 22.7573C5.2584 23.3336 13.9932 23.3336 13.9932 23.3336C17.6573 23.3753 21.3206 23.1922 24.9622 22.7853C25.5477 22.634 26.0849 22.3361 26.5232 21.9196C26.9494 21.5156 27.2578 21.0035 27.4157 20.4379C27.8183 18.325 28.0141 16.1779 28.0002 14.0271C28.0305 11.8671 27.835 9.70991 27.4169 7.59058V7.59175ZM11.2026 17.9949V10.0068L18.5059 14.0014L11.2026 17.9949Z"
                      fill="#F4F4F4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11029_9731">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `;
    }
    return nothing;
  }

  render() {
    return html`
      <footer>
        <div class="footerContent">
          ${this.renderFooterNav()} ${this.renderNewsletterForm()}
          <nav id="footerLegalNav">
            ${this.renderLegalNav()}
            <p>
              &copy; ${new Date().getFullYear()} Simpson Strong-Tie Company,
              Inc. All Rights Reserved
            </p>
          </nav>
        </div>
      </footer>
    `;
  }

  //   onMediaQueryChange(event: MediaQueryListEvent) {
  //     const enableClick = (e) => {
  //       const pElem = e.srcElement.parentElement;
  //       if (event.matches) pElem.classList.toggle("-active");
  //     };

  //     const parent = this.shadowRoot.querySelector("#footerMainNav");
  //     parent?.querySelectorAll(".footerNavSection .-header").forEach((el) => {
  //       if (event.matches) {
  //         el.addEventListener("click", enableClick);
  //       } else {
  //         el?.parentElement?.classList.remove("-active");
  //         el.removeEventListener("click", enableClick);
  //       }
  //     });
  //   }

  onAccordianClick(name: string) {
    if (isMobile()) {
      if (this._selected === name) this._selected = undefined;
      else this._selected = name;
    }
  }

  onSocialClick(e: MouseEvent) {
    const { href } = e.target as HTMLAnchorElement;
    analyticsSocialMediaFollow(href.split(".")[1], href);
  }

  onFormStarted() {
    if (!this._formStarted) {
      analyticsForms("newsletter", "start");
      this._formStarted = true;
    }
  }

  onSubmit(e: SubmitEvent) {
    const form = e.target as HTMLFormElement;
    // Retrieve Data from Form Submission
    const data = new FormData(form);

    const email = data.get("email");
    const checkbox = data.get("Data Privacy");

    // Remove Errors from Elements on Submit
    const errors = form.querySelectorAll(".inputError");
    const inputs = form.querySelectorAll(".-error");
    if (errors) {
      errors.forEach((errorElem) => {
        errorElem.remove();
      });
      inputs.forEach((errorElem) => {
        errorElem.classList.remove("-error");
      });
    }

    // Throw Errors if Invalid and append Error States
    if (!checkbox) {
      analyticsFormErrors("newsletter", "required checkbox");
      const parent = form.querySelector(".-checkbox");
      parent?.querySelector("input")?.classList.add("-error");
      const error = this.generateErrorMessage(
        "Consent required",
        "Data Privacy"
      );
      parent?.after(error);
      e.preventDefault();
    }
    if (!email) {
      analyticsFormErrors("newsletter", "required email");
      const parent = form.querySelector(".-input");
      parent?.querySelector("input")?.classList.add("-error");
      const error = this.generateErrorMessage("Enter your email", "email");
      parent?.after(error);
      e.preventDefault();
      // @ts-ignore
    } else if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
      analyticsFormErrors("newsletter", "invalid email");
      const parent = form.querySelector(".-input");
      parent?.querySelector("input")?.classList.add("-error");
      const error = this.generateErrorMessage("Enter a valid email", "email");
      parent?.after(error);
      e.preventDefault();
    }

    if (email && checkbox) {
      analyticsForms("newsletter", "submit");
      analyticsEmailSumbission("newsletter");
      // form.submit();
      form.classList.add("-formSuccess");
      const successMessage = document.createElement("p");
      successMessage.classList.add("responseMessage");
      successMessage.classList.add("-success");
      successMessage.innerText =
        "You are subscribed! A welcome email is headed your way.";
      form.append(successMessage);
      form.classList.add("-formSuccess");

      function removeMessage() {
        form.classList.remove("-formSuccess");
        successMessage.remove();

        form.removeEventListener("click", removeMessage);
      }

      form.addEventListener("click", removeMessage);
    }
  }
}
