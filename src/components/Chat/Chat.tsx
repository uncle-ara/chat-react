import React, { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Data } from 'react-firebase-hooks/firestore/dist/firestore/types'
import { Context } from '../../context'
import firebase from 'firebase'
import Loader from '../Loader/Loader'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Message from '../Message/Message'

import styles from './Chat.module.less'

const createIdFromMessage = ({ createdAt: { seconds, nanoseconds } }: Data<firebase.firestore.DocumentData, '', ''>) =>
  `${seconds}-${nanoseconds}`

const Chat = () => {
  const { auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)
  const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('createdAt'))
  const [messageText, setMessageText] = useState('')

  const sendMessage = () => {
    if (!user) {
      return
    }
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      avatar: user.photoURL,
      text: messageText,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setMessageText('')
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage()
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className={styles.base}>
      <div className={styles.content}>
        {messages?.map((message) => (
          <Message
            key={createIdFromMessage(message)}
            uid={message.uid}
            name={message.displayName}
            text={message.text}
            avatar={message.avatar}
          />
        ))}
      </div>
      <div className={styles.control}>
        <div className={styles.inputMessage}>
          <Input
            value={messageText}
            onChange={(event) => setMessageText(event.target.value)}
            onKeyPress={handleKeyDown}
          />
        </div>
        <div className={styles.sendButton}>
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Chat)
