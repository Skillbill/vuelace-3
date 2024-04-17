import { defineStore } from 'pinia'
import { ref } from 'vue'

import {
  createUserAPI,
  getUsersAPI,
  getUserAPI,
  updateUserAPI,
  deleteUserAPI
} from '../services/users'
import { User } from '../components/examples/types/user'

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([])

  const getUsers = async (page: number, rows: number, filters?: any) => {
    try {
      const response = await getUsersAPI(filters)
      return {
        result: [...response],
        page: {
          totalRows: 3
        }
      }
    } catch (error) {
      console.log(page, rows, filters)
      console.log(error)
    }
  }

  const getUser = async (id: string) => {
    try {
      const response = await getUserAPI(id)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const createUser = async (user: User) => {
    try {
      await createUserAPI({ ...user, id: `${users.value.length + 1}` })
      await getUsers(0, 0)
    } catch (error) {
      console.log(error)
    }
  }

  const updateUser = async (id: string, user: User) => {
    try {
      await updateUserAPI(id, user)
      await getUsers(0, 0)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async (id: string) => {
    try {
      await deleteUserAPI(id)
      await getUsers(0, 0)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    users,
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
  }
})
