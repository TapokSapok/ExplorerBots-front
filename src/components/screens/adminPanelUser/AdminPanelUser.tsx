import Layout from '@/components/layout/Layout'
import BackButton from '@/components/ui/buttons/BackButton/BackButton'
import GiveBalanceModal from '@/components/ui/modals/GiveBalaceModal/GiveBalanceModal'
import LoadingCircle from '@/components/ui/loadingCirclce/LoadingCircle'
import { IFullUser } from '@/interfaces/user.interface'
import { UserService } from '@/services/user.service'
import { getRoleDescription } from '@/utils/role-description'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, use, useEffect, useState } from 'react'
import styles from './AdminPanelUser.module.scss'
import TakeBalanceModal from '@/components/ui/modals/TakeBalanceModal/TakeBalanceModal'
import ChangeUsernameModal from '@/components/ui/modals/ChangeUsernameModal/ChangeUsernameModal'
import ChangeRoleModal from '@/components/ui/modals/ChangeRoleModal/ChangeRoleModal'

const AdminPanelUser: FC = () => {
   const { asPath, query } = useRouter()
   const [userData, setUserData] = useState<null | undefined | IFullUser>(null)


   const autoReloadData = () => {
      UserService.getUserById(Number(query.id))
         .then(user => setUserData(user))
         .catch(() => setUserData(undefined))
      setTimeout(() => autoReloadData(), 7000)
   }

   const reloadData = () => {
      UserService.getUserById(Number(query.id))
         .then(user => setUserData(user))
         .catch(() => setUserData(undefined))
   }

   useEffect(() => {
      if (query.id) {
         autoReloadData()
      }
   }, [query])

   let getRole
   if (userData) {
      getRole = getRoleDescription(userData?.role)
   }

   const [GivebalanceModalActive, setGiveBalanceModalActive] = useState(false)
   const [TakeBalanceModalActive, setTakeBalanceModalActive] = useState(false)
   const [changeUsernameModalActive, setChangeUsernameModalActive] = useState(false)
   const [changeRoleModalActive, setChangeRoleModalActive] = useState(false)

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
                        <>
                           <div className={styles.left_panel}>
                              <div className={styles.username_container}>
                                 <p className={styles.username}>{userData.username}</p>
                                 <svg onClick={() => setChangeUsernameModalActive(!changeUsernameModalActive)} className={styles.edit_username} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                              </div>
                              <div className={styles.email_container}>
                                 <p className={styles.email}>{userData.email}</p>
                              </div>
                           </div>
                           <div className={styles.right_panel}>
                              <div className={styles.role_container}>
                                 {getRole && <p className={styles.role}>{getRole}</p>}
                                 <svg onClick={() => setChangeRoleModalActive(!changeRoleModalActive)} className={styles.edit_role} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                              </div>
                              <div className={styles.balance_container}>
                                 <p className={styles.balance}>{userData.balance} ₽</p>
                                 <svg onClick={() => setGiveBalanceModalActive(!GivebalanceModalActive)} className={styles.edit_balance} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                 <svg onClick={() => setTakeBalanceModalActive(!TakeBalanceModalActive)} className={styles.edit_balance} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                              </div>
                           </div>
                           {GivebalanceModalActive && <GiveBalanceModal setActive={setGiveBalanceModalActive} id={userData.id} reload={reloadData} />}
                           {TakeBalanceModalActive && <TakeBalanceModal setActive={setTakeBalanceModalActive} id={userData.id} reload={reloadData} />}
                           {changeUsernameModalActive && <ChangeUsernameModal setActive={setChangeUsernameModalActive} username={userData.username} id={userData.id} reload={reloadData} />}
                           {changeRoleModalActive && <ChangeRoleModal setActive={setChangeRoleModalActive} role={userData.role} id={userData.id} reload={reloadData} />}
                        </>
               }
            </div>
         </Layout>
      </div>

   </>
}

export default AdminPanelUser