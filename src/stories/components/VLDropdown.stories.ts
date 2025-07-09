import type { Meta, StoryObj } from '@storybook/vue3'
import { VLDropdown } from '../../components'

const meta = {
  title: 'Components/Dropdown',
  component: VLDropdown,
  tags: ['autodocs'],
  args: {
    label: 'Favorite music genres (VLDropdown)',
    options: [
      { value: 'station-levels', text: 'Stations Levels' },
      { value: 'trains', text: 'Trains' },
      { value: 'sections', text: 'Sections' },
      { value: 'building-levels', text: 'Buildings Levels' }
    ],
    dropdown: true,
    manual: true,
    multiple: true
  }
} satisfies Meta<typeof VLDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}
