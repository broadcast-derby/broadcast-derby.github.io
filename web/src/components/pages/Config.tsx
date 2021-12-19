import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// utils
import { Racehorse } from '../../interface'
import { RACEHORSE_MAX_COUNT } from '../../const'

// molecules
import StatusSlider from '../molecules/StatusSlider'

// organisms
import RacehorseConfig from '../organisms/RacehorseConfig'

/**
 * 設定画面
 */
const ConfigPage: React.FC = () => {
  const dispatch = useDispatch()
  /**
   * 出走馬追加時テンプレート
   */
  const RACEHORSE_TEMPLATE = {
    name: '',
    color: '',
    number: 0,
    support: 1,
    condition: 1,
    ranking: 1,
    distance: 1,
    popular: 1,
  }
  /**
   * 出走馬追加ボタン押下時イベント
   */
  const handleAddRacehorseClick = () => {
    racehorses.push(RACEHORSE_TEMPLATE)
    dispatch({ type: 'UPDATE_RACEHORSES', payload: racehorses.concat() })
  }
  /**
   * 一括ランダムボタン押下時イベント
   */
  const handleAllPerfectRandomButtonClick = () => {
    racehorses.forEach((rh: Racehorse) => {
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
    dispatch({ type: 'UPDATE_RACEHORSES', payload: racehorses.concat() })
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
  const [canExecuteAllSupport, setExecuteAllSupport] = useState(false)
  /**
  * 全応援補正率
  */
  const [allSupport, setAllSupport] = useState<number | number[]>(0)
  /**
   * 全調子補正率を適用させるかどうか
   */
  const [canExecuteAllCondition, setExecuteAllCondition] = useState(false)
  /**
  * 全調子補正率
  */
  const [allCondition, setAllCondition] = useState<number | number[]>(0)
  /**
   * 全順位補正率を適用させるかどうか
   */
  const [canExecuteAllRanking, setExecuteAllRanking] = useState(false)
  /**
  * 全順位補正率
  */
  const [allRanking, setAllRanking] = useState<number | number[]>(0)
  /**
   * 全距離補正率を適用させるかどうか
   */
  const [canExecuteAllDistance, setExecuteAllDistance] = useState(false)
  /**
  * 全距離補正率
  */
  const [allDistance, setAllDistance] = useState<number | number[]>(0)
  /**
   * 全人気補正率を適用させるかどうか
   */
  const [canExecuteAllPopular, setExecuteAllPopular] = useState(false)
  /**
  * 全人気補正率
  */
  const [allPopular, setAllPopular] = useState<number | number[]>(0)
  /**
   * 全応援補正率変更時イベント
   */
  const handleAllSupportStatusChange = (value: number | number[]) => {
    racehorses.forEach((rh: Racehorse) => rh.support = value)
    setAllSupport(value)
  }
  /**
   * 全調子補正率変更時イベント
   */
  const handleAllConditionStatusChange = (value: number | number[]) => {
    racehorses.forEach((rh: Racehorse) => rh.condition = value)
    setAllCondition(value)
  }
  /**
   * 全順位補正率変更時イベント
   */
  const handleAllRankingStatusChange = (value: number | number[]) => {
    racehorses.forEach((rh: Racehorse) => rh.ranking = value)
    setAllRanking(value)
  }
  /**
   * 全距離補正率変更時イベント
   */
  const handleAllDistanceStatusChange = (value: number | number[]) => {
    racehorses.forEach((rh: Racehorse) => rh.distance = value)
    setAllDistance(value)
  }
  /**
   * 全人気補正率変更時イベント
   */
  const handleAllPopularStatusChange = (value: number | number[]) => {
    racehorses.forEach((rh: Racehorse) => rh.popular = value)
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
    racehorses.forEach((rh: Racehorse) => rh.support = allSupport)
    dispatch({ type: 'UPDATE_RACEHORSES', payload: racehorses.concat() })
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
    racehorses.forEach((rh: Racehorse) => rh.condition = allCondition)
    dispatch({ type: 'UPDATE_RACEHORSES', payload: racehorses.concat() })
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
    racehorses.forEach((rh: Racehorse) => rh.ranking = allRanking)
    dispatch({ type: 'UPDATE_RACEHORSES', payload: racehorses.concat() })
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
    racehorses.forEach((rh: Racehorse) => rh.distance = allDistance)
    dispatch({ type: 'UPDATE_RACEHORSES', payload: racehorses.concat() })
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
    racehorses.forEach((rh: Racehorse) => rh.popular = allPopular)
    dispatch({ type: 'UPDATE_RACEHORSES', payload: racehorses.concat() })
  }, [allPopular])
  /**
   * 出走馬一覧
   */
  const racehorses = useSelector((state: any) => state.racehorsesReducer.racehorses)
  /**
   * 出走馬情報変更時イベント
   */
  const handleRacehorseConfigChange = (racehorse: Racehorse, index: number) => {
    racehorses[index] = racehorse
    dispatch({ type: 'UPDATE_RACEHORSES', payload: racehorses.concat() })
  }
  /**
   * 出走馬情報削除イベント
   */
  const handleRacehorseDelete = (index: number) => {
    racehorses.splice(index, 1)
    dispatch({ type: 'UPDATE_RACEHORSES', payload: racehorses.concat() })
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        設定画面
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Button
              variant="contained"
              onClick={handleAddRacehorseClick}
              disabled={racehorses.length === RACEHORSE_MAX_COUNT}
            >馬追加</Button>
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
                description={"応援されるとスピードが上がります"}
                max={100}
                min={0}
                title={"応援補正"}
                value={allSupport}
                onChange={(val: number | number[]) => handleAllSupportStatusChange(val)}
              />
              <StatusSlider
                description={"調子がいいとスピードが上がります"}
                max={100}
                min={0}
                title={"調子補正"}
                value={allCondition}
                onChange={(val: number | number[]) => handleAllConditionStatusChange(val)}
              />
              <StatusSlider
                description={"上位を走っているとスピードが上がります"}
                max={100}
                min={0}
                title={"順位補正"}
                value={allRanking}
                onChange={(val: number | number[]) => handleAllRankingStatusChange(val)}
              />
              <StatusSlider
                description={"走った距離に応じてスピードが上がります"}
                max={100}
                min={0}
                title={"距離補正"}
                value={allDistance}
                onChange={(val: number | number[]) => handleAllDistanceStatusChange(val)}
              />
              <StatusSlider
                description={"人気に応じてスピードが上がります"}
                max={100}
                min={0}
                title={"人気補正"}
                value={allPopular}
                onChange={(val: number | number[]) => handleAllPopularStatusChange(val)}
              />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item container xs={12}>
        {racehorses.map((rh: Racehorse, index: number) => (
          <Grid item xs={4} key={index}>
            <RacehorseConfig
              racehorse={rh}
              onChange={(r: Racehorse) => handleRacehorseConfigChange(r, index)}
              onDelete={() => handleRacehorseDelete(index)}
            />
          </Grid>
        ))}
      </Grid>
    </Grid >
  )
}

export default ConfigPage
