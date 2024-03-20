<template>
  <div class="flex items-center justify-center h-full">
    <div class="flex flex-col items-start justify-center w-1/3 h-full gap-10">
      <VLInput
        v-model="values['textInput' as keyof typeof values]"
        ref="textInput"
        label="Name (VLInput)"
        :rules="[
          {
            validateFn: (value: string | undefined) => value && value.length > 0,
            message: 'The value is required'
          },
          {
            validateFn: (value: string) => value.length > 1,
            message: 'The value must be at least than 2 character long'
          }
        ]"
      />

      <VLNumberInput
        v-model="values['numberInput' as keyof typeof values]"
        label="Age (VLNumberInput)"
        ref="numberInput"
        :rules="[
          {
            validateFn: (value: number | undefined) => value != undefined,
            message: 'The value is required'
          },
          {
            validateFn: (value: number) => value > 0,
            message: 'The value must be greater than 0'
          },
          {
            validateFn: (value: number) => value <= 150,
            message: 'The number must be less than 150'
          }
        ]"
        clearable
        helpText="The number must be between 0 and 150"
      />
      <VLSelect
        ref="selectInput"
        v-model="values['selectInput' as keyof typeof values]"
        label="Favorite music genres (VLSelect)"
        placeholder="Select your favorite music genre..."
        multiple
        :options="[
          { value: 'dance', text: 'Dance' },
          { value: 'rock', text: 'Rock' },
          { value: 'pop', text: 'Pop' },
          { value: 'indie', text: 'Indie' },
          { value: 'classic', text: 'Classic' },
          { value: 'country', text: 'Country' },
          { value: 'jazz', text: 'Jazz' },
          { value: 'others', text: 'Others...' }
        ]"
        :rules="[
          {
            validateFn: (value: string | string[] | undefined) =>
              Array.isArray(value) ? value.length > 0 : !!value,
            message: 'The value is required'
          },
          {
            validateFn: (value: string | string[] | undefined) =>
              Array.isArray(value) ? value.includes('rock') : value === 'rock',
            message: 'Rock must be selected :)'
          }
        ]"
      />

      <VLColorPicker
        v-model="values['colorPickerInput' as keyof typeof values]"
        name="colorPickerInput"
        label="Favorite color"
      />
      <VLDatePicker
        ref="dateInput"
        v-model="values['dateInput' as keyof typeof values]"
        label="Date of birth"
        :rules="[
          {
            validateFn: (value: Date | undefined) => !!value,
            message: 'The value is required'
          },
          {
            validateFn: (value: Date) => value.getTime() < new Date().getTime(),
            message: 'The date must be in the past'
          }
        ]"
      />
      <VLImageUpload v-model="values['fileInput' as keyof typeof values]" label="File input" />
      <VLRadioGroup
        class="text-2xl"
        size="large"
        v-model="values['radioValue' as keyof typeof values]"
        :options="[
          { value: 'dog', label: '&#128021; Dogs' },
          { value: 'cat', label: '&#128049; Cats' },
          { value: 'parrot', label: '&#129436; Parrots', disabled: true }
        ]"
      >
        <div slot="label">Favorite pet</div>
      </VLRadioGroup>
      <VLCheckbox
        v-model="values['checkboxInput' as keyof typeof values]"
        name="checkboxInput"
        label="I agree with the terms and conditions"
        ref="checkboxInput"
        :rules="[
          {
            validateFn: (value: boolean | undefined) => value === true,
            message: 'The value is required'
          }
        ]"
      />
      <VLButton @click="atClick">
        <div class="flex items-center">
          Submit<VLIcon class="text-xl" library="system" name="chevronRight" />
        </div>
      </VLButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import VLInput from './components/VLInput.vue'
import VLNumberInput from './components/VLNumberInput.vue'
import VLSelect from './components/VLSelect.vue'
import VLCheckbox from './components/VLCheckbox.vue'
import VLDatePicker from './components/VLDatePicker.vue'
import VLColorPicker from './components/VLColorPicker.vue'
import VLRadioGroup from './components/VLRadioGroup.vue'
import VLIcon from './components/VLIcon.vue'
import VLImageUpload from './components/VLImageUpload.vue'
import VLButton from './components/VLButton.vue'

const values = ref({})

const textInput = ref<InstanceType<typeof VLInput> | null>(null)
const numberInput = ref<InstanceType<typeof VLNumberInput> | null>(null)
const selectInput = ref<InstanceType<typeof VLSelect> | null>(null)
const checkboxInput = ref<InstanceType<typeof VLCheckbox> | null>(null)
const dateInput = ref<InstanceType<typeof VLDatePicker> | null>(null)

const atClick = () => {
  textInput.value?.validateInput()
  numberInput.value?.validateInput()
  selectInput.value?.validateInput()
  checkboxInput.value?.validateInput()
  dateInput.value?.validateInput()

  console.log('You clicked me!')
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
