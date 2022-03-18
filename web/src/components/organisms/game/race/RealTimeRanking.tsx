import React, { useEffect, useState } from 'react'

// mui
import Grid from '@mui/material/Grid'

// utils
import {
  RacehorseBase,
} from 'interface'
import { RACEHORSES } from 'const'

/**
 * レース中のリアルタイムランキングProps
 */
interface RealTimeRankingProps {
  /**
   * 出走馬数
   */
  racehorseLength: number,
  /**
   * 順位が確定した出走馬番号一覧
   */
  rankInNumbers: number[],
}
/**
 * レース中のリアルタイムランキング
 */
const RealTimeRanking: React.FC<RealTimeRankingProps> = ({
  /**
   * 出走馬数
   */
  racehorseLength,
  /**
   * 順位が確定した出走馬番号一覧
   */
  rankInNumbers,
}) => {
  const [ranking, setRanking] = useState<string[]>([])
  /**
   * 出走馬番号一覧が更新されるたびに表示させる一覧を更新する
   */
  useEffect(() => {
    const arr = []
    for (let i = 0; i < racehorseLength; i++) {
      arr.push(getRacehorseName(rankInNumbers[i]))
    }
    setRanking(arr.concat())
  }, [rankInNumbers])
  /**
   * 出走馬番号から出走馬名を取得
   * @param {number} number 出走馬番号
   * @returns 出走馬名
   */
  const getRacehorseName = (number: number | undefined) => {
    if (number === undefined) {
      return ''
    }
    const racehorse = RACEHORSES.find((r: RacehorseBase) => r.number === number)
    if (racehorse) {
      return racehorse.name
    }
    else {
      return ''
    }
  }
  return (
    <Grid container>
      {ranking.map((racehorseName: string, index: number) => (
        <React.Fragment key={index}>
          <Grid item xs={3}>
            {index + 1}着
          </Grid>
          <Grid item xs={9}>
            {racehorseName}
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  )
}
export default RealTimeRanking

