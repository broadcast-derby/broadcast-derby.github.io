import { createStore, combineReducers } from 'redux'

// reducer 
import { privateSettingReducer } from '../reducer/privateSetting'
import { racehorsesReducer } from '../reducer/racehorse'

const reducer = combineReducers({
  privateSettingReducer,
  racehorsesReducer,
})
const store = createStore(reducer)
export default store