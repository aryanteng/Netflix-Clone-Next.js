import React from 'react'
import styles from './styles.module.css'
// import LanguageIcon from './node_modules/@mui/icons-material/Language';

function LangButton() {
  return (
    <button className={styles.langButton}>English
        {/* <LanguageIcon>English</LanguageIcon> */}
    </button>
  )
}

export default LangButton