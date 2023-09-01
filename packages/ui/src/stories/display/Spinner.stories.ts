import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { SpinnerProps } from "../../components/display/spinner";
import { ifDefined } from "lit/directives/if-defined.js";

const meta = {
    title: "Studs/Display/Spinner",
    tags: ["autodocs"],
    render: (args: any) => html`<studs-spinner
        ?close-on-overlay-click=${args.closeOnOverlayClick}
        ?close-on-escape=${args.closeOnEscape}
        ?disable-backdrop=${args.disableBackdrop}
        color=${ifDefined(args.color)}
        icon=${ifDefined(args.icon)}
        ?open=${args.open}
    ></studs-spinner>`,
    argTypes: {
        closeOnOverlayClick: {
            name: "close-on-overlay-click",
            type: { name: "boolean", required: false },
            defaultValue: false,
            description: "Close spinner when clicking outside of it",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "true" },
            },
            control: {
                type: "boolean",
            },
        },
        closeOnEscape: {
            name: "close-on-escape",
            type: { name: "boolean", required: false },
            defaultValue: false,
            description: "Close spinner when pressing escape",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "true" },
            },
            control: {
                type: "boolean",
            },
        },
        disableBackdrop: {
            name: "disable-backdrop",
            type: { name: "boolean", required: false },
            defaultValue: false,
            description: "Disable the backdrop",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
            control: {
                type: "boolean",
            },
        },
        color: {
            name: "color",
            type: { name: "string", required: false },
            defaultValue: "primary",
            description: "Color of the spinner",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "primary" },
            },
            control: {
                type: "select",
            },
            options: ["primary", "secondary", "default"],
        },
        icon: {
            name: "icon",
            type: { name: "string", required: false },
            defaultValue: undefined,
            description: "Icon to display in the spinner",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "undefined" },
            },
            control: {
                type: "select",
            },
            options: ["", "info", "success", "warning", "error"],
        },
        open: {
            name: "open",
            type: { name: "boolean", required: false },
            defaultValue: false,
            description: "Open the spinner",
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "false" },
            },
            control: {
                type: "boolean",
            },
        },
    }
} satisfies Meta<SpinnerProps>;

export default meta;

type Story = StoryObj<SpinnerProps>;

export const Default: Story = {
    args: {
        open: true,
    }
};

export const Icon: Story = {
    args: {
        icon: "info",
        open: true
    }
}

export const UsingButton: Story = {
    render: () => {
        function openSpinner() {
            const spinner = document.querySelector("#spinner");
            spinner?.toggleOpen();
        }
        return html`<studs-button @click=${() => openSpinner()}>Toggle Spinner</studs-button>
        <studs-spinner id="spinner"></studs-spinner>`
    }
}