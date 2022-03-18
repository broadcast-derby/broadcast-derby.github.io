import {
  ACTION_TRACK_UPDATE_TRACK,
  DEFAULT_RACE_TRACK_LENGTH,
} from 'const'
import {
  Track
} from 'interface'

/**
 * 初期値
 * トラック情報はLocalStorageに持たせて永続化させる
 */
const initialState = () => {
  const raceTrack = window.localStorage.getItem('raceTrack')
  if (!raceTrack) {
    const track: Track = {
      trackLength: DEFAULT_RACE_TRACK_LENGTH
    }
    return {
      raceTrack: track
    }
  }
  else {
    return {
      raceTrack: JSON.parse(raceTrack)
    }
  }
}

/**
 * トラック情報用State更新Reducer
 * 
 * @param {any} state storeに保持される状態
 * @param {any} action stateを更新するaction
 */
export const raceTrackReducer = (state = initialState(), action: any) => {
  switch (action.type) {
    // トラック情報更新
    case ACTION_TRACK_UPDATE_TRACK:
      return {
        raceTrack: action.payload
      }
    default:
      return state
  }
}