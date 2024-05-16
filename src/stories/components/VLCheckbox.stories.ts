import type { Meta, StoryObj } from '@storybook/vue3'

import { VLCheckbox } from '../../components'

const meta = {
  title: 'Components/Checkbox',
  component: VLCheckbox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', undefined] }
  },
  args: {}
} satisfies Meta<typeof VLCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    modelValue: true,
    label: 'I agree with the terms and conditions (VLCheckbox)',
    rules: [
      {
        validateFn: (value: boolean | undefined) => value === true,
        message: 'The value is required'
      }
    ]
  }
}
