import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { SkeletonProps } from "../../components/display/skeleton";

const meta = {
    title: "Studs/Display/Skeleton",
    tags: ["autodocs"],
    render: (args: any) => html`<studs-skeleton
        variant="${ifDefined(args.variant)}"
        width="${ifDefined(args.width)}"
        height="${ifDefined(args.height)}"
    ></studs-skeleton>`,
    argTypes: {
        variant: {
            name: "variant",
            options: ["text", "circle", "rect"],
            control: {
                type: "select",
            },
        },
        width: {
            name: "width",
            control: {
                type: "text",
            },
        },
        height: {
            name: "height",
            control: {
                type: "text",
            },
        },
    },
} satisfies Meta<SkeletonProps>;

export default meta;

type Story = StoryObj<SkeletonProps>;

export const Default: Story = {
    args: {
        variant: "rect",
        width: "100%",
        height: "50px",
    },
};
