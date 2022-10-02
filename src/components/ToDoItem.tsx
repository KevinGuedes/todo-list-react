import { Check, Circle, Trash } from 'phosphor-react'
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
      {toDo.isCompleted ? (
        <div>
          <button
            title="Reabrir ToDo"
            className={styles.reopenToDo}
            onClick={handleToggleToDoCompletion}
          >
            <Check size={18} weight="bold" />
          </button>
          <p>
            {' '}
            <s>{toDo.task}</s>
          </p>
        </div>
      ) : (
        <div>
          <button
            title="Concluir ToDo"
            className={styles.completeToDo}
            onClick={handleToggleToDoCompletion}
          >
            <Circle size={18} />
          </button>
          <p>{toDo.task}</p>
        </div>
      )}

      <button
        title="Deletar ToDo"
        className={styles.trashButton}
        onClick={handleDeleteToDo}
      >
        <Trash size={18} />
      </button>
    </div>
  )
}
