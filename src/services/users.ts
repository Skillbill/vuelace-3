import { User } from '../components/examples/types/user'

const users = [
  {
    id: '1',
    username: 'admin',
    firstName: 'Admin',
    lastName: 'Admin',
    active: true,
    activation_date: new Date(),
    expiration_date: new Date()
  },
  {
    id: '2',
    username: 'user',
    firstName: 'User',
    lastName: 'User',
    active: true,
    activation_date: new Date(),
    expiration_date: new Date()
  },
  {
    id: '3',
    username: 'guest',
    firstName: 'Guest',
    lastName: 'Guest',
    active: true,
    activation_date: new Date(),
    expiration_date: new Date()
  }
] as User[]

export const getUsersAPI = async (page: number, rows: number, filters?: any) => {
  let result: any = [...users]

  if (filters && Object.keys(filters).length) {
    result = result.filter((user: any) => {
      return Object.keys(filters).every((key) => {
        return !filters[key] || user[key].includes(filters[key])
      })
    })
  }

  return { result, page: { totalRows: 3, currentPage: page, pageRows: rows, totalPages: 1 } }
}

export const getUserAPI = async (id: string) => {
  return users.find((user) => user.id === id)
}

export const createUserAPI = async (user: User) => {
  users.push(user)
  return user
}

export const updateUserAPI = async (id: string, user: User) => {
  const index = users.findIndex((user) => user.id === id)
  users[index] = user
  return user
}

export const deleteUserAPI = async (id: string) => {
  const index = users.findIndex((user) => user.id === id)
  users.splice(index, 1)
}
