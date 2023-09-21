import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { NavbarProps } from "../../components/navigation/navbar";

const meta = {
  title: "Studs/Navigation/Navbar",
  tags: ["autodocs"],
  render: (args) => html`
  <studs-navbar 
    .items="${mockdata}" 
    .showIcon="${args.showIcon}"
    mode="${args.mode}"
  >
  </studs-navbar>`,
  argTypes: {
    showIcon: {
        control: {
            type: 'boolean',
            default: false,
        }
    },
    mode: {
        control: { type: "select" },
        options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<NavbarProps>;

export default meta;

type Story = StoryObj<NavbarProps>;

export const Default: Story = {
  args: {
    showIcon: true,
    mode: 'horizontal',
  },
};

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