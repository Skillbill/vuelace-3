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
    :editItem="usersStore.updateUser"
    :components="{
      boolean: ActiveCell,
      date: DateCell
    }"
    actionHeaderI18nKey="Actions"
    addI18nKey="Add"
    applyI18nKey="Apply"
    resetI18nKey="Reset"
    cancelI18nKey="Cancel"
    addButtonI18nKey="Add user"
    addTitleI18nKey="Add user"
    editTitleI18nKey="Edit user"
    editTooltipI18nKey="Edit"
  >
  </VLCrud>
</template>

<script setup lang="ts">
import { VLCrud, type VLCrudProps } from '../VLCrud'
import { useUsersStore } from '../../stores/users'
import { addIcon } from '../..'

import ghost from '@mdi/svg/svg/ghost.svg'

addIcon('ghost', ghost)

import ActiveCell from './cells/ActiveCell.vue'
import DateCell from './cells/DateCell.vue'

import DeleteDialog from './dialogs/DeleteDialog.vue'

const usersStore = useUsersStore()

const users_crud: Omit<VLCrudProps, 'getItems'> = {
  id: 'users',
  singular_label: 'user',
  primary_key: 'id',
  filters_title: 'filters',
  headers: [
    {
      i18n_key: 'Username',
      sortable: false,
      value: 'username',
      columnProps: {
        class: 'w-1/4'
      }
    },
    {
      i18n_key: 'First name',
      sortable: false,
      value: 'firstName'
    },
    {
      i18n_key: 'Last name',
      sortable: false,
      value: 'lastName'
    },
    {
      i18n_key: 'Role',
      sortable: false,
      value: 'role'
    },
    {
      i18n_key: 'Age',
      sortable: false,
      value: 'age'
    },
    {
      i18n_key: 'Active',
      sortable: false,
      value: 'active',
      type: 'boolean',
      componentProps: {
        trueColor: 'text-success-500'
      }
    },
    {
      i18n_key: 'Activation date',
      value: 'activation_date',
      sortable: false,
      type: 'date'
    },
    {
      i18n_key: 'Expiration date',
      value: 'expiration_date',
      sortable: false,
      type: 'date'
    },
    {
      i18n_key: 'Description',
      value: 'description'
    }
  ],
  filters: [
    {
      i18n_key: 'Username',
      value: 'username',
      input_type: 'text'
    },
    {
      i18n_key: 'First name',
      value: 'firstName',
      input_type: 'text'
    },
    {
      i18n_key: 'Last name',
      value: 'lastName',
      input_type: 'text'
    },
    {
      i18n_key: 'Role',
      value: 'role',
      input_type: 'select',
      options: [
        { value: '', text: '' },
        { value: 'admin', text: 'admin' },
        { value: 'user', text: 'user' },
        { value: 'guest', text: 'guest', icon: 'ghost' }
      ],
      default_value: ''
    },
    // {
    //   i18n_key: 'Active',
    //   value: 'active',
    //   input_type: 'checkbox',
    //   default_value: true
    // },
    // {
    //   i18n_key: 'Age',
    //   value: 'age',
    //   input_type: 'number',
    //   default_value: 30
    // },
    {
      i18n_key: 'Activation date',
      value: 'activation_date',
      input_type: 'date'
    }
    // {
    //   i18n_key: 'Expiration date',
    //   value: 'expiration_date',
    //   input_type: 'date'
    // }
  ],
  form_fields: [
    {
      i18n_key: 'Username',
      value: 'username',
      placeholder: 'Enter username',
      required: true,
      rules: [
        { validateFn: (v: string) => !!v, message: 'Username is required' },
        {
          validateFn: (v: string) => v.length > 3,
          message: 'Username must be at least 4 characters long'
        }
      ],
      side_effect: (model, fields) => {
        const { username } = model
        if (username === 'admin') {
          fields.role.options = [{ value: 'admin', text: 'admin' }]
          model.role = 'admin'
        } else {
          fields.role.options = [
            { value: '', text: '' },
            { value: 'admin', text: 'admin' },
            { value: 'user', text: 'user' },
            { value: 'guest', text: 'guest' }
          ]
        }
      },
      input_type: 'text'
    },
    {
      i18n_key: 'First name',
      value: 'firstName',
      input_type: 'text'
    },
    {
      i18n_key: 'Last name',
      value: 'lastName',
      input_type: 'text'
    },
    {
      i18n_key: 'Active',
      value: 'active',
      input_type: 'checkbox',
      default_value: true
    },
    {
      i18n_key: 'Role',
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
      i18n_key: 'Age',
      value: 'age',
      input_type: 'number'
    },
    {
      i18n_key: 'Activation date',
      value: 'activation_date',
      input_type: 'date'
    },
    {
      i18n_key: 'Expiration date',
      value: 'expiration_date',
      input_type: 'date'
    },
    { i18n_key: 'Description', value: 'description', input_type: 'textarea' }
  ],
  actions: [
    {
      name: 'Delete',
      i18n_key: 'Delete',
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
