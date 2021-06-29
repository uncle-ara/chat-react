import React, { useContext } from 'react'
import firebase from 'firebase'
import Button from '../Button/Button'
import { Context } from '../../context'

import styles from './Login.module.less'

const Login = () => {
  const { auth } = useContext(Context)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
    <div className={styles.base}>
      <div className={styles.panel}>
        <div className={styles.title}>Welcome!</div>
        <Button onClick={login}>Войти с помощью Google</Button>
      </div>
    </div>
  )
}

export default React.memo(Login)
