import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { FC, useState } from 'react'
import styles from './HeaderProfile.module.scss';

const NavProfile: FC = () => {

   const user = { isAuth: true };
   const [showProfile, setShowProfile] = useState(false)

   return <div className={styles.profile}>
      {user.isAuth ?
         <div className={styles.profile_container} onClick={() => setShowProfile(!showProfile)} style={showProfile ? { marginTop: '2px' } : {}}>
            <img className={styles.picture} src="https://cs8.pikabu.ru/post_img/2016/03/01/7/1456831941127977028.jpg" alt="" />
            <div className={styles.info}>
               <p className={styles.username}>SapokTapok</p>
               <span className={styles.balance}>123,0 ₽</span>
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

               <Link className={styles.item} href="/admin-panel" onClick={() => setShowProfile(!showProfile)}>
                  {/* <span className={styles.title}>Админ панель</span> */} Админ Панель
               </Link>
               <Link className={styles.item} href="/profile" onClick={() => setShowProfile(!showProfile)}>
                  {/* <span className={styles.title}>Профиль</span> */} Профиль
               </Link>
               <Link className={styles.item} href="/replenish-balance" onClick={() => setShowProfile(!showProfile)}>
                  {/* <span className={styles.title}>Пополнить баланс</span> */} Пополнить баланс
               </Link>
               <span className={styles.item} onClick={() => setShowProfile(!showProfile)}>
                  <p>Выйти из аккаунта</p>
               </span>
            </motion.div>}
      </AnimatePresence>

   </div>
}

export default NavProfile