import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { BreadcrumbsProps } from '../../components/display/breadcrumbs';
import { unsafeHTML } from "lit/directives/unsafe-html.js";

const meta = {
  title: "Studs/Display/Breadcrumbs",
  tags: ["autodocs"],
  render: (args: any) => html`
    <studs-breadcrumbs separator=${ifDefined(args.separator)}>
      ${unsafeHTML(args.children)}
    </studs-breadcrumbs>
  `,
  argTypes: {
    separator: {
      control: { type: "select" },
      options: ["/", ">"],
      defaultValue: "/",
    },
  },
} satisfies Meta<BreadcrumbsProps>;

export default meta;

type Story = StoryObj<BreadcrumbsProps>;

export const Default: Story = {
  args: {
    separator: "/",
    children: `
    <a href="http://www.strongtie.com">Home</a>
    <a href="http://www.strongtie.com/about">About Us</a>
    <a href="http://www.strongtie.com/contact">Contact</a>
    `
  },
};

export const CustomSeparator: Story = {
  args: {
    separator: ">",
    children: `
    <a href="http://www.strongtie.com">Home</a>
    <a href="http://www.strongtie.com/about">About Us</a>
    <a href="http://www.strongtie.com/contact">Contact</a>
    `
  },
};