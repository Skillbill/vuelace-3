import type { Meta, StoryObj } from '@storybook/vue3'
import Dialog from '../../components/examples/Dialog.vue'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs']
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}
