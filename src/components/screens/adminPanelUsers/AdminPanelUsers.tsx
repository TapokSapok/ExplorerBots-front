
import Layout from '@/components/layout/Layout'
import AdminUserItem from '@/components/ui/adminUserItem/AdminUserItem'
import BackButton from '@/components/ui/buttons/BackButton/BackButton'
import { IFullUser } from '@/interfaces/user.interface'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import styles from './AdminPanelUsers.module.scss'

interface UsersProps { users: IFullUser[] }

interface SearchText {
   username: string
   email: string
}

const filterUsers = (searchText: SearchText, listOfUsers: IFullUser[]) => {
   if (!searchText) return listOfUsers
   return listOfUsers.filter(({ username, email }) =>
      username.toLowerCase().includes(searchText.username.toLowerCase())
      && email.toLowerCase().includes(searchText.email.toLowerCase())
   )
}

const AdminPanelUsers: FC<PropsWithChildren<UsersProps>> = ({ users }) => {

   const [usersList, setUsersList] = useState(users)
   const [searchTerm, setSearchTerm] = useState({ username: '', email: '' })

   useEffect(() => {
      const filteredUsers = filterUsers(searchTerm, users)
      setUsersList(filteredUsers)
   }, [searchTerm])

   return <Layout>
      <div className={styles.container}>
         <BackButton href='/admin-panel' />

         <div className={styles.search_filter}>
            <div className={styles.text_field}>
               <label className={styles.label}>Фильтр по нику</label>
               <input onChange={(e) => setSearchTerm({ username: String(e.target.value), email: searchTerm.email })} className={styles.input} type="text" />
            </div>
            <div className={styles.text_field}>
               <label className={styles.label}>Фильтр по почте</label>
               <input onChange={(e) => setSearchTerm({ username: searchTerm.username, email: String(e.target.value) })} className={styles.input} type="text" />
            </div>
         </div>

         <ul className={styles.users_list}>
            {usersList.map(user => <AdminUserItem user={user} key={user.id} />)}
         </ul>
      </div>
   </Layout>
}

export default AdminPanelUsers