import { render } from '@testing-library/react'
import Basket from './Basket'

test('renders', () => {
  const { getByText } = render(<Basket />)
  getByText('Open Basket')
})
