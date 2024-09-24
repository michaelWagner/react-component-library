import { Meta, StoryFn } from '@storybook/react'
import React, {useState} from 'react'
import { Pagination } from './Pagination'

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta<typeof Pagination>

const Template: StoryFn<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage)

  // Ensure the correct pagination function can be used
  const handlePaginate = (page: number) => {
    setCurrentPage(page)
    args.paginate(page) // Optional: Call the paginate function from args if needed
  }

  return (
    <Pagination {...args} currentPage={currentPage} paginate={handlePaginate}/>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  totalItems: 50,
  itemsPerPage: 10,
  currentPage: 1,
  paginate: (page: number) => console.log(`Page changed to: ${page}`)
}

export const LargeDataSet = Template.bind({})
LargeDataSet.args = {
  totalItems: 200,
  itemsPerPage: 20,
  currentPage: 5,
  paginate: (page: number) => console.log(`Page changed to: ${page}`)
}

export const SinglePage = Template.bind({})
SinglePage.args = {
  totalItems: 5,
  itemsPerPage: 10,
  currentPage: 1,
  paginate: (page: number) => console.log(`Page changed to: ${page}`)
}

export const NoItems = Template.bind({})
NoItems.args = {
  totalItems: 0,
  itemsPerPage: 10,
  currentPage: 1,
  paginate: (page: number) => console.log(`Page changed to: ${page}`)
}
function setCurrentPage(page: number): void {
  throw new Error('Function not implemented.')
}

