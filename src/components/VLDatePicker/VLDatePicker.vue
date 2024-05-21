<template>
  <sl-dropdown
    :open="isDropdownOpen"
    hoist
    @sl-show.stop="isDropdownOpen = true"
    @sl-hide.stop="isDropdownOpen = false"
  >
    <div class="relative" slot="trigger">
      <sl-input
        :class="[errorMessage?.length && 'error']"
        class="date-input"
        @click="(evt: MouseEvent) => disabled && evt.stopPropagation()"
        :value="formattedValue"
        :label="label"
        :disabled="disabled"
        :required="required"
        :placeholder="placeholder"
        readonly
      >
        <div
          slot="suffix"
          class="flex items-center justify-end gap-2"
          :class="[disabled && 'cursor-not-allowed']"
        >
          <sl-icon-button
            v-show="clearable && !!model"
            library="system"
            name="windowClose"
            @click.stop="model = undefined"
          ></sl-icon-button>
          <sl-icon name="calendar"></sl-icon>
        </div>
      </sl-input>
      <ErrorMessage v-if="errorMessage?.length">{{ errorMessage }}</ErrorMessage>
    </div>
    <Calendar
      v-model="model"
      dateFormat="yy/mm/dd"
      inline
      :selectionMode="selectionMode"
      :minDate="minDate"
      :maxDate="maxDate"
      :showTime="withTime"
      :date-select="atDateSelect"
      panelClass="min-w-min !inline"
    />
  </sl-dropdown>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Calendar from 'primevue/calendar'

import ErrorMessage from '../utils/ErrorMessage.vue'
import type { VLInputRuleType } from '../utils/types'
import type { VLDatePickerProps } from './types'

const props = withDefaults(defineProps<VLDatePickerProps>(), {
  name: '',
  defaultValue: '',
  placeholder: '',
  clearable: true,
  required: false,
  disabled: false,
  selectionMode: 'single',
  minDate: undefined,
  maxDate: undefined,
  withTime: false,
  error: '',
  rules: () => [] as VLInputRuleType[]
})

const isDropdownOpen = ref<boolean>(false)

const model = defineModel<Date | Date[] | undefined>()

const formattedValue = computed<string | undefined>(() => {
  if (!model.value) return undefined

  if (Array.isArray(model.value)) {
    if (props.selectionMode === 'range') {
      const [startDate, endDate] = model.value
      const formattedStartDate = formatDate(startDate)
      const formattedEndDate = endDate ? formatDate(endDate) : ''
      return `${formattedStartDate} ~ ${formattedEndDate}`
    } else if (props.selectionMode === 'multiple') {
      return model.value.map((date) => formatDate(date)).join(', ')
    }
  }

  if (model.value instanceof Date) {
    return formatDate(model.value)
  }

  return ''
})

const formatDate = (date: Date) => {
  let formattedDate = `${('0' + date.getDate()).slice(
    -2
  )}-${('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`

  if (props.withTime) {
    formattedDate += ` ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`
  }

  return formattedDate
}

const atDateSelect = (date: Date) => {
  isDropdownOpen.value = false
  model.value = date
}

const validationError = ref<string | undefined>()

const errorMessage = computed(() => {
  if (props.error) {
    return props.error
  }
  return validationError.value
})

const validateInput = () => {
  if (props.rules.length) {
    for (const rule of props.rules) {
      if (!rule.validateFn(model.value)) {
        validationError.value = rule.message
        return false
      }
    }
  }
  validationError.value = undefined
  return true
}

watch(model, () => {
  validateInput()
})

defineExpose({
  isValid: () => errorMessage.value === undefined || errorMessage.value.length === 0,
  validateInput
})
</script>

<style scoped>
:deep(.p-datepicker table td > span.p-highlight) {
  color: var(--sl-color-primary-500);
  background: var(--sl-color-primary-100);
}

:deep(.p-datepicker table td > span:focus) {
  box-shadow: 0 0 0 0.2rem var(--sl-color-primary-400);
}

:deep(.p-datepicker-title) {
  display: flex;
  gap: 1rem;
}

:deep(.p-datepicker table td) {
  padding: 0;
}

:deep(span.p-calendar) {
  max-height: 50vh;
}

:deep(.p-calendar > .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight) {
  background: var(--sl-color-primary-100);
  color: var(--sl-color-primary-500);
}

.date-input::part(input) {
  text-overflow: ellipsis;
}

.error::part(base),
.error::part(form-control-label) {
  border-color: var(--sl-color-danger-500);
  color: var(--sl-color-danger-500);
}
</style>
