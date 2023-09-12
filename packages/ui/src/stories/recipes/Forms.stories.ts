import { StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta = {
  title: 'Studs/Recipes/Forms',
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<{}>;

export const Form: Story = {
  render: () => {
    let values = {};
    function onSubmit(e: SubmitEvent) {
      
      const form = (e.target as HTMLButtonElement).closest(
        'form'
      ) as HTMLFormElement;
      const formData = new FormData(form);
      for (const pair of formData.entries()) {
        values = { ...values, [pair[0]]: pair[1] };
      }
      const div = document.createElement('div');
      div.innerHTML = JSON.stringify(values);
      form.append(div);
    }
    return html`
      <form>
        <studs-input name="input" label="Input"></studs-input>
        <div>
          <studs-checkbox name="checkbox_1" label="Checkbox 1"></studs-checkbox>
          <studs-checkbox name="checkbox_2" label="Checkbox 2"></studs-checkbox>
          <studs-checkbox name="checkbox_3" label="Checkbox 3"></studs-checkbox>
        </div>
        <studs-radio-group
        name='radio_group'
        label='Radio Group'
        display='inline'
        value='radio1'
      >
        <studs-radio
          value="radio1"
          label="Radio 1"
        ></studs-radio>
        <studs-radio
          value="radio2"
          label="Radio 2"
        ></studs-radio>
        <studs-radio
          value="radio3"
          label="Radio 3"
        ></studs-radio>
      </studs-radio-group>
        <studs-button type="reset">Reset</studs-button>
        <studs-button @click=${onSubmit}>Submit</studs-button>
      </form>
    `;
  },
};
