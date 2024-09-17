import { Meta, StoryFn } from '@storybook/react'
import { DataTable } from './DataTable.tsx'

export default {
  title: 'DataTable',
  component: DataTable,
} as Meta<typeof DataTable>

const columns = [
  {
    header: 'Name',
    accessor: 'name',
  },
  {
    header: 'Email',
    accessor: 'email',
  },
]

const data = [
  {
    id: 1,
    name: 'John Doe',
    email: 'John.Doe@gmail.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'Jane.Doe@gmail.com',
  },
  {
    id: 3,
    name: 'John Smith',
    email: 'John.Smith@gmail.com',
  },
  {
    id: 4,
    name: 'Jane Smith',
    email: 'Jane.Smith@gmail.com',
  },
  {
    id: 5,
    name: 'John Johnson',
    email: 'John.Johnson@gmail.com',
  },
  {
    id: 6,
    name: 'Jane Johnson',
    email: 'Jane.Johnson@gmail.com',
  },
  {
    id: 7,
    name: 'John Brown',
    email: 'John.Brown@gmail.com',
  },
  {
    id: 8,
    name: 'Jane Brown',
    email: 'Jane.Brown@gmail.com',
  },
  {
    id: 9,
    name: 'John White',
    email: 'John.White@gmail.com',
  },
  {
    id: 10,
    name: 'Jane White',
    email: 'Jane.White@gmail.com',
  },
]

const Template: StoryFn<typeof DataTable> = (args) => <DataTable {...args} />

export const Basic = Template.bind({})
Basic.args = { data, columns }

export const ShowsId = Template.bind({})
ShowsId.args = { data, columns: [{ header: 'ID', accessor: 'id' }, ...columns] }

export const CustomItemsPerPage = Template.bind({})
CustomItemsPerPage.args = { data, columns, itemsPerPage: 3 }

export const CustomStyles = Template.bind({})
CustomStyles.args = { data, columns, classNames: 'bg-red-500 text-white' }