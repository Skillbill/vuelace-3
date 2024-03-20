import type { Meta, StoryObj } from '@storybook/vue3'

import TextArea from '../../components/VLTextArea.vue'

const meta = {
  title: 'Vuelace3/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', undefined]
    },
    autocapitalize: {
      control: 'select',
      options: ['off', 'none', 'on', 'sentences', 'words', 'characters', undefined]
    },
    autocorrect: {
      control: 'select',
      options: ['off', 'on', undefined]
    },
    resize: { control: 'select', options: ['auto', 'none', 'vertical', undefined] }
  }
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Description (VLTextArea)'
  }
}
