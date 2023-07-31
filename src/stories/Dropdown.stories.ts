import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { DropdownProps } from "../components/inputs/dropdown";

const meta = {
  title: "Studs/Inputs/Dropdown",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-dropdown
    class="${ifDefined(args.class)}"
    label="${ifDefined(args.label)}"
    icon="${ifDefined(args.icon)}"
    ?disabled="${args.disabled}"
    .options=${ifDefined(args.options)}
    .selected=${ifDefined(args.selected)}
  ></studs-dropdown>`,
  argTypes: {},
} satisfies Meta<DropdownProps>;

export default meta;

type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
    label: "Toggle Dropdown",
    disabled: false,
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
    ],
    selected: {
      value: "2",
      label: "Option 2",
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
    ],
    selected: {
      value: "2",
      label: "Option 2",
    },
  },
};

export const WithoutSelected: Story = {
  args: {
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
      { value: "4", label: "Option 4" },
    ],
  },
};
