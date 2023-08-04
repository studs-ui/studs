import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { CarouselProps } from "../../components/display/carousel";

const meta = {
  title: "Studs/Display/Carousel",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-carousel
    .slides=${ifDefined(args.slides)}
    perSlide=${ifDefined(args.perSlide)}
  ></studs-carousel>`,
  argTypes: {},
} satisfies Meta<CarouselProps>;

export default meta;
type Story = StoryObj<CarouselProps>;

export const Carousel: Story = {
  args: {
    slides: [
      {
        id: "1",
        image: "https://picsum.photos/id/1/300",
        alt: "image 1",
      },
      {
        id: "2",
        image: "https://picsum.photos/id/10/300",
        alt: "image 2",
      },
      {
        id: "3",

        image: "https://picsum.photos/id/268/300",
        alt: "image 3",
      },
      {
        id: "4",

        image: "https://picsum.photos/id/25/300",
        alt: "image 4",
      },
      {
        id: "5",

        image: "https://picsum.photos/id/37/300",
        alt: "image 5",
      },
      {
        id: "6",

        image: "https://picsum.photos/id/56/300",
        alt: "image 6",
      },
      {
        id: "7",

        image: "https://picsum.photos/id/112/300",
        alt: "image 7",
      },
      {
        id: "8",

        image: "https://picsum.photos/id/145/300",
        alt: "image 8",
      },
      {
        id: "9",

        image: "https://picsum.photos/id/237/300",

        alt: "image 9",
      },
    ],
    perSlide: 3,
  },
};
