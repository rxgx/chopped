import createBasket from './createBasket'

test('returns empty array', () => {
  expect(createBasket()).toEqual([])
  expect(createBasket({})).toEqual([])
})

test('returns one item', () => {
  const mockItem = { label: 'Example' }
  expect(createBasket({ example: mockItem })).toEqual([mockItem])
})

test('returns four items', () => {
  const mockData = {
    a: { label: 'For testing' },
    b: { label: 'Example', url: 'https://example' },
    c: { label: 'Nothing', type: 'none' },
    d: { label: 'Something' },
    e: { label: 'Another' },
    f: { label: 'Different' }
  }
  expect(createBasket(mockData)).toHaveLength(4)
})
