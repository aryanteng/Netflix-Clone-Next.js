import React from 'react'
import styles from "./styles.module.css"

function CustomInput({type, placeholder}) {
  return (
    <input className={styles.input} 
    type={type} 
    placeholder={placeholder}>
    </input>
  )
}

export default CustomInput