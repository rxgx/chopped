import { fireEvent, render } from '@testing-library/react'
import Basket from './Basket'

test('renders', () => {
  const mockData = {
    a: { label: 'AAA' },
    b: { label: 'BBB' },
    x: { label: 'XXX' }
  }
  const { getByText } = render(<Basket ingredients={mockData} />)
  const button = getByText('Open Basket')
  fireEvent.click(button)
  getByText('AAA')
  getByText('BBB')
  getByText('XXX')
})
