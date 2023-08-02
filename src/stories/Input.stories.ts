import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { InputProps } from "../components/inputs/input";

const meta = {
  title: "Studs/Inputs/Input",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-input
    classes=${args.classes}
    variant=${args.variant}
    inputSize=${args.inputSize}
    label=${args.label}
    error=${args.error}
    helperText=${args.helperText}
    adornment=${args.adornment}
    adornmentPosition=${args.adornmentPosition}
    interaction=${args.interaction}
    fullWidth=${args.fullWidth}
    type=${args.type}
  ></studs-input>`,
  argTypes: {
    classes: { control: "text" },
    variant: { control: { type: "select", options: ["standard", "outlined", "filled"] } },
    inputSize: { control: { type: "select", options: ["small", "medium", "large"] } },
    label: { control: "text" },
    error: { control: "boolean" },
    helperText: { control: "array" },
    adornment: { control: "text" },
    adornmentPosition: { control: { type: "select", options: ["start", "end"] } },
    interaction: { control: "boolean" },
    fullWidth: { control: "boolean" },
    type: { control: { type: "select", options: ["text", "password", "number", "email", "search", "file"] } },
  },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    label: "Standard Input",
  },
};

export const Standard: Story = {
  args: {
    label: "Standard Input",
    variant: "standard",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Input",
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    label: "Filled Input",
    variant: "filled",
  },
};
