import { createStore, applyMiddleware } from "redux"
import { productsReducer } from "./reducers"
import { thunk } from 'redux-thunk'

export const store = createStore(productsReducer, applyMiddleware(thunk))