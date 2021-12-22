import React from 'react'
import { makeStyles } from '@mui/styles'

// mui
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// utils
import { RealRacehorse } from '../../interface'

const useStyles = makeStyles(() => ({
}))

/**
 * 出走馬紹介Props
 */
interface RacehorseIntroductionProps {
  /**
   * 出走馬情報
   */
  realRacehorses: RealRacehorse[],
}
/**
 * 出走馬紹介
 */
const RacehorseIntroduction: React.FC<RacehorseIntroductionProps> = ({
  /**
   * 出走馬情報
   */
  realRacehorses,
}) => {
  return (
    <Grid container>
      {realRacehorses.map((rh: RealRacehorse, index: number) => (
        <Grid item xs={4} key={index}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={3}>
                      名前
                    </Grid>
                    <Grid item xs={9}>
                      {rh.name}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={3}>
                      指定色
                    </Grid>
                    <Grid item xs={9}>
                      {rh.color}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={3}>
                      番号
                    </Grid>
                    <Grid item xs={9}>
                      {rh.number}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent >
          </Card >
        </Grid>
      ))}
    </Grid>
  )
}

export default RacehorseIntroduction
