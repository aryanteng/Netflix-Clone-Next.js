import React from 'react'
import styles from "./styles.module.css"
import LangButton from '../LangButton/LangButton'
import FooterLink from '../FooterLink/FooterLink'

function Footer({l1,l2,l3,l4}) {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.first}>
                <h3>Questions? Call</h3>
                <a style={{marginLeft:"0.3rem"}}>000-800-040-1843</a>
            </div>
            <div className={styles.footerLinks}>
              <div>
                {l1.map((item)=>(
                  <FooterLink key={item.id} data={item.data}/>
                ))}
              </div>
              <div>
              {l2.map((item)=>(
                  <FooterLink key={item.id} data={item.data}/>
                ))}
              </div>
              <div>
              {l3.map((item)=>(
                  <FooterLink key={item.id} data={item.data}/>
                ))}
              </div>
              <div>
              {l4.map((item)=>(
                  <FooterLink key={item.id} data={item.data}/>
                ))}
              </div>
            </div>
            <LangButton/>
            <p>Netflix India</p>
        </div>
    </div>
  )
}

export default Footer