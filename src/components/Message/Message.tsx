import React from 'react'
import styles from './Message.module.less'

export type Props = {
  id: string
  name: string
  avatar: string
  text: string
}

const Message = ({ id, name, avatar, text }: Props) => {
  return <div className={styles.base}>{text}</div>
}

export default Message
