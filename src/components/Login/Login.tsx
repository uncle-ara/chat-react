import React, { useContext } from 'react'
import firebase from 'firebase'
import Button from '../Button/Button'
import { Context } from '../../context'

import styles from './Login.module.less'

/**
 * Render sign in panel
 * @returns JSX.Element
 */
const Login = () => {
  const { auth } = useContext(Context)

  /**
   * Authorizate with Google
   */
  const signin = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider).catch(console.error)
  }

  return (
    <div className={styles.base}>
      <div className={styles.panel}>
        <div className={styles.title}>Welcome!</div>
        <Button onClick={signin}>Войти с помощью Google</Button>
      </div>
    </div>
  )
}

export default React.memo(Login)
