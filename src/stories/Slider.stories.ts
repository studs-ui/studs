import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { SliderProps } from "../components/inputs/slider";
import { ifDefined } from "lit/directives/if-defined.js";

const meta = {
  title: "Studs/Inputs/Slider",
  tags: ["autodocs"],
  render: (args) =>
    html`<studs-slider
      .rangevalue=${ifDefined(args.rangevalue)}
      .marks=${ifDefined(args.marks)}
      ?enableInput=${args.enableInput}
      ?enableTooltip=${args.enableTooltip}
      .defaultvalue=${args.defaultvalue}
      .calculateTooltipLabel=${args.calculateTooltipLabel}
      .min=${args.min}
      .max=${args.max}
      .step=${args.step}
    ></studs-slider>`,
  argTypes: {},
} satisfies Meta<SliderProps>;

export default meta;
type Story = StoryObj<SliderProps>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
};

export const Range: Story = {
  args: {
    rangevalue: [0, 50],
    min: 0,
    max: 100,
    step: 1,
  },
};
