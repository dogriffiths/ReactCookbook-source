import summarizer from './summarizer'

describe('summarizer', () => {
  it('should return 0 for an empty basket', () => {
    const actual = summarizer({ basket: [] })
    expect(actual).toEqual({ itemCount: 0, cost: 0.0 })
  })
  it('should be able to multiply price by quantity', () => {
    const actual = summarizer({
      basket: [{ productId: '1234', quantity: 2, price: 1.23 }],
    })
    expect(actual).toEqual({ itemCount: 2, cost: 2.46 })
  })
  it('should be able to handle multiple products', () => {
    const actual = summarizer({
      basket: [
        { productId: '1234', quantity: 2, price: 1.23 },
        { productId: '5678', quantity: 1, price: 1.5 },
      ],
    })
    expect(actual).toEqual({ itemCount: 3, cost: 3.96 })
  })
})
