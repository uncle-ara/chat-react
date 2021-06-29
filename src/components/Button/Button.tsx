import React from 'react'
import styles from './Button.module.less'

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

/**
 * Render default button
 * @param props Props
 * @returns JSX.Element
 */
const Button = ({ ...rest }: Props) => {
  return <button className={styles.base} {...rest}></button>
}

export default Button
