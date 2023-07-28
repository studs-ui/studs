import type { StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Studs/Display/Card",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-card
    imageUrl=${args.imageUrl}
    altText=${args.altText}
    title=${args.title}
    <div slot="main">This is my custom body content.</div>
    <div slot="footer">Footer</div>
  ></studs-card>`,
  argTypes: {},
};

export default meta;
type Story = StoryObj<any>;

export const Card: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/200x200",
    altText: "placeholder image",
    title: "Title",
  },
};
