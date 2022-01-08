import {
  ACTION_RACEHORSE_CONSISTENCY,
  ACTION_RACEHORSE_UPDATE_RACEHORSES,
} from '../const'

/**
 * 初期値
 * 出走馬情報はLocalStorageに持たせて永続化させる
 */
const initialState = () => {
  let racehorses = window.localStorage.getItem('racehorses')
  if (!racehorses) {
    racehorses = '[]'
  }
  return {
    racehorses: JSON.parse(racehorses)
  }
}

/**
 * 出走馬情報更新Reducer
 */
export const racehorsesReducer = (state = initialState(), action: any) => {
  switch (action.type) {
    // 出走馬情報更新
    case ACTION_RACEHORSE_UPDATE_RACEHORSES:
      window.localStorage.setItem('racehorses', JSON.stringify(action.payload))
      return {
        racehorses: action.payload
      }
    // localStorageの情報を正としてstateを更新する
    case ACTION_RACEHORSE_CONSISTENCY:
      let racehorses = window.localStorage.getItem('racehorses')
      if (!racehorses) {
        racehorses = '[]'
      }
      return {
        racehorses: JSON.parse(racehorses)
      }
    default:
      return state
  }
}