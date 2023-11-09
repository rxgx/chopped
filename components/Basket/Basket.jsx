import { useState } from 'react'
import Ingredients from './Ingredients'
import styles from './Basket.module.css'
import createBasket from './createBasket'

const rounds = [
  {
    num: 1,
    name: 'appetizer',
    label: 'Appetizer',
  },
  {
    num: 2,
    name: 'entree',
    label: 'Entreé'
  },
  {
    num: 3,
    name: 'dessert',
    label: 'Dessert'
  },
]

export default function Basket (props) {
  const [roundNum, setRoundNum] = useState(0)
  const [basket, setBasket] = useState([])

  function handleClickEvent () {
    const data = createBasket(props.ingredients)
    setBasket(data)
    setRoundNum(roundNum + 1)
  }

  const { label, name } = rounds[roundNum];

  let action = `${label} Round`;

  return (
    <div key={name} className={styles.container}>
      <h2>{label} Round</h2>
      <Ingredients basket={basket} />
      <p className={styles.content}>
        <button
          className={[styles.button, styles.hitarea].join(' ')}
          onClick={handleClickEvent}
          type='button'
        >
          <span>{action}</span>
        </button>
      </p>
    </div>
  )
}
