import { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from '.';

const meta: Meta<InputProps> = {
  title: 'Molecules/Input',
  component: Input,
  argTypes: {
    disabled: {
      type: 'boolean'
    }
  }
}

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {
    value: 'Text input'
  }
}

export const Multiline: StoryObj<InputProps> = {
  args: {
    value: 'Text area',
    multiline: true
  }
}

export const Disabled: StoryObj<InputProps> = {
  args: {
    value: 'Disabled input',
    disabled: true
  }
}

export const MultilineDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Text area',
    multiline: true,
    disabled: true
  }
}

export const PrimaryLabelled: StoryObj<InputProps> = {
  args: {
    value: 'Text',
    label: 'Label'
  }
}

export const PrimaryLabelledDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Text',
    label: 'Label',
    disabled: true
  }
}

export const MultilineLabelled: StoryObj<InputProps> = {
  args: {
    value: 'Text area',
    label: 'Label',
    multiline: true,
  }
}

export const MultilineLabelledDisabled: StoryObj<InputProps> = {
  args: {
    value: 'Text area',
    label: 'Label',
    multiline: true,
    disabled: true
  }
}