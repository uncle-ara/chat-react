import styles from './Message.module.less'

export type Props = {
  isOwn?: boolean
  name: string
  avatar: string
  text: string
}

/**
 * Show own or companion message
 * @param props Props
 * @returns JSX.Element
 */
const Message = ({ isOwn = false, name, avatar, text }: Props) => {
  return (
    <div className={styles.base}>
      {isOwn ? (
        <div className={styles.own}>
          <div className={styles.text}>{text}</div>
        </div>
      ) : (
        <div className={styles.companion}>
          <img src={avatar} alt={name} className={styles.avatar} />
          <div className={styles.text}>{text}</div>
        </div>
      )}
    </div>
  )
}

export default Message
