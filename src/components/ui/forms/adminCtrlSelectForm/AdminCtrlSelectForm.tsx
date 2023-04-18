import Link from 'next/link'
import { FC } from 'react'
import styles from './AdminCtrlSelectForm.module.scss'

const AdminCtrlSelectForm: FC = () => {
   return <div className={styles.container}>
      <div className={styles.title}>Выбор панели</div>
      <Link href='/admin-panel/users' className={styles.link}>Пользователи</Link>
      <Link href='/admin-panel/promo' className={styles.link}>Промокоды</Link>
   </div>
}

export default AdminCtrlSelectForm