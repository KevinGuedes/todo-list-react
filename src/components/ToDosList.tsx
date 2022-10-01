import { useState } from 'react'
import { ToDo } from '../App'
import { EmptyToDos } from './EmptyToDos'
import { NewToDo } from './NewToDo'
import { ToDoItem } from './ToDoItem'

import styles from './ToDosList.module.css'

export function ToDosList() {
  const [toDos, setToDos] = useState<ToDo[]>([])

  function createNewTodo(newToDo: ToDo) {
    setToDos([...toDos, newToDo])
  }

  function deleteTodo(toDoId: string) {
    const toDoListWithoutDeletedOne = toDos.filter((toDo) => toDo.id !== toDoId)
    setToDos(toDoListWithoutDeletedOne)
  }

  function toggleToDoCompletion(toDoId: string) {
    const toDoListUpdated = toDos.map((toDo) => {
      if (toDo.id === toDoId) toDo.isCompleted = !toDo.isCompleted
      return toDo
    })

    setToDos(toDoListUpdated)
  }

  const completedToDosCount = toDos.reduce(
    (completedToDos, { isCompleted }) => {
      if (isCompleted) completedToDos++
      return completedToDos
    },
    0
  )

  return (
    <div>
      <NewToDo onCreateNewToDo={createNewTodo} />

      <header className={styles.header}>
        <div className={styles.toDosCount}>
          <strong className={styles.toDosCreated}>Tarefas Criadas</strong>
          <span>{toDos.length}</span>
        </div>

        <div className={styles.toDosCount}>
          <strong className={styles.toDosCompleted}>Concluídas</strong>
          <span>
            {completedToDosCount} de {toDos.length}
          </span>
        </div>
      </header>

      {toDos.length === 0 ? (
        <EmptyToDos />
      ) : (
        <section className={styles.toDosList}>
          {toDos.map((toDo) => {
            return (
              <ToDoItem
                key={toDo.id}
                toDo={toDo}
                onDeleteTodo={deleteTodo}
                onToggleTodoCompletion={toggleToDoCompletion}
              />
            )
          })}
        </section>
      )}
    </div>
  )
}
