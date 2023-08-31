import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { BadgeProps } from "../../components/display/badge";
import { icon, size } from '../../utils/_argTypes';

const meta = {
    title: "Studs/Display/Badge",
    tags: ["autodocs"],
    render: (args: any) => html`<studs-badge
        icon=${ifDefined(args.icon)}
        count=${ifDefined(args.count)}
        max=${ifDefined(args.max)}
        ?show-zero=${args.showZero}
        size=${ifDefined(args.size)}
        position=${ifDefined(args.position)}
        color=${ifDefined(args.color)}
        ?marker=${args.marker}
    ></studs-badge>`,
    argTypes: {
        ...size,
        ...icon,
        count: {
            control: {
                type: "number",
                min: 0,
                max: 999,
                step: 1,
            },
        },
        max: {
            control: {
                type: "number",
                min: 0,
                max: 999,
                step: 1,
            },
        },
        showZero: {
            control: {
                type: "boolean",
            },
        },
        position: {
            control: {
                type: "select",
            },
            options: ["top-right", "top-left", "bottom-right", "bottom-left"],
        },
        color: {
            control: {
                type: "select",

                options: ["primary", "info", "warning", "error", "success"],
            },
        },
        marker: {
            control: {
                type: "boolean",
            },
        },
    }
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<BadgeProps>;

export const Default: Story = {
    args: {
        icon: "info",
        count: 1,
        max: 99,
        showZero: false,
        size: "medium",
        position: "top-right",
        color: "primary",
        marker: false,
    },
};

export const Icon: Story = {
    args: {
        icon: "info",
        count: 0
    }
}

export const Info: Story = {
    args: {
        count: 5,
        max: 99,
        showZero: false,
        size: "medium",
        position: "top-right",
        color: "info",
        marker: false,
    },
};

export const Warning: Story = {
    args: {
        count: 17,
        max: 99,
        showZero: false,
        size: "medium",
        position: "top-right",
        color: "warning",
        marker: false,
    },
};

export const Error: Story = {
    args: {
        count: 102,
        max: 99,
        showZero: false,
        size: "medium",
        position: "top-right",
        color: "error",
        marker: false,
    },
};

export const Success: Story = {
    args: {
        count: 22,
        max: 99,
        showZero: false,
        size: "medium",
        position: "top-right",
        color: "success",
        marker: false,
    },
};
