import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { AccordionProps } from "../components/display/accordian";

const meta = {
  title: "Studs/Display/Accordian",
  tags: ["autodocs"],
  render: () => html`<studs-accordian>
    <studs-accordian-item> Test </studs-accordian-item>
    <studs-accordian-item> Test </studs-accordian-item>
    <studs-accordian-item> Test </studs-accordian-item>
    <studs-accordian-item> Test </studs-accordian-item>
  </studs-accordian>`,
  argTypes: {},
} as Meta<AccordionProps>;

export default meta;
type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  args: {},
};
