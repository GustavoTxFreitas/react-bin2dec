import styles from "./style.module.scss"

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerLogo} title="the dumbest program I have ever created">Bin2Dec</h1>
      <p className={styles.headerLead}>A binary to decimal base converter</p>
    </header>
  )
}