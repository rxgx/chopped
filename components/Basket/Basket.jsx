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
          &nbsp;
          <span>Open Basket</span>
        </button>
      </p>
    </div>
  )
}
