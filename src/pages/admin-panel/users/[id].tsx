import AdminPanelUser from '@/components/screens/adminPanelUser/AdminPanelUser'
import { IFullUser } from '@/interfaces/user.interface'
import { UserService } from '@/services/user.service'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

const AdminControlUserPage: FC = () => {
   // const { asPath, query } = useRouter()
   // const [userData, setUserData] = useState<null | undefined | IFullUser>(null)

   // const autoReloadData = () => {
   //    UserService.getUserById(Number(query.id))
   //       .then(user => setUserData(user))
   //       .catch(() => setUserData(undefined))
   //    setTimeout(() => autoReloadData(), 7000)
   // }

   // useEffect(() => {
   //    if (query.id) {
   //       autoReloadData()
   //    }
   // }, [query])



   return <>

      <AdminPanelUser />

      {/* <div>
         {
            userData === null ? <div>Загрузка..</div>
               :
               userData === undefined ? <div>НЕТУ ТАКОГО ПОЛЬЗОВАТЕЛЯ</div>
                  :
                  <AdminPanelUser user={userData} />
         }
      </div> */}

   </>
}

export default AdminControlUserPage