import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Button, ButtonProps } from './Button.tsx'

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary Button',
  onClick: () => alert('Primary button clicked'),
} as ButtonProps