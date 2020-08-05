import {useReducer} from "react";
import undo from "./undo";

export default (reducer, initialState) => useReducer(undo(reducer), initialState);