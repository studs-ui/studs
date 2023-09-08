import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { DropdownProps } from '../../components/inputs/dropdown';

const meta = {
  title: "Studs/Inputs/Dropdown",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-dropdown
    label=${ifDefined(args.label)}
    icon=${ifDefined(args.icon)}
    size=${ifDefined(args.size)}
    type=${ifDefined(args.type)}
    ?disabled=${args.disabled}
    .options=${ifDefined(args.options)}
    .selected=${ifDefined(args.selected)}
  ></studs-dropdown>`,
  argTypes: {
    label: {
      control: {
        type: "text",
      }
    },
    icon: {
      control: {
        type: "text",
      }
    },
    disabled: {
      control: {
        type: "boolean",
      }
    },
    type: {
      control: {
        type: "select",
      },
      options: ["default", "search", "multi"],
      table: {
        type: {
          summary: "string",
          detail: `"default" | "search" | "multi"`
      }
    }
    },
    options: {
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "Option[]",
          detail: `interface Option {
            label: string;
            value: string;
            icon?: Icon;
          }`
        }
      }
    },
    selected: {
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "Option",
          detail: `interface Option {
            label: string;
            value: string;
            icon?: Icon;
          }`
        }
      }
    },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium"],
    }
  },
} satisfies Meta<DropdownProps>;

export default meta;

type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
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
    size: "medium"
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

export const Searchable: Story = {
  args: {
    type: "search",
    options: [
      { value: "1", label: "Cat" },
      { value: "2", label: "Dog" },
      { value: "3", label: "Rat" },
      { value: "4", label: "Monkey" },
    ],
    selected: {
      value: "2",
      label: "Dog",
    },
  },
}