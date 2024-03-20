export interface User {
  id: string
  username: string
  firstName: string
  lastName: string
  active: boolean
  activation_date?: Date
  expiration_date?: Date
}
