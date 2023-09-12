import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { TooltipProps } from '../../components/overlays/tooltip';
import { position } from '../../utils/_argTypes';

const meta = {
  title: 'Studs/Overlays/Tooltip',
  tags: ['autodocs'],
  render: (args) => html`<studs-button button-type="primary">
    Button
    <studs-tooltip
      position=${ifDefined(args.position)}
      ?disabled=${args.disabled}
      query=${ifDefined(args.query)}
      >${args.children}</studs-tooltip
    >
  </studs-button>`,
  argTypes: {
    ...position,
  },
} as Meta<TooltipProps>;

export default meta;
type Story = StoryObj<TooltipProps>;

export const Default: Story = {
  args: {
    position: 'bottom',
    disabled: false,
    children: `
      Hello!
    `,
  },
};

export const Disabled: Story = {
  args: {
    position: 'bottom',
    children: `
      Hello!
    `,
    disabled: true,
  },
};

export const Standalone: Story = {
  render: () =>
    html`<div style="display: inline-block">
      <p class="attach-here">Hover over the headline: Standalone</p>
      <studs-tooltip query="#standalone" direction="right"
        >Standalone</studs-tooltip
      >
    </div>`,
};
