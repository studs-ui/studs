import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { RadioGroupProps } from '../../components/inputs/radio-group';

const meta = {
  title: 'Studs/Inputs/RadioGroups',
  tags: ['autodocs'],
  render: (args: any) => {
    function onChange(e) {
      const form = e.currentTarget as HTMLFormElement;
      const formData = new FormData(form);
      for (const key of formData.entries()) {
        console.log(key);
      }
    }
    return html`<form @change=${onChange}>
      <studs-radio-group
        name=${ifDefined(args.name)}
        label=${ifDefined(args.label)}
        display=${ifDefined(args.display)}
        selectedValue=${ifDefined(args.selectedValue)}
      >
        <studs-radio
          name=${ifDefined(args.name)}
          value="radio1"
          label="Radio 1"
        ></studs-radio>
        <studs-radio
          name=${ifDefined(args.name)}
          value="radio2"
          label="Radio 2"
        ></studs-radio>
        <studs-radio
          name=${ifDefined(args.name)}
          value="radio3"
          label="Radio 3"
        ></studs-radio>
      </studs-radio-group>
    </form>`;
  },
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    display: { control: 'inline-radio', options: ['inline', 'block'] },
    selectedValue: { control: 'text' },
  },
} as Meta;

export default meta;

type Story = StoryObj<RadioGroupProps>;

export const Default: Story = {
  args: {
    name: 'radio',
    label: 'Radio Group',
    display: 'block',
    selectedValue: 'radio1',
  },
};
