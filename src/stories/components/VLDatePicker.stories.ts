import type { Meta, StoryObj } from '@storybook/vue3'

import { VLDatePicker } from '../../components'

const meta = {
  title: 'Components/Date picker',
  component: VLDatePicker,
  tags: ['autodocs'],
  argTypes: {
    selectionMode: { control: 'select', options: ['single', 'range', 'multiple', undefined] }
  },
  args: {}
} satisfies Meta<typeof VLDatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    label: 'Date of birth (VLDatePicker)',
    rules: [
      {
        validateFn: (value: Date | undefined) => !!value,
        message: 'The value is required'
      },
      {
        validateFn: (value: Date) => value.getTime() < new Date().getTime(),
        message: 'Oh...it seems you are not born yet!'
      }
    ]
  }
}

export const Multiple: Story = {
  args: {
    label: 'Date',
    name: 'DateInput',
    placeholder: 'Select a date...',
    selectionMode: 'multiple'
  }
}

export const Range: Story = {
  args: {
    label: 'Date',
    name: 'DateInput',
    placeholder: 'Select a date...',
    selectionMode: 'range'
  }
}

export const WithTime: Story = {
  args: {
    label: 'Date',
    name: 'DateInput',
    placeholder: 'Select a date and time...',
    withTime: true
  }
}
