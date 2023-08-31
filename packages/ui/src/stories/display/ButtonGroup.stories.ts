import type { StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const meta = {
  title: 'Studs/Display/ButtonGroup',
  tags: ['autodocs'],
  render: (args) => html`
    <studs-button-group> ${unsafeHTML(args.children)} </studs-button-group>
  `,
};

export default meta;
type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    children: `
    <studs-button button-type="primary" btnClasses="-group"
      >Button 1</studs-button
    >
    <studs-button button-type="primary" btnClasses="-group"
      >Button 2</studs-button
    >
    <studs-button button-type="primary" btnClasses="-group"
      >Button 3</studs-button
    >`,
  },
};
