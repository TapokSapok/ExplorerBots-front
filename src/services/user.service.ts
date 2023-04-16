import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com'
axios.defaults.baseURL = API_URL;

export const UserService = {
   async getAll() {
      // const { data } = await axios.get<IUser[]>('/users');
      // return data
   },
   async getById(id: number) {
      // const { data } = await axios.get<IUser>(`/users/${id}`)
      // return data
   }
}
