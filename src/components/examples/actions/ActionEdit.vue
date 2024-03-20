<template>
  <VLIcon
    class="text-3xl text-red-500 cursor-pointer hover:opacity-40"
    name="pencilCircle"
  ></VLIcon>
</template>

<script setup lang="ts">
import { VLIcon } from '../..'

import pencilCircle from '@mdi/svg/svg/pencil-circle.svg'
import { addIcon } from '../../..'

addIcon('pencilCircle', pencilCircle)

defineProps<{
  data: any
}>()
</script>
