import React from 'react'

// mui
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

// utils
import { RacehorseDetail } from 'interface'

// molecules
import StatusSlider from 'molecules/StatusSlider'

/**
 * 出走馬設定Props
 */
interface CustomRacehorseDetailProps {
  /**
   * 出走馬情報
   */
  racehorse: RacehorseDetail,
  /**
   * 出走馬情報変更時イベント
   */
  onChange: Function,
  /**
   * デフォルトに戻すボタン押下時イベント
   */
  onDefaultChange: Function,
}
/**
 * 出走馬設定
 */
const CustomRacehorseDetail: React.FC<CustomRacehorseDetailProps> = ({
  /**
   * 出走馬情報
   */
  racehorse,
  /**
   * 出走馬情報変更時イベント
   */
  onChange,
  /**
   * デフォルトに戻すボタン押下時イベント
   */
  onDefaultChange,
}) => {
  /**
   * スピード変更時イベント
   */
  const handleSpeedStatusChange = (val: number | number[]) => {
    racehorse.speed = val
    onChange(racehorse)
  }
  /**
   * スタミナ変更時イベント
   */
  const handleStaminaStatusChange = (val: number | number[]) => {
    racehorse.stamina = val
    onChange(racehorse)
  }
  /**
   * 応援補正変更時イベント
   */
  const handleSupportStatusChange = (val: number | number[]) => {
    racehorse.support = val
    onChange(racehorse)
  }
  /**
   * デフォルトに戻すボタン押下時イベント
   */
  const handleDefaultButtonClick = () => {
    onDefaultChange()
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <StatusSlider
          description={'純粋なおさかなの速さです'}
          max={100}
          min={0}
          title={'スピード'}
          value={racehorse.speed}
          onChange={(val: number | number[]) => handleSpeedStatusChange(val)}
        />
      </Grid>
      <Grid item xs={12}>
        <StatusSlider
          description={'おさかなの体力です'}
          max={100}
          min={0}
          title={'スタミナ'}
          value={racehorse.stamina}
          onChange={(val: number | number[]) => handleStaminaStatusChange(val)}
        />
      </Grid>
      <Grid item xs={12}>
        <StatusSlider
          description={'応援されるとスピードが上がります'}
          max={100}
          min={0}
          title={'応援補正値'}
          value={racehorse.support}
          onChange={(val: number | number[]) => handleSupportStatusChange(val)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={handleDefaultButtonClick}
        >
          デフォルトに戻す
        </Button>
      </Grid>
    </Grid>
  )
}

export default CustomRacehorseDetail