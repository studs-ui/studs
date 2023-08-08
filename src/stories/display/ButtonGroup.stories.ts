import type { StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Studs/Display/ButtonGroup",
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<any>;

export const Primary: Story = {
  render: () => html`<studs-button-group>
    <studs-button buttontype="primary" btnClasses="-group"
      >Button 1</studs-button
    >
    <studs-button buttontype="primary" btnClasses="-group"
      >Button 2</studs-button
    >
    <studs-button buttontype="primary" btnClasses="-group"
      >Button 3</studs-button
    >
  </studs-button-group>`,
};
