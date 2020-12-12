import { useState } from 'react'
import styles from './Basket.module.css'
import createBasket from './createBasket'

export default function Basket (props) {
  const [basket, setBasket] = useState([])

  function handleClickEvent () {
    const basket = createBasket(props.ingredients)
    setBasket(basket)
  }

  return (
    <div className={styles.container}>
      <ul>
        {basket.map(item => (
          <li key={item.label} className={styles.ingredient}>
            {item.label}
          </li>
        ))}
      </ul>
      <p className={styles.content}>
        <button
          className={[styles.button, styles.hitarea].join(' ')}
          onClick={handleClickEvent}
          type='button'
        >
          <span>Open Basket</span>
        </button>
      </p>
    </div>
  )
}
