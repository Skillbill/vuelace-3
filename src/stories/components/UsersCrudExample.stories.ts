import type { Meta, StoryObj } from '@storybook/vue3'

import UsersCrudExample from '../../components/examples/UsersCrudExample.vue'

const meta = {
  title: 'Vuelace3/Examples/Users Crud',
  component: UsersCrudExample,
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof UsersCrudExample>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {}
