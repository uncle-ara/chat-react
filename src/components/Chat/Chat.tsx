import React, { useContext, useEffect, useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '../../context'
import firebase from 'firebase'
import Loader from '../Loader/Loader'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Message from '../Message/Message'

import styles from './Chat.module.less'

/**
 * Render chat view with messages and input message
 * @returns JSX.Element
 */
const Chat = () => {
  const { auth, firestore } = useContext(Context)
  const [user] = useAuthState(auth)
  const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('createdAt'))
  const [messageText, setMessageText] = useState('')
  const contentRef = useRef<HTMLDivElement>(null)

  /**
   * Scroll to bottom when messages change length.
   */
  useEffect(() => {
    const content = contentRef.current
    if (!content) {
      return
    }
    content.scrollTop = content.scrollHeight - content.clientHeight
  }, [messages?.length])

  /**
   * Send message to firebase.
   * Clear message input.
   */
  const sendMessage = () => {
    if (!user || messageText.trim().length === 0) {
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

  /**
   * Send message by Enter key button.
   * @param event React.KeyboardEvent<HTMLInputElement>
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage()
    }
  }

  if (loading || !user) {
    return <Loader />
  }

  return (
    <div className={styles.base}>
      <div className={styles.content} ref={contentRef}>
        {messages?.map((message, index) => (
          <Message
            key={index}
            isOwn={message.uid === user.uid}
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
