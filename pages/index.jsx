import { ref, onValue } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import db from '../clients/Firebase'
import Basket from '../components/Basket'
import Layout from '../components/Layout'

export default function HomePage (props) {
  const [ingredients, setIngredients] = useState()

  useEffect(() => {
    onValue(
      ref(db, 'ingredients'),
      snapshot => {
        const values = snapshot.val()
        setIngredients(values)
      },
      {
        onlyOnce: true
      }
    )
  }, [])

  return (
    <Layout>
      <Basket ingredients={ingredients} />
    </Layout>
  )
}
