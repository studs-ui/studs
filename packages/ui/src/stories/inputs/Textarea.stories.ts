import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { contentDirection, icon, size, variants } from "../../utils/_argTypes";
import { ifDefined } from "lit/directives/if-defined.js";
import { TextareaProps } from "../../components/inputs/textarea";

const meta = {
  title: "Studs/Inputs/Textarea",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-textarea
    name=${ifDefined(args.name)}
    value=${ifDefined(args.value)}
    rows=${ifDefined(args.rows)}
    cols=${ifDefined(args.cols)}
    maxLength=${ifDefined(args.maxLength)}
    .characterCounter=${args.characterCounter}
    placeholder=${ifDefined(args.placeholder)}
    label=${ifDefined(args.label)}
    variant=${ifDefined(args.variant)}
    size=${ifDefined(args.size)}
    ?disabled=${args.disabled}
    ?required=${args.required}
    ?error=${args.error}
    messageType=${ifDefined(args.messageType)}
    .helperText=${args.helperText}
  ></studs-textarea>`,
  argTypes: {
    ...size,
    name: { control: "text" },
    placeholder: { control: "text" },
    label: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["standard", "outlined", "filled"],
      defaultValue: "outlined",
    },
    rows: { control: "number" },
    cols: { control: "number" },
    maxLength: { control: "number" },
    characterCounter: { control: "boolean" },
    messageType: {
      control: { type: "select" },
      options: ["error", "success", "warning"],
    },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    error: { control: "boolean" },
    helperText: { control: "array" },
  },
} satisfies Meta<TextareaProps>;

export default meta;
type Story = StoryObj<TextareaProps>;

export const Default: Story = {
  args: {
    label: "Default Textarea",
    variant: "outlined",
    helperText: ["First error", "Second error"],
  },
};

export const Standard: Story = {
  args: {
    label: "Standard Textarea",
    variant: "standard",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Textarea",
    variant: "outlined",
  },
};

export const Filled: Story = {
  args: {
    label: "Filled Textarea",
    variant: "filled",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ErrorMessage: Story = {
  args: {
    label: "Label",
    messageType: "error",
    error: true,
    helperText: ["First error", "Second error"],
  },
};

export const WithCharacterCounter: Story = {
  args: {
    label: "Textarea with Character Counter",
    characterCounter: true,
    maxLength: 200,
  },
};