import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { AccordionProps } from "../../components/display/accordian";

const meta = {
  title: "Studs/Display/Accordian",
  tags: ["autodocs"],
  render: (args) => html`<studs-accordian
    ?enableHeader=${args.enableHeader}
    ?enableSearch=${args.enableSearch}
  >
    <studs-accordian-item
      ><div slot="toggle">Accordian One</div>
      <div>
        <h3>Content</h3>
        <p>This allows for whatever</p>
        <studs-button>Test</studs-button>
      </div>
    </studs-accordian-item>
    <studs-accordian-item
      ><div slot="toggle">Accordian Two</div>
      Test
    </studs-accordian-item>
    <studs-accordian-item
      ><div slot="toggle">Accordian Three</div>
      Test
    </studs-accordian-item>
    <studs-accordian-item
      ><div slot="toggle">Accordian Four</div>
      Test
    </studs-accordian-item>
  </studs-accordian>`,
  argTypes: {},
} as Meta<AccordionProps>;

export default meta;
type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  args: {
    enableHeader: true,
    enableSearch: true,
  },
};
