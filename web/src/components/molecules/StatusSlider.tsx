import React from 'react'

// mui
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'


/**
 * ステータススライダーProps
 */
export interface StatusSliderProps {
  /**
   * 説明文
   */
  description: String,
  /**
   * 最大値
   */
  max: number,
  /**
   * 最小値
   */
  min: number,
  /**
   * 項目名
   */
  title: String,
  /**
   * 設定値
   */
  value: number | number[],
  /**
   * 変更時イベント
   */
  onChange: Function,
}
/**
 * ステータススライダー
 */
const StatusSlider: React.FC<StatusSliderProps> = ({
  /**
   * 説明文
   */
  description,
  /**
   * 最大値
   */
  max,
  /**
   * 最小値
   */
  min,
  /**
   * 項目名
   */
  title,
  /**
   * 設定値
   */
  value,
  /**
   * 変更時イベント
   */
  onChange,
}) => {
  /**
   * スライダー変更時イベント
   */
  const handleSliderChange = (value: number | number[]) => {
    onChange(value)
  };
  /**
   * 入力欄変更時イベント
   */
  const handleInputChange = (value: string) => {
    let v = !value ? 0 : Number(value)
    if (v < min) {
      v = min
    }
    else if (max < v) {
      v = max
    }
    onChange(v)
  }
  /**
   * ランダムボタン押下時イベント
   */
  const handleRandomButtonClick = () => {
    onChange(Math.floor(Math.random() * (max - min) + min))
  }
  return (
    <Grid item container xs={12}>
      <Grid item xs={12}>
        <Typography gutterBottom>
          {title}
        </Typography>
        <Typography gutterBottom>
          {description}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Slider
          value={value}
          onChange={(_, val) => handleSliderChange(val)}
          min={min}
          max={max}
        />
      </Grid>
      <Grid item xs={1}>
        <Input
          fullWidth
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          inputProps={{
            min: min,
            max: max,
            type: 'number',
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          onClick={handleRandomButtonClick}
        >
          ランダム
        </Button>
      </Grid>
    </Grid>
  )
}
export default StatusSlider