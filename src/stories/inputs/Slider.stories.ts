import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { SliderProps } from "../../components/inputs/slider";
import { ifDefined } from "lit/directives/if-defined.js";

const meta = {
  title: "Studs/Inputs/Slider",
  tags: ["autodocs"],
  render: (args) =>
    html`<studs-slider
      .rangeValue=${ifDefined(args.rangeValue)}
      .marks=${ifDefined(args.marks)}
      label=${ifDefined(args.label)}
      rightLabel=${ifDefined(args.rightLabel)}
      ?enableInput=${args.enableInput}
      ?enableTooltip=${args.enableTooltip}
      ?enableLabel=${args.enableLabel}
      .defaultValue=${args.defaultValue}
      .calculateTooltipLabel=${ifDefined(args.calculateTooltipLabel)}
      .min=${args.min}
      .max=${args.max}
      .step=${args.step}
      @change=${(event: CustomEvent) => {
        console.log(event);
      }}
    ></studs-slider>`,
  argTypes: {},
} satisfies Meta<SliderProps>;

export default meta;
type Story = StoryObj<SliderProps>;

export const Default: Story = {
  args: {
    rangeValue: [0, 50],
    min: 0,
    max: 100,
    step: 1,
    label: "Peanut Butter",
    rightLabel: "Jelly",
    enableTooltip: true,
    enableLabel: true,
    enableInput: true,
    marks: [
      { value: 0, label: "0°" },
      { value: 25, label: "25" },
      { value: 50, label: "50" },
      { value: 75, label: "75" },
      { value: 100, label: "100°" },
    ],
    calculateTooltipLabel: (value: number) => {
      return value + " for Jelly";
    },
  },
};

export const SingleSlider: Story = {
  args: {
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
    rangeValue: [0, 50],
    min: 0,
    max: 100,
    step: 1,
  },
};

export const Marks: Story = {
  args: {
    rangeValue: [0, 50],
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
    rangeValue: [0, 50],
    enableInput: true,
    min: 0,
    max: 100,
    step: 1,
  },
};
