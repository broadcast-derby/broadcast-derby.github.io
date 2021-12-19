import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux'
import thunk from 'redux-thunk'

// reducer 
import { commentReducer } from '../reducer/comment'
import { racehorsesReducer } from '../reducer/racehorse'

/**
 * root-reducer
 */
const reducer = combineReducers({
  commentReducer,
  racehorsesReducer,
})

/**
 * store
 */
const store = createStore(reducer, applyMiddleware(thunk))
export default store