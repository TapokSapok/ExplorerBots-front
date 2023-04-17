import Link from 'next/link'
import { FC } from 'react'
import styles from './AdminCtrlSelectForm.module.scss'

const AdminCtrlSelectForm: FC = () => {
   return <div className={styles.container}>
      <Link href='/admin-panel/users' className={styles.link}>Управление пользователями</Link>
      <Link href='/admin-panel/promo' className={styles.link}>Управление промокодами</Link>
   </div>
}

export default AdminCtrlSelectForm