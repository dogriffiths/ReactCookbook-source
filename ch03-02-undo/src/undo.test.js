import reducer from './reducer'
import undo from './undo'

describe('undo', () => {
  it('should work like the reducer for most things', () => {
    let state = {
      items: ['1', '2', '3', null, '5', '6', '7', '8', '4'],
    }

    const undoReducer = undo(reducer)

    state = undoReducer(state, { type: 'move', payload: 0 })

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
  it('should be able to undo an action', () => {
    let state = {
      items: ['1', '2', '3', null, '5', '6', '7', '8', '4'],
    }

    const undoReducer = undo(reducer)

    state = undoReducer(state, { type: 'move', payload: 0 })
    state = undoReducer(state, { type: 'move', payload: 1 })

    expect(state.items).toEqual([
      '2',
      null,
      '3',
      '1',
      '5',
      '6',
      '7',
      '8',
      '4',
    ])

    state = undoReducer(state, { type: 'undo' })

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

    state = undoReducer(state, { type: 'undo' })

    expect(state.items).toEqual([
      '1',
      '2',
      '3',
      null,
      '5',
      '6',
      '7',
      '8',
      '4',
    ])

    state = undoReducer(state, { type: 'undo' })

    expect(state.items).toEqual([
      '1',
      '2',
      '3',
      null,
      '5',
      '6',
      '7',
      '8',
      '4',
    ])

    state = undoReducer(state, { type: 'undo' })

    expect(state.items).toEqual([
      '1',
      '2',
      '3',
      null,
      '5',
      '6',
      '7',
      '8',
      '4',
    ])
  })

  it('should be able to redo an action', () => {
    let state = {
      items: ['1', '2', '3', null, '5', '6', '7', '8', '4'],
    }

    const undoReducer = undo(reducer)

    state = undoReducer(state, { type: 'redo' })

    expect(state.items).toEqual([
      '1',
      '2',
      '3',
      null,
      '5',
      '6',
      '7',
      '8',
      '4',
    ])

    state = undoReducer(state, { type: 'shuffle' })

    expect(state.items).not.toEqual([
      '1',
      '2',
      '3',
      null,
      '5',
      '6',
      '7',
      '8',
      '4',
    ])

    const newItems = state.items

    state = undoReducer(state, { type: 'redo' })

    expect(state.items).not.toEqual(newItems)
  })
})
