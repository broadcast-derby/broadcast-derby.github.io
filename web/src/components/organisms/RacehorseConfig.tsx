import React from 'react'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import { Racehorse } from '../../interface'
import { COLORS } from '../../const'

// molecules
import StatusSlider from '../molecules/StatusSlider'

/**
 * 出走馬設定Props
 */
interface RacehorseConfigProps {
  /**
   * 出走馬情報
   */
  racehorse: Racehorse,
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
   * 名前変更時イベント
   */
  const handleNameChange = (val: String) => {
    racehorse.name = val
    onChange(racehorse)
  }
  /**
   * 色変更時イベント
   */
  const handleColorChange = (val: String) => {
    racehorse.color = val
    onChange(racehorse)
  }
  /**
   * 番号変更時イベント
   */
  const handleNumberChange = (val: String) => {
    racehorse.number = !val ? 0 : Number(val)
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
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="name">名前</InputLabel>
              <Input
                id="name"
                value={racehorse.name}
                onChange={(e) => handleNameChange(e.target.value)} />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="color">指定色</InputLabel>
              <Select
                id="color"
                value={racehorse.color}
                label="指定色"
                onChange={(e) => handleColorChange(e.target.value)}
              >
                {COLORS.map(c => (
                  <MenuItem key={c.key} value={c.key}>{c.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="number">番号</InputLabel>
              <Input
                id="number"
                value={racehorse.number}
                type="number"
                onChange={(e) => handleNumberChange(e.target.value)} />
            </FormControl>
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
      </CardContent>
      <CardActions>
        <Button onClick={() => onDelete()}>削除</Button>
      </CardActions>
    </Card>
  )
}
export default RacehorseConfig