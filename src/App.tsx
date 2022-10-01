import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.newTaskContainer}>
        <NewTask />
      </div>
    </div>
  )
}
