import type { Meta, StoryObj } from '@storybook/vue3'
import { VLDataTableCrud } from '../../components'
import ActiveComponent from '../../components/examples/cells/ActiveCell.vue'

import { shallowRef } from 'vue'

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
  title: 'Components/Data Table',
  component: VLDataTableCrud,
  tags: ['autodocs'],
  argTypes: {
    selectionMode: { control: 'select', options: [undefined, 'single', 'multiple'] }
  },
  args: {}
} satisfies Meta<typeof VLDataTableCrud>

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
        component: shallowRef(ActiveComponent),
        componentProps: {
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
    actions: [],
    items: getItems()
  }
}
