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
        animation="${ifDefined(args.animation)}"
    ></studs-skeleton>`,
    argTypes: {
        variant: {
            name: "variant",
            options: ["text", "circle", "rect"],
            control: {
                type: "select",
            },
        },
        animation: {
            name: "animation",
            options: ["linear", "pulse", "wave"],
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

export const Circle: Story = {
    args: {
        variant: "circle",
        width: "50px",
        height: "50px",
    },

}

export const Text: Story = {
    args: {
        variant: "text",
        width: "100px",
        height: "50px",
    },
}

export const Group: Story = {
    render: () => html`<div style="display: flex; gap: 10px;">
            <studs-skeleton variant="circle" width="75px" height="75px"></studs-skeleton>
        <div style="display: flex; flex-direction: column; gap: 10px; align-items: center; justify-content: center;">
            <studs-skeleton variant="text" width="100px" height="15px"></studs-skeleton>
            <studs-skeleton variant="text" width="100px" height="15px"></studs-skeleton>
            <studs-skeleton variant="text" width="100px" height="15px"></studs-skeleton>
        </div>

    </div>        <div style="display: block; padding: 10px;"><studs-skeleton variant="rect" width="100%" height="75px"></studs-skeleton></div>`,
}
