import { Meta, StoryFn } from '@storybook/react'
import { Checkbox } from './Checkbox.tsx'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Basic = Template.bind({})
Basic.args = {
  label: 'Checkbox',
}

export const InitiallyChecked = Template.bind({})
InitiallyChecked.args = {
  label: 'Checkbox',
  value: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Checkbox',
  value: true,
  disabled: true,
}
