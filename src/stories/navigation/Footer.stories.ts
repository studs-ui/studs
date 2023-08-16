import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { StudsFooterProps } from "../../components/navigation/studs-footer";

const meta = {
  title: "Studs/Navigation/Footer",
  tags: ["autodocs"],
  render: (args) => html`<studs-footer></studs-footer>`,
  argTypes: {},
} satisfies Meta<StudsFooterProps>;

export default meta;

type Story = StoryObj<StudsFooterProps>;

export const Default: Story = {
  args: {},
};
