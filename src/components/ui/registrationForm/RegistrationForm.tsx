import { FC, useState } from 'react'
import { motion } from 'framer-motion';
import styles from './RegistrationForm.module.scss'
import Link from 'next/link';

const RegistrationForm: FC = () => {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');

   const user = true;

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
         <button className={styles.btn} onClick={() => 1}>Зарегистрироваться</button>
         <p className={styles.answer}>Есть аккаунт? <Link href="/authorize" className={styles.link}>Авторизуйся</Link>
         </p>
      </div>
   </motion.div >
}

export default RegistrationForm