import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// mui
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

// utils
import { RacehorseBase, RealRacehorse, Track } from '../../interface'
import { RACEHORSES } from '../../const'

// fish slider
import AjiSlider from '../molecules/fish-slider/AjiSlider'
import BuriSlider from '../molecules/fish-slider/BuriSlider'
import IkaSlider from '../molecules/fish-slider/IkaSlider'
import KajikiSlider from '../molecules/fish-slider/KajikiSlider'
import KasagoSlider from '../molecules/fish-slider/KasagoSlider'
import KatsuoSlider from '../molecules/fish-slider/KatsuoSlider'
import MaguroSlider from '../molecules/fish-slider/MaguroSlider'
import SabaSlider from '../molecules/fish-slider/SabaSlider'
import SakeSlider from '../molecules/fish-slider/SakeSlider'
import TaiSlider from '../molecules/fish-slider/TaiSlider'
import TakoSlider from '../molecules/fish-slider/TakoSlider'

/**
 * レース中Props
 */
interface RaceProps {
  /**
   * 出走馬一覧
   */
  realRacehorses: RealRacehorse[],
  /**
   * 全員ゴール時イベント
   */
  onGoal: Function,
}
/**
 * レース中
 */
const Race: React.FC<RaceProps> = ({
  /**
   * 出走馬一覧
   */
  realRacehorses,
  /**
   * 全員ゴール時イベント
   */
  onGoal,
}) => {
  /**
   * トラック情報
   */
  const track: Track = useSelector((state: any) => state.raceTrackReducer.raceTrack)

  /**
   * 実際に走っている出走馬情報一覧
   */
  const [runningRacehorse, setRunningRacehorse] = useState<RealRacehorse[]>([])
  /**
   * スタートしたかどうか
   */
  const [isStart, setStart] = useState<boolean>(false)
  /**
   * 初期表示時にpropsから受け取った出走馬の情報をstateに保持する
   */
  useEffect(() => {
    setRunningRacehorse(realRacehorses.concat())
  }, [])
  /**
   * スタートボタン押下時イベント
   */
  const handleStartClick = () => {
    setStart(true)
  }
  /**
   * 走った距離を更新する頻度(ms)
   */
  const RUN_INTERVAL = 200
  /**
   * 順位
   */
  const [rankInNumbers, setRankInNumbers] = useState<number[]>([])
  /**
   * setIntervalで指定間隔毎に出走馬の走った距離を更新する
   */
  useEffect(() => {
    if (!isStart) {
      return
    }
    let timer: number | undefined = setInterval(() => {
      const min = 1
      const max = 50
      const runnings: RealRacehorse[] = []
      runningRacehorse.map((r: RealRacehorse) => {
        r.runValue += Math.floor(Math.random() * (max - min) + min + (r.supportPower > 0 ? 25 : 0))
        if (track.trackLength <= r.runValue && !rankInNumbers.includes(r.number)) {
          rankInNumbers.push(r.number)
          setRankInNumbers(rankInNumbers.concat())
        }
        if (r.supportPower > 0) {
          r.supportPower--
        }
        runnings.push(r)
      })
      setRunningRacehorse(runnings.concat())
    }, RUN_INTERVAL)
    return () => {
      if (timer) {
        clearInterval(timer)
        timer = undefined
      }
    }
  }, [isStart])
  /**
   * スライダー一覧
   */
  const SLIDER_LIST: any[] = [
    MaguroSlider,
    SakeSlider,
    KajikiSlider,
    AjiSlider,
    SabaSlider,
    KatsuoSlider,
    IkaSlider,
    TakoSlider,
    KasagoSlider,
    TaiSlider,
    BuriSlider,
  ]
  /**
   * 出走馬のゴール判定を確認して、
   * 全員がゴールしたら親コンポーネントに結果を渡す
   */
  useEffect(() => {
    // 全員ゴールしてないなら何もしない
    if (rankInNumbers.length === 0 || rankInNumbers.length !== runningRacehorse.length) {
      return
    }
    onGoal(rankInNumbers)
  }, [rankInNumbers])
  /**
   * 出走馬番号から出走馬名を取得
   * @param {number} number 出走馬番号
   * @returns 出走馬名
   */
  const getRacehorseName = (number: number) => {
    const racehorse = RACEHORSES.find((r: RacehorseBase) => r.number === number)
    if (racehorse) {
      return racehorse.name
    }
    else {
      ''
    }
  }
  return (
    <Grid container >
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={handleStartClick}
        >スタート</Button>
      </Grid>
      {runningRacehorse.map((rh: RealRacehorse, index: number) => (
        <React.Fragment key={index}>
          <Grid item xs={3}>
            {rh.name}
          </Grid>
          <Grid item xs={9}>
            {SLIDER_LIST.map((Slider, index) => (
              <React.Fragment key={index}>
                {index + 1 === rh.number ? (
                  <Slider
                    min={0}
                    max={track.trackLength}
                    value={rh.runValue}
                  />
                ) : null}
              </React.Fragment>
            ))}
          </Grid>
        </React.Fragment>
      ))}
      <Grid item xs={12}>
        <Grid container>
          {rankInNumbers.map((rankInNumber: number, index: number) => (
            <React.Fragment key={index}>
              <Grid item xs={3}>
                {index + 1}着
              </Grid>
              <Grid item xs={9}>
                {getRacehorseName(rankInNumber)}
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Race

