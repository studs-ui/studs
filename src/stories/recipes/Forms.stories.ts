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
      const target = e.target as HTMLButtonElement;
      const form = target.closest("form");
      const values = new FormData(form as HTMLFormElement);
      e.preventDefault();
      // get values
      //   const values = new FormData(e.target as HTMLFormElement);
      console.log(values);
    };
    return html`
      <div>Forms</div>
      <form @submit=${onSubmit}>
        <studs-input label="Input" placeholder="Placeholder"></studs-input>
        <studs-input label="Input" placeholder="Placeholder"></studs-input>
        <studs-input label="Input" placeholder="Placeholder"></studs-input>
        <studs-button type="submit" @click=${onSubmit}>Submit</studs-button>
      </form>
    `;
  },
};
