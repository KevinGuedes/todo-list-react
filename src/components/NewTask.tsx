import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useRef, useState } from 'react'

import styles from './NewTask.module.css'

export function NewTask() {
  const [newTask, setNewTask] = useState('')
  const newTaskInput = useRef<HTMLInputElement>(null)

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleInvalidNewTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setNewTask('')
    newTaskInput.current?.focus()
  }

  const isNewTaskEmpty = newTask.length === 0

  return (
    <form className={styles.newTaskForm} onSubmit={handleCreateNewTask}>
      <input
        name="todo"
        placeholder="Adicione uma nova tarefa"
        required
        ref={newTaskInput}
        value={newTask}
        onChange={handleNewTaskChange}
        onInvalid={handleInvalidNewTask}
      />
      <button type="submit" disabled={isNewTaskEmpty}>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
