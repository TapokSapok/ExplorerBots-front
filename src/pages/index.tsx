import Home from '@/components/screens/home/Home'
import { LoginUserDto, IUser } from '@/services/types'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'

const HomePage: NextPage = () => {
  return <Home />
}



export default HomePage