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
    display=${ifDefined(args.display)}
    input-size=${ifDefined(args.inputSize)}
    messageType=${ifDefined(args.messageType)}
    ?disabled=${args.disabled}
    ?required=${args.required}
    ?error=${args.error}
    .helperText=${args.helperText}
    adornment=${ifDefined(args.adornment)}
    adornment-position=${ifDefined(args.adornmentPosition)}
    adornment-type=${ifDefined(args.adornmentType)}
  ></studs-input>`,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "password", "number", "tel", "email", "search", "file"],
    },
    name: { control: "text" },
    placeholder: { control: "text" },
    label: { control: "text" },
    display: {
      control: { type: "select" },
      options: ["inline", "block"],
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
    adornmentType: {
      control: { type: "select" },
      options: ["icon", "text"],
    }
  },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    type: "text",
    label: "Default Input",
    helperText: ["First error", "Second error"],
  },
};


export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const LabelBlock: Story = {
  args: {
    label: "Label Block",
    display: "block",
  },
}

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
    adornment: "lbs",
    adornmentPosition: "end",
  },
};

export const AdornmentIcon: Story = {
  args: {
    type: "text",
    label: "Adornment Icon",
    adornment: "info",
    adornmentType: "icon",
  }
}

export const Search: Story = {
  render: (args: any) => {
    
    function onSubmit(e) {
      e.preventDefault()
      console.log(e);
    }
    
    return html`<form onSubmit=${onSubmit}><studs-input
    type=${ifDefined(args.type)}
    name=${ifDefined(args.name)}
    value=${ifDefined(args.value)}
    placeholder=${ifDefined(args.placeholder)}
    label=${ifDefined(args.label)}
    display=${ifDefined(args.display)}
    input-size=${ifDefined(args.inputSize)}
    messageType=${ifDefined(args.messageType)}
    ?disabled=${args.disabled}
    ?required=${args.required}
    ?error=${args.error}
    .helperText=${args.helperText}
    adornment=${ifDefined(args.adornment)}
    adornment-position=${ifDefined(args.adornmentPosition)}
    adornment-type=${ifDefined(args.adornmentType)}
    @submit=${args.onSubmit}
  ></studs-input></form>`},
  args: {
    type: "search",
    label: "Search",
  },
}

export const Password: Story = {
  args: {
    type: "password",
    label: "Password",
  },
}

export const ErrorMessage: Story = {
  args: {
    type: "text",
    label: "Label",
    messageType: "error",
    error: true,
    helperText: ["First error", "Second error"],
  },
};
