import React, { useState } from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import FormGroup from '@mui/material/FormGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'

/**
 * 設定画面
 */
const ConfigPage: React.FC = () => {
  /**
   * 色一覧
   */
  const COLORS = [
    { key: "B", name: "青色" },
    { key: "C", name: "シアン" },
    { key: "G", name: "緑色" },
    { key: "I", name: "藍色" },
    { key: "M", name: "マゼンタ" },
    { key: "O", name: "橙色" },
    { key: "P", name: "紫色" },
    { key: "R", name: "赤色" },
    { key: "S", name: "銀色" },
    { key: "W", name: "白色" },
    { key: "Y", name: "黄色" },
  ]
  /**
   * 出走馬追加時テンプレート
   */
  const RACEHORSE_TEMPLATE = {
    name: "",
    color: "",
    number: 0,
  }
  /**
   * 出走馬最大値
   */
  const RACEHORSE_MAX_COUNT = 11
  /**
   * 配信者用設定を表示するかどうか
   */
  const [isShowPrivateContent, setShowPrivateContent] = useState(false)
  /**
   * 出走馬一覧
   */
  const [racehorses, setRacehorses] = useState<{
    name: string,
    color: string,
    number: number,
  }[]>([])
  /**
   * 配信者用設定を表示するかどうかのスイッチ変更時イベント
   */
  const handleSwitchChange = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setShowPrivateContent(checked)
  }
  /**
   * 出走馬追加ボタン押下時イベント
   */
  const handleAddRacehorseClick = () => {
    racehorses.push(RACEHORSE_TEMPLATE)
    setRacehorses(racehorses.concat())
  }
  /**
   * 出走馬名変更時イベント
   */
  const handleRacehorseNameChange = (val: string, index: number) => {
    racehorses[index].name = val
    setRacehorses(racehorses.concat())
  }
  /**
   * 出走馬色変更時イベント
   */
  const handleRacehorseColorChange = (val: string, index: number) => {
    racehorses[index].color = val
    setRacehorses(racehorses.concat())
  }
  /**
   * 出走馬番号変更時イベント
   */
  const handleRacehorseNumberChange = (val: string, index: number) => {
    racehorses[index].number = Number(val) || 0
    setRacehorses(racehorses.concat())
  }
  /**
   * 出走馬削除時イベント
   */
  const handleRecehorseDeleteButtonClick = (index: number) => {
    racehorses.splice(index, 1)
    setRacehorses(racehorses.concat())
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        設定画面
      </Grid>
      <Grid container item xs={12}>
        <Card>
          <CardContent>
            <Grid item xs={12}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isShowPrivateContent}
                      onChange={handleSwitchChange}
                    />
                  }
                  label="配信者用設定を表示する"
                />
              </FormGroup>
            </Grid>
            {isShowPrivateContent ?
              <Grid item xs={12}>
                <div>入力欄</div>
              </Grid>
              : null}
          </CardContent>
        </Card>
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
      <Grid item container xs={12}>
        {racehorses.map((rh, index) => (
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel htmlFor="name">名前</InputLabel>
                      <Input
                        id="name"
                        value={rh.name}
                        onChange={(e) => handleRacehorseNameChange(e.target.value, index)} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel htmlFor="color">指定職</InputLabel>
                      <Select
                        id="color"
                        value={rh.color}
                        label="指定色"
                        onChange={(e) => handleRacehorseColorChange(e.target.value, index)}
                      >
                        {COLORS.map(c => (
                          <MenuItem value={c.key}>{c.name}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl variant="standard" fullWidth>
                      <InputLabel htmlFor="number">番号</InputLabel>
                      <Input
                        id="number"
                        value={rh.number}
                        type="number"
                        onChange={(e) => handleRacehorseNumberChange(e.target.value, index)} />
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleRecehorseDeleteButtonClick(index)}>削除</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid >
  )
}

export default ConfigPage
