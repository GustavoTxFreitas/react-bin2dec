import { useEffect, useState } from "react"
import styles from "./style.module.scss"

export function Content() {
  const [input, setInput] = useState("")
  const [display, setDisplay] = useState<string | null>(null)
  const [invalidCharacters, setInvalidCharacters] = useState(0)

  useEffect(() => {
    if (isValid(input))
      setDisplay(null)
    else
      setDisplay(bin2dec(input))
  }, [input])

  function isValid(bin: string): number {
    let count = 0

    for (let digit of bin)
      if (digit !== '0' && digit !== '1')
        count++

    setInvalidCharacters(count)
    return count
  }

  function bin2dec(bin: string): string {
    let result = 0;parseInt

    for (let digit of bin)
      result = (result << 1) + parseInt(digit);

    return result.toString();
  }

  return (
    <section className={styles.content}>
        <div className={styles.contentDisplay}>
          <small>Result:</small>
          {
            display !== null
              ? <span>{display}<sub>(10)</sub></span>
              : <span>...</span>
          }

        </div>

        <form className={styles.contentForm}>
          <label htmlFor="input" className={styles.contentFormLabel}>Insert binary digit</label>
          
          <input
            autoFocus
            id="input"
            maxLength={31}
            placeholder="e.g., 10010"
            className={styles.contentFormInput}
            onChange={e => setInput(e.target.value.trim())} />
          
          {
            invalidCharacters > 0
            &&
            <small className={styles.contentFormAlert}>
              <strong>Binary numbers are made of 0's and 1's!</strong>{" "}
              There{invalidCharacters === 1 ? "'s 1 impostor" : `'re ${invalidCharacters} impostors`} among us &#128064;
            </small>
          }
        </form>
      </section>
  )
}