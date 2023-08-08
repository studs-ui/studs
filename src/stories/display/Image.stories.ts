import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { StudsImageProps } from "../../components/display/image";
import { ifDefined } from "lit/directives/if-defined.js";

const meta = {
  title: "Studs/Display/Image",
  tags: ["autodocs"],
  render: (args) =>
    html`<studs-image
      src=${ifDefined(args.src)}
      alt=${ifDefined(args.alt)}
    ></studs-image>`,
  argTypes: {},
} satisfies Meta<StudsImageProps>;
export default meta;

export const Default: StoryObj<StudsImageProps> = {
  args: {
    src: "https://ssttoolbox.widen.net/content/whccz2ba5x/jpeg/homepage-hero-at3g.jpeg?keep=c&crop=yes&color=ffffff00&quality=80&w=900&h=675",
    alt: "A picture of a box.",
  },
};
