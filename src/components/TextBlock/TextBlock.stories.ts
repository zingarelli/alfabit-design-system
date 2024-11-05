import { Meta, StoryObj } from "@storybook/react";
import TextBlock, { TextBlockProps } from ".";

const meta: Meta<TextBlockProps> = {
  title: 'Molecules/Text Block',
  component: TextBlock,
  argTypes: {
    className: {
      type: 'string'
    }
  }
}

export default meta;

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: 'This is the title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel tincidunt tellus. In ut tellus sollicitudin, egestas urna pellentesque, ornare lorem.'
  }
}