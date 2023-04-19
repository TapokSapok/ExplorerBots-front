import Layout from '@/components/layout/Layout'
import AdminPanelUsers from '@/components/screens/adminPanelUsers/AdminPanelUsers'
import { IFullUser } from '@/interfaces/user.interface'
import { AdminService } from '@/services/admin.service'
import { IUser } from '@/services/types'
import { UserService } from '@/services/user.service'
import { UserInfo } from 'os'
import { FC, PropsWithChildren } from 'react'

export const getStaticProps = async (context: object) => {
  const users: IFullUser[] = await AdminService.getAllUsers()

  return {
    props: { users },
  }

}

const AdminControlUsersPage: FC<PropsWithChildren<IFullUser[]>> = ({ users }: any) => {
  return <Layout>
    <AdminPanelUsers users={users} />
  </Layout>
}

export default AdminControlUsersPage