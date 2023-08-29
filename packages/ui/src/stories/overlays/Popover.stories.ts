import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { PopoverProps } from '../../components/overlays/popover';
import { position } from '../../utils/_argTypes';

const meta = {
  title: 'Studs/Overlays/Popover',
  tags: ['autodocs'],
  render: (args) => html`<studs-button
    >Popover<studs-popover position=${ifDefined(args.position)}>
      ${args.children}
    </studs-popover></studs-button
  >`,
  argTypes: {
    ...position,
  },
} as Meta<PopoverProps>;

export default meta;
type Story = StoryObj<PopoverProps>;

export const Default: Story = {
  args: {
    position: 'bottom',
    children: 'This is a popover',
  },
};
