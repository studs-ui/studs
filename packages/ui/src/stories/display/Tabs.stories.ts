import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { TabProps } from '../../components/display/tabs';

const meta = {
  title: "Studs/Display/Tabs",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-tabs
    tabDirection=${ifDefined(args.tabDirection)}
    variant=${ifDefined(args.variant)}
  >
    <button slot="tab">Tab 1</button>
    <section slot="panel">Content for tab 1</section>
    <button slot="tab">Tab 2</button>
    <section slot="panel">Content for tab 2</section>
    <button slot="tab" ?disabled=${args.disabled}>Tab 3</button>
    <section slot="panel">Content for tab 3</section>
  </studs-tabs>`,
  argTypes: {
    tabDirection: {
        control: { type: "select" },
        options: ["row", "column"],
        defaultValue: "row",
      },
    variant: {
      control: { type: "select" },
      options: ["line", "contained"],
      defaultValue: "line",
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<TabProps>;

export default meta;
type Story = StoryObj<TabProps>;

export const Default: Story = {
    args: {
      tabDirection: "row",
    },
};

export const Disabled: Story = {
    args: {
      tabDirection: "row",
      disabled: true,
    },
};

export const Contained: Story = {
    args: {
      tabDirection: "row",
      variant: "contained",
    },
};

export const Direction: Story = {
    args: {
      tabDirection: "column",
    },
};
