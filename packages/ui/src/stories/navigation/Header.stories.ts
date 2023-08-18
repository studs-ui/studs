import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { StudsHeaderProps } from "../../components/navigation/studs-header";

const meta = {
  title: "Studs/Navigation/Header",
  tags: ["autodocs"],
  render: (args) => html`<studs-header></studs-header>`,
  argTypes: {},
} satisfies Meta<StudsHeaderProps>;

export default meta;

type Story = StoryObj<StudsHeaderProps>;

export const Default: Story = {
  args: {},
};
