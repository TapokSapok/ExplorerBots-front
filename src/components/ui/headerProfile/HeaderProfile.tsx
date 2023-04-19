import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import styles from './HeaderProfile.module.scss'
import { destroyCookie } from 'nookies'
import { setUserData } from '@/store/slices/user'
import LinkItem from './linkItem/LinkItem'

const NavProfile: FC = () => {

   const userData = useAppSelector(state => state.user.data)
   const dispatch = useAppDispatch()
   const [showProfile, setShowProfile] = useState<boolean>(false)

   const logout = () => {
      destroyCookie(null, 'authToken')
      dispatch(setUserData(null))
   }

   return <div className={styles.profile}>
      {userData ?
         <div className={styles.profile_container} onClick={() => setShowProfile(!showProfile)} style={showProfile ? { marginTop: '2px' } : {}}>
            {/* <img className={styles.picture} src="https://cs8.pikabu.ru/post_img/2016/03/01/7/1456831941127977028.jpg" alt="" /> */}
            <div className={styles.info}>
               <p className={styles.username}>{userData.username}</p>
               <span className={styles.balance}>{userData.balance} ₽</span>
            </div>
         </div>
         :
         <div className={styles.profile_authorization}>
            <button className={styles.authorization_btn}>
               <Link href="/authorize">Авторизоваться</Link>
            </button>
         </div>
      }

      <AnimatePresence>
         {showProfile &&
            <motion.div className={styles.items_container}
               initial={{ x: 20, opacity: 0 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.08 }}
               exit={{ x: 20, opacity: 0 }}
            >
               {userData?.role === 'ADMIN' &&
                  <LinkItem href='/admin-panel' title='Админ панель' onclick={setShowProfile} state={!showProfile} />
               }
               <LinkItem href='/profile' title='Профиль' onclick={setShowProfile} state={!showProfile} />
               <LinkItem href='/replenish-balance' title='Пополнить баланс' onclick={setShowProfile} state={!showProfile} />
               <LinkItem href='/authorize' title='Выйти из аккаунта' onclick={logout} />

            </motion.div>}
      </AnimatePresence>

   </div>
}

export default NavProfile