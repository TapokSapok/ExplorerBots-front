import { BalanceDifferenceDto, ChangeRoleDto, ChangeUsernameDto, CreateUserDto, IUser, LoginUserDto } from './types'
import axios from 'axios'
import jwt_decode from "jwt-decode"
import { setCookie, parseCookies } from 'nookies'

const getAuthToken = () => {
   const { authToken } = parseCookies(null, 'authToken')
   return authToken
}

const instance = axios.create({
   baseURL: 'http://localhost:8080/api',
   headers: { Authorization: `Bearer ${getAuthToken()}` }
})

export const AdminService = {
   async giveBalance(dto: BalanceDifferenceDto) {
      return instance.put('/users/give-balance', dto)
   },
   async takeBalance(dto: BalanceDifferenceDto) {
      return instance.put('/users/take-balance', dto)
   },
   async changeRole(dto: ChangeRoleDto) {
      return instance.put('/users/change-role', dto)
   },
   async changeUsername(dto: ChangeUsernameDto) {
      return instance.put('/users/change-username', dto)
   },
   async getAllUsers() {
      const { data } = await instance.get('/users')
      return data
   },
}

