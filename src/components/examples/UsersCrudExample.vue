<template>
  <div class="flex flex-col gap-4">
    <VLCrudFilters
      :default-values="filterDefaultValue"
      :fields="filters"
      @apply="(filters: any) => usersStore.getUsers(filters)"
      @reset="(filters: any) => usersStore.getUsers(filters)"
    />
    <div><VLButton @click="() => (dialogStatus.add = true)">Add User</VLButton></div>

    <VLDataTableCrud
      ref="table"
      removableSort
      :items="usersStore.users"
      :columns="columns"
      :actions="actions"
      :paginator="false"
      @page="onPage"
    >
      <template #empty>Empty message</template>
    </VLDataTableCrud>
  </div>
  <VLCrudForm
    title="Add user"
    confirmLabel="Add"
    v-model:showDialog="dialogStatus.add"
    validate-all
    :fields="fields"
    @cancel="onClose"
    @confirm="(data: any) => usersStore.createUser({ ...data })"
  />
  <VLCrudForm
    title="Edit user"
    confirmLabel="Edit"
    v-model:showDialog="dialogStatus.edit"
    v-model="form"
    :fields="fields"
    @close="onClose"
    @confirm="(data: any) => usersStore.updateUser(data.id, { ...data })"
  />
  <DeleteDialog
    v-model="dialogStatus.delete"
    :selectedItem="selectedItem"
    @close="onClose"
    @confirm="(id: string) => usersStore.deleteUser(id)"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { VLButton, VLInput, VLCheckbox, VLDatePicker, VLDataTableCrud } from '..'
import VLCrudForm from '../VLCrudForm.vue'
import VLCrudFilters from '../VLCrudFilters.vue'

/* Actions */
import ActionDelete from './actions/ActionDelete.vue'
import ActionEdit from './actions/ActionEdit.vue'

/* Dialogs */
import DeleteDialog from './dialogs/DeleteDialog.vue'

/* Custom cells */
import ActiveCell from './cells/ActiveCell.vue'
import DateCell from './cells/DateCell.vue'

import { useUsersStore } from '../../stores/users'

import { User } from './types/user'
import type { Column } from '../utils/types'

const filterDefaultValue = {
  username: 'admin'
}

const filters = computed(() => {
  let username = {
    name: 'username',
    component: VLInput,
    props: {
      label: 'Username'
    }
  }

  let firstName = {
    name: 'firstName',
    component: VLInput,
    props: {
      label: 'First name'
    }
  }

  let lastName = {
    name: 'lastName',
    component: VLInput,
    props: {
      label: 'Last name'
    }
  }

  return [username, firstName, lastName]
})

const usersStore = useUsersStore()

const selectedItem = ref<any>(null)

const form = ref<User>({
  id: '',
  username: '',
  firstName: '',
  lastName: '',
  active: false
})

const dialogStatus = ref<{ [key: string]: boolean }>({
  edit: false,
  delete: false,
  add: false
})

const onPage = (evt: any) => {
  console.log('onPage', evt)
}

const onClose = () => {
  form.value = {
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    active: false
  }

  selectedItem.value = null
}

const columns: Column[] = [
  {
    name: 'header.username',
    value: 'username'
  },
  {
    name: 'header.firstname',
    value: 'firstName',
    sortable: true
  },
  {
    name: 'header.lastname',
    value: 'lastName'
  },
  {
    name: 'header.active',
    value: 'active',
    component: ActiveCell
  },
  {
    name: 'header.activation_date',
    value: 'activation_date',
    component: DateCell
  },
  {
    name: 'header.expiration_date',
    value: 'expiration_date',
    component: DateCell
  }
]

const actions = [
  {
    component: ActionDelete,
    onClick: (row: any) => {
      selectedItem.value = row
      dialogStatus.value.delete = true
    }
  },
  {
    component: ActionEdit,
    onClick: (row: any) => {
      form.value = { ...row }
      dialogStatus.value.edit = true
    }
  }
]

const fields = computed(() => {
  let username = {
    name: 'username',
    component: VLInput,
    props: {
      label: 'Username',
      required: true,
      rules: [
        {
          validateFn: (value: string | undefined) => value && value.length > 0,
          message: 'The value is required'
        },
        {
          validateFn: (value: string) => value.length > 1,
          message: 'The value must be at least than 2 character long'
        }
      ]
    }
  }

  let firstName = {
    name: 'firstName',
    component: VLInput,
    props: {
      label: 'First name',
      required: true,
      rules: [
        {
          validateFn: (value: string | undefined) => value && value.length > 0,
          message: 'The value is required'
        },
        {
          validateFn: (value: string) => value.length > 1,
          message: 'The value must be at least than 2 character long'
        }
      ]
    }
  }

  let lastName = {
    name: 'lastName',
    component: VLInput,
    props: {
      label: 'Last name',
      required: true
    }
  }

  let active = {
    name: 'active',
    component: VLCheckbox,
    props: {
      label: 'Active',
      onChange: () => {
        if (!form.value.active) {
          form.value['activation_date'] = undefined
          form.value['expiration_date'] = undefined
        }
      }
    }
  }

  let activation_date = {
    name: 'activation_date',
    component: VLDatePicker,
    props: {
      label: 'Activation date',
      disabled: !form.value.active
    }
  }

  let expiration_date = {
    name: 'expiration_date',
    component: VLDatePicker,
    props: {
      label: 'Expiration date',
      disabled: !form.value.active
    }
  }

  return [username, firstName, lastName, active, activation_date, expiration_date]
})

onMounted(() => {
  usersStore.getUsers()
})
</script>
