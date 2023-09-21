import { html } from 'lit';

const mockdata = [
  { label: 'Home', icon: 'home' },
  {
    label: 'Products',
    icon: 'category',
    initiallyOpened: true,
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

export const Sidebar = html`
  <button slot="tablist">Sidebar</button>
  <div slot="Sidebar">
    <div class="group">
      <h2>Usage</h2>
      <presentational-usage></presentational-usage>
    </div>
    <div class="group">
      <div class="componentGrid">
        <presentational-component>
          <studs-sidebar
            .items="${mockdata}"
            .showIcon="${true}"
          ></studs-sidebar>
        </presentational-component>
      </div>
    </div>
  </div>
`;
