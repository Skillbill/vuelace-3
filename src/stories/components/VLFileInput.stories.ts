import type { Meta, StoryObj } from '@storybook/vue3'

import { VLFileInput } from '../../components'

const meta = {
  title: 'Components/File input',
  component: VLFileInput,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'text' }
  }
} satisfies Meta<typeof VLFileInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'File Upload (VLFileInput)',
    placeholder: 'Select a file...',
    name: 'file'
  }
}

export const Multiple: Story = {
  args: {
    label: 'File Upload (VLFileInput)',
    placeholder: 'Select a file...',
    name: 'file',
    multiple: true,
    fileLimit: 2,
    onError: (error: any) => {
      console.log('Error: ', error)
    }
  }
}
