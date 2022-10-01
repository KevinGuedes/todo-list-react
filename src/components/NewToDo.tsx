import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useRef, useState } from 'react'
import { ToDo } from '../App'

import { v4 as createId } from 'uuid'
import styles from './NewToDo.module.css'

interface NewToDoProps {
  onCreateNewToDo: (toDo: ToDo) => void
}

export function NewToDo({ onCreateNewToDo }: NewToDoProps) {
  const [newToDo, setNewToDo] = useState('')
  const newToDoInput = useRef<HTMLInputElement>(null)

  function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewToDo(event.target.value)
  }

  function handleInvalidNewNewToDo(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function handleCreateNewToDo(event: FormEvent) {
    event.preventDefault()

    onCreateNewToDo({
      id: createId(),
      task: newToDo,
      isCompleted: false,
    })

    setNewToDo('')
    newToDoInput.current?.focus()
  }

  const isNewNewToDoEmpty = newToDo.length === 0

  return (
    <form className={styles.newNewToDoForm} onSubmit={handleCreateNewToDo}>
      <input
        name="todo"
        placeholder="Adicione uma nova tarefa"
        required
        ref={newToDoInput}
        value={newToDo}
        onChange={handleNewToDoChange}
        onInvalid={handleInvalidNewNewToDo}
      />
      <button type="submit" disabled={isNewNewToDoEmpty}>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}
