import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { TabProps } from '../../components/display/tabs';

const meta = {
  title: "Studs/Display/Tabs",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-tabs
    tabDirection=${ifDefined(args.tabDirection)}
    variant=${ifDefined(args.variant)}
  >
    <button slot="tab">Tab 1</button>
    <section slot="panel">
      <strong>Content for tab 1</strong>
      <p>Lorem ipsum dolor sit amet eget fames facilisis mauris suspendisse nisl sed. Et a mi hac pharetra morbi aenean porta a malesuada aliquam vivamus aliquet. Eget mi dictumst nec malesuada dictumst facilisi laoreet cras eget proin. Semper pulvinar dapibus facilisis incididunt risus pretium morbi elementum praesent. Congue nisl urna pretium vulputate integer tellus nec tortor adipiscing nibh suspendisse lobortis cras.</p>
    </section>

    <button slot="tab">Tab 2</button>
    <section slot="panel">
      <strong>Content for tab 2</strong>
      <p>Lorem ipsum dolor sit amet eget iaculis consectetur arcu id. Bibendum odio habitasse sed egestas platea augue ut curabitur eros vivamus tincidunt tempor pharetra curabitur. Tellus labore fermentum massa lobortis gravida praesent dictumst curabitur eleifend porttitor. Vitae cursus volutpat sed eleifend molestie maecenas do gravida turpis adipiscing nisi lacus hendrerit. Pharetra orci mauris incididunt purus pretium magna neque non sodales nisl ullamcorper.</p>
      <p>Tempus egestas volutpat sagittis cras nunc convallis dictum vestibulum justo. A viverra fames suspendisse condimentum ornare tempor tincidunt. Enim facilisis praesent eu nibh in semper cras. Aliquet risus pulvinar imperdiet suspendisse magna senectus iaculis tortor pharetra. Interdum duis condimentum nisl rhoncus facilisis feugiat sed.</p>
    </section>

    <button slot="tab" ?disabled=${args.disabled}>Tab 3</button>
    <section slot="panel">
      <strong>Content for tab 3</strong>
      <p>Lorem ipsum dolor sit amet bibendum sapien malesuada scelerisque non. A vel augue sagittis platea eiusmod luctus senectus lectus. Lacinia pretium quis hendrerit nibh nisl dictumst diam lectus diam ullamcorper pulvinar interdum. Quisque consequat massa aenean justo labore enim lacus imperdiet eleifend senectus duis. Facilisi tincidunt nec dictum pellentesque do arcu luctus.</p>
      <p>Elementum pharetra velit rhoncus vel aliqua etiam a est incididunt lacus tortor tellus bibendum malesuada. Dapibus fusce integer vestibulum feugiat fermentum eu facilisi est pretium proin. Feugiat purus netus ac phasellus congue praesent fringilla condimentum praesent. Donec ut duis odio diam mi praesent eget. Magna semper interdum libero ultrices orci hendrerit porta pellentesque gravida volutpat convallis porta justo egestas.</p>
      <p>Blandit dolore condimentum augue praesent fringilla augue blandit do consequat platea elementum et eget habitasse. Blandit urna fusce cursus orci elit auctor bibendum ullamcorper mollis elit laoreet. Viverra aliquam incididunt laoreet pretium enim do aenean egestas aenean auctor. Laoreet lectus interdum labore lacinia morbi magna tincidunt. Dolore tellus magna sodales iaculis dictum eros convallis libero odio gravida.</p>
    </section>
  </studs-tabs>`,
  argTypes: {
    tabDirection: {
        control: { type: "select" },
        options: ["row", "column"],
        defaultValue: "row",
      },
    variant: {
      control: { type: "select" },
      options: ["line", "contained"],
      defaultValue: "line",
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<TabProps>;

export default meta;
type Story = StoryObj<TabProps>;

export const Default: Story = {
    args: {
      tabDirection: "row",
    },
};

export const Disabled: Story = {
    args: {
      tabDirection: "row",
      disabled: true,
    },
};

export const Contained: Story = {
    args: {
      tabDirection: "row",
      variant: "contained",
    },
};

export const Direction: Story = {
    args: {
      tabDirection: "column",
    },
};

export const WithIcons: Story = {
  render: () => html`
    <studs-tabs tabdirection="row">
      <studs-button slot="tab" button-type="tertiary" icon="settings">Tab 1</studs-button>
      <section slot="panel">
        <strong>Content for tab 1</strong>
        <p>Lorem ipsum dolor sit amet eget fames facilisis mauris suspendisse nisl sed.</p>
      </section>

      <studs-button slot="tab" button-type="tertiary" icon="info">Tab 2</studs-button>
      <section slot="panel">
        <strong>Content for tab 2</strong>
        <p>Tempus egestas volutpat sagittis cras nunc convallis dictum vestibulum justo.</p>
      </section>

      <studs-button slot="tab" button-type="tertiary" icon="group" disabled>Tab 3</studs-button>
      <section slot="panel">
        <strong>Content for tab 3</strong>
        <p>Elementum pharetra velit rhoncus vel aliqua etiam a est incididunt lacus tortor tellus bibendum malesuada.</p>
      </section>
    </studs-tabs>
  `,
};
