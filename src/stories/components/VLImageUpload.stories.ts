import type { Meta, StoryObj } from '@storybook/vue3'

import ImageUploadInput from '../../components/VLImageUpload.vue'

const meta = {
  title: 'Vuelace3/Image upload',
  component: ImageUploadInput,
  tags: ['autodocs']
  // argTypes: {
  //   size: { control: 'select', options: ['small', 'medium', 'large'] },
  //   backgroundColor: { control: 'color' },
  //   onClick: { action: 'clicked' }
  // },
} satisfies Meta<typeof ImageUploadInput>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Profile image (VLImageUpload)',
    placeholder: 'Select a file...',
    name: 'file'
  }
}
