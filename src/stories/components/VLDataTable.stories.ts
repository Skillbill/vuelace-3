import type { Meta, StoryObj } from '@storybook/vue3'
import DataTable from '../../components/VLDataTableCrud.vue'
import ActiveComponent from '../../components/examples/cells/ActiveCell.vue'

import ActionDelete from '../../components/examples/actions/ActionDelete.vue'
import ActionEdit from '../../components/examples/actions/ActionEdit.vue'

const getItems = () => {
  return new Array(40).fill(0).map((_, index) => {
    return {
      username: `user${index}`,
      firstName: `Name${index}`,
      lastName: `LastName${index}`,
      active: index % 2,
      activation_date: '2021-01-01',
      expiration_date: '2025-12-31'
    }
  })
}

const meta = {
  title: 'Vuelace3/Data Table',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    selectionMode: { control: 'select', options: [undefined, 'single', 'multiple'] }
  },
  args: {}
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {
    columns: [
      {
        name: 'header.username',
        value: 'username'
      },
      {
        name: 'header.firstname',
        value: 'firstName',
        sortable: true
      },
      {
        name: 'header.lastname',
        value: 'lastName'
      },
      {
        name: 'header.active',
        value: 'active',
        component: ActiveComponent,
        props: {
          trueColor: 'text-yellow-500'
        }
      },
      {
        name: 'header.activation_date',
        value: 'activation_date'
      },
      {
        name: 'header.expiration_date',
        value: 'expiration_date'
      }
    ],
    actions: [
      {
        component: ActionDelete,
        onClick: (row: any) => {}
      },
      {
        component: ActionEdit,
        onClick: (row: any) => {}
      }
    ],
    items: getItems()
  }
}
