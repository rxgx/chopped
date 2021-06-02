import { render, screen } from '@testing-library/react'
import HomePage from '../pages/index'

test('renders', () => {
  render(<HomePage />)
  expect(screen.getByText('Chopped')).toBeInTheDocument()
})
