import * as React from 'react'
import * as styles from './styles.module.css'
import bohrPowered from '../../assets/images/logo-a4t.png'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <img src={bohrPowered} alt="powered by A4T" />
      </div>
    </footer>  
  )
}

export default Footer
