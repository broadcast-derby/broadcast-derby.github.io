import React from 'react'

// mui
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

// utils
import {
  RACEHORSES,
} from 'const'
import {
  RacehorseBase,
  RaceResult as RaceResultInterface,
} from 'interface'

/**
 * 結果表示Props
 */
interface RaceResultProps {
  /**
   * レース結果
   */
  raceResult: RaceResultInterface,
}
const RaceResult: React.FC<RaceResultProps> = ({
  /**
   * レース結果
   */
  raceResult,
}) => {
  /**
   * 出走馬番号から出走馬名を取得
   * @param {number} number 出走馬番号
   * @returns 出走馬名
   */
  const getRacehorseName = (number: number) => {
    const racehorse = RACEHORSES.find((r: RacehorseBase) => r.number === number)
    if (racehorse) {
      return racehorse.name
    }
    else {
      return ''
    }
  }
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>着順</TableCell>
                  <TableCell align="right">番号</TableCell>
                  <TableCell align="right">出走魚</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {raceResult.top3Numbers.map((val: number, index: number) => (
                  <React.Fragment key={index}>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="right">{val}</TableCell>
                      <TableCell align="right">{getRacehorseName(val)}</TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>式別</TableCell>
                  <TableCell align="right">番号</TableCell>
                  <TableCell align="right">金額レート</TableCell>
                  <TableCell align="right">人気</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">単勝</TableCell>
                  <TableCell align="right">{raceResult.singleWin.displayNumber}</TableCell>
                  <TableCell align="right">{raceResult.singleWin.money}</TableCell>
                  <TableCell align="right">{raceResult.singleWin.popular}人気</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">複勝</TableCell>
                  <TableCell align="right">{raceResult.doubleWin[0].displayNumber}</TableCell>
                  <TableCell align="right">{raceResult.doubleWin[0].money}</TableCell>
                  <TableCell align="right">{raceResult.doubleWin[0].popular}人気</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">複勝</TableCell>
                  <TableCell align="right">{raceResult.doubleWin[1].displayNumber}</TableCell>
                  <TableCell align="right">{raceResult.doubleWin[1].money}</TableCell>
                  <TableCell align="right">{raceResult.doubleWin[1].popular}人気</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">複勝</TableCell>
                  <TableCell align="right">{raceResult.doubleWin[2].displayNumber}</TableCell>
                  <TableCell align="right">{raceResult.doubleWin[2].money}</TableCell>
                  <TableCell align="right">{raceResult.doubleWin[2].popular}人気</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">魚連</TableCell>
                  <TableCell align="right">{raceResult.compoundWin.displayNumber}</TableCell>
                  <TableCell align="right">{raceResult.compoundWin.money}</TableCell>
                  <TableCell align="right">{raceResult.compoundWin.popular}人気</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">魚単</TableCell>
                  <TableCell align="right">{raceResult.continueWin.displayNumber}</TableCell>
                  <TableCell align="right">{raceResult.continueWin.money}</TableCell>
                  <TableCell align="right">{raceResult.continueWin.popular}人気</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">ワイド</TableCell>
                  <TableCell align="right">{raceResult.wideWin[0].displayNumber}</TableCell>
                  <TableCell align="right">{raceResult.wideWin[0].money}</TableCell>
                  <TableCell align="right">{raceResult.wideWin[0].popular}人気</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">ワイド</TableCell>
                  <TableCell align="right">{raceResult.wideWin[1].displayNumber}</TableCell>
                  <TableCell align="right">{raceResult.wideWin[1].money}</TableCell>
                  <TableCell align="right">{raceResult.wideWin[1].popular}人気</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">ワイド</TableCell>
                  <TableCell align="right">{raceResult.wideWin[2].displayNumber}</TableCell>
                  <TableCell align="right">{raceResult.wideWin[2].money}</TableCell>
                  <TableCell align="right">{raceResult.wideWin[2].popular}人気</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">三連複</TableCell>
                  <TableCell align="right">{raceResult.trifectaWin.displayNumber}</TableCell>
                  <TableCell align="right">{raceResult.trifectaWin.money}</TableCell>
                  <TableCell align="right">{raceResult.trifectaWin.popular}人気</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">三連単</TableCell>
                  <TableCell align="right">{raceResult.tripleWin.displayNumber}</TableCell>
                  <TableCell align="right">{raceResult.tripleWin.money}</TableCell>
                  <TableCell align="right">{raceResult.tripleWin.popular}人気</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid >
      </Grid >
    </Container>
  )
}
export default RaceResult