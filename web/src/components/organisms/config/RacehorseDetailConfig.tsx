import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// mui
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

// utils
import { RacehorseDetail } from 'interface'
import { updateCustomRacehorses } from 'action/racehorse'

// molecules
import StatusSlider from 'molecules/StatusSlider'
import RacehorseNumberIcon from 'molecules/RacehorseNumberIcon'

// organisms
import CustomRacehorseDetail from 'organisms/config/CustomRacehorseDetail'

/**
 * 設定画面
 */
const RacehorseDetailConfig: React.FC = () => {
  /**
   * @description reduxに使用する
   */
  const dispatch = useDispatch()
  /**
   * 出走馬一覧
   */
  const racehorses: RacehorseDetail[] = useSelector((state: any) => state.racehorsesReducer.customRacehorses)
  /**
   * 変更される出走馬情報
   */
  const [tempRacehorses, setTempRacehorses] = useState<RacehorseDetail[]>([])
  /**
   * 初期設定
   * storeから取得した出走馬情報を変更できるように仮データに登録する
   */
  useEffect(() => {
    setTempRacehorses(racehorses.concat())
  }, [racehorses])
  /**
   * 一括ランダムボタン押下時イベント
   */
  const handleAllPerfectRandomButtonClick = () => {
    tempRacehorses.forEach((rh: RacehorseDetail) => {
      const val1 = Math.floor(Math.random() * (100 - 0) + 0)
      const val2 = Math.floor(Math.random() * (100 - 0) + 0)
      const val3 = Math.floor(Math.random() * (100 - 0) + 0)
      rh.speed = val1
      rh.stamina = val2
      rh.support = val3
    })
    setTempRacehorses(tempRacehorses.concat())
  }
  /**
   * 統一ランダムボタン押下時イベント
   */
  const handleAllUnifiedRandomButtonClick = () => {
    const val1 = Math.floor(Math.random() * (100 - 0) + 0)
    setAllSpeed(val1)
    const val2 = Math.floor(Math.random() * (100 - 0) + 0)
    setAllStamina(val2)
    const val3 = Math.floor(Math.random() * (100 - 0) + 0)
    setAllSupport(val3)
  }
  /**
   * 全ての設定値をデフォルトに戻すボタン押下時イベント
   */
  const handleAllDefaultButtonClick = () => {
    tempRacehorses.forEach((rh: RacehorseDetail) => {
      rh.speed = rh.speedDefault
      rh.stamina = rh.staminaDefault
      rh.support = rh.supportDefault
    })
    setTempRacehorses(tempRacehorses.concat())
  }
  /**
   * 全スピード変更を適用させるかどうか
   */
  const [canExecuteAllSpeed, setExecuteAllSpeed] = useState<boolean>(false)
  /**
  * 全スピード
  */
  const [allSpeed, setAllSpeed] = useState<number | number[]>(0)
  /**
   * 全スピード変更時イベント
   */
  const handleAllSpeedStatusChange = (value: number | number[]) => {
    tempRacehorses.forEach((rh: RacehorseDetail) => rh.speed = value)
    setAllSpeed(value)
  }
  /**
   * 全スピード変更時
   */
  useEffect(() => {
    // 初回のみ実行しない
    if (!canExecuteAllSpeed) {
      setExecuteAllSpeed(true)
      return
    }
    tempRacehorses.forEach((rh: RacehorseDetail) => rh.speed = allSpeed)
    setTempRacehorses(tempRacehorses.concat())
  }, [allSpeed])
  /**
   * 全スタミナ変更を適用させるかどうか
   */
  const [canExecuteAllStamina, setExecuteAllStamina] = useState<boolean>(false)
  /**
  * 全スタミナ
  */
  const [allStamina, setAllStamina] = useState<number | number[]>(0)
  /**
   * 全スタミナ変更時イベント
   */
  const handleAllStaminaStatusChange = (value: number | number[]) => {
    tempRacehorses.forEach((rh: RacehorseDetail) => rh.stamina = value)
    setAllStamina(value)
  }
  /**
   * 全スタミナ変更時
   */
  useEffect(() => {
    // 初回のみ実行しない
    if (!canExecuteAllStamina) {
      setExecuteAllStamina(true)
      return
    }
    tempRacehorses.forEach((rh: RacehorseDetail) => rh.stamina = allStamina)
    setTempRacehorses(tempRacehorses.concat())
  }, [allStamina])
  /**
   * 全応援補正率を適用させるかどうか
   */
  const [canExecuteAllSupport, setExecuteAllSupport] = useState<boolean>(false)
  /**
  * 全応援補正率
  */
  const [allSupport, setAllSupport] = useState<number | number[]>(0)
  /**
   * 全応援補正率変更時イベント
   */
  const handleAllSupportStatusChange = (value: number | number[]) => {
    tempRacehorses.forEach((rh: RacehorseDetail) => rh.support = value)
    setAllSupport(value)
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
    tempRacehorses.forEach((rh: RacehorseDetail) => rh.support = allSupport)
    setTempRacehorses(tempRacehorses.concat())
  }, [allSupport])
  /**
   * 出走馬情報変更時イベント
   */
  const handleRacehorseConfigChange = (racehorse: RacehorseDetail, index: number) => {
    tempRacehorses[index] = racehorse
    setTempRacehorses(tempRacehorses.concat())
  }
  /**
   * デフォルトに戻すボタン押下時イベント
   * @param {number} index ボタンが押された出走馬のindex
   */
  const handleDefaultChange = (index: number) => {
    tempRacehorses[index].speed = racehorses[index].speedDefault
    tempRacehorses[index].stamina = racehorses[index].staminaDefault
    tempRacehorses[index].support = racehorses[index].supportDefault
    setTempRacehorses(tempRacehorses.concat())
  }
  /**
   * 保存ボタン押下時イベント
   */
  const handleSaveButtonClick = () => {
    updateCustomRacehorses(dispatch, tempRacehorses.concat())
  }
  return (
    <Card>
      <CardContent>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            出走馬詳細設定
          </Grid>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                共通設定
              </AccordionSummary>
              <AccordionDetails>
                <Grid container rowSpacing={2}>
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
                  <Grid item xs={2}>
                    <Button
                      variant="contained"
                      onClick={handleAllDefaultButtonClick}
                    >
                      全てデフォルトに戻す
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <StatusSlider
                      description={'純粋なおさかなの速さです'}
                      max={100}
                      min={0}
                      title={'スピード'}
                      value={allSpeed}
                      onChange={(val: number | number[]) => handleAllSpeedStatusChange(val)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StatusSlider
                      description={'おさかなの体力です'}
                      max={100}
                      min={0}
                      title={'スタミナ'}
                      value={allStamina}
                      onChange={(val: number | number[]) => handleAllStaminaStatusChange(val)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StatusSlider
                      description={'応援されるとスピードが上がります'}
                      max={100}
                      min={0}
                      title={'応援補正'}
                      value={allSupport}
                      onChange={(val: number | number[]) => handleAllSupportStatusChange(val)}
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            {tempRacehorses.map((racehorse: RacehorseDetail, index: number) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Grid container>
                    <Grid item xs={2}>
                      <RacehorseNumberIcon number={racehorse.number} />
                    </Grid>
                    <Grid item xs={4}>
                      {racehorse.name}
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        disabled
                        label="スピード"
                        variant="standard"
                        value={racehorse.speed}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        disabled
                        label="スタミナ"
                        variant="standard"
                        value={racehorse.stamina}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        disabled
                        label="応援補正値"
                        variant="standard"
                        value={racehorse.support}
                      />
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <CustomRacehorseDetail
                    racehorse={racehorse}
                    onChange={(r: RacehorseDetail) => handleRacehorseConfigChange(r, index)}
                    onDefaultChange={() => handleDefaultChange(index)}
                  />
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
          <Grid item xs={12} container justifyContent={'flex-end'}>
            <Grid item xs={3}>
              <Button
                variant="contained"
                onClick={handleSaveButtonClick}
              >
                保存
              </Button>
            </Grid>
          </Grid>
        </Grid >
      </CardContent>
    </Card>
  )
}

export default RacehorseDetailConfig