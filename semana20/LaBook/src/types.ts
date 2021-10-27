export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export interface authenticationData {
  id: string
  role: USER_ROLES
}

export interface user extends authenticationData {
  name: string
  email: string
  password: string
}