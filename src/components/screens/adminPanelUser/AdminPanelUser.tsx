import Layout from '@/components/layout/Layout'
import BackButton from '@/components/ui/buttons/BackButton'
import LoadingCircle from '@/components/ui/loadingCirclce/LoadingCircle'
import { IFullUser } from '@/interfaces/user.interface'
import { UserService } from '@/services/user.service'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import styles from './AdminPanelUser.module.scss'

const AdminPanelUser: FC = () => {
   const { asPath, query } = useRouter()
   const [userData, setUserData] = useState<null | undefined | IFullUser>(null)

   const autoReloadData = () => {
      UserService.getUserById(Number(query.id))
         .then(user => setUserData(user))
         .catch(() => setUserData(undefined))
      setTimeout(() => autoReloadData(), 7000)
   }

   useEffect(() => {
      if (query.id) {
         autoReloadData()
      }
   }, [query])

   return <>
      <div>
         <Layout>
            <div className={styles.container}>
               <BackButton href='/admin-panel/users' />
               {
                  userData === null ?
                     <LoadingCircle />
                     :
                     userData === undefined ? <div>НЕТУ ТАКОГО ПОЛЬЗОВАТЕЛЯ</div>
                        :
                        <div >
                           {userData.username}
                           <br />
                           {userData.email}
                        </div>
               }
            </div>
         </Layout>
      </div>

   </>
}

export default AdminPanelUser