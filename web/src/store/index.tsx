import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux'
import thunk from 'redux-thunk'

// reducer 
import { commentReducer } from '../reducer/comment'
import { moneyReducer } from '../reducer/money'
import { racehorsesReducer } from '../reducer/racehorse'
import { userReducer } from '../reducer/user'
import { raceTrackReducer } from '../reducer/raceTrack'

/**
 * root-reducer
 */
const reducer = combineReducers({
  commentReducer,
  moneyReducer,
  racehorsesReducer,
  raceTrackReducer,
  userReducer,
})

/**
 * store
 */
const store = createStore(reducer, applyMiddleware(thunk))
export default store