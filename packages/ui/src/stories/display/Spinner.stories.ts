import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { SpinnerProps } from "../../components/display/spinner";
import { ifDefined } from "lit/directives/if-defined.js";

const meta = {
    title: "Studs/Display/Spinner",
    tags: ["autodocs"],
    render: (args: any) => html`<studs-spinner
        ?closeOnOutsideClick=${args.closeOnOutsideClick}
        ?closeOnEscape=${args.closeOnEscape}
        ?disabledBackdrop=${args.disabledBackdrop}
        color=${ifDefined(args.color)}
        icon=${ifDefined(args.icon)}
    ></studs-spinner>`,
    argTypes: {}
} satisfies Meta<SpinnerProps>;

export default meta;

type Story = StoryObj<SpinnerProps>;

export const Default: Story = {
    args: {}
};

export const Icon: Story = {
    args: {
        icon: "info"
    }
}