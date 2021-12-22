import React from 'react'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// utils
import { RacehorseDetail } from '../../interface'

// molecules
import StatusSlider from '../molecules/StatusSlider'

/**
 * 出走馬設定Props
 */
interface RacehorseConfigProps {
  /**
   * 出走馬情報
   */
  racehorse: RacehorseDetail,
  /**
   * 出走馬情報変更時イベント
   */
  onChange: Function,
  /**
   * 削除時イベント
   */
  onDelete: Function,
}
/**
 * 出走馬設定
 */
const RacehorseConfig: React.FC<RacehorseConfigProps> = ({
  /**
   * 出走馬情報
   */
  racehorse,
  /**
   * 出走馬情報変更時イベント
   */
  onChange,
  /**
   * 削除時イベント
   */
  onDelete,
}) => {
  /**
   * 応援補正変更時イベント
   */
  const handleSupportStatusChange = (val: number | number[]) => {
    racehorse.support = val
    onChange(racehorse)
  }
  /**
   * 調子補正変更時イベント
   */
  const handleConditionStatusChange = (val: number | number[]) => {
    racehorse.condition = val
    onChange(racehorse)
  }
  /**
   * 順位補正変更時イベント
   */
  const handleRankingStatusChange = (val: number | number[]) => {
    racehorse.ranking = val
    onChange(racehorse)
  }
  /**
   * 距離補正変更時イベント
   */
  const handleDistanceStatusChange = (val: number | number[]) => {
    racehorse.distance = val
    onChange(racehorse)
  }
  /**
   * 人気補正変更時イベント
   */
  const handlePopularStatusChange = (val: number | number[]) => {
    racehorse.popular = val
    onChange(racehorse)
  }
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={3}>
                名前
              </Grid>
              <Grid item xs={9}>
                {racehorse.name}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={3}>
                指定色
              </Grid>
              <Grid item xs={9}>
                {racehorse.color}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={3}>
                番号
              </Grid>
              <Grid item xs={9}>
                {racehorse.number}
              </Grid>
            </Grid>
          </Grid>
          <StatusSlider
            description={"応援されるとスピードが上がります"}
            max={100}
            min={0}
            title={"応援補正"}
            value={racehorse.support}
            onChange={(val: number | number[]) => handleSupportStatusChange(val)}
          />
          <StatusSlider
            description={"調子がいいとスピードが上がります"}
            max={100}
            min={0}
            title={"調子補正"}
            value={racehorse.condition}
            onChange={(val: number | number[]) => handleConditionStatusChange(val)}
          />
          <StatusSlider
            description={"上位を走っているとスピードが上がります"}
            max={100}
            min={0}
            title={"順位補正"}
            value={racehorse.ranking}
            onChange={(val: number | number[]) => handleRankingStatusChange(val)}
          />
          <StatusSlider
            description={"走った距離に応じてスピードが上がります"}
            max={100}
            min={0}
            title={"距離補正"}
            value={racehorse.distance}
            onChange={(val: number | number[]) => handleDistanceStatusChange(val)}
          />
          <StatusSlider
            description={"人気に応じてスピードが上がります"}
            max={100}
            min={0}
            title={"人気補正"}
            value={racehorse.popular}
            onChange={(val: number | number[]) => handlePopularStatusChange(val)}
          />
        </Grid>
      </CardContent >
      <CardActions>
        <Button onClick={() => onDelete()}>削除</Button>
      </CardActions>
    </Card >
  )
}
export default RacehorseConfig