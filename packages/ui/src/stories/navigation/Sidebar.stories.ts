import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { SidebarProps } from "../../components/navigation/sidebar";

const meta = {
  title: "Studs/Navigation/Sidebar",
  tags: ["autodocs"],
  render: (args) => html`
  <studs-sidebar 
    .items="${mockdata}" 
    .showIcon="${args.showIcon}"
  >
  </studs-sidebar>`,
  argTypes: {
    showIcon: {
        control: {
            type: 'boolean',
            default: false,
        }
    },
  },
} satisfies Meta<SidebarProps>;

export default meta;

type Story = StoryObj<SidebarProps>;

export const Default: Story = {
  args: {
    showIcon: true,
  },
};

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