import { combineReducers } from 'redux'
import bannerReducer from './bannerReducer'
import productsReducer from './productsReducer'

export default combineReducers({
    banner: bannerReducer,
    products: productsReducer
});