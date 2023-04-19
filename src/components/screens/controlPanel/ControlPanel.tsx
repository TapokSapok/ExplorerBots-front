import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import styles from './ControlPanel.module.scss'

const ControlPanel: FC = () => {
   return <Layout>

      <div className={styles.container}>
         <button className={styles.button}>Запустить</button>
      </div>

   </Layout>
}

export default ControlPanel