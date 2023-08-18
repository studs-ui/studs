import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { ToastElementProps } from "../../components/overlays/toast";

const meta = {
  title: "Studs/Overlays/Toasts",
  tags: ["autodocs"],
  render: (args) =>
    html`<studs-toast
      ?open="${args.open}"
      ?static="${args.static}"
      position="${ifDefined(args.position)}"
      heading="${ifDefined(args.heading)}"
      type="${ifDefined(args.type)}"
      message="${ifDefined(args.message)}"
      action="${ifDefined(args.action)}"
      ?closeable="${args.closeable}"
      onactionclick="${ifDefined(args.onActionClick)}"
    ></studs-toast>`,
  argTypes: {},
} as Meta<ToastElementProps>;

export default meta;
type Story = StoryObj<ToastElementProps>;

export const Info: Story = {
  args: {
    type: "info",
    position: "bottom-left",
    message: "This is an info toast",
    open: true,
  },
};

export const Success: Story = {
  args: {
    type: "success",
    position: "bottom-left",
    message: "This is a success toast",
    open: true,
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    position: "bottom-left",
    message: "This is a warning toast",
    open: true,
  },
};

export const Error: Story = {
  args: {
    type: "error",
    position: "bottom-left",
    message: "This is an error toast",
    open: true,
  },
};

export const WithAction: Story = {
  args: {
    type: "info",
    position: "bottom-left",
    message: "This is an info toast",
    action: "Action",
    onActionClick: () => alert("Action clicked"),
    open: true,
  },
};

export const WithHeading: Story = {
  args: {
    type: "info",
    position: "bottom-left",
    heading: "Heading",
    message: "This is an info toast",
    open: true,
  },
};

export const Static: Story = {
  args: {
    type: "info",
    message: "This is an info toast",
    static: true,
    open: true,
  },
};

export const Closeable: Story = {
  args: {
    type: "info",
    message: "This is an info toast",
    closeable: true,
    open: true,
  },
};

export const TopLeft: Story = {
  args: {
    type: "info",
    position: "top-left",
    message: "This is an info toast",
    open: true,
  },
};

export const TopRight: Story = {
  args: {
    type: "info",
    position: "top-right",
    message: "This is an info toast",
    open: true,
  },
};

export const BottomLeft: Story = {
  args: {
    type: "info",
    position: "bottom-left",
    message: "This is an info toast",
    open: true,
  },
};

export const BottomRight: Story = {
  args: {
    type: "info",
    position: "bottom-right",
    message: "This is an info toast",
    open: true,
  },
};
