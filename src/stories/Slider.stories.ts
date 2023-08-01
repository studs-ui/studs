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
    rangevalue: [0, 50],
    min: 0,
    max: 100,
    step: 1,
    enableInput: true,
    marks: [
      { value: 0, label: "0°" },
      { value: 25, label: "25" },
      { value: 50, label: "50" },
      { value: 75, label: "75" },
      { value: 100, label: "100°" },
    ],
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

export const Marks: Story = {
  args: {
    rangevalue: [0, 50],
    marks: [
      { value: 0, label: "0°" },
      { value: 25, label: "25" },
      { value: 50, label: "50" },
      { value: 75, label: "75" },
      { value: 100, label: "100°" },
    ],
    min: 0,
    max: 100,
    step: 1,
  },
};

export const Input: Story = {
  args: {
    rangevalue: [0, 50],
    enableInput: true,
    min: 0,
    max: 100,
    step: 1,
  },
};
