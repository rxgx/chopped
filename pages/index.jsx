import React, { useEffect, useState } from 'react'
import client from '../clients/Firebase'
import Basket from '../components/Basket'
import Layout from '../components/Layout'

export default function HomePage (props) {
  console.log('render home page')

  const [ingredients, setIngredients] = useState()

  useEffect(() => {
    client.ref('ingredients').once('value', snapshot => {
      const values = snapshot.val()
      setIngredients(values)
    })
  }, [])

  return (
    <Layout>
      <Basket ingredients={ingredients} />
    </Layout>
  )
}
