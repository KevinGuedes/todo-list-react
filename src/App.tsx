import { Header } from './components/Header'
import { NewToDo } from './components/NewToDo'

import styles from './App.module.css'
import { ToDoList } from './components/ToDoList'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.newTaskContainer}>
        <NewToDo />
      </div>
      <main className={styles.toDoListContainer}>
        <ToDoList />
      </main>
    </div>
  )
}
