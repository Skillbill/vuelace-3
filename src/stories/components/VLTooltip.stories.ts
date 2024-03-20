import type { Meta, StoryObj } from '@storybook/vue3'
import Tooltip from '../../components/VLTooltip.vue'

const meta = {
  title: 'Vuelace3/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args }
    },

    template: `
      <Tooltip v-bind="args">
        <span>{{args.default}}</span>
      </Tooltip>
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
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Medium: Story = {
  args: {
    content: 'tooltip!!!'
  }
}
