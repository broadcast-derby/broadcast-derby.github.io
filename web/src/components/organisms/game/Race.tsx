import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// mui
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// utils
import {
  RacehorseBase,
  RealRacehorse,
  Track,
  Comment
} from 'interface'
import { RACEHORSES } from 'const'

// fish slider
import AjiSlider from 'molecules/fish-slider/AjiSlider'
import BuriSlider from 'molecules/fish-slider/BuriSlider'
import IkaSlider from 'molecules/fish-slider/IkaSlider'
import KajikiSlider from 'molecules/fish-slider/KajikiSlider'
import KasagoSlider from 'molecules/fish-slider/KasagoSlider'
import KatsuoSlider from 'molecules/fish-slider/KatsuoSlider'
import MaguroSlider from 'molecules/fish-slider/MaguroSlider'
import SabaSlider from 'molecules/fish-slider/SabaSlider'
import SakeSlider from 'molecules/fish-slider/SakeSlider'
import TaiSlider from 'molecules/fish-slider/TaiSlider'
import TakoSlider from 'molecules/fish-slider/TakoSlider'

// organisms
import OverviewSliders from './race/OverviewSliders'
import RealTimeRanking from './race/RealTimeRanking'

/**
 * レース中Props
 */
interface RaceProps {
  /**
   * コメント一覧
   */
  activeComments: Comment[],
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
   * コメント一覧
   */
  activeComments,
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
  const [runningRacehorses, setRunningRacehorses] = useState<RealRacehorse[]>([])
  /**
   * スタートしたかどうか
   */
  const [isStart, setStart] = useState<boolean>(false)
  /**
   * 初期表示時にpropsから受け取った出走馬の情報をstateに保持する
   */
  useEffect(() => {
    setRunningRacehorses(realRacehorses.concat())
  }, [])
  /**
   * スタートボタン押下時イベント
   */
  const handleStartClick = () => {
    setStart(true)
  }
  /**
   * 順位を表示するかどうか
   */
  const [showRanking, setShowRanking] = useState(false)
  /**
   * 順位表示トグルボタン押下時イベント
   */
  const handleShowRankingToggleClick = () => {
    setShowRanking(!showRanking)
  }
  /**
   * 順位
   */
  const [rankInNumbers, setRankInNumbers] = useState<number[]>([])
  /**
   * 結果発表ボタン押下時イベント
   */
  const handleGoalClick = () => {
    onGoal(rankInNumbers)
  }
  /**
   * 特定のキーワードに該当したときにもらえる力
   */
  const SPECIAL_POWER = 20
  /**
   * 指定の出走馬が応援されたかどうか
   * @param {string} commentContent コメント 
   * @return 応援されたかどうか
   */
  const isCheeredOnComment = (commentContent: string, racehorse: RacehorseBase) => {
    if (!racehorse) {
      return false
    }
    const RACEHORSE = RACEHORSES.find((base: RacehorseBase) => base.number === racehorse.number)
    if (!RACEHORSE) {
      return false
    }
    let result = false
    RACEHORSE.keywordRegexList.map((regex: RegExp) => {
      if (commentContent.match(regex)) {
        result = true
      }
    })
    return result
  }
  /**
   * コメントで出走馬を応援づける
   */
  const cheerUpRacehorse = (commentContent: string) => {
    runningRacehorses.map((real: RealRacehorse) => {
      if (isCheeredOnComment(commentContent, real)) {
        real.supportPower += SPECIAL_POWER
      }
    })
    setRunningRacehorses(runningRacehorses.concat())
  }
  /**
   * アクティブコメント取得時
   * レース中応援イベント
   */
  useEffect(() => {
    if (!isStart) {
      return;
    }
    activeComments.map((c: Comment) => {
      cheerUpRacehorse(c.content)
    })
  }, [activeComments])
  /**
   * 走った距離を更新する頻度(ms)
   */
  const RUN_INTERVAL = 100
  /**
   * ランダムな値を0～99の値で取得
   */
  const getRandom = () => {
    return Math.floor(Math.random() * 100)
  }
  /**
   * 応援されたときのスタミナ回復量
   */
  const STAMINA_RECOVERY_AMOUNT = 7
  /**
   * 応援係数
   */
  const SUPPORT_COEFFICIENT = 2.5
  /**
   * スピード係数
   */
  const SPEED_COEFFICIENT = 0.75
  /**
   * 調子係数
   */
  const CONDITION_COEFFICIENT = 1.15
  /**
   * 出走馬が走る処理
   */
  const runRacehorse = () => {
    const runnings: RealRacehorse[] = []
    runningRacehorses.map((r: RealRacehorse) => {

      let speed = Number(r.speed)

      // 応援されていたらスタミナ回復
      // スタミナ回復量 = 10 * 応援補正値 / 100
      if (0 < r.supportPower) {
        // スタミナ回復
        r.stamina = Number(r.stamina) + STAMINA_RECOVERY_AMOUNT * Number(r.support) / 100
        // 応援パワーがあるうちはスピードアップ
        speed += SUPPORT_COEFFICIENT * Number(r.support) / 10
      }

      // スタミナがなくなるとスピードダウン
      if (r.stamina <= 0) {
        speed *= 0.8
      }

      r.runValue += speed * SPEED_COEFFICIENT * (r.currentCondition / 100 + 1) * CONDITION_COEFFICIENT

      // 常に応援量を消費しながら走る
      if (0 < r.supportPower) {
        r.supportPower--
      }
      // 常にスタミナを消費しながら走る
      if (0 < r.stamina && typeof r.stamina === 'number') {
        const staminaRandom = getRandom() * (r.currentCondition / 100 + 1) / 10
        r.stamina -= staminaRandom
      }

      // ゴールしていたら順位リストに追加
      if (track.trackLength <= r.runValue && !rankInNumbers.includes(r.number)) {
        rankInNumbers.push(r.number)
        setRankInNumbers(rankInNumbers.concat())
      }
      runnings.push(r)
    })
    setRunningRacehorses(runnings.concat())
  }
  /**
   * setIntervalで指定間隔毎に出走馬の走った距離を更新する
   */
  useEffect(() => {
    if (!isStart) {
      return
    }
    let timer: number | undefined = setInterval(() => {
      runRacehorse()
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
   * 出走馬番号スライダー押下時イベント
   * @param {number} number 出走馬番号
   * TODO カメラ切り替え時の処理書く
   */
  const handleOverViewSliderClick = (number: number) => { }
  /**
   * オートカメラボタン押下時イベント
   * TODO カメラ切り替え時の処理書く
   */
  const handleAutoCameraClick = () => { }
  /**
   * 一位カメラボタン押下時イベント
   * TODO カメラ切り替え時の処理書く
   */
  const handleFirstCameraClick = () => { }
  /**
   * 最下位カメラボタン押下時イベント
   * TODO カメラ切り替え時の処理書く
   */
  const handleBottomCameraClick = () => { }
  return (
    <React.Fragment>
      <Grid container >
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleAutoCameraClick}
              >
                オート
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleFirstCameraClick}
              >
                1位
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleBottomCameraClick}
              >
                最下位
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleShowRankingToggleClick}
              >
                {showRanking ? "順位表示 ON" : "順位表示 OFF"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {runningRacehorses.map((rh: RealRacehorse, index: number) => (
            <Grid container key={index}>
              <Grid item xs={1}>{rh.name}</Grid>
              <Grid item xs={1}>D:{Math.floor(rh.runValue)}</Grid>
              <Grid item xs={1}>sp:{rh.speed}</Grid>
              <Grid item xs={1}>st:{Math.floor(Number(rh.stamina))}</Grid>
              <Grid item xs={1}>su:{Math.floor(Number(rh.support))}</Grid>
              <Grid item xs={1}>power:{Math.floor(Number(rh.supportPower))}</Grid>
              <Grid item xs={1}>co:{Math.floor(Number(rh.currentCondition))}</Grid>
            </Grid>
          ))}
        </Grid>
        {/* {runningRacehorse.map((rh: RealRacehorse, index: number) => (
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
        ))} */}
      </Grid>
      {showRanking ? (
        <Container
          maxWidth={false}
          sx={{
            position: "absolute",
          }}>
          <RealTimeRanking
            racehorseLength={runningRacehorses.length}
            rankInNumbers={rankInNumbers}
          />
        </Container>
      ) : null}
      <Container
        maxWidth={false}
        sx={{
          bottom: "30px",
          position: "absolute",
        }}>
        <OverviewSliders
          realRacehorses={runningRacehorses}
          onClickSlider={handleOverViewSliderClick}
        />
      </Container>
      {!isStart ? (
        <Button
          variant="contained"
          onClick={handleStartClick}
          sx={{
            left: 15,
            right: 15,
            bottom: "15px",
            position: "absolute",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}>
          スタート
        </Button>
      ) : null}
      {rankInNumbers.length === runningRacehorses.length ? (
        <Button
          variant="contained"
          onClick={handleGoalClick}
          sx={{
            left: 15,
            right: 15,
            bottom: "15px",
            position: "absolute",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}>
          結果発表
        </Button>
      ) : null}
    </React.Fragment >
  )
}
export default Race

