import Logo from '@/components/ui/logo/Logo'
import NavProfile from '@/components/ui/headerProfile/HeaderProfile'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './Header.module.scss'

type Props = {}

const Header = (props: Props) => {

   const { pathname } = useRouter()

   return (
      <header className={styles.header}>
         {/* <Link href='/' className={pathname === '/' ? styles.active : ''}>Home</Link>
         <Link href='/about' className={pathname === '/about' ? styles.active : ''}>About</Link> */}

         <Logo />

         <div className={styles.item}>
            <img className={styles.svg} src='/header/user-plus.svg' alt="" />
            <Link href='/create-bot'>Создать бота</Link>
         </div>
         <div className={styles.item}>
            <img className={styles.svg} src='/header/control.svg' alt="" />
            <Link href='/control-panel'>Панель управления</Link>
         </div>
         <div className={styles.item}>
            <img className={styles.svg} src='/header/help-circle.svg' alt="" />
            <Link href='/help'>Помощь</Link>
         </div>

         <NavProfile />

      </header>
   )
}

export default Header