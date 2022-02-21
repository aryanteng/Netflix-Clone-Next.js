import React from 'react'
import ButtonRed from '../ButtonRed/ButtonRed'
import CustomInput from '../CustomInput/CustomInput'
import LangButton from '../LangButton/LangButton'
import styles from "./styles.module.css"
function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.navbar}>
          <h1>NETFLIX</h1>
          <div className={styles.buttonBox}>
            <LangButton/>
            <div style={{marginLeft:"1rem"}}><ButtonRed input={"Sign In"}/></div>
          </div>
        </div>
        <h2>Unlimited movies,<br/>TV shows and more.</h2>
        <h6>Watch anywhere. Cancel anytime.</h6>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <CustomInput type={"text"} placeholder={"Email address"}/>
        <div className={styles.button}>
          <ButtonRed input={"Get Started"}/>
        </div>
    </div>
  )
}

export default Header