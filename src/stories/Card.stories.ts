import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { CardProps } from "../components/display/card";

const meta = {
  title: "Studs/Surfaces/Card",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-card
    imageUrl=${ifDefined(args.imageUrl)}
    altText=${ifDefined(args.altText)}
    title=${ifDefined(args.title)}
  >
    <div slot="main">This is my custom body content.</div>
    <div slot="footer">Footer</div>
  </studs-card>`,
  argTypes: {},
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<CardProps>;

export const Card: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/200x200",
    altText: "placeholder image",
    title: "Title",
  },
};
