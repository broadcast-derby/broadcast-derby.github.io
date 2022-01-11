import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// utils
import { RacehorseBase, RacehorseDetail } from '../../interface'
import { RACEHORSES } from '../../const'
import { updateRacehorses } from '../../action/racehorse'

// molecules
import StatusSlider from '../molecules/StatusSlider'

// organisms
import RacehorseConfig from '../organisms/RacehorseConfig'

/**
 * 設定画面
 */
const RacehorseEditor: React.FC = () => {
  const dispatch = useDispatch()
  /**
   * 出走馬一覧
   */
  const racehorses: RacehorseDetail[] = useSelector((state: any) => state.racehorsesReducer.racehorses)
  /**
   * 出走馬追加ボタン押下時イベント
   */
  const handleAddRacehorseClick = () => {
    // 出走馬一覧からまだ追加されていない出走馬を設定する
    const base: RacehorseBase | undefined = RACEHORSES.find(
      (constRacehorses: RacehorseBase) => !racehorses.find((r: RacehorseDetail) => r.number === constRacehorses.number)
    )
    if (base === undefined) {
      return
    }
    const racehorse: RacehorseDetail = {
      ...base,
      support: 1,
      condition: 1,
      ranking: 1,
      distance: 1,
      popular: 1,
    }
    racehorses.push(racehorse)
    updateRacehorses(dispatch, racehorses.concat())
  }
  /**
   * 一括ランダムボタン押下時イベント
   */
  const handleAllPerfectRandomButtonClick = () => {
    racehorses.forEach((rh: RacehorseDetail) => {
      const val1 = Math.floor(Math.random() * (100 - 0) + 0)
      const val2 = Math.floor(Math.random() * (100 - 0) + 0)
      const val3 = Math.floor(Math.random() * (100 - 0) + 0)
      const val4 = Math.floor(Math.random() * (100 - 0) + 0)
      const val5 = Math.floor(Math.random() * (100 - 0) + 0)
      rh.support = val1
      rh.condition = val2
      rh.ranking = val3
      rh.distance = val4
      rh.popular = val5
    })
    updateRacehorses(dispatch, racehorses.concat())
  }
  /**
   * 統一ランダムボタン押下時イベント
   */
  const handleAllUnifiedRandomButtonClick = () => {
    const val1 = Math.floor(Math.random() * (100 - 0) + 0)
    const val2 = Math.floor(Math.random() * (100 - 0) + 0)
    const val3 = Math.floor(Math.random() * (100 - 0) + 0)
    const val4 = Math.floor(Math.random() * (100 - 0) + 0)
    const val5 = Math.floor(Math.random() * (100 - 0) + 0)
    setAllSupport(val1)
    setAllCondition(val2)
    setAllRanking(val3)
    setAllDistance(val4)
    setAllPopular(val5)
  }
  /**
   * 全応援補正率を適用させるかどうか
   */
  const [canExecuteAllSupport, setExecuteAllSupport] = useState<boolean>(false)
  /**
  * 全応援補正率
  */
  const [allSupport, setAllSupport] = useState<number | number[]>(0)
  /**
   * 全調子補正率を適用させるかどうか
   */
  const [canExecuteAllCondition, setExecuteAllCondition] = useState<boolean>(false)
  /**
  * 全調子補正率
  */
  const [allCondition, setAllCondition] = useState<number | number[]>(0)
  /**
   * 全順位補正率を適用させるかどうか
   */
  const [canExecuteAllRanking, setExecuteAllRanking] = useState<boolean>(false)
  /**
  * 全順位補正率
  */
  const [allRanking, setAllRanking] = useState<number | number[]>(0)
  /**
   * 全距離補正率を適用させるかどうか
   */
  const [canExecuteAllDistance, setExecuteAllDistance] = useState<boolean>(false)
  /**
  * 全距離補正率
  */
  const [allDistance, setAllDistance] = useState<number | number[]>(0)
  /**
   * 全人気補正率を適用させるかどうか
   */
  const [canExecuteAllPopular, setExecuteAllPopular] = useState<boolean>(false)
  /**
  * 全人気補正率
  */
  const [allPopular, setAllPopular] = useState<number | number[]>(0)
  /**
   * 全応援補正率変更時イベント
   */
  const handleAllSupportStatusChange = (value: number | number[]) => {
    racehorses.forEach((rh: RacehorseDetail) => rh.support = value)
    setAllSupport(value)
  }
  /**
   * 全調子補正率変更時イベント
   */
  const handleAllConditionStatusChange = (value: number | number[]) => {
    racehorses.forEach((rh: RacehorseDetail) => rh.condition = value)
    setAllCondition(value)
  }
  /**
   * 全順位補正率変更時イベント
   */
  const handleAllRankingStatusChange = (value: number | number[]) => {
    racehorses.forEach((rh: RacehorseDetail) => rh.ranking = value)
    setAllRanking(value)
  }
  /**
   * 全距離補正率変更時イベント
   */
  const handleAllDistanceStatusChange = (value: number | number[]) => {
    racehorses.forEach((rh: RacehorseDetail) => rh.distance = value)
    setAllDistance(value)
  }
  /**
   * 全人気補正率変更時イベント
   */
  const handleAllPopularStatusChange = (value: number | number[]) => {
    racehorses.forEach((rh: RacehorseDetail) => rh.popular = value)
    setAllPopular(value)
  }
  /**
   * 全応援補正率変更時
   */
  useEffect(() => {
    // 初回のみ実行しない
    if (!canExecuteAllSupport) {
      setExecuteAllSupport(true)
      return
    }
    racehorses.forEach((rh: RacehorseDetail) => rh.support = allSupport)
    updateRacehorses(dispatch, racehorses.concat())
  }, [allSupport])
  /**
   * 全調子補正率変更時
   */
  useEffect(() => {
    // 初回のみ実行しない
    if (!canExecuteAllCondition) {
      setExecuteAllCondition(true)
      return
    }
    racehorses.forEach((rh: RacehorseDetail) => rh.condition = allCondition)
    updateRacehorses(dispatch, racehorses.concat())
  }, [allCondition])
  /**
   * 全順位補正率変更時
   */
  useEffect(() => {
    // 初回のみ実行しない
    if (!canExecuteAllRanking) {
      setExecuteAllRanking(true)
      return
    }
    racehorses.forEach((rh: RacehorseDetail) => rh.ranking = allRanking)
    updateRacehorses(dispatch, racehorses.concat())
  }, [allRanking])
  /**
   * 全距離補正率変更時
   */
  useEffect(() => {
    // 初回のみ実行しない
    if (!canExecuteAllDistance) {
      setExecuteAllDistance(true)
      return
    }
    racehorses.forEach((rh: RacehorseDetail) => rh.distance = allDistance)
    updateRacehorses(dispatch, racehorses.concat())
  }, [allDistance])
  /**
   * 全人気補正率変更時
   */
  useEffect(() => {
    // 初回のみ実行しない
    if (!canExecuteAllPopular) {
      setExecuteAllPopular(true)
      return
    }
    racehorses.forEach((rh: RacehorseDetail) => rh.popular = allPopular)
    updateRacehorses(dispatch, racehorses.concat())
  }, [allPopular])
  /**
   * 出走馬情報変更時イベント
   */
  const handleRacehorseConfigChange = (racehorse: RacehorseDetail, index: number) => {
    racehorses[index] = racehorse
    updateRacehorses(dispatch, racehorses.concat())
  }
  /**
   * 出走馬情報削除イベント
   */
  const handleRacehorseDelete = (index: number) => {
    racehorses.splice(index, 1)
    updateRacehorses(dispatch, racehorses.concat())
  }
  return (
    <Card>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Button
                variant="contained"
                onClick={handleAddRacehorseClick}
                disabled={racehorses.length === RACEHORSES.length}
              >
                魚追加
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  共通設定
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    onClick={handleAllPerfectRandomButtonClick}
                  >
                    完全ランダム
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    onClick={handleAllUnifiedRandomButtonClick}
                  >
                    統一ランダム
                  </Button>
                </Grid>
                <StatusSlider
                  description={'応援されるとスピードが上がります'}
                  max={100}
                  min={0}
                  title={'応援補正'}
                  value={allSupport}
                  onChange={(val: number | number[]) => handleAllSupportStatusChange(val)}
                />
                <StatusSlider
                  description={'調子がいいとスピードが上がります'}
                  max={100}
                  min={0}
                  title={'調子補正'}
                  value={allCondition}
                  onChange={(val: number | number[]) => handleAllConditionStatusChange(val)}
                />
                <StatusSlider
                  description={'上位を走っているとスピードが上がります'}
                  max={100}
                  min={0}
                  title={'順位補正'}
                  value={allRanking}
                  onChange={(val: number | number[]) => handleAllRankingStatusChange(val)}
                />
                <StatusSlider
                  description={'走った距離に応じてスピードが上がります'}
                  max={100}
                  min={0}
                  title={'距離補正'}
                  value={allDistance}
                  onChange={(val: number | number[]) => handleAllDistanceStatusChange(val)}
                />
                <StatusSlider
                  description={'人気に応じてスピードが上がります'}
                  max={100}
                  min={0}
                  title={'人気補正'}
                  value={allPopular}
                  onChange={(val: number | number[]) => handleAllPopularStatusChange(val)}
                />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item container xs={12}>
          {racehorses.map((rh: RacehorseDetail, index: number) => (
            <Grid item xs={4} key={index}>
              <RacehorseConfig
                racehorse={rh}
                onChange={(r: RacehorseDetail) => handleRacehorseConfigChange(r, index)}
                onDelete={() => handleRacehorseDelete(index)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid >
    </Card>
  )
}

export default RacehorseEditor