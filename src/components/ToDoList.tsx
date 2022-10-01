import { Clipboard } from 'phosphor-react'
import styles from './ToDoList.module.css'

export function ToDoList() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.toDosCount}>
          <strong className={styles.toDosCreated}>Tarefas Criadas</strong>
          <span>10</span>
        </div>

        <div className={styles.toDosCount}>
          <strong className={styles.toDosCompleted}>Concluídas</strong>
          <span>10</span>
        </div>
      </header>

      <section className={styles.emptyToDos}>
        <Clipboard size={56} opacity={0.2} />
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </section>
    </div>
  )
}
