import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { TooltipProps } from '../../components/overlays/tooltip';
import { arrowPosition, direction } from '../../utils/_argTypes';

const meta = {
  title: "Studs/Overlays/Tooltip",
  tags: ["autodocs"],
  render: (args) => html`<studs-button buttontype="primary">
    Button
    <studs-tooltip
      direction=${ifDefined(args.direction)}
      arrowPosition=${ifDefined(args.arrowPosition)}
      ?disabled=${args.disabled}
      ?open=${args.open}
      ?standalone=${args.standalone}
      query=${ifDefined(args.query)}
      >${args.children}</studs-tooltip
    >
  </studs-button>`,
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
    disabled: false,
    open: false,
    children: `
      Hello!
    `,
  },
};

export const Disabled: Story = {
  args: {
    direction: "bottom",
    arrowPosition: "center",
    children: `
      Hello!
    `,
    disabled: true,
  },
};

export const Standalone: Story = {
  render: () =>
    html`<div style="display: inline-block; position: relative">
      <p class="attach-here">Hover over the headline: Standalone</p>
      <studs-tooltip query="#standalone" direction="right"
        >Standalone</studs-tooltip
      >
    </div>`,
};


