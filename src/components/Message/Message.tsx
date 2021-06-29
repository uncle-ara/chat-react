import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../../context'
import styles from './Message.module.less'

export type Props = {
  uid: string
  name: string
  avatar: string
  text: string
}

const Message = ({ uid, name, avatar, text }: Props) => {
  const { auth } = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <div className={styles.base}>
      {user?.uid === uid ? <img src={avatar} alt={name} className={styles.avatar} /> : null}
      <div className={user?.uid === uid ? styles.sender : styles.recipient}>{text}</div>
    </div>
  )
}

export default Message
