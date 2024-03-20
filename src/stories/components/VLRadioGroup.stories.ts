import type { Meta, StoryObj } from '@storybook/vue3'
import RadioGroupInput from '../../components/VLRadioGroup.vue'

const meta = {
  title: 'Vuelace3/Radio group',
  component: RadioGroupInput,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', undefined] }
  },
  args: {
    size: 'small'
  }
} satisfies Meta<typeof RadioGroupInput>

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
