import type { Meta, StoryObj } from '@storybook/vue3'

import { VLImageUpload } from '../../components'

const meta = {
  title: 'Components/Image upload',
  component: VLImageUpload,
  tags: ['autodocs']
  // argTypes: {
  //   size: { control: 'select', options: ['small', 'medium', 'large'] },
  //   backgroundColor: { control: 'color' },
  //   onClick: { action: 'clicked' }
  // },
} satisfies Meta<typeof VLImageUpload>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Profile image (VLImageUpload)',
    placeholder: 'Select a file...',
    name: 'file'
  }
}
