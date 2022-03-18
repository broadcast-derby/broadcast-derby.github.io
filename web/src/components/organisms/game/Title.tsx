import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
import Settings from '@mui/icons-material/Settings'

// molecules
import CustomFab from 'molecules/CustomFab'

// utils
import {
  Comment,
  User,
} from 'interface'
import {
  updateUsers,
} from 'action/user'

/**
 * タイトル画面Props
 */
interface TitleProps {
  /**
   * 有効コメント一覧
   */
  activeComments: Comment[],
  /**
   * スタートボタン押下時イベント
   */
  onClickStartButton: () => void,
  /**
   * 設定ボタン押下時イベント
   */
  onClickSettingButton: () => void,
}
/**
 * タイトル画面
 */
const Title: React.FC<TitleProps> = ({
  /**
   * 有効コメント一覧
   */
  activeComments,
  /**
   * スタートボタン押下時イベント
   */
  onClickStartButton,
  /**
   * 設定ボタン押下時イベント
   */
  onClickSettingButton,
}) => {
  /**
   * @description reduxに使用する
   */
  const dispatch = useDispatch()
  /**
   * ユーザ情報
   */
  const users: User[] = useSelector((state: any) => state.userReducer.users)
  /**
   * 初期金額
   */
  const initialMoney: number = useSelector((state: any) => state.moneyReducer.money)
  /**
   * 初期設定
   * タイトル画面に戻ったタイミングで購入済みのチケットの情報を一旦削除する
   */
  useEffect(() => {
    users.map((user: User) => user.boughtTickets = [])
    updateUsers(dispatch, users)
  }, [])
  /**
   * スタートボタン押下時イベント
   */
  const handleStartButtonClick = () => {
    onClickStartButton()
  }
  /**
   * 設定ボタン押下時イベント
   */
  const handleSettingButtonClick = () => {
    onClickSettingButton()
  }
  return (
    <React.Fragment>
      <Grid container >
        <Grid item xs={12}>
          {activeComments.map((c, index) => (<div key={index}>{c.content}</div>))}
        </Grid>
        <Grid item xs={12}>
          参加者リスト
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>サービス名</TableCell>
                    <TableCell>ユーザ名</TableCell>
                    <TableCell >所持金({initialMoney}円スタート)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user: User, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{user.service}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell >{user.money.toLocaleString()}</TableCell>
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
            スタート！
          </Button>
        </Grid>
      </Grid>
      <CustomFab onClick={handleSettingButtonClick}>
        <Settings />
      </CustomFab>
    </React.Fragment>
  )
}

export default Title
