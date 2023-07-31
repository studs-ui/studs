import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { PopoverProps } from "../components/overlays/popover";
import { ifDefined } from "lit/directives/if-defined.js";
import { arrowPosition, direction } from "../utils/_argTypes";

const meta = {
  title: "Studs/Overlays/Popover",
  tags: ["autodocs"],
  render: (args) => html`<studs-popover
    direction=${ifDefined(args.direction)}
    arrowPosition=${ifDefined(args.arrowPosition)}
  >
    ${args.children}
  </studs-popover>`,
  argTypes: {
    ...direction,
    ...arrowPosition,
  },
} as Meta<PopoverProps>;

export default meta;
type Story = StoryObj<PopoverProps>;

export const Default: Story = {
  args: {
    direction: "bottom",
    arrowPosition: "center",

    children: html`
      <studs-button>Open</studs-button>

      <div slot="popover">
        <p>Popover content</p>
      </div>
    `,
  },
};
