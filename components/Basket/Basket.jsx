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

  const action = rounds[roundNum + 1].label;

  return (
    <div key={name} className={styles.container}>
      <Ingredients basket={basket} round={rounds.find(r => r.num === roundNum)} />
      <p className={styles.content}>
        <button
          className={[styles.button, styles.hitarea].join(' ')}
          onClick={handleClickEvent}
          type='button'
        >
          <span>Start {action} Round</span>
        </button>
      </p>
    </div>
  )
}
