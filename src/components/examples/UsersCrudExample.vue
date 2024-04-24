<template>
  <VLCrud
    :id="users_crud.id"
    :singular_label="users_crud.singular_label"
    :primary_key="users_crud.primary_key"
    :headers="users_crud.headers"
    :filters="users_crud.filters"
    :form_fields="users_crud.form_fields"
    :actions="users_crud.actions"
    :getItems="usersStore.getUsers"
    :addItem="usersStore.createUser"
    :components="{
      boolean: ActiveCell,
      date: DateCell
    }"
  >
  </VLCrud>
</template>

<script setup lang="ts">
import { VLCrud, type VLCrudProps } from '../VLCrud'
import { useUsersStore } from '../../stores/users'

import ActiveCell from './cells/ActiveCell.vue'
import DateCell from './cells/DateCell.vue'

import DeleteDialog from './dialogs/DeleteDialog.vue'

const usersStore = useUsersStore()

const users_crud: Omit<VLCrudProps, 'getItems'> = {
  id: 'users',
  singular_label: 'user',
  primary_key: 'username',
  filters_title: 'filters',
  headers: [
    {
      i18n_key: 'header.username',
      sortable: false,
      value: 'username',
      columnProps: {
        class: 'w-1/4'
      }
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
      i18n_key: 'header.role',
      sortable: false,
      value: 'role'
    },
    {
      i18n_key: 'header.age',
      sortable: false,
      value: 'age'
    },
    {
      i18n_key: 'header.active',
      sortable: false,
      value: 'active',
      type: 'boolean',
      componentProps: {
        trueColor: 'text-success-500'
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
      input_type: 'text'
    },
    {
      i18n_key: 'header.firstname',
      value: 'firstName',
      input_type: 'text'
    },
    {
      i18n_key: 'header.lastname',
      value: 'lastName',
      input_type: 'text'
    },
    {
      i18n_key: 'header.role',
      value: 'role',
      input_type: 'select',
      options: [
        { value: '', text: '' },
        { value: 'admin', text: 'admin' },
        { value: 'user', text: 'user' },
        { value: 'guest', text: 'guest' }
      ],
      default_value: ''
    },
    // {
    //   i18n_key: 'header.active',
    //   value: 'active',
    //   input_type: 'checkbox',
    //   default_value: true
    // },
    // {
    //   i18n_key: 'header.age',
    //   value: 'age',
    //   input_type: 'number',
    //   default_value: 30
    // },
    {
      i18n_key: 'header.activation_date',
      value: 'activation_date',
      input_type: 'date',
      default_value: '2021-01-01'
    }
    // {
    //   i18n_key: 'header.expiration_date',
    //   value: 'expiration_date',
    //   input_type: 'date'
    // }
  ],
  form_fields: [
    {
      i18n_key: 'header.username',
      value: 'username',
      required: true,
      rules: [
        { validateFn: (v: string) => !!v, message: 'Username is required' },
        {
          validateFn: (v: string) => v.length > 3,
          message: 'Username must be at least 4 characters long'
        }
      ],
      input_type: 'text'
    },
    {
      i18n_key: 'header.firstname',
      value: 'firstName',
      rules: [{ validateFn: (v: string) => !!v, message: 'first name is required' }],
      input_type: 'text'
    },
    {
      i18n_key: 'header.lastname',
      value: 'lastName',
      input_type: 'text'
    },
    {
      i18n_key: 'header.active',
      value: 'active',
      input_type: 'checkbox',
      default_value: true
    },
    {
      i18n_key: 'header.role',
      value: 'role',
      input_type: 'select',
      options: [
        { value: '', text: '' },
        { value: 'admin', text: 'admin' },
        { value: 'user', text: 'user' },
        { value: 'guest', text: 'guest' }
      ]
    },
    {
      i18n_key: 'header.age',
      value: 'age',
      input_type: 'number'
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
      component: DeleteDialog,
      dialogProperties: {
        noCloseOnOutsideClick: false
      }
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
