import React from 'react'

// mui
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

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
   * クリアボタン押下時イベント
   */
  const handleInputClearButtonClick = () => {
    onChange(0)
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        {value.toLocaleString()}
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={4}><Button variant="contained" onClick={() => handleInputNumberButtonClick(7)}>7</Button></Grid>
        <Grid item xs={4}><Button variant="contained" onClick={() => handleInputNumberButtonClick(8)}>8</Button></Grid>
        <Grid item xs={4}><Button variant="contained" onClick={() => handleInputNumberButtonClick(9)}>9</Button></Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={4}><Button variant="contained" onClick={() => handleInputNumberButtonClick(4)}>4</Button></Grid>
        <Grid item xs={4}><Button variant="contained" onClick={() => handleInputNumberButtonClick(5)}>5</Button></Grid>
        <Grid item xs={4}><Button variant="contained" onClick={() => handleInputNumberButtonClick(6)}>6</Button></Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={4}><Button variant="contained" onClick={() => handleInputNumberButtonClick(1)}>1</Button></Grid>
        <Grid item xs={4}><Button variant="contained" onClick={() => handleInputNumberButtonClick(2)}>2</Button></Grid>
        <Grid item xs={4}><Button variant="contained" onClick={() => handleInputNumberButtonClick(3)}>3</Button></Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}><Button variant="contained" onClick={() => handleInputNumberButtonClick(0)}>0</Button></Grid>
        <Grid item xs={4}><Button variant="contained" onClick={handleInputClearButtonClick}>C</Button></Grid>
      </Grid>
    </Grid>
  )
}

export default Calculator
