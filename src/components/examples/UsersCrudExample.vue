<template>
  <VLCrud
    :singular_label="users_crud.singular_label"
    :primary_key="users_crud.primary_key"
    :headers="users_crud.headers"
    :filters="users_crud.filters"
    :form_fields="users_crud.form_fields"
    :actions="[]"
    :getItems="usersStore.getUsers"
  >
  </VLCrud>
</template>

<script setup lang="ts">
import VLCrud from '../VLCrud.vue'
import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()

const users_crud = {
  id: 'users',
  singular_label: 'user',
  primary_key: 'username',
  headers: [
    {
      i18n_key: 'header.username',
      align: 'start',
      sortable: false,
      value: 'username'
    },
    {
      i18n_key: 'header.firstname',
      align: 'start',
      sortable: false,
      value: 'firstname'
    },
    {
      i18n_key: 'header.lastname',
      align: 'start',
      sortable: false,
      value: 'lastname'
    },
    {
      i18n_key: 'header.active',
      align: 'start',
      sortable: false,
      value: 'active',
      type: 'boolean'
    },
    {
      i18n_key: 'header.activation_date',
      value: 'activation_date',
      align: 'start',
      sortable: false,
      type: 'date'
    },
    {
      i18n_key: 'header.expiration_date',
      value: 'expiration_date',
      align: 'start',
      sortable: false,
      type: 'date'
    },
    {
      i18n_key: 'header.actions',
      align: 'start',
      sortable: false,
      value: 'actions'
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
    // {
    //   name: 'Delete',
    //   i18n_key: 'tooltip.delete',
    //   component: Delete,
    //   icon_name: 'mdi-delete'
    // }
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
