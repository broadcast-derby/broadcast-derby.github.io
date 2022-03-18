import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

// utils
import {
  DEFAULT_RACE_TRACK_LENGTH,
  MIN_RACE_TRACK_LENGTH,
  MAX_RACE_TRACK_LENGTH
} from 'const'
import { Track } from 'interface'
import { updateRaceTrack } from 'action/raceTrack'

/**
 * トラック設定画面
 */
const RaceTrackConfig: React.FC = () => {
  /**
   * @description reduxに使用する
   */
  const dispatch = useDispatch()
  /**
   * 永続化されたトラック情報
   */
  const track: Track = useSelector((state: any) => state.raceTrackReducer.raceTrack)
  /**
   * トラックの距離
   */
  const [tempTrackLength, setTempTrackLength] = useState<number | number[]>(DEFAULT_RACE_TRACK_LENGTH)
  /**
   * 永続化されたトラック情報が更新された場合
   * 画面に表示されているトラックの情報も最新の情報に更新する
   * 
   * 永続化された情報をtemp変数に格納する
   * 実際に画面上で操作されて値が更新されるのはtemp変数
   * 保存ボタン押下時に初めて永続化された情報が更新される
   */
  useEffect(() => {
    setTempTrackLength(track.trackLength)
  }, [track])
  /**
   * トラック距離スライダー変更時イベント
   * @param {number|number[]} val 変更した値 
   */
  const handleSliderChange = (val: number | number[]) => {
    setTempTrackLength(val)
  }
  /**
   * 入力欄変更時イベント
   * @param {string} val 入力された値
   */
  const handleInputChange = (val: string) => {
    let v = !val ? 0 : Number(val)
    if (v < MIN_RACE_TRACK_LENGTH) {
      v = MIN_RACE_TRACK_LENGTH
    }
    else if (MAX_RACE_TRACK_LENGTH < v) {
      v = MAX_RACE_TRACK_LENGTH
    }
    setTempTrackLength(v)
  }
  /**
   * ランダムボタン押下時イベント
   */
  const handleRandomButtonClick = () => {
    setTempTrackLength(Math.floor(Math.random() * (MAX_RACE_TRACK_LENGTH - MIN_RACE_TRACK_LENGTH) + MIN_RACE_TRACK_LENGTH))
  }
  /**
   * デフォルトボタン押下時イベント
   */
  const handleDefaultButtonClick = () => {
    setTempTrackLength(DEFAULT_RACE_TRACK_LENGTH)
  }
  /**
   * 保存ボタン押下時イベント
   */
  const handleSaveButtonClick = () => {
    track.trackLength = tempTrackLength
    updateRaceTrack(dispatch, track)
  }
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={2}>
              <Typography variant="subtitle1">トラック距離</Typography>
            </Grid>
            <Grid item xs={12}>
              <Slider
                value={tempTrackLength}
                onChange={(_, val) => handleSliderChange(val)}
                min={MIN_RACE_TRACK_LENGTH}
                max={MAX_RACE_TRACK_LENGTH}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                fullWidth
                value={tempTrackLength}
                onChange={(e) => handleInputChange(e.target.value)}
                inputProps={{
                  min: MIN_RACE_TRACK_LENGTH,
                  max: MAX_RACE_TRACK_LENGTH,
                  type: 'number',
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                onClick={handleRandomButtonClick}
              >
                ランダム
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                onClick={handleDefaultButtonClick}
              >
                デフォルト
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <Grid item xs={3}>
              <Button
                variant="contained"
                onClick={handleSaveButtonClick}
              >
                保存
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default RaceTrackConfig