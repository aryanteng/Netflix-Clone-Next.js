import { style } from '@mui/system'
import React from 'react'
import styles from "./styles.module.css"

function InfoBox({heading,text,imgSrc}) {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
            <h1>{heading}</h1>
            <h3>{text}</h3>
        </div>
        <img className={styles.image}src={imgSrc}/>
    </div>
  )
}

export default InfoBox