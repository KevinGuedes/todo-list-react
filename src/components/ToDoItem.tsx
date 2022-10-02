import { Trash } from 'phosphor-react'
import { ToDo } from './ToDosList'

import styles from './ToDo.module.css'

interface ToDoItemProps {
  toDo: ToDo
  onDeleteTodo: (toDoId: string) => void
  onToggleTodoCompletion: (toDoId: string) => void
}

export function ToDoItem({
  toDo,
  onToggleTodoCompletion,
  onDeleteTodo,
}: ToDoItemProps) {
  function handleToggleToDoCompletion() {
    onToggleTodoCompletion(toDo.id)
  }

  function handleDeleteToDo() {
    onDeleteTodo(toDo.id)
  }

  return (
    <div className={styles.toDoItemContainer}>
      <button
        title="Toggle ToDo Completion"
        onClick={handleToggleToDoCompletion}
      ></button>
      {toDo.isCompleted ? (
        <p>
          <s>{toDo.task}</s>
        </p>
      ) : (
        <p>{toDo.task}</p>
      )}
      <button title="Delete ToDo" onClick={handleDeleteToDo}>
        <Trash size={16} />
      </button>
    </div>
  )
}
