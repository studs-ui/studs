import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { AccordionProps } from '../../components/display/accordion';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta = {
  title: 'Studs/Display/Accordion',
  tags: ['autodocs'],
  render: (args) => html`<studs-accordion
    ?enable-header=${args.enableHeader}
    ?enable-search=${args.enableSearch}
    size=${ifDefined(args.size)}
    variant=${ifDefined(args.variant)}
    direction=${ifDefined(args.direction)}
    ?disabled=${ifDefined(args.disabled)}
  >
    <studs-accordion-item>
      <div slot="toggle">Accordion One</div>
      <div>
        <h3>Content</h3>
        <p>The cat sat lazily in the sun.</p>
        <studs-button>Button</studs-button>
      </div>
    </studs-accordion-item>
    <studs-accordion-item
      ><div slot="toggle">Accordion Two</div>
      The old man sat on the porch, watching the world go by.
    </studs-accordion-item>
    <studs-accordion-item
      ><div slot="toggle">Accordion Three</div>
      The smell of fresh coffee filled the air.
    </studs-accordion-item>
    <studs-accordion-item
      ><div slot="toggle">Accordion Four</div>
      She closed her eyes and took a deep breath, trying to calm herself.
    </studs-accordion-item>
  </studs-accordion>`,
  argTypes: {
    enableHeader: {
      name: 'enable-header',
      type: { name: 'boolean', required: false },
      description: 'Enable the header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    enableSearch: {
      name: 'enable-search',
      type: { name: 'boolean', required: false },
      description: 'Enable the search',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    size: {
      name: 'size',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      type: { name: 'string', required: false },
      description: 'Size of the accordion',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
    variant: {
      name: 'variant',
      control: { type: 'select' },
      options: ['border', 'borderless'],
      type: { name: 'string', required: false },
      description: 'Variant of the accordion',
      table: {
        type: { summary: 'border | borderless' },
        defaultValue: { summary: 'borderless' },
      },
    },
    direction: {
      name: 'direction',
      control: { type: 'select' },
      options: ['start', 'end'],
      type: { name: 'string', required: false },
      description: 'Direction of the accordion',
      table: {
        type: { summary: 'start | end' },
        defaultValue: { summary: 'end' },
      },
    },
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      description: 'Disable the accordion',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta<AccordionProps>;

export default meta;
type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  args: {
    enableHeader: true,
    enableSearch: true,
    size: 'medium',
    variant: 'borderless',
    direction: 'end',
    disabled: false,
  },
};
