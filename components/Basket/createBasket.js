export default function createBasket (items) {
  const basket = []
  let key
  let keys = Object.keys(items)

  for (let i = 0; i < 4; i++) {
    key = keys[Math.floor(Math.random() * keys.length)]
    basket.push(items[key])
    keys = keys.filter((item) => item !== key)
    if (!keys.length) break
  }

  return basket
}
