import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'

// utils
import {
  DEFAULT_TEMP_MONEY,
  MIN_TEMP_MONEY,
  MAX_TEMP_MONEY,
} from 'const'
import { updateMoney } from 'action/money'

/**
 * 初期金額設定画面
 */
const MoneyConfig: React.FC = () => {
  /**
   * @description reduxに使用する
   */
  const dispatch = useDispatch()
  /**
   * 永続化された金額情報
   */
  const money: number = useSelector((state: any) => state.moneyReducer.money)
  /**
   * 金額
   */
  const [tempMoney, setTempMoney] = useState<number | number[]>(DEFAULT_TEMP_MONEY)
  /**
   * 永続化された金額が更新された場合
   * 画面に表示されている金額の情報も最新の情報に更新する
   * 
   * 永続化された情報をtemp変数に格納する
   * 実際に画面上で操作されて値が更新されるのはtemp変数
   * 保存ボタン押下時に初めて永続化された情報が更新される
   */
  useEffect(() => {
    setTempMoney(money)
  }, [money])
  /**
   * 金額スライダー変更時イベント
   * @param {number|number[]} val 変更した値 
   */
  const handleSliderChange = (val: number | number[]) => {
    setTempMoney(val)
  }
  /**
   * 入力欄変更時イベント
   * @param {string} val 入力された値
   */
  const handleInputChange = (val: string) => {
    let v = !val ? 0 : Number(val)
    if (v < MIN_TEMP_MONEY) {
      v = MIN_TEMP_MONEY
    }
    else if (MAX_TEMP_MONEY < v) {
      v = MAX_TEMP_MONEY
    }
    setTempMoney(v)
  }
  /**
   * 保存ボタン押下時イベント
   */
  const handleSaveButtonClick = () => {
    updateMoney(dispatch, tempMoney)
  }
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={2}>
              <Typography variant="subtitle1">初期金額</Typography>
            </Grid>
            <Grid item xs={12}>
              <Slider
                value={tempMoney}
                onChange={(_, val) => handleSliderChange(val)}
                min={MIN_TEMP_MONEY}
                max={MAX_TEMP_MONEY}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                fullWidth
                value={tempMoney}
                onChange={(e) => handleInputChange(e.target.value)}
                inputProps={{
                  min: MIN_TEMP_MONEY,
                  max: MAX_TEMP_MONEY,
                  type: 'number',
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <Grid item xs={3}>
              <Button
                variant="contained"
                onClick={handleSaveButtonClick}
              >
                保存
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default MoneyConfig