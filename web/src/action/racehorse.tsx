import {
  ACTION_RACEHORSE_UPDATE_RACEHORSES,
  ACTION_RACEHORSE_CONSISTENCY
} from '../const'
import { RacehorseDetail } from '../interface'

/**
 * 出走馬情報を更新する
 */
export const updateRacehorses = (dispatch: any, racehorses: RacehorseDetail[]) => {
  window.localStorage.setItem('racehorses', JSON.stringify(racehorses))
  dispatch({ type: ACTION_RACEHORSE_UPDATE_RACEHORSES, payload: racehorses })
}

/**
 * localStorageの情報を正としてstateを更新する
 */
export const consistencyRacehorses = (dispatch: any) => {
  let racehorses = window.localStorage.getItem('racehorses')
  if (!racehorses) {
    racehorses = '[]'
  }
  dispatch({ type: ACTION_RACEHORSE_CONSISTENCY, payload: JSON.parse(racehorses) })
}
