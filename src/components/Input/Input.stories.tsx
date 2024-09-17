import { Meta, StoryFn } from '@storybook/react'
import { Input } from './Input.tsx'

export default {
  title: 'Input',
  component: Input,
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />

export const Basic = Template.bind({})

Basic.args = {
  placeholder: 'Add text...',
  value: '',
}

export const Disabled = Template.bind({})
Disabled.args = {
  placeholder: 'Add text...',
  value: '',
  disabled: true,
}

export const WithValue = Template.bind({})
WithValue.args = {
  placeholder: 'Add text...',
  value: 'Hello World',
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  placeholder: 'Add text...',
  value: '',
  label: 'Input Label',
}

export const WithDisabledAndLabel = Template.bind({})
WithDisabledAndLabel.args = {
  placeholder: 'Add text...',
  value: '',
  disabled: true,
  label: 'Input Label',
}