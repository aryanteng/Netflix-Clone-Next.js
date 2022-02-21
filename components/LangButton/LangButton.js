import React from 'react'
import styles from './styles.module.css'
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function LangButton() {
  return (
    <button className={styles.langButton}>
        <LanguageIcon sx={{marginRight:"0.2rem"}}/>English<ArrowDropDownIcon/>
    </button>
  )
}

export default LangButton