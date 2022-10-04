import styles from './Header.module.css'

import todoLogo from '../assets/todo-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Foguete ao lado do texo ToDo" />
    </header>
  )
}
