import { api } from "./session";

export function getUsers() {
  return api<ListEnvelope<User>>('users');
}
/*
export function getProduct(id: string) {
  return api<Product>(`products/${id}`)
}
*/
export function addUser(user: User) {
    return api<User>(`users`, user);
}
/*
export function updateProduct(id: string, product: Product) {
    return api<Product>(`products/${id}`, product, 'PATCH');
}

export function deleteProduct(id: string) {
    return api<{deletedCount:boolean}>(`products/${id}`,{}, 'DELETE');
}
*/
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