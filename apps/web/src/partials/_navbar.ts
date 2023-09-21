import { html } from 'lit';

const mockdata = [
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
  {
    label: 'Resource Center',
    icon: 'business_center',
  },
  {
    label: 'Training & Education',
    icon: 'school',
    links: [
      { label: 'Local Workshops', link: '/' },
      { label: 'Online Courses', link: '/' },
    ],
  },
  {
    label: 'Customer Service',
    icon: 'support_agent',
  },
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
          <h2>Horizontal Navbar</h2>
          <studs-navbar
            .items="${mockdata}"
            .showIcon="${true}"
            mode="horizontal"
          >
            <section slot="header">Header</section>
            <section slot="footer">Footer</section>
          </studs-navbar>
        </presentational-component>
        <presentational-component>
          <h2>Vertical Navbar</h2>
          <studs-navbar
            .items="${mockdata}"
            .showIcon="${true}"
            mode="vertical"
          >
            <section slot="header">Header</section>
            <section slot="footer">Footer</section>
          </studs-navbar>
        </presentational-component>
      </div>
    </div>
  </div>
`;
