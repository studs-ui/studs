import type { StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { contentDirection, icon, size, variants } from "../utils/_argTypes";

const meta = {
  title: "Studs/Inputs/Chip",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-chip
    label="${args.label}"
    text="${args.text}"
    icon="${args.icon}"
    iconPosition="${args.iconPosition}"
    size="${args.size}"
    variant="${args.variant}"
    contentDirection="${args.contentDirection}"
    ?disabled="${args.disabled}"
    ?selected="${args.selected}"
    ?clickable="${args.clickable}"
    ?deletable="${args.deletable}"
    class="${args.class}"
    >${args.children}</studs-chip
  >`,
  argTypes: {
    ...variants({}),
    ...icon,
    ...size,
    ...contentDirection,
  },
};

export default meta;
type Story = StoryObj<any>;

export const Primary: Story = {
  args: {
    text: "Primary",
    icon: "",
    deletable: true,
  },
};

export const ChipAvatar: Story = {
  args: {
    text: "Avatar",
    deletable: false,
    clickable: true,
    children: html`<img
      class="avatar"
      src="./placeholders/smallUX/smallUX-avatar-sage.svg"
      alt="avatar"
    />`,
  },
};

export const ChipLetter: Story = {
  args: {
    text: "Letter",
    deletable: false,
    clickable: true,
    children: html`<div class="letter">A</div>`,
  },
};

export const ChipDefault: Story = {
  args: {
    text: "Default",
    deletable: false,
  },
};
