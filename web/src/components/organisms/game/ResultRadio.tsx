import React from 'react'

// mui
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

/**
 * 結果画面のラジオボタンprops
 */
interface ResultRadioProps {
  /**
   * ラジオボタンの値
   */
  value: string,
  /**
   * ラジオボタン変更時イベント
   */
  onChange: (val: string) => void
}
/**
 * 結果画面のラジオボタン
 */
const ResultRadio: React.FC<ResultRadioProps> = ({
  /**
   * ラジオボタンの値
   */
  value,
  /**
   * ラジオボタン変更時イベント
   */
  onChange,
}) => {
  /**
   * ラジオボタン変更時イベント
   * @param {string} value 変更後ステータス 
   */
  const handleClickButton = (val: string) => {
    onChange(val)
  }
  return (
    <Grid container>
      <Grid item xs={6}>
        <Button
          fullWidth
          variant={value !== 'race' ? 'contained' : 'outlined'}
          onClick={() => handleClickButton('race')}>
          レース結果</Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          fullWidth
          variant={value !== 'money' ? 'contained' : 'outlined'}
          onClick={() => handleClickButton('money')}>
          払戻金</Button>
      </Grid>
    </Grid>
  )
}

export default ResultRadio
