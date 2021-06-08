import taxer from './taxer'

describe('taxer', () => {
  it('should return 0 for an empty basket', () => {
    const actual = taxer({ basket: [] })
    expect(actual).toEqual(0.0)
  })
  it('should be able to multiply price by quantity', () => {
    const actual = taxer({
      basket: [{ productId: '1234', quantity: 2, price: 1.23 }],
    })
    expect(actual).toBeCloseTo(0.1722, 6)
  })
  it('should be able to handle multiple products', () => {
    const actual = taxer({
      basket: [
        { productId: '1234', quantity: 2, price: 1.23 },
        { productId: '5678', quantity: 1, price: 1.5 },
      ],
    })
    expect(actual).toBeCloseTo(0.2772, 6)
  })
})
