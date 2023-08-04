import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { TooltipProps } from "../../components/overlays/tooltip";
import { arrowPosition, direction } from "../../utils/_argTypes";

const meta = {
  title: "Studs/Overlays/Tooltip",
  tags: ["autodocs"],
  render: (args) => html`<studs-tooltip
    direction=${ifDefined(args.direction)}
    arrowPosition=${ifDefined(args.arrowPosition)}
  >
    ${args.children}
  </studs-popover>`,
  argTypes: {
    ...direction,
    ...arrowPosition,
  },
} as Meta<TooltipProps>;

export default meta;
type Story = StoryObj<TooltipProps>;

export const Default: Story = {
  args: {
    direction: "bottom",
    arrowPosition: "center",

    children: html`
      <studs-button>Open</studs-button>

      <div slot="tooltip">
        <p>Popover content</p>
      </div>
    `,
  },
};
