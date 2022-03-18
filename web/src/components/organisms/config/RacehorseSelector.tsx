import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

// mui/icons
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

// utils
import { RacehorseBase, RacehorseDetail } from 'interface'
import { updateRacehorses } from 'action/racehorse'

// molecules
import RacehorseNumberIcon from 'molecules/RacehorseNumberIcon'

/**
 * 出走馬選択画面
 */
const RacehorseSelector: React.FC = () => {
  /**
   * @description reduxに使用する
   */
  const dispatch = useDispatch()
  /**
   * 詳細が更新された出走馬一覧
   */
  const customRacehorses: RacehorseDetail[] = useSelector((state: any) => state.racehorsesReducer.customRacehorses)
  /**
   * 出走馬一覧
   */
  const racehorses: RacehorseDetail[] = useSelector((state: any) => state.racehorsesReducer.racehorses)
  /**
   * 設定中の出走馬一覧
   */
  const [tempRacehorses, setTempRacehorses] = useState<RacehorseDetail[]>([])
  /**
   * 永続化された出走馬一覧が更新された時に設定中の出走馬一覧にも設定を反映させる
   */
  useEffect(() => {
    setTempRacehorses(racehorses.concat())
  }, [racehorses])
  /**
   * 選択中の出走馬選択候補一覧index
   */
  const [selectedBaseIndex, setSelectedBaseIndex] = useState<number | null>(null)
  /**
   * 出走馬選択候補一覧から出走馬選択時イベント
   * ダブルクリックでキャンセル
   * 
   * @param {number} index 選択した出走馬index
   */
  const handleBaseToggle = (index: number) => {
    if (selectedBaseIndex === index) {
      setSelectedBaseIndex(null)
    }
    else {
      setSelectedBaseIndex(index)
    }
  }
  /**
   * 出走馬追加ボタン押下時イベント
   */
  const handleAddRacehorseClick = () => {
    if (selectedBaseIndex === null) {
      return
    }
    // 出走馬一覧からまだ追加されていない出走馬を設定する
    const racehorse: RacehorseDetail = {
      ...customRacehorses[selectedBaseIndex],
      support: 1,
      stamina: 1,
      speed: 1,
    }
    tempRacehorses.push(racehorse)
    setSelectedBaseIndex(null)
    setTempRacehorses(tempRacehorses.concat())
  }
  /**
   * 選択中の設定中出走馬一覧index
   */
  const [selectedTempIndex, setSelectedTempIndex] = useState<number | null>(null)
  /**
   * 設定中出走馬一覧から出走馬選択時イベント
   * ダブルクリックでキャンセル
   * 
   * @param {number} index 選択した出走馬index
   */
  const handleTempToggle = (index: number) => {
    if (selectedTempIndex === index) {
      setSelectedTempIndex(null)
    }
    else {
      setSelectedTempIndex(index)
    }
  }
  /**
   * 出走馬情報削除イベント
   */
  const handleDeleteRacehorseClick = () => {
    if (selectedTempIndex === null) {
      return
    }
    tempRacehorses.splice(selectedTempIndex, 1)
    setTempRacehorses(tempRacehorses.concat())
  }
  /**
   * 上移動ボタン押下時イベント
   * 
   * @param {number} index 出走馬index
   */
  const handleUpButtonClick = (index: number) => {
    if (index === 0) {
      return
    }
    tempRacehorses.splice(index - 1, 2, tempRacehorses[index], tempRacehorses[index - 1])
    setTempRacehorses(tempRacehorses.concat())
  }
  /**
   * 下移動ボタン押下時イベント
   * 
   * @param {number} index 出走馬index
   */
  const handleDownButtonClick = (index: number) => {
    if (tempRacehorses.length - 1 === index) {
      return
    }
    tempRacehorses.splice(index, 2, tempRacehorses[index + 1], tempRacehorses[index])
    setTempRacehorses(tempRacehorses.concat())

  }
  /**
   * 保存ボタン押下時イベント
   */
  const handleSaveButtonClick = () => {
    updateRacehorses(dispatch, tempRacehorses.concat())
  }
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">出泳魚選択</Typography>
          </Grid>
          <Grid item xs={12} container>
            <Grid item xs={5}>
              <List>
                {customRacehorses.map((racehorse: RacehorseBase, index: number) => (
                  <ListItemButton
                    key={racehorse.number}
                    dense
                    onClick={() => handleBaseToggle(index)}
                    divider
                    selected={selectedBaseIndex === index}
                    disabled={!!tempRacehorses.find((tempRacehorse: RacehorseDetail) => tempRacehorse.number === racehorse.number)}
                  >
                    <ListItemAvatar>
                      <RacehorseNumberIcon number={racehorse.number} />
                    </ListItemAvatar>
                    <ListItemText sx={{ marginTop: '14px', }}>
                      {racehorse.name}
                    </ListItemText>
                  </ListItemButton>
                ))}
              </List>
            </Grid>
            <Grid
              item
              container
              xs={2}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  onClick={handleAddRacehorseClick}
                  disabled={tempRacehorses.length === customRacehorses.length || selectedBaseIndex === null}
                >
                  <KeyboardArrowRight />魚追加
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  onClick={handleDeleteRacehorseClick}
                  disabled={tempRacehorses.length === 0 || selectedTempIndex === null}
                >
                  <KeyboardArrowLeft />魚削除
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={5}>
              {tempRacehorses.map((racehorse: RacehorseBase, index: number) => (
                <ListItem
                  key={index}
                  divider
                  dense
                  secondaryAction={
                    <React.Fragment>
                      <IconButton
                        disabled={index === 0}
                        onClick={() => handleUpButtonClick(index)}
                      >
                        <KeyboardArrowUp />
                      </IconButton>
                      <IconButton
                        disabled={index + 1 === tempRacehorses.length}
                        onClick={() => handleDownButtonClick(index)}
                      >
                        <KeyboardArrowDown />
                      </IconButton>
                    </React.Fragment>
                  }
                >
                  <ListItemButton
                    onClick={() => handleTempToggle(index)}
                    selected={selectedTempIndex === index}
                  >
                    <ListItemAvatar>
                      <RacehorseNumberIcon number={racehorse.number} />
                    </ListItemAvatar>
                    <ListItemText sx={{ marginTop: '14px', }}>
                      {racehorse.name}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
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
        </Grid >
      </CardContent>
    </Card>
  )
}

export default RacehorseSelector