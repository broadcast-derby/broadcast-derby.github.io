import {
  ACTION_RACEHORSE_CONSISTENCY,
  ACTION_RACEHORSE_UPDATE_RACEHORSES,
  ACTION_RACEHORSE_UPDATE_CUSTOM_RACEHORSES,
  RACEHORSES,
} from 'const'
import {
  RacehorseBase,
  RacehorseDetail,
} from 'interface'

/**
 * 初期値
 * 出走馬情報はLocalStorageに持たせて永続化させる
 */
const initialState = () => {
  let racehorses = window.localStorage.getItem('racehorses')
  if (!racehorses) {
    racehorses = '[]'
  }
  let customRacehorses = window.localStorage.getItem('customRacehorses')
  if (!customRacehorses) {
    customRacehorses = JSON.stringify(
      RACEHORSES.map((base: RacehorseBase) => {
        let detail: RacehorseDetail = {
          ...base,
          support: base.supportDefault,
          stamina: base.staminaDefault,
          speed: base.speedDefault,
        }
        return detail
      })
    )
    window.localStorage.setItem('customRacehorses', customRacehorses)
  }
  return {
    racehorses: JSON.parse(racehorses),
    customRacehorses: JSON.parse(customRacehorses),
  }
}

/**
 * 出走馬情報用State更新Reducer
 * 
 * @param {any} state storeに保持される状態
 * @param {any} action stateを更新するaction
 */
export const racehorsesReducer = (state = initialState(), action: any) => {
  switch (action.type) {
    // 出走馬情報更新
    case ACTION_RACEHORSE_UPDATE_RACEHORSES:
      return {
        racehorses: action.payload.racehorses,
        customRacehorses: action.payload.customRacehorses,
      }
    // 詳細情報を更新した出走馬情報更新
    case ACTION_RACEHORSE_UPDATE_CUSTOM_RACEHORSES:
      return {
        racehorses: action.payload.racehorses,
        customRacehorses: action.payload.customRacehorses,
      }
    // localStorageの情報を正としてstateを更新する
    case ACTION_RACEHORSE_CONSISTENCY:
      return {
        racehorses: action.payload.racehorses,
        customRacehorses: action.payload.customRacehorses,
      }
    default:
      return state
  }
}