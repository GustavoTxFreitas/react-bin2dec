import styles from "./style.module.scss"

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <p>&copy; 2021 &ndash; lovingly developed by{" "}
        <a target="_blank" href="https://github.com/GustavoTxFreitas">Gustavo Teixeira</a>
      </p>
    </footer>
  )
}