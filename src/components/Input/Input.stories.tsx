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