import { useState } from 'react'
import styles from './Chopped.module.css'

export function getRandomIngredients (items) {
  const basket = []
  let key
  let keys = Object.keys(items)

  for (let i = 0; i < 3; i++) {
    key = keys[Math.floor(Math.random() * keys.length)]
    basket.push(items[key])
    keys = keys.filter((item) => item !== key)
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
        {basket.map((item) => (
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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            stroke-linecap='round'
            strokeLinejoin='round'
            className='feather feather-archive'
          >
            <polyline points='21 8 21 21 3 21 3 8' />
            <rect x='1' y='3' width='22' height='5' />
            <line x1='10' y1='12' x2='14' y2='12' />
          </svg>
          Open Basket
        </button>
      </p>
    </div>
  )
}
