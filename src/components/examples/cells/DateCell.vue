<template>
  <div>
    {{
      data[field] &&
      `${data[field].getFullYear()}-${('0' + (data[field].getMonth() + 1)).slice(-2)}-${(
        '0' + data[field].getDate()
      ).slice(-2)}`
    }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: any
  field: string
}

defineProps<Props>()
</script>
