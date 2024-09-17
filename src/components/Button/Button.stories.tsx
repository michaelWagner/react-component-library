import { Meta, StoryFn } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'custom'],
    },
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

// Primary Button Story
export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
  onClick: () => alert('Primary button clicked'),
}

// Secondary Button Story
export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
  onClick: () => alert('Secondary button clicked'),
}

// Large Button Story
export const Large = Template.bind({})
Large.args = {
  children: 'Large Button',
  size: 'large',
  variant: 'primary',
  onClick: () => alert('Large button clicked'),
}

// Small Button Story
export const Small = Template.bind({})
Small.args = {
  children: 'Small Button',
  size: 'small',
  variant: 'primary',
  onClick: () => alert('Small button clicked'),
}

// Custom Button Story
export const Custom = Template.bind({})
Custom.args = {
  children: 'Custom Button',
  variant: 'custom',
  customStyle: 'bg-purple-500 text-white hover:bg-purple-600',
  onClick: () => alert('Custom button clicked'),
}
