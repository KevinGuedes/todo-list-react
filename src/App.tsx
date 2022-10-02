import { Header } from './components/Header'
import { ToDosList } from './components/ToDosList'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.toDoContainer}>
        <ToDosList />
      </main>
    </div>
  )
}
