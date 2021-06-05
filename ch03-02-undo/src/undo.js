import lodash from 'lodash'

const undo = (reducer) => (state, action) => {
  let {
    undoHistory = [],
    undoActions = [],
    ...innerState
  } = lodash.cloneDeep(state)
  switch (action.type) {
    case 'undo': {
      if (undoActions.length > 0) {
        undoActions.pop()
        innerState = undoHistory.pop()
      }
      break
    }

    case 'redo': {
      if (undoActions.length > 0) {
        undoHistory = [...undoHistory, { ...innerState }]
        undoActions = [
          ...undoActions,
          undoActions[undoActions.length - 1],
        ]
        innerState = reducer(
          innerState,
          undoActions[undoActions.length - 1]
        )
      }
      break
    }

    default: {
      undoHistory = [...undoHistory, { ...innerState }]
      undoActions = [...undoActions, action]
      innerState = reducer(innerState, action)
    }
  }
  return { ...innerState, undoHistory, undoActions }
}

export default undo
