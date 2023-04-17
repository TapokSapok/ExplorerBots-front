import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './RegistrationForm.module.scss'
import Link from 'next/link'
import { UserService } from '@/services/user.service'
import { IUser } from '@/services/types'
import { useAppDispatch } from '@/store/hooks'
import { setUserData } from '@/store/slices/user'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import router from 'next/router'

const RegistrationForm: FC = () => {

   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [email, setEmail] = useState('')

   const dispatch = useAppDispatch()

   const onSubmit = async () => {
      try {
         const userData = await UserService.registration({ email: email, username: username, password: password })
         dispatch(setUserData(userData))
         router.push('/')

         console.log(userData)
      } catch (error) {
         alert(error)
         console.log()
         console.warn(error)
      }
   }

   return <motion.div className={styles.form}
      initial={{ y: 20, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
   >
      <div className={styles.title_container}>
         <p className={styles.title}>Регистрация аккаунта</p>
      </div>


      <div className={styles.form_field}>
         <div className={styles.prefix}>
            <img className={styles.svg} src='/auth/user.svg' alt="" />
         </div>
         <input className={styles.input} type="text" placeholder='* Никнейм' value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className={styles.form_field}>
         <div className={styles.prefix}>
            <img className={styles.svg} src='/auth/mail.svg' alt="" />
         </div>
         <input className={styles.input} type="text" placeholder='* Почта' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className={styles.form_field}>
         <div className={styles.prefix}>
            <img className={styles.svg} src='/auth/lock.svg' alt="" />
         </div>
         <input className={styles.input} type="password" placeholder='* Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className={styles.cont}>
         <button className={styles.btn} onClick={() => onSubmit()}>Зарегистрироваться</button>
         <p className={styles.answer}>Есть аккаунт? <Link href="/authorize" className={styles.link}>Авторизируйся</Link>
         </p>
      </div>

   </motion.div >
}

export default RegistrationForm