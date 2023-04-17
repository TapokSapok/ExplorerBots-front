import React, { useEffect } from 'react'
import Header from './header/Header'

import jwt_decode from "jwt-decode"
import { parseCookies } from 'nookies'
import { useAppDispatch } from '@/store/hooks'
import { setUserData } from '@/store/slices/user'
import { IUser } from '@/services/types'


const Layout = ({ children }: any) => {
   const dispatch = useAppDispatch()

   useEffect(() => {
      const { authToken } = parseCookies()
      if (authToken) {
         const userData = jwt_decode<IUser>(authToken)
         dispatch(setUserData(userData))
      }
   }, [])

   return (
      <div>
         <Header />
         {children}
      </div>
   )
}

export default Layout