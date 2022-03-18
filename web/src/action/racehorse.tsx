import {
  ACTION_RACEHORSE_UPDATE_RACEHORSES,
  ACTION_RACEHORSE_CONSISTENCY,
  ACTION_RACEHORSE_UPDATE_CUSTOM_RACEHORSES,
} from 'const'
import { RacehorseDetail } from 'interface'

/**
 * 出走馬情報を更新する
 * 
 * @param {any} dispatch
 * @param {RacehorseDetail[]} racehorses 出走馬情報一覧
 */
export const updateRacehorses = (dispatch: any, racehorses: RacehorseDetail[]) => {
  let customRacehorsesStr = window.localStorage.getItem('customRacehorses')
  if (!customRacehorsesStr) {
    customRacehorsesStr = '[]'
  }
  const customRacehorses = JSON.parse(customRacehorsesStr)
  const resultRacehorses: RacehorseDetail[] = []
  racehorses.map((r: RacehorseDetail) => {
    customRacehorses.map((cr: RacehorseDetail) => {
      if (r.number === cr.number) {
        resultRacehorses.push(cr)
      }
    })
  })
  window.localStorage.setItem('racehorses', JSON.stringify(resultRacehorses))
  dispatch({
    type: ACTION_RACEHORSE_UPDATE_RACEHORSES,
    payload: {
      racehorses: resultRacehorses,
      customRacehorses,
    }
  })
}

/**
 * 詳細情報を変更した出走馬情報を更新する
 * この出走馬がレースに出場するわけではなく、
 * この出走馬の中からレースに出場する出走馬を選ぶ
 * 
 * @param {any} dispatch 
 * @param {RacehorseDetail[]} racehorses 出走馬情報一覧
 */
export const updateCustomRacehorses = (dispatch: any, customRacehorses: RacehorseDetail[]) => {
  let racehorsesStr = window.localStorage.getItem('racehorses')
  if (!racehorsesStr) {
    racehorsesStr = '[]'
  }
  // 詳細情報が変更された場合、既に設定済みの出走馬情報も更新する
  const racehorses = JSON.parse(racehorsesStr)
  const racehorsesResult: RacehorseDetail[] = []
  racehorses.map((r: RacehorseDetail) => {
    customRacehorses.map((cr: RacehorseDetail) => {
      if (r.number === cr.number) {
        racehorsesResult.push(cr)
      }
    })
  })
  window.localStorage.setItem('customRacehorses', JSON.stringify(customRacehorses))
  window.localStorage.setItem('racehorses', JSON.stringify(racehorsesResult))
  dispatch({
    type: ACTION_RACEHORSE_UPDATE_CUSTOM_RACEHORSES,
    payload: {
      racehorses: racehorsesResult,
      customRacehorses,
    }
  })
}

/**
 * localStorageの情報を正としてstateを更新する
 * 
 * @param {any} dispatch
 */
export const consistencyRacehorses = (dispatch: any) => {
  let racehorses = window.localStorage.getItem('racehorses')
  if (!racehorses) {
    racehorses = '[]'
  }
  let customRacehorses = window.localStorage.getItem('customRacehorses')
  if (!customRacehorses) {
    customRacehorses = '[]'
  }
  dispatch({
    type: ACTION_RACEHORSE_CONSISTENCY, payload: {
      customRacehorses: JSON.parse(customRacehorses),
      racehorses: JSON.parse(racehorses),
    }
  })
}
