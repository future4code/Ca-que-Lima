export interface authenticationData {
  id: string
}

export interface user extends authenticationData {
  name: string
  email: string
  password: string
}