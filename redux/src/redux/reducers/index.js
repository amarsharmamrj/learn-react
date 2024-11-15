import {combineReducers} from 'redux'
import { products } from './products'

export const productsReducer = combineReducers({
    products: products
})