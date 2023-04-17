import Layout from '@/components/layout/Layout'
import AdminCtrlSelectForm from '@/components/ui/forms/adminCtrlSelectForm/AdminCtrlSelectForm'
import { FC } from 'react'
import styles from './AdminPanel.module.scss'

const AdminPanel: FC = () => {
   return <Layout>
      <AdminCtrlSelectForm />
   </Layout>
}

export default AdminPanel