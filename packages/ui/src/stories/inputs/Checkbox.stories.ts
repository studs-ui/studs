import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { CheckboxProps } from '../../components/inputs/checkbox';

const meta = {
  title: "Studs/Inputs/Checkbox",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-checkbox
    name=${ifDefined(args.name)}
    value=${ifDefined(args.value)}
    label=${ifDefined(args.label)}
    ?checked=${args.checked}
    ?indeterminate=${args.indeterminate}
    ?disabled=${args.disabled}
  ></studs-checkbox>`,
  argTypes: {
    name: { control: "text" },
    value: { control: "text" },
    label: { control: "text" },
    checked: { control: "boolean" },
    indeterminate: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    name: "checkbox",
    value: "checkbox",
    checked: false,
    label: "Checkbox",
  },
};

export const Checked: Story = {
  args: {
    name: "checkbox1",
    value: "checkbox1",
    checked: true,
    label: "Checkbox",
  },
};

export const Disabled: Story = {
  args: {
    name: "checkbox2",
    value: "checkbox2",
    checked: false,
    disabled: true,
    label: "Checkbox",
  },
};

export const CheckedDisabled: Story = {
  args: {
    name: "checkbox3",
    value: "checkbox3",
    checked: true,
    disabled: true,
    label: "Checkbox",
  },
};

export const Indeterminate: Story = {
  args: {
    name: "checkbox4",
    value: "checkbox4",
    indeterminate: true,
    label: "Checkbox",
  },
};

export const CheckboxGroup: Story = {
  render: () => html`
    <studs-checkbox
      name="group1"
      value="group1"
      label="Group Option 1"
      @change="${(e: CustomEvent) => console.log("Selected value:", e.detail)}"
    ></studs-checkbox>
    <studs-checkbox
      name="group2"
      value="group2"
      label="Group Option 2"
      @change="${(e: CustomEvent) => console.log("Selected value:", e.detail)}"
    ></studs-checkbox>
    <studs-checkbox
      name="group3"
      value="group3"
      label="Group Option 3"
      @change="${(e: CustomEvent) => console.log("Selected value:", e.detail)}"
    ></studs-checkbox>
  `,
};
