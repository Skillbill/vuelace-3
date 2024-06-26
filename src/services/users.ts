import { User } from '../components/examples/types/user'

const users = [
  {
    id: '1',
    username: 'admin',
    firstName: 'Admin',
    lastName: 'Admin',
    active: true,
    role: 'admin',
    age: 30,
    activation_date: new Date(),
    expiration_date: new Date()
  },
  {
    id: '2',
    username: 'user',
    firstName: 'User',
    lastName: 'User',
    active: true,
    role: 'user',
    age: 25,
    activation_date: new Date(),
    expiration_date: new Date()
  },
  {
    id: '3',
    username: 'guest',
    firstName: 'Guest',
    lastName: 'Guest',
    role: 'guest',
    active: false,
    age: 20,
    activation_date: new Date(),
    expiration_date: new Date()
  }
] as User[]

export const getUsersAPI = async (page: number, rows: number, filters?: any) => {
  let result: any = [...users]
  if (filters && Object.keys(filters).length) {
    result = result.filter((user: any) => {
      return Object.keys(filters).every((key) => {
        if (['', null, undefined].includes(filters[key])) return true

        switch (typeof filters[key]) {
          case 'boolean':
            return user[key] === filters[key]
          case 'number':
            return user[key] === filters[key]
          case 'object':
            if (key === 'activation_date')
              return user[key]?.toLocaleDateString() == filters[key].toLocaleDateString()
            if (key === 'expiration_date')
              return user[key]?.toLocaleDateString() == filters[key].toLocaleDateString()
            return user[key] === filters[key]
          default:
            return user[key]?.toLowerCase()?.includes(filters[key].toLowerCase())
        }
      })
    })
  }

  return {
    result: result.slice((page - 1) * rows, page * rows),
    page: { totalRows: result.length, currentPage: page, pageRows: rows, totalPages: 1 }
  }
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
