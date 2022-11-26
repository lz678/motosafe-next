import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import mainReducer from './MTMainReducer'
const rootReducer = combineReducers({
    mainReducer
})
let state = createStore(rootReducer, applyMiddleware(thunk))
export default state