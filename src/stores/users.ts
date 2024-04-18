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
      const response = await getUsersAPI(page, rows, filters)

      return {
        result: [...response.result],
        page: {
          currentPage: response.page.currentPage,
          totalRows: response.page.totalRows,
          pageRows: response.page.pageRows
        }
      }
    } catch (error) {
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
    } catch (error) {
      console.log(error)
    }
  }

  const updateUser = async (id: string, user: User) => {
    try {
      await updateUserAPI(id, user)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteUser = async (id: string) => {
    try {
      await deleteUserAPI(id)
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
