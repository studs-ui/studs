import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { contentDirection, icon, size, variants } from "../../utils/_argTypes";
import { ifDefined } from "lit/directives/if-defined.js";
import { ChipProps } from "../../components/display/chip";

const meta = {
  title: "Studs/Display/Chip",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-chip
    icon="${ifDefined(args.icon)}"
    iconPosition="${ifDefined(args.iconPosition)}"
    size="${ifDefined(args.size)}"
    variant="${ifDefined(args.variant)}"
    contentDirection="${ifDefined(args.contentDirection)}"
    ?disabled="${args.disabled}"
    ?selected="${args.selected}"
    ?clickable="${args.clickable}"
    ?deletable="${args.deletable}"
    class="${ifDefined(args.class)}"
    >${args.children}</studs-chip
  >`,
  argTypes: {
    ...variants({}),
    ...icon,
    ...size,
    ...contentDirection,
    disabled: {
      control: "boolean",
    },
    selected: {
      control: "boolean",
    },
    clickable: {
      control: "boolean",
    },
    deletable: {
      control: "boolean",
    },
  },
} satisfies Meta<ChipProps>;

export default meta;
type Story = StoryObj<ChipProps>;

export const Default: Story = {
  args: {
    children: "Default",
    deletable: false,
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
    deletable: true,
  },
};

export const ChipAvatar: Story = {
  args: {
    deletable: false,
    clickable: true,
    children: html`<img
        slot="accessory"
        class="avatar"
        src="./placeholders/smallUX/smallUX-avatar-sage.svg"
        alt="avatar"
      />
      Avatar`,
  },
};

export const ChipLetter: Story = {
  args: {
    deletable: false,
    clickable: true,
    children: html`<div slot="accessory" class="letter">A</div>
      Letter`,
  },
};
