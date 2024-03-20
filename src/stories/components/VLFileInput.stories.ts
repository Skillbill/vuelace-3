import type { Meta, StoryObj } from '@storybook/vue3'

import FileInput from '../../components/VLFileInput.vue'

const meta = {
  title: 'Vuelace3/File input',
  component: FileInput,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'text' }
  }
} satisfies Meta<typeof FileInput>

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
