import { api } from "./session";

export function getUsers() {
  return api<ListEnvelope<User>>('users');
}

export function addUser(user: User) {
    return api<User>(`users`, user);
}

export interface ListEnvelope<T> {
    users: T[]
    total: number
    skip: number
    limit: number
  }
  
  export interface User {
    _id: string
    firstName: string
    lastName: string
    password: string
    isAdmin: boolean
    tag: string
  }