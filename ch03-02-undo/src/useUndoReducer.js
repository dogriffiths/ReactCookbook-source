import { useReducer } from 'react'
import undo from './undo'

const useUndoReducer = (reducer, initialState) =>
  useReducer(undo(reducer), initialState)

export default useUndoReducer
