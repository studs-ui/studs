import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { contentDirection, icon, size, variants } from '../../utils/_argTypes';
import { ifDefined } from "lit/directives/if-defined.js";
import { ButtonProps } from '../../components/display/button';
import { unsafeHTML } from "lit/directives/unsafe-html.js";

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: "Studs/Display/Button",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-button
    button-type="${ifDefined(args.buttonType)}"
    size="${ifDefined(args.size)}"
    variant="${ifDefined(args.variant)}"
    icon-position="${ifDefined(args.iconPosition)}"
    content-direction="${ifDefined(args.contentDirection)}"
    class="${ifDefined(args.class)}"
    icon="${ifDefined(args.icon)}"
    ?disabled="${args.disabled}"
    onclick="alert('clicked')"
    >${unsafeHTML(args.children)}</studs-button
  >`,
  argTypes: {
    ...variants({
      name: "buttonType",
      options: ["cta", "tertiary", "link", "floating", "icon"],
    }),
    ...size,
    ...contentDirection,
    ...icon,
    variant: {
      control: { type: "select" },
      options: ["outline"],
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const CTA: Story = {
  args: {
    buttonType: "cta",
    children: `CTA Button`,
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
    icon: 'info',
  },
};

export const Icon: Story = {
  args: {
    buttonType: "icon",
    icon: 'info',
  },
};

export const Close: Story = {
  args: {
    buttonType: "close",
    icon: 'close',
  }
}

export const Image: Story = {
  args: {
    buttonType: "image",
    children: `<img slot="media" src="https://picsum.photos/200/300" /> Image Button`,
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: `Button`,
  },
};

export const LeftIcon: Story = {
  args: {
    iconPosition: "start",
    icon: 'info',
    children: `Button`,
  },
};

export const RightIcon: Story = {
  args: {
    iconPosition: "end",
    icon: 'info',
    children: `Button`,
  },
};

export const Vertical: Story = {
  args: {
    icon: 'info',
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
