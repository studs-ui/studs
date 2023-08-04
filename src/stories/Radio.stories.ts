import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { RadioProps } from "../components/inputs/radio";

const meta = {
  title: "Studs/Inputs/Radios",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-radio
    name=${ifDefined(args.name)}
    value=${ifDefined(args.value)}
    ?checked=${args.checked}
    ?disabled=${args.disabled}
    >${args.children}</studs-radio
  >`,
  argTypes: {
    name: { control: "text" },
    value: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<RadioProps>;

export default meta;
type Story = StoryObj<RadioProps>;

export const Default: Story = {
  args: {
    name: "radio",
    value: "radio",
    checked: false,
    children: "Radio",
  },
};

export const Checked: Story = {
  args: {
    name: "radio1",
    value: "radio1",
    checked: true,
    children: "Radio",
  },
};

export const Disabled: Story = {
  args: {
    name: "radio2",
    value: "radio2",
    checked: false,
    disabled: true,
    children: "Radio",
  },
};

export const CheckedDisabled: Story = {
  args: {
    name: "radio3",
    value: "radio3",
    checked: true,
    disabled: true,
    children: "Radio",
  },
};

export const RadioGroup: Story = {
  render: () => html`
    <studs-radio name="group" value="group1" @change="${(e: CustomEvent) => console.log('Selected value:', e.detail)}">Option 1</studs-radio>
    <studs-radio name="group" value="group2" @change="${(e: CustomEvent) => console.log('Selected value:', e.detail)}">Option 2</studs-radio>
    <studs-radio name="group" value="group3" @change="${(e: CustomEvent) => console.log('Selected value:', e.detail)}">Option 3</studs-radio>
  `,
};