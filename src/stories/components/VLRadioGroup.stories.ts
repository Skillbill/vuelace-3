import type { Meta, StoryObj } from '@storybook/vue3'
import { VLRadioGroup } from '../../components'

const meta = {
  title: 'Components/Radio group',
  component: VLRadioGroup,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', undefined] }
  },
  args: {
    size: 'small'
  }
} satisfies Meta<typeof VLRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Medium: Story = {
  args: {
    label: 'Favorite pet (VLRadioGroup)',
    options: [
      { value: 'dog', label: '🐶 Dogs' },
      { value: 'cat', label: '🐱 Cats' },
      { value: 'parrot', label: '🦜 Parrots' },
      { value: 'hamster', label: '🐹 Hamsters' }
    ]
  }
}
