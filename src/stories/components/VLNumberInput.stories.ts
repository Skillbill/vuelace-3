import type { Meta, StoryObj } from '@storybook/vue3'

import NumberInput from '../../components/VLNumberInput.vue'

const meta = {
  title: 'Vuelace3/Number input',
  component: NumberInput,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', undefined] }
  },
  args: {}
} satisfies Meta<typeof NumberInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Age (VLNumberInput)',
    clearable: true,
    helpText: 'The number must be between 0 and 150',
    rules: [
      {
        validateFn: (value: number | undefined) => value != undefined,
        message: 'The value is required'
      },
      {
        validateFn: (value: number) => value > 0,
        message: 'The value must be greater than 0'
      },
      {
        validateFn: (value: number) => value <= 150,
        message: 'The number must be less than 150'
      }
    ]
  }
}
