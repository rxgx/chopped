import { render } from '@testing-library/react'
import React from 'react'
import HomePage from '../pages/index'

describe('Index', () => {
  it('renders', () => {
    render(<HomePage />)
  })
})
