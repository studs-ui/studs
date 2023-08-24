import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { InputProps } from '../../components/inputs/input';

const meta = {
  title: "Studs/Inputs/Input",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-input
    type=${ifDefined(args.type)}
    name=${ifDefined(args.name)}
    value=${ifDefined(args.value)}
    placeholder=${ifDefined(args.placeholder)}
    label=${ifDefined(args.label)}
    variant=${ifDefined(args.variant)}
    inputSize=${ifDefined(args.inputSize)}
    messageType=${ifDefined(args.messageType)}
    ?disabled=${args.disabled}
    ?required=${args.required}
    ?error=${args.error}
    .helperText=${args.helperText}
    adornment=${ifDefined(args.adornment)}
    adornment-position=${ifDefined(args.adornmentPosition)}
  ></studs-input>`,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "number", "tel", "email", "search", "file"],
    },
    name: { control: "text" },
    placeholder: { control: "text" },
    label: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["standard", "outlined", "filled"],
      defaultValue: "outlined",
    },
    inputSize: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    messageType: {
      control: { type: "select" },
      options: ["error", "success", "warning"],
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    error: { control: "boolean" },
    helperText: { control: "array" },
    adornment: { control: "text" },
    adornmentPosition: {
      control: { type: "select" },
      options: ["start", "end"],
    },
  },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    type: "text",
    label: "Default Input",
    variant: "outlined",
    helperText: ["First error", "Second error"],
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const AdornmentStart: Story = {
  args: {
    type: "text",
    label: "Adornment Start",
    adornment: "$",
    adornmentPosition: "start",
  },
};

export const AdornmentEnd: Story = {
  args: {
    type: "text",
    label: "Adornment End",
    adornment: "$",
    adornmentPosition: "end",
  },
};

export const ErrorMessage: Story = {
  args: {
    type: "text",
    label: "Label",
    messageType: "error",
    error: true,
    helperText: ["First error", "Second error"],
  },
};
