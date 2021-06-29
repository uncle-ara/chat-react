import React from 'react'
import styles from './Input.module.less'

export type Props = React.InputHTMLAttributes<HTMLInputElement>

/**
 * Render default input
 * @param props Props
 * @returns JSX.Element
 */
const Input = ({ type = 'text', ...rest }: Props) => {
  return <input className={styles.base} {...rest} />
}

export default React.memo(Input)
