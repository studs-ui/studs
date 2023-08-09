import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { StudsResizerProps } from "../../components/display/resizer";

const meta = {
  title: "Studs/Display/Resizer",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-resizer
    style="height: 300px; display: block;"
    direction="${ifDefined(args.direction)}"
    size="${ifDefined(args.size)}"
    min="${ifDefined(args.min)}"
    max="${ifDefined(args.max)}"
    >${args.children}</studs-resizer
  >`,
  argTypes: {
    direction: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
  },
} satisfies Meta<StudsResizerProps>;

export default meta;

type Story = StoryObj<StudsResizerProps>;

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    children: html`
      <studs-resizer-pane size="50">Hello</studs-resizer-pane>
      <studs-resizer-pane>Goodbye</studs-resizer-pane>
    `,
  },
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    children: html`
      <studs-resizer-pane size="50">Hello</studs-resizer-pane>
      <studs-resizer-pane>Goodbye</studs-resizer-pane>
    `,
  },
};
