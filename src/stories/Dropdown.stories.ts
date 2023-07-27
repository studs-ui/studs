import type { StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Studs/Inputs/Dropdown",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-dropdown
    class="${args.class}"
    label="${args.label}"
    icon="${args.icon}"
    ?disabled="${args.disabled}"
    .options=${args.options}
    .selected=${args.selected}
  ></studs-dropdown>`,
  argTypes: {},
};

export default meta;

type Story = StoryObj<any>;

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
