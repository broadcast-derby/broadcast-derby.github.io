import { createStore, combineReducers } from 'redux'

// reducer 
import { racehorsesReducer } from '../reducer/racehorse'

const reducer = combineReducers({
  racehorsesReducer,
})
const store = createStore(reducer)
export default store