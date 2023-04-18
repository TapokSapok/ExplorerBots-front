import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './authorizeForm.module.scss'
import { setCookie } from 'nookies'
import { UserService } from '@/services/user.service'
import { useAppDispatch } from '@/store/hooks'
import { setUserData } from '@/store/slices/user'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { IUser } from '@/services/types'
import { useRouter } from 'next/router'

const AuthorizeForm: FC = () => {
   const router = useRouter()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const dispatch = useAppDispatch()

   const onSubmit = async () => {
      try {
         const userData = await UserService.authorize({ email: email, password: password })
         dispatch(setUserData(userData))
         router.push('/')
         console.log(userData)
      } catch (error) {
         alert(error)
         console.log(error)
      }
   }


   return <div className={styles.screen}>
      <motion.div className={styles.form}
         initial={{ y: 20, opacity: 0 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.1 }}
      >

         <div className={styles.title_container}>
            <p className={styles.title}>Авторизация</p>
         </div>

         <div className={styles.form_field}>
            <div className={styles.prefix}>
               <img className={styles.svg} src='/auth/mail.svg' alt="Нету изображения" />
            </div>
            <input className={styles.input} type="text" placeholder='* Почта' value={email} onChange={(e) => setEmail(e.target.value)} />
         </div>
         <div className={styles.form_field}>
            <div className={styles.prefix}>
               <img className={styles.svg} src='/auth/lock.svg' alt="Нету изображения" />
            </div>
            <input className={styles.input} type="password" placeholder='* Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
         </div>

         <div className={styles.cont}>
            <button className={styles.btn} onClick={() => onSubmit()}>Войти</button>

            <p className={styles.answer}>Нет аккаунта? <Link href="/registration" className={styles.link}> Зарегестрируйся</Link>
            </p>
         </div>
      </motion.div >
   </div>
}

export default AuthorizeForm