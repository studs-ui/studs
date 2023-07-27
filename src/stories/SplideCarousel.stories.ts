import type { StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta = {
  title: "Studs/Display/SplideCarousel",
  tags: ["autodocs"],
  render: (args: any) => html`<studs-splide-carousel
    .slides=${args.slides}
    type=${args.type}
    perPage=${args.perPage}
    initialSlide=${args.initialSlide}
    interval=${args.interval}
    perMove=${args.perMove}
    ?rewind=${args.rewind}
    ?pagination=${args.pagination}
    ?autoplay=${args.autoplay}
    ?lazyLoad=${args.lazyLoad}
  ></studs-splide-carousel>`,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["loop", "slide", "fade"],
    },
  },
};

export default meta;
type Story = StoryObj<any>;

export const SplideCarousel: Story = {
  args: {
    type: "loop",
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
    perPage: 3,
    rewind: false,
    initialSlide: 0,
    perMove: 1,
    pagination: false,
    autoplay: true,
    interval: 3000,
  },
};

export const Slide: Story = {
  args: {
    type: "slide",
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
    perPage: 3,
    autoplay: false,
  },
};

export const SlideRewind: Story = {
  args: {
    type: "slide",
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
    perPage: 3,
    autoplay: false,
    rewind: true,
  },
};

export const Fade: Story = {
  args: {
    type: "fade",
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
    perPage: 1,
    autoplay: false,
  },
};
