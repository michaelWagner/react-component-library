import { Meta, StoryFn } from '@storybook/react'
import { Select } from './Select'

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    className: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />

export const Basic = Template.bind({})
Basic.args = {
  options: ['Option 1', 'Option 2'],
  value: 'Option 1',
  onChange: () => {},
}

export const CustomStyles = Template.bind({})
CustomStyles.args = {
  options: ['Option 1', 'Option 2'],
  value: 'Option 1',
  onChange: () => {},
  className: 'bg-red-500 text-white',
}

export const Large = Template.bind({})
Large.args = {
  options: ['Option 1', 'Option 2'],
  value: 'Option 1',
  onChange: () => {},
  className: 'p-4',
}