import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { RadioProps } from '../../components/inputs/radio';

const meta = {
  title: "Studs/Inputs/Radios",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-radio
    name=${ifDefined(args.name)}
    value=${ifDefined(args.value)}
    label=${ifDefined(args.label)}
    ?checked=${args.checked}
    ?disabled=${args.disabled}
    ></studs-radio
  >`,
  argTypes: {
    name: { control: "text" },
    value: { control: "text" },
    label: { control: "text" },
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
    label: "Radio",
  },
};

export const Checked: Story = {
  args: {
    name: "radio1",
    value: "radio1",
    checked: true,
    label: "Radio",
  },
};

export const Disabled: Story = {
  args: {
    name: "radio2",
    value: "radio2",
    checked: false,
    disabled: true,
    label: "Radio",
  },
};

export const CheckedDisabled: Story = {
  args: {
    name: "radio3",
    value: "radio3",
    checked: true,
    disabled: true,
    label: "Radio",
  },
};

export const RadioGroup: Story = {
  render: () => html`
    <studs-radio-group name="group" label="Radio Group">
      <studs-radio name="group" value="groupValue1" label="Group 1" @change="${(e: CustomEvent) => console.log('Selected value:', e.detail)}"></studs-radio>
      <studs-radio name="group" value="groupValue2" label="Group 2" @change="${(e: CustomEvent) => console.log('Selected value:', e.detail)}"></studs-radio>
      <studs-radio name="group" value="groupValue3" label="Group 3" @change="${(e: CustomEvent) => console.log('Selected value:', e.detail)}"></studs-radio>
    </studs-radio-group>
  `,
};
