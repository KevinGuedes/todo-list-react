import { Clipboard } from 'phosphor-react'

import styles from './EmptyToDos.module.css'

export function EmptyToDos() {
  return (
    <section className={styles.emptyToDos}>
      <Clipboard size={56} opacity={0.2} alt="Lista Vazia" />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </section>
  )
}
