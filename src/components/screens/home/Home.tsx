import Layout from '@/components/layout/Layout'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './Home.module.scss'

type Props = {}

const Home = (props: Props) => {

   const { } = useRouter();

   return (
      <Layout>
         <h1 >Привет</h1>
      </Layout >
   )
}



export default Home