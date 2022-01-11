import React from 'react'
import { styled } from '@mui/material/styles'

// mui
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

/**
 * 電卓Props
 */
interface CalculatorProps {
  /**
   * 最大桁数
   */
  max: number,
  /**
   * 値
   */
  value: number,
  /**
   * 値更新時イベント
   */
  onChange: Function,
}
/**
 * 金額レイアウト
 */
const MoneyTextField = styled(TextField)({
  paddingTop: "10px",
  paddingBottom: "10px",
  textAlign: "right",
  "& > div > input": {
    textAlign: "right",
  },
})
/**
 * 電卓のボタンレイアウト
 */
const NumberButton = styled(Button)({
  marginBottom: "4px",
  fontSize: "15pt",
})
/**
 * グリッドの中央レイアウト
 */
const CenterGrid = styled(Grid)({
  paddingLeft: "3px",
  paddingRight: "3px",
})
/**
 * 電卓
 */
const Calculator: React.FC<CalculatorProps> = ({
  /**
   * 最大桁数
   */
  max,
  /**
   * 値
   */
  value,
  /**
   * 値変更時イベント
   */
  onChange,

}) => {
  /**
   * ボタン押下時イベント
   * 
   * @param {number} number 選択された番号
   */
  const handleInputNumberButtonClick = (number: number) => {
    if (value.toString().length === max) {
      return
    }
    if (value === 0) {
      onChange(number)
    }
    else {
      onChange(value * 10 + number)
    }
  }
  /**
   * 00ボタン押下時イベント
   */
  const handleInputDoubleZeroButtonClick = () => {
    if (value.toString().length === max) {
      return
    }
    if (value.toString().length === max - 1) {
      onChange(value * 10)
      return
    }
    onChange(value * 100)
  }
  /**
   * クリアボタン押下時イベント
   */
  const handleInputClearButtonClick = () => {
    onChange(0)
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <MoneyTextField
          size="small"
          value={value.toLocaleString()}
          InputProps={{
            endAdornment: <InputAdornment position="end">円</InputAdornment>,
          }}
          fullWidth
        />
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={4}><NumberButton fullWidth variant="contained" onClick={() => handleInputNumberButtonClick(7)}>7</NumberButton></Grid>
        <CenterGrid item xs={4}><NumberButton fullWidth variant="contained" onClick={() => handleInputNumberButtonClick(8)}>8</NumberButton></CenterGrid>
        <Grid item xs={4}><NumberButton fullWidth variant="contained" onClick={() => handleInputNumberButtonClick(9)}>9</NumberButton></Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={4}><NumberButton fullWidth variant="contained" onClick={() => handleInputNumberButtonClick(4)}>4</NumberButton></Grid>
        <CenterGrid item xs={4}><NumberButton fullWidth variant="contained" onClick={() => handleInputNumberButtonClick(5)}>5</NumberButton></CenterGrid>
        <Grid item xs={4}><NumberButton fullWidth variant="contained" onClick={() => handleInputNumberButtonClick(6)}>6</NumberButton></Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={4}><NumberButton fullWidth variant="contained" onClick={() => handleInputNumberButtonClick(1)}>1</NumberButton></Grid>
        <CenterGrid item xs={4}><NumberButton fullWidth variant="contained" onClick={() => handleInputNumberButtonClick(2)}>2</NumberButton></CenterGrid>
        <Grid item xs={4}><NumberButton fullWidth variant="contained" onClick={() => handleInputNumberButtonClick(3)}>3</NumberButton></Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={4}><NumberButton fullWidth variant="contained" onClick={() => handleInputDoubleZeroButtonClick()}>00</NumberButton></Grid>
        <CenterGrid item xs={4}><NumberButton fullWidth variant="contained" onClick={() => handleInputNumberButtonClick(0)}>0</NumberButton></CenterGrid>
        <Grid item xs={4}><NumberButton fullWidth variant="contained" onClick={handleInputClearButtonClick}>C</NumberButton></Grid>
      </Grid>
    </Grid >
  )
}

export default Calculator
