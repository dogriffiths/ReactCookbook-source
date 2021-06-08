import reducer from './reducer'

describe('reducer', () => {
  it('should return an unchanged copy of the state if it does not know the action', () => {
    let state = {
      basket: [
        { productId: 'fgdss', name: 'Helmet', quantity: 3 },
        { productId: '4322f', name: 'Rope', quantity: 2 },
        { productId: '54345', name: 'Jacket', quantity: 1 },
      ],
    }
    const actual = reducer(state, { type: 'transmogrify' })
    expect(actual).toEqual({
      basket: [
        { productId: 'fgdss', name: 'Helmet', quantity: 3 },
        { productId: '4322f', name: 'Rope', quantity: 2 },
        { productId: '54345', name: 'Jacket', quantity: 1 },
      ],
    })
  })
  it('should be able to add a product to an empty basket', () => {
    const actual = reducer(undefined, {
      type: 'buy',
      payload: { productId: 'abcd', name: 'Crampons' },
    })
    expect(actual).toEqual({
      basket: [{ productId: 'abcd', name: 'Crampons', quantity: 1 }],
    })
  })
  it('should be able to add a product to a basket containing other products', () => {
    let state = {
      basket: [
        { productId: 'fgdss', name: 'Helmet', quantity: 3 },
        { productId: '4322f', name: 'Rope', quantity: 2 },
        { productId: '54345', name: 'Jacket', quantity: 1 },
      ],
    }
    const actual = reducer(state, {
      type: 'buy',
      payload: { productId: 'abcd', name: 'Crampons' },
    })
    expect(actual).toEqual({
      basket: [
        { productId: 'fgdss', name: 'Helmet', quantity: 3 },
        { productId: '4322f', name: 'Rope', quantity: 2 },
        { productId: '54345', name: 'Jacket', quantity: 1 },
        { productId: 'abcd', name: 'Crampons', quantity: 1 },
      ],
    })
  })
  it('should update the quantity of an object that we have already bought', () => {
    let state = {
      basket: [
        { productId: 'fgdss', name: 'Helmet', quantity: 3 },
        { productId: '4322f', name: 'Rope', quantity: 2 },
        { productId: '54345', name: 'Jacket', quantity: 1 },
      ],
    }
    const actual = reducer(state, {
      type: 'buy',
      payload: { productId: '4322f', name: 'Rope' },
    })
    expect(actual).toEqual({
      basket: [
        { productId: 'fgdss', name: 'Helmet', quantity: 3 },
        { productId: '4322f', name: 'Rope', quantity: 3 },
        { productId: '54345', name: 'Jacket', quantity: 1 },
      ],
    })
  })
  it('should be able to clear the basket', () => {
    let state = {
      basket: [
        { productId: 'fgdss', name: 'Helmet', quantity: 3 },
        { productId: '4322f', name: 'Rope', quantity: 2 },
        { productId: '54345', name: 'Jacket', quantity: 1 },
      ],
    }
    const actual = reducer(state, { type: 'clearBasket' })
    expect(actual).toEqual({ basket: [] })
  })
})
