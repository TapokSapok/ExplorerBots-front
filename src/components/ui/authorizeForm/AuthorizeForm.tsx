import { FC, useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './authorizeForm.module.scss'

const AuthorizeForm: FC = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('')
   const user = true;

   return <motion.div className={styles.form}
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
         <button className={styles.btn} onClick={() => 1}>Войти</button>

         <p className={styles.answer}>Нет аккаунта? <Link href="/registration" className={styles.link}> Зарегестрируйся</Link>
         </p>
      </div>
   </motion.div >
}

export default AuthorizeForm