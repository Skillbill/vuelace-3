import type { Meta, StoryObj } from '@storybook/vue3'

import { VLInput } from '../../components'

const meta = {
  title: 'Components/Input',
  component: VLInput,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large', undefined] },
    type: { control: 'select', options: ['password', 'text', 'email', undefined] },
    autocapitalize: {
      control: 'select',
      options: ['off', 'none', 'on', 'sentences', 'words', 'characters', undefined]
    },
    autocorrect: { control: 'select', options: ['off', 'on', undefined] },
    inputmode: { control: 'select', options: ['none', 'text', 'email', undefined] }
  }
} satisfies Meta<typeof VLInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Name (VLInput)',
    rules: [
      {
        validateFn: (value: string | undefined) => value && value.length > 0,
        message: 'The value is required'
      },
      {
        validateFn: (value: string) => value.length > 1,
        message: 'The value must be at least than 2 character long'
      }
    ]
  }
}
