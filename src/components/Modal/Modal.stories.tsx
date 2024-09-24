import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Button } from '../Button/Button'
import { Modal } from './Modal'

export default {
  title: 'Modal',
  component: Modal,
} as Meta<typeof Modal>

const Template: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
      />
    </div>
  )
}
export const Basic = Template.bind({})
Basic.args = {
  isOpen: true,
  title: 'Modal Title',
  children: 'Modal content',
  footer: 'Modal footer',
  classNames: 'modal-class',
  closeOnOutsideClick: true
}

export const NoTitle = Template.bind({})
NoTitle.args = {
  isOpen: true,
  children: 'Modal content',
  footer: 'Modal footer',
  classNames: 'modal-class',
  closeOnOutsideClick: true
}

export const NoFooter = Template.bind({})
NoFooter.args = {
  isOpen: true,
  title: 'Modal Title',
  children: 'Modal content',
  classNames: 'modal-class',
  closeOnOutsideClick: true
}

export const NoTitleOrFooter = Template.bind({})
NoTitleOrFooter.args = {
  isOpen: true,
  children: 'Modal content',
  classNames: 'modal-class',
  closeOnOutsideClick: true
}

export const NoCloseOnOutsideClick = Template.bind({})
NoCloseOnOutsideClick.args = {
  isOpen: true,
  title: 'Modal Title',
  children: 'Modal content',
  footer: 'Modal footer',
  classNames: 'modal-class',
  closeOnOutsideClick: false
}

