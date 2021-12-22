import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux'
import thunk from 'redux-thunk'

// reducer 
import { commentReducer } from '../reducer/comment'
import { racehorsesReducer } from '../reducer/racehorse'
import { userReducer } from '../reducer/user'

/**
 * root-reducer
 */
const reducer = combineReducers({
  commentReducer,
  racehorsesReducer,
  userReducer,
})

/**
 * store
 */
const store = createStore(reducer, applyMiddleware(thunk))
export default store