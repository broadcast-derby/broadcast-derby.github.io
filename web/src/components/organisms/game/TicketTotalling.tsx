import React from 'react'

// mui
import Button from '@mui/material/Button'
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
  RealRacehorse,
} from 'interface'

// molecules
import RacehorseNumberIcon from 'molecules/RacehorseNumberIcon'

interface TicketTotallingProps {
  /**
   * 実際にレースに参加する馬一覧
   */
  realRacehorses: RealRacehorse[],
  /**
   * 掛け金合計金額
   */
  totalMoney: number,
  /**
   * 馬券合計購入数
   */
  totalTicketCount: number,
  /**
   * 投票数合計
   * 三連単みたいに3頭出走馬を選択する場合は3頭分票が入る
   */
  totalVote: number,
  /**
   * スタートボタン押下時イベント
   */
  onClickStartButton: () => void,
}
/**
 * ゲーム画面
 */
const TicketTotalling: React.FC<TicketTotallingProps> = ({
  /**
   * 実際にレースに参加する馬一覧
   */
  realRacehorses,
  /**
   * 掛け金合計金額
   */
  totalMoney,
  /**
   * 馬券合計購入数
   */
  totalTicketCount,
  /**
   * 投票数合計
   * 三連単みたいに3頭出走馬を選択する場合は3頭分票が入る
   */
  totalVote,
  /**
   * スタートボタン押下時イベント
   */
  onClickStartButton,
}) => {
  /**
   * スタートボタン押下時イベント
   */
  const handleStartButtonClick = () => {
    onClickStartButton()
  }
  return (
    <Grid container >
      <Grid item xs={12}>
        魚券金額合計:{totalMoney.toLocaleString()}
      </Grid>
      <Grid item xs={12}>
        合計指名数:{totalVote.toLocaleString()}
      </Grid>
      <Grid item xs={12}>
        馬券合計購入数:{totalTicketCount.toLocaleString()}
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth={'md'}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>出走魚</TableCell>
                  <TableCell align="right">人気度</TableCell>
                  <TableCell align="right">単勝倍率</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {realRacehorses.map((realRacehorse: RealRacehorse) => (
                  <TableRow key={realRacehorse.number}>
                    <TableCell component="th" scope="row">
                      <Grid container>
                        <Grid item xs={2}>
                          <RacehorseNumberIcon number={realRacehorse.number} />
                        </Grid>
                        <Grid item xs={10}>
                          {realRacehorse.name}
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell align="right">{Math.round(realRacehorse.popularPower * 100)}%</TableCell>
                    <TableCell align="right">{Math.round(realRacehorse.odds).toLocaleString()}倍</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          onClick={handleStartButtonClick}
        >
          レース開始！
        </Button>
      </Grid>
    </Grid>
  )
}

export default TicketTotalling
