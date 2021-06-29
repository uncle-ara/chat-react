import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'
import { Context } from '../../context'

import styles from './UserMenu.module.less'

const UserMenu = () => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  const handleSignout = (event: React.MouseEvent) => {
    event.preventDefault()
    firebase.auth().signOut()
  }

  if (!user) {
    return null
  }

  return (
    <div className={styles.base}>
      <div className={styles.content}>
        <div
          className={styles.avatar}
          style={{
            backgroundImage: `url(${user.photoURL})`,
          }}
        />
        <div className={styles.name}>{user.displayName}</div>
        <a href="/signout" className={styles.signout} onClick={handleSignout}>
          Sign out
        </a>
      </div>
      <span className={styles.dots} />
      <span className={styles.dots} />
    </div>
  )
}

export default UserMenu
