import { useState } from 'react'
import styles from './Chopped.module.css'

export function getRandomIngredients (items) {
  const basket = []
  let key
  let keys = Object.keys(items)

  for (let i = 0; i < 3; i++) {
    key = keys[Math.floor(Math.random() * keys.length)]
    basket.push(items[key])
    keys = keys.filter(item => item !== key)
    if (!keys.length) break
  }

  return basket
}

export default function Chopped (props) {
  const [basket, setBasket] = useState([])

  function handleClickEvent () {
    const basket = getRandomIngredients(props.ingredients)
    setBasket(basket)
  }

  return (
    <div className={styles.container}>
      <h1>Your Entrée Basket:</h1>
      <ul>
        {basket.map(item => <li key={item.label} className={styles.ingredient}>{item.label}</li>)}
      </ul>
      <p className={styles.content}>
        <button
          className={[styles.button, styles.hitarea].join(' ')}
          onClick={handleClickEvent}
          type='button'
        >
          Next
        </button>
      </p>
    </div>
  )
}
