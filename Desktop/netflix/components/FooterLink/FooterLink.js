import React from 'react'
import styles from "./styles.module.css"

function FooterLink({data}) {
  return (
    <a className={styles.link}>
    <p>{data}</p>
    </a>
  )
}

export default FooterLink