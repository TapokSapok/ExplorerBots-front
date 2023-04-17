export type CreateUserDto = {
   email: string
   username: string
   password: string
}

export type LoginUserDto = {
   email: string
   password: string
}

export interface IUser {
   id: number
   email: string
   username: string
   balance: number
   role: string
}