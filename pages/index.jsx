import React, { useEffect, useState } from 'react'
import client from '../clients/Firebase'
import Layout from '../components/Layout'
import Chopped from '../components/Chopped'

export default function HomePage () {
  const [ingredients, setIngredients] = useState({})

  useEffect(() => {
    client.on('value', snapshot => {
      const values = snapshot.val()
      setIngredients(values)
    })
  }, [])

  return <Layout><Chopped ingredients={ingredients} /></Layout>
}
