export interface User {
  id: string
  username: string
  firstName: string
  lastName: string
  active: boolean
  role?: string
  age?: number
  activation_date?: Date
  expiration_date?: Date
}
