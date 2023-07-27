import type { StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Studs/Inputs/ButtonGroup",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-button-group
    class="${args.class}"
    .items=${args.items}
  ></studs-button-group>`,
  argTypes: {},
};

export default meta;
type Story = StoryObj<any>;

export const Primary: Story = {
  args: {
    items: [
      {
        children: html`<span>Button 1</span>`,
        size: "medium",
      },
      {
        children: html`<span>Button 2</span>`,
        size: "medium",
      },
      {
        children: html`<span>Button 3</span>`,
        size: "medium",
      },
    ],
  },
};
