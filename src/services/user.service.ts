import { CreateUserDto, IUser, LoginUserDto } from './types'
import axios from 'axios'
import jwt_decode from "jwt-decode"
import { setCookie } from 'nookies'

// axios.defaults.baseURL = 'http:localhost:8080/api'

const instance = axios.create({
   baseURL: 'http://localhost:8080/api'
})

export const UserService = {
   async registration(dto: CreateUserDto) {
      const { data } = await instance.post('/auth/registration', dto)


      setCookie(null, 'authToken', data.token, {
         maxAge: 30 * 24 * 60 * 60, path: '/'
      })

      return this.tokenDecode(data.token)
   },
   async authorize(dto: LoginUserDto) {
      const { data } = await instance.post('/auth/login', dto)

      setCookie(null, 'authToken', data.token, {
         maxAge: 30 * 24 * 60 * 60, path: '/'
      })

      return this.tokenDecode(data.token)
   },
   async getAllUsers() {
      const { data } = await instance.get('/users')
      return data
   },
   async getUserById(id: number) {
      const { data } = await instance.get(`/users/${id}`)
      return data
   },
   tokenDecode(token: string): IUser {
      return jwt_decode(token)
   }
}

