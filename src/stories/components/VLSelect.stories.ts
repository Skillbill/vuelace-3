import type { Meta, StoryObj } from '@storybook/vue3'
import { VLSelect } from '../../components'

const meta = {
  title: 'Vuelace3/Select',
  component: VLSelect,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', undefined] },
    placement: { control: 'select', options: ['top', 'bottom', undefined] }
  },
  args: {
    label: 'Favorite music genres (VLSelect)',
    placeholder: 'Select your favorite music genre...',
    options: [
      { value: 'dance', text: 'Dance' },
      { value: 'rock', text: 'Rock' },
      { value: 'pop', text: 'Pop' },
      { value: 'indie', text: 'Indie' },
      { value: 'classic', text: 'Classic' },
      { value: 'country', text: 'Country' },
      { value: 'jazz', text: 'Jazz' },
      { value: 'others', text: 'Others...' }
    ]
  }
} satisfies Meta<typeof VLSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Multiple: Story = {
  args: {
    multiple: true
  }
}
