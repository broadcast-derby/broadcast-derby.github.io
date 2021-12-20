import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'

// mui
import Grid from '@mui/material/Grid'

// utils
import { RealRacehorse } from '../../interface'

// organisms
import RacehorseConfig from '../organisms/RacehorseConfig'

const useStyles = makeStyles(() => ({
}))

/**
 * 出走馬紹介
 */
const RacehorseIntroduction: React.FC = () => {
  const dispatch = useDispatch()
  /**
   * 出走馬一覧
   */
  const racehorses = useSelector((state: any) => state.racehorsesReducer.racehorses)
  /**
   * 初期表示時に最新のlocalStorageの情報を取得する
   */
  useEffect(() => {
    dispatch({ type: 'CONSISTENCY' })
  }, [])
  return (
    <Grid container>
      {racehorses.map((rh: RealRacehorse, index: number) => (
        <Grid item xs={4} key={index}>
          <RacehorseConfig
            readonly={true}
            racehorse={rh}
            onChange={() => console.log('dummy')}
            onDelete={() => console.log('dummy')}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default RacehorseIntroduction
