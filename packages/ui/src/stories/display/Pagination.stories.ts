import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { PaginationProps } from "../../components/display/pagination";

const meta = {
    title: "Studs/Display/Pagination",
    tags: ["autodocs"],
    render: (args: any) => html`
    <studs-pagination
      current-page=${ifDefined(args.currentPage)}
      total-items=${ifDefined(args.totalItems)}
      items-per-page=${ifDefined(args.itemsPerPage)}
      ?has-jumper=${args.hasJumper}
      jumper-label=${ifDefined(args.jumperLabel)}
      ?has-select=${args.hasSelect}
      select-label=${ifDefined(args.selectLabel)}
    >
    </studs-pagination>`,
    argTypes: {
        totalItems: {
            control: {
                type: 'number',
                default: 1500
            }
        },
        itemsPerPage: {
            control: {
                type: 'number',
                default: 10
            }
        },
        hasJumper: {
            control: {
                type: 'boolean',
                default: true
            }
        },
        jumperLabel: {
            control: {
                type: 'text',
                default: "Go To"
            }
        },
        hasSelect: {
            control: {
                type: 'boolean',
                default: true
            }
        },
        selectLabel: {
            control: {
                type: 'text',
                default: "Show"
            }
        },
    },
} satisfies Meta<PaginationProps>;

export default meta;
type Story = StoryObj<PaginationProps>;

export const Default: Story = {
    args: {
        currentPage: 1,
        totalItems: 1500
    },
};

export const Jumper: Story = {
    args: {
        currentPage: 1,
        totalItems: 1500,
        hasJumper: true,
    },
};

export const Select: Story = {
    args: {
        currentPage: 1,
        totalItems: 1500,
        hasSelect: true,
    },
};

export const JumperSelect: Story = {
    args: {
        currentPage: 1,
        totalItems: 1500,
        hasJumper: true,
        jumperLabel: "Go",
        hasSelect: true,
        selectLabel: "Show Items",
    },
};
