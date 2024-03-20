<template>
  <VLIcon
    class="text-2xl"
    :name="data.active ? 'checkCircle' : 'closeCircle'"
    :class="data.active ? trueColor : 'text-red-500'"
  />
</template>

<script setup lang="ts">
import { VLIcon } from '../..'
import { addIcon } from '../../..'

import checkCircle from '@mdi/svg/svg/check-circle.svg'

addIcon('checkCircle', checkCircle)

interface Props {
  data: any
  trueColor?: string
}

withDefaults(defineProps<Props>(), {
  trueColor: 'text-green-500'
})
</script>
