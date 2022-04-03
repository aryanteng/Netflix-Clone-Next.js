import React from 'react'
import styles from "./styles.module.css"

function ButtonRed({input}) {
  return (
    <button className={styles.button}>
      {input}
    </button>
  )
}

export default ButtonRed