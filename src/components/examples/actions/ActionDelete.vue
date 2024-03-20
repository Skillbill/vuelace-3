<template>
  <VLIcon class="text-3xl text-red-500 cursor-pointer hover:opacity-40" name="deleteCircle" />
</template>

<script setup lang="ts">
import deleteCircle from '@mdi/svg/svg/delete-circle.svg'

import { VLIcon } from '../..'
import { addIcon } from '../../..'

addIcon('deleteCircle', deleteCircle)

defineProps<{
  data: any
}>()
</script>
