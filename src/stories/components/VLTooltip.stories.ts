import type { Meta, StoryObj } from '@storybook/vue3'
import { VLTooltip } from '../../components'

const meta = {
  title: 'Components/Tooltip',
  component: VLTooltip,
  tags: ['autodocs'],
  render: (args) => ({
    components: { VLTooltip },
    setup() {
      return { args }
    },
    template: `
      <VLTooltip v-bind="args">
        <span>{{args.default}}</span>
      </VLTooltip>
    `
  }),
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end'
      ]
    }
  },
  args: {
    default: 'Hover me',
    hoist: true
  }
} satisfies Meta<typeof VLTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Medium: Story = {
  args: {
    content: 'tooltip!!!'
  }
}
