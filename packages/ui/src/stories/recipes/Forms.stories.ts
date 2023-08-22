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
        <studs-input name="test" label="Input 1"></studs-input>
        <studs-input name="test2" label="Input 2"></studs-input>
        <studs-input name="test3" label="Input 3"></studs-input>
        <studs-button type="reset">Reset</studs-button>
        <studs-button type="submit" @click=${onSubmit}>Submit</studs-button>
      </form>
    `;
  },
};
