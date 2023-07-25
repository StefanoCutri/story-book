import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

const meta = {
  title: "UI/MyLable",
  component: MyLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {control: 'select'},
    color: {control: 'select'},
    fontColor : { control: 'color' },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary",
    size: "normal",
    color: "primary"
  },
};
export const Secondary: Story = {
  args: {
    label: "Secondary",
    size: "h2",
    color: "secondary"
  },
};
export const Tertiary: Story = {
  args: {
    label: "Tertiary",
    size: "h1",
    color: "tertiary",
    allCaps: true
  },
};
export const CustomFont: Story = {
  args: {
    label: "Custom font",
    size: "h1",
    color: "primary",
    fontColor: '#5517ac'
  },
};
