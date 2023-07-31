import type { StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { size } from "../utils/_argTypes";

const meta = {
  title: "Studs/Inputs/Switch",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-switch
    checked=${args.checked}
    disabled=${args.disabled}
    label=${args.label}
    label-position=${args.labelPosition}
    name=${args.name}
    size=${args.size}
  ></studs-switch>`,
  argTypes: {
    ...size,
    labelPosition: {
      control: { type: "select" },
      options: ["start", "end", "top", "bottom"],
    },
  },
};

export default meta;
type Story = StoryObj<any>;

export const Switch: Story = {
  args: {
    checked: true,
    disabled: false,
    label: "Toggle Switch",
    labelPosition: "end",
    name: "switch",
    size: "small",
  },
};
