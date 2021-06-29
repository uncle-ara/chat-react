import React from 'react'
import styles from './Input.module.less'

export type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ type = 'text', ...rest }: Props) => {
  return <input className={styles.base} {...rest} />
}

export default React.memo(Input)
