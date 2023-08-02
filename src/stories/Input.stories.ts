import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { InputProps } from "../components/inputs/input";

const meta = {
  title: "Studs/Inputs/Input",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-input
    classes=${ifDefined(args.classes)}
    variant=${ifDefined(args.variant)}
    inputSize=${ifDefined(args.inputSize)}
    label=${args.label}
    ?error=${args.error}
    helperText=${ifDefined(args.helperText)}
    adornment=${ifDefined(args.adornment)}
    adornmentPosition=${ifDefined(args.adornmentPosition)}
    ?fullWidth=${args.fullWidth}
    type=${args.type}
  ></studs-input>`,
  argTypes: {
    variant: { control: { type: "select", options: ["standard", "outlined", "filled"] } },
    inputSize: { control: { type: "select", options: ["small", "medium", "large"] } },
    label: { control: "text" },
    error: { control: "boolean" },
    helperText: { control: "array" },
    adornment: { control: "text" },
    adornmentPosition: { control: { type: "select", options: ["start", "end"] } },
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
