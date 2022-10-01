import { Clipboard } from 'phosphor-react'
import styles from './ToDoList.module.css'

export function ToDoList() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.toDosCount}>
          <p className={styles.toDosCreated}>Tarefas Criadas</p>
          <span>10</span>
        </div>

        <div className={styles.toDosCount}>
          <p className={styles.toDosCompleted}>Concluídas</p>
          <span>10</span>
        </div>
      </header>

      <section className={styles.emptyToDos}>
        <Clipboard size={56} opacity={0.2} />
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </section>
    </div>
  )
}
