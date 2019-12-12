import React from 'react'
import styles from './Button.css'

type Props = {
  text: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles.primaryColors} ${styles.shape} ${styles.font}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
