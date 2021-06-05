import reducer from './reducer'

describe('reducer', () => {
  it('should be able to move 1 down if gap below', () => {
    let state = {
      items: ['1', '2', '3', null, '5', '6', '7', '8', '4'],
    }

    state = reducer(state, { type: 'move', payload: 0 })

    expect(state.items).toEqual([
      null,
      '2',
      '3',
      '1',
      '5',
      '6',
      '7',
      '8',
      '4',
    ])
  })

  it('should say when it is complete', () => {
    let state = {
      items: ['1', '2', '3', '4', '5', '6', '7', null, '8'],
    }

    state = reducer(state, { type: 'move', payload: 8 })

    expect(state.complete).toBe(true)

    state = reducer(state, { type: 'move', payload: 5 })

    expect(state.complete).toBe(false)
  })
})
