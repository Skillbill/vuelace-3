import type { Meta, StoryObj } from '@storybook/vue3'

import CheckboxInput from '../../components/VLCheckbox.vue'

const meta = {
  title: 'Vuelace3/Checkbox',
  component: CheckboxInput,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', undefined] }
  },
  args: {}
} satisfies Meta<typeof CheckboxInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'I agree with the terms and conditions (VLCheckbox)',
    rules: [
      {
        validateFn: (value: boolean | undefined) => value === true,
        message: 'The value is required'
      }
    ]
  }
}
