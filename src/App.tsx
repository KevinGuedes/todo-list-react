import { Header } from './components/Header'
import { NewToDo } from './components/NewToDo'

import { useState } from 'react'
import styles from './App.module.css'
import { ToDosList } from './components/ToDosList'
import './global.css'

export interface ToDo {
  id: string
  task: string
  isCompleted: boolean
}

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
