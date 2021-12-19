/**
 * 初期値
 * 出走馬情報はLocalStorageに持たせて永続化させる
 */
const initialState = () => {
  const racehorses = window.localStorage.getItem('racehorses')
  return {
    racehorses: JSON.parse(racehorses ?? '[]')
  }
}

/**
 * 出走馬情報更新Reducer
 */
export const racehorsesReducer = (state = initialState(), action: any) => {
  switch (action.type) {
    // 出走馬情報更新
    case 'UPDATE_RACEHORSES':
      window.localStorage.setItem('racehorses', JSON.stringify(action.payload))
      return {
        racehorses: action.payload
      }
    default:
      return state
  }
}