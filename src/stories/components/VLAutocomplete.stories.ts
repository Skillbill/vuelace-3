import type { Meta, StoryObj } from '@storybook/vue3'
import { VLAutocomplete } from '../../components'

const meta = {
  title: 'Vuelace3/Autocomplete',
  component: VLAutocomplete,
  tags: ['autodocs'],
  args: {
    label: 'Favorite music genres (VLAutocomplete)',
    options: [
      { value: 'station-levels', text: 'Stations Levels' },
      { value: 'trains', text: 'Trains' },
      { value: 'sections', text: 'Sections' },
      { value: 'building-levels', text: 'Buildings Levels' }
    ],
    emptySearchMessage: 'Nothing found'
  }
} satisfies Meta<typeof VLAutocomplete>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {}
