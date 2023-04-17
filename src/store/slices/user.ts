import { RootState } from '..'
import { IUser } from '../../services/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
   data: IUser | null
   _isLoading: boolean
}

const initialState = { data: null, _isLoading: false } as UserState

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUserData(state, action: PayloadAction<IUser | null>) {
         state.data = action.payload
      }
   },
})

export const selectUserData = (state: RootState) => state.user.data
export const { setUserData } = userSlice.actions
export const userReducer = userSlice.reducer