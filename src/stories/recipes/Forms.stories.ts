import { StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Studs/Recipes/Forms",
  argTypes: {},
};

export default meta;
type Story = StoryObj<{}>;

export const Default: Story = {
  render: () => {
    const onSubmit = (e: SubmitEvent) => {
      console.log(e.detail);
    };
    return html`
      <studs-form @submit=${onSubmit}>
        <studs-input
          name="name"
          label="Input 1"
          placeholder="Placeholder"
        ></studs-input>
        <studs-input
          name="last_name"
          label="Input"
          placeholder="Placeholder"
        ></studs-input>
        <studs-input
          name="name_name"
          label="Input"
          placeholder="Placeholder"
        ></studs-input>
        <studs-button type="reset">Reset</studs-button>
        <studs-button type="submit">Submit</studs-button>
      </studs-form>
    `;
  },
};
