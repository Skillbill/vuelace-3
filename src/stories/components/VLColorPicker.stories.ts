import type { Meta, StoryObj } from '@storybook/vue3'

import { VLColorPicker } from '../../components'

const meta = {
  title: 'Vuelace3/Color picker',
  component: VLColorPicker,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', undefined] }
  },
  args: { label: 'Select a color (VLColorPicker)' }
} satisfies Meta<typeof VLColorPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {}
}
