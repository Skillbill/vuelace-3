<template>
  <VLCrud
    :singular_label="users_crud.singular_label"
    :primary_key="users_crud.primary_key"
    :headers="users_crud.headers"
    :filters="users_crud.filters"
    :form_fields="users_crud.form_fields"
    :actions="users_crud.actions"
    :getItems="usersStore.getUsers"
    :components="{
      boolean: ActiveCell,
      date: DateCell
    }"
  >
  </VLCrud>
</template>

<script setup lang="ts">
import VLCrud from '../VLCrud.vue'
import { useUsersStore } from '../../stores/users'

import ActiveCell from './cells/ActiveCell.vue'
import DateCell from './cells/DateCell.vue'

import DeleteDialog from './dialogs/DeleteDialog.vue'

const usersStore = useUsersStore()

const users_crud = {
  id: 'users',
  singular_label: 'user',
  primary_key: 'username',
  headers: [
    {
      i18n_key: 'header.username',
      sortable: false,
      value: 'username'
    },
    {
      i18n_key: 'header.firstname',
      sortable: false,
      value: 'firstName'
    },
    {
      i18n_key: 'header.lastname',
      sortable: false,
      value: 'lastName'
    },
    {
      i18n_key: 'header.active',
      sortable: false,
      value: 'active',
      type: 'boolean',
      componentProps: {
        trueColor: 'text-red-500'
      }
    },
    {
      i18n_key: 'header.activation_date',
      value: 'activation_date',
      sortable: false,
      type: 'date'
    },
    {
      i18n_key: 'header.expiration_date',
      value: 'expiration_date',
      sortable: false,
      type: 'date'
    }
  ],
  filters: [
    {
      i18n_key: 'header.username',
      value: 'username',
      input_type: 'text',
      default_value: 'biagio'
    },
    {
      i18n_key: 'header.firstname',
      value: 'firstname',
      input_type: 'text'
    },
    {
      i18n_key: 'header.lastname',
      value: 'lastname',
      input_type: 'text'
    }
  ],
  form_fields: [
    {
      i18n_key: 'header.username',
      value: 'username',
      required: true,
      input_type: 'text'
    },
    {
      i18n_key: 'header.firstname',
      value: 'firstname',
      input_type: 'text'
    },
    {
      i18n_key: 'header.lastname',
      value: 'lastname',
      input_type: 'text'
    },
    {
      i18n_key: 'header.active',
      value: 'active',
      input_type: 'checkbox',
      default_value: true
    },
    {
      i18n_key: 'header.activation_date',
      value: 'activation_date',
      input_type: 'date'
    },
    {
      i18n_key: 'header.expiration_date',
      value: 'expiration_date',
      input_type: 'date'
    }
  ],
  actions: [
    {
      name: 'Delete',
      i18n_key: 'tooltip.delete',
      icon_name: 'delete',
      onClick: (data: any) => {
        console.log('Delete side effect', { ...data })
      },
      component: DeleteDialog
    }
    // {
    //   name: 'Change Password',
    //   i18n_key: 'tooltip.change_password',
    //   component: ChangePassword,
    //   icon_name: 'mdi-key'
    // },
    // {
    //   name: 'Account Settings',
    //   i18n_key: 'tooltip.account_settings',
    //   component: AccountSettings,
    //   icon_name: 'mdi-account-cog'
    // },
    // {
    //   name: 'Account Permissions',
    //   i18n_key: 'tooltip.account_permissions',
    //   component: Permissions,
    //   icon_name: 'mdi-key-variant',
    //   properties: {
    //     itemLabelField: 'username',
    //     kind: 'users'
    //   }
    // }
  ]
}
</script>
