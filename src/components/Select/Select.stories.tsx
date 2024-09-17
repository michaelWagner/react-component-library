import { Meta, StoryFn } from '@storybook/react'
import { Select } from './Select'

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    classNames: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />

export const Basic = Template.bind({})
Basic.args = {
  options: ['Option 1', 'Option 2'],
}

export const CustomStyles = Template.bind({})
CustomStyles.args = {
  options: ['Option 1', 'Option 2'],
  classNames: 'bg-red-500 text-white',
}

export const Large = Template.bind({})
Large.args = {
  options: ['Option 1', 'Option 2'],
  classNames: 'px-4 py-4',
}

export const Disabled = Template.bind({})
Disabled.args = {
  options: ['Option 1', 'Option 2'],
  disabled: true,
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  options: ['Option 1', 'Option 2'],
  placeholder: 'Select an option',
}

export const DefaultValue = Template.bind({})
DefaultValue.args = {
  options: ['Option 1', 'Option 2'],
  initialValue: 'Option 1',
}