import { html } from 'lit';

const mockdata = [
  { label: 'Home', icon: 'home' },
  {
    label: 'Products',
    icon: 'category',
    links: [
      { label: 'Connectors', link: '/' },
      { label: 'Anchoring System', link: '/' },
      { label: 'Fastening System', link: '/' },
      { label: 'Structural Steel', link: '/' },
    ],
  },
  {
    label: 'Solutions',
    icon: 'emoji_objects',
    links: [
      { label: 'Industry Solutions', link: '/' },
      { label: 'Outdoor Living', link: '/' },
      { label: 'Project Ideas & Inspiration', link: '/' },
    ],
  },
  { label: 'Resource Center', icon: 'business_center' },
  { label: 'Training & Education', icon: 'school' },
  {
    label: 'Customer Service',
    icon: 'support_agent',
    links: [
      { label: 'Contact us', link: '/' },
      { label: 'Product Information', link: '/' },
      { label: 'Custormer Survey', link: '/' },
    ],
  },
  { label: 'Dealer Locator', icon: 'location_on' },
];

export const Navbar = html`
  <button slot="tablist">Navbar</button>
  <div slot="Navbar">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage></presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-navbar
            .items="${mockdata}"
            .showIcon="${true}"
            mode="vertical"
          >
          <section slot="header">Logo</section>
          <section slot="footer">Footer content</section>
        </studs-navbar>
        </presentational-component>
      </div>
    </div>
  </div>
`;
