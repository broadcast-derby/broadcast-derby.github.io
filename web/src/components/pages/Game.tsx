import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Switch from '@mui/material/Switch'

// utils
import { Racehorse } from '../../interface'
import { RACEHORSE_MAX_COUNT } from '../../const'

// molecules
import StatusSlider from '../molecules/StatusSlider'

// organisms
import RacehorseConfig from '../organisms/RacehorseConfig'

const useStyles = makeStyles(() => ({
}))

/**
 * ゲーム画面
 */
const GamePage: React.FC = () => {
  const dispatch = useDispatch()
  /**
   * 出走馬一覧
   */
  const racehorses = useSelector((state: any) => state.racehorsesReducer.racehorses)
  /**
   * 出走馬情報変更時イベント
   */
  const handleRacehorseConfigChange = (racehorse: Racehorse, index: number) => {
  }
  /**
   * 出走馬情報削除イベント
   */
  const handleRacehorseDelete = (index: number) => {
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        ゲーム画面
      </Grid>
      <Grid item container xs={12}>
        {racehorses.map((rh: Racehorse, index: number) => (
          <Grid item xs={4} key={index}>
            <RacehorseConfig
              racehorse={rh}
              onChange={(r: Racehorse) => handleRacehorseConfigChange(r, index)}
              onDelete={() => handleRacehorseDelete(index)}
            />
          </Grid>
        ))}
      </Grid>
    </Grid >
  )
}

export default GamePage
