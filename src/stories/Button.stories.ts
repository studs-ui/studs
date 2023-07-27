import type { StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { contentDirection, icon, size, variants } from "../utils/_argTypes";

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: "Studs/Inputs/Button",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-button
    buttonType="${args.buttonType}"
    size="${args.size}"
    iconPosition="${args.iconPosition}"
    contentDirection="${args.contentDirection}"
    class="${args.class}"
    icon="${args.icon}"
    ?disabled="${args.disabled}"
    onclick="alert('clicked')"
    .text=${html`${args.children}`}
  ></studs-button>`,
  argTypes: {
    ...variants({
      name: "buttonType",
      options: ["cta", "tertiary", "link", "floating", "icon"],
    }),
    ...size,
    ...contentDirection,
    ...icon,
  },
};

export default meta;
type Story = StoryObj<any>;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const CTA: Story = {
  args: {
    buttonType: "cta",
    children: `Button`,
  },
};

export const Primary: Story = {
  args: {
    buttonType: "primary",
    children: `Button`,
  },
};

export const Secondary: Story = {
  args: {
    buttonType: "secondary",
    children: `Button`,
  },
};

export const Tertiary: Story = {
  args: {
    buttonType: "tertiary",
    children: `Button`,
  },
};

export const Link: Story = {
  args: {
    buttonType: "link",
    children: `Button`,
  },
};

export const Floating: Story = {
  args: {
    buttonType: "floating",
    icon: '<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
  },
};

export const Icon: Story = {
  args: {
    buttonType: "icon",
    icon: '<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: `Button`,
  },
};

export const LeftIcon: Story = {
  args: {
    iconPosition: "start",
    icon: '<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
    children: `Button`,
  },
};

export const RightIcon: Story = {
  args: {
    iconPosition: "end",
    icon: '<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 17h6M12 6v7m0 0l3.5-3.5M12 13L8.5 9.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
    children: `Button`,
  },
};

export const Vertical: Story = {
  args: {
    contentDirection: "vertical",
    children: `Button`,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: `Button`,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: `Button`,
  },
};
