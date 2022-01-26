import {
  ACTION_TRACK_UPDATE_TRACK,
} from '../const'
import {
  Track
} from '../interface'

/**
 * トラック情報更新
 * @param {any} dispatch
 * @param {Track} track トラック情報 
 */
export const updateRaceTrack = (dispatch: any, track: Track) => {
  window.localStorage.setItem('raceTrack', JSON.stringify(track))
  dispatch({ type: ACTION_TRACK_UPDATE_TRACK, payload: track })
}
