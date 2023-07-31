import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

const meta = {
  title: "Studs/Inputs/Switch",
  tags: ["autodocs"],
  render: (args) => html`<studs-switch
    ?checked=${args.checked}
    ?disabled=${args.disabled}
    label=${ifDefined(args.label)}
    name=${ifDefined(args.name)}
    label-position=${ifDefined(args.labelPosition)}
    size=${ifDefined(args.size)}
  >
  </studs-switch>`,
  argTypes: {},
} as Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: "Switch",
    name: "switch",
    labelPosition: "right",
    size: "medium",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    label: "Switch",
    name: "switch",
    labelPosition: "right",
    size: "medium",
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: "Switch",
    name: "switch",
    labelPosition: "right",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    checked: false,
    disabled: false,
    label: "Switch",
    name: "switch",
    labelPosition: "right",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    checked: false,
    disabled: false,
    label: "Switch",
    name: "switch",
    labelPosition: "start",
    size: "medium",
  },
};

export const LeftLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    label: "Switch",
    name: "switch",
    labelPosition: "start",
    size: "medium",
  },
};
