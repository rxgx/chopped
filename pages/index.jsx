import React, { useEffect, useState } from 'react'
import client from '../clients/Firebase'
import Basket from '../components/Basket'
import Layout from '../components/Layout'

export default function HomePage () {
  const [ingredients, setIngredients] = useState({})

  useEffect(() => {
    client.on('value', snapshot => {
      const values = snapshot.val()
      setIngredients(values)
    })
  }, [])

  return <Layout><Basket ingredients={ingredients} /></Layout>
}
