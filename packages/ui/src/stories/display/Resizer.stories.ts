import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { StudsResizerProps } from '../../components/display/resizer';

const meta = {
  title: "Studs/Display/Resizer",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-resizer
    style="height: 300px; display: block;"
    direction="${ifDefined(args.direction)}"
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
      <studs-resizer-pane size="50">Panel One</studs-resizer-pane>
      <studs-resizer-pane>Panel Two</studs-resizer-pane>
    `,
  },
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    children: html`
      <studs-resizer-pane size="50">Panel One</studs-resizer-pane>
      <studs-resizer-pane>Panel Two</studs-resizer-pane>
    `,
  },
};

export const TwoPanel: Story = {
  render: () => html`<div style="width: 400px; height: 400px; display: block">
    <studs-resizer direction="horizontal">
      <studs-resizer-pane size="150">Panel One</studs-resizer-pane>
      <studs-resizer-pane size="250">
        <studs-resizer direction="vertical">
          <studs-resizer-pane size="50">Panel One</studs-resizer-pane>
          <studs-resizer-pane>Panel Two</studs-resizer-pane>
        </studs-resizer>
      </studs-resizer-pane>
    </studs-resizer>
  </div>`,
};

export const ThreePanel: Story = {
  render: () => html`<div style="width: 800px; height: 400px; display: block">
    <studs-resizer direction="horizontal">
      <studs-resizer-pane size="150">Panel One</studs-resizer-pane>
      <studs-resizer-pane size="250">
        <studs-resizer direction="vertical">
          <studs-resizer-pane size="50">Panel One</studs-resizer-pane>
          <studs-resizer-pane>Panel Two</studs-resizer-pane>
        </studs-resizer>
      </studs-resizer-pane>
      <studs-resizer-pane size="250">
        <studs-resizer direction="vertical">
          <studs-resizer-pane size="50">Panel One</studs-resizer-pane>
          <studs-resizer-pane>Panel Two</studs-resizer-pane>
        </studs-resizer>
      </studs-resizer-pane>
    </studs-resizer>
  </div>`,
};