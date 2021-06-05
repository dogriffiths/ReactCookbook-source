import reducer from './reducer'

function expectMove(fromState, movePos, expectedToState) {
  let state = {
    items: fromState,
  }

  state = reducer(state, { type: 'move', payload: movePos })

  expect(state.items).toEqual(expectedToState)
}

describe('reducer', () => {
  it('should be able to move 1 down if gap below', () => {
    expectMove(['1', '2', '3', null, '5', '6', '7', '8', '4'], 0, [
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
    expectMove(['1', null, '3', '2', '5', '6', '7', '8', '4'], 0, [
      null,
      '1',
      '3',
      '2',
      '5',
      '6',
      '7',
      '8',
      '4',
    ])

    expectMove(['1', '2', '3', '4', null, '6', '7', '8', '5'], 1, [
      '1',
      null,
      '3',
      '4',
      '2',
      '6',
      '7',
      '8',
      '5',
    ])
    expectMove([null, '2', '3', '4', '1', '6', '7', '8', '5'], 1, [
      '2',
      null,
      '3',
      '4',
      '1',
      '6',
      '7',
      '8',
      '5',
    ])
    expectMove(['3', '2', null, '4', '1', '6', '7', '8', '5'], 1, [
      '3',
      null,
      '2',
      '4',
      '1',
      '6',
      '7',
      '8',
      '5',
    ])

    expectMove(['1', null, '3', '4', '2', '6', '7', '8', '5'], 2, [
      '1',
      '3',
      null,
      '4',
      '2',
      '6',
      '7',
      '8',
      '5',
    ])
    expectMove(['1', '6', '3', '4', '2', null, '7', '8', '5'], 2, [
      '1',
      '6',
      null,
      '4',
      '2',
      '3',
      '7',
      '8',
      '5',
    ])

    expectMove([null, '1', '3', '4', '2', '6', '7', '8', '5'], 3, [
      '4',
      '1',
      '3',
      null,
      '2',
      '6',
      '7',
      '8',
      '5',
    ])
    expectMove(['2', '1', '3', '4', null, '6', '7', '8', '5'], 3, [
      '2',
      '1',
      '3',
      null,
      '4',
      '6',
      '7',
      '8',
      '5',
    ])
    expectMove(['2', '1', '3', '4', '7', '6', null, '8', '5'], 3, [
      '2',
      '1',
      '3',
      null,
      '7',
      '6',
      '4',
      '8',
      '5',
    ])

    expectMove(['2', null, '3', '4', '5', '6', '1', '8', '7'], 4, [
      '2',
      '5',
      '3',
      '4',
      null,
      '6',
      '1',
      '8',
      '7',
    ])
    expectMove(['2', '4', '3', null, '5', '6', '1', '8', '7'], 4, [
      '2',
      '4',
      '3',
      '5',
      null,
      '6',
      '1',
      '8',
      '7',
    ])
    expectMove(['2', '4', '3', '6', '5', null, '1', '8', '7'], 4, [
      '2',
      '4',
      '3',
      '6',
      null,
      '5',
      '1',
      '8',
      '7',
    ])
    expectMove(['2', '4', '3', '6', '5', '8', '1', null, '7'], 4, [
      '2',
      '4',
      '3',
      '6',
      null,
      '8',
      '1',
      '5',
      '7',
    ])

    expectMove(['1', '2', null, '4', '5', '6', '7', '8', '3'], 5, [
      '1',
      '2',
      '6',
      '4',
      '5',
      null,
      '7',
      '8',
      '3',
    ])
    expectMove(['1', '2', '5', '4', null, '6', '7', '8', '3'], 5, [
      '1',
      '2',
      '5',
      '4',
      '6',
      null,
      '7',
      '8',
      '3',
    ])
    expectMove(['1', '2', '5', '4', '3', '6', '7', '8', null], 5, [
      '1',
      '2',
      '5',
      '4',
      '3',
      null,
      '7',
      '8',
      '6',
    ])

    expectMove(['1', '2', '3', null, '5', '6', '7', '8', '4'], 6, [
      '1',
      '2',
      '3',
      '7',
      '5',
      '6',
      null,
      '8',
      '4',
    ])
    expectMove(['1', '2', '3', '8', '5', '6', '7', null, '4'], 6, [
      '1',
      '2',
      '3',
      '8',
      '5',
      '6',
      null,
      '7',
      '4',
    ])

    expectMove(['1', '2', '3', '4', null, '6', '7', '8', '5'], 7, [
      '1',
      '2',
      '3',
      '4',
      '8',
      '6',
      '7',
      null,
      '5',
    ])
    expectMove(['1', '2', '3', '4', '5', '6', null, '8', '7'], 7, [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '8',
      null,
      '7',
    ])
    expectMove(['1', '2', '3', '4', '5', '6', '7', '8', null], 7, [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      null,
      '8',
    ])

    expectMove(['1', '2', '3', '4', '5', '6', '7', null, '8'], 8, [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      null,
    ])
    expectMove(['1', '2', '3', '4', '5', null, '7', '6', '8'], 8, [
      '1',
      '2',
      '3',
      '4',
      '5',
      '8',
      '7',
      '6',
      null,
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

  it('should be possible to shuffle', () => {
    let items = ['1', '2', '3', '4', '5', '6', '7', '8', null]
    let state = { items, complete: true }

    state = reducer(state, { type: 'shuffle' })

    expect(state.items).not.toEqual(items)
    expect(state.complete).toBe(false)
  })

  it('should be possible to reset', () => {
    let items = ['7', '8', '2', '3', '4', '5', null, '1', '6']
    let state = { items, complete: false }

    state = reducer(state, { type: 'reset' })

    expect(state.items).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      null,
    ])
    expect(state.complete).toBe(true)
  })

  it('should throw an exception if a bad action is sent', () => {
    expect(() => reducer({}, { type: 'Bad command' })).toThrow()
  })
})
