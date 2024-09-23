import { Meta, StoryFn } from '@storybook/react'
import { Pagination, PaginationProps } from './Pagination'

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta<typeof Pagination>

const Template: StoryFn<typeof Pagination> = (args) => <Pagination {...args} />

export const Basic = Template.bind({})
Basic.args = {
  totalItems: 50,
  itemsPerPage: 10,
  currentPage: 1,
  paginate: (page: number) => console.log(`Navigating to page ${page}`)
}

export const LargeDataSet = Template.bind({})
LargeDataSet.args = {
  totalItems: 200,
  itemsPerPage: 20,
  currentPage: 5,
  paginate: (page: number) => console.log(`Navigating to page ${page}`)
}

export const SinglePage = Template.bind({})
SinglePage.args = {
  totalItems: 5,
  itemsPerPage: 10,
  currentPage: 1,
  paginate: (page: number) => console.log(`Navigating to page ${page}`)
}

export const NoItems = Template.bind({})
NoItems.args = {
  totalItems: 0,
  itemsPerPage: 10,
  currentPage: 1,
  paginate: (page: number) => console.log(`Navigating to page ${page}`)
}
