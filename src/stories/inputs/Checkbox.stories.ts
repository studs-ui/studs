import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { CheckboxProps } from "../../components/inputs/checkbox";

const meta = {
  title: "Studs/Inputs/Checkbox",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-checkbox
    name=${ifDefined(args.name)}
    value=${ifDefined(args.value)}
    ?checked=${args.checked}
    ?disabled=${args.disabled}
    >${args.children}</studs-checkbox
  >`,
  argTypes: {
    name: { control: "text" },
    value: { control: "text" },
    checked: { control: "boolean" },
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
    children: "Checkbox",
  },
};

export const Checked: Story = {
  args: {
    name: "checkbox1",
    value: "checkbox1",
    checked: true,
    children: "Checkbox",
  },
};

export const Disabled: Story = {
  args: {
    name: "checkbox2",
    value: "checkbox2",
    checked: false,
    disabled: true,
    children: "Checkbox",
  },
};

export const CheckedDisabled: Story = {
  args: {
    name: "checkbox3",
    value: "checkbox3",
    checked: true,
    disabled: true,
    children: "Checkbox",
  },
};

export const CheckboxGroup: Story = {
  render: () => html`
    <studs-checkbox
      name="group1"
      value="group1"
      @change="${(e: CustomEvent) => console.log("Selected value:", e.detail)}"
      >Group Option 1</studs-checkbox
    >
    <studs-checkbox
      name="group2"
      value="group2"
      @change="${(e: CustomEvent) => console.log("Selected value:", e.detail)}"
      >Group Option 2</studs-checkbox
    >
    <studs-checkbox
      name="group3"
      value="group3"
      @change="${(e: CustomEvent) => console.log("Selected value:", e.detail)}"
      >Group Option 3</studs-checkbox
    >
  `,
};
