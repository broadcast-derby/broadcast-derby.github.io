import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'

// utils
import { User } from 'interface'
import { updateUsers } from 'action/user'

/**
 * トラック設定画面
 */
const UserConfig: React.FC = () => {
  /**
   * @description reduxに使用する
   */
  const dispatch = useDispatch()
  /**
   * ユーザ情報一覧
   */
  const users: User[] = useSelector((state: any) => state.userReducer.users)
  /**
   * 入力変更可能なユーザ情報一覧
   */
  const [tempUsers, setTempUsers] = useState<User[]>([])
  /**
   * 初期設定
   * ストアから取得したユーザ情報を入力可能なユーザ情報の一覧に移す
   */
  useEffect(() => {
    setTempUsers(users.concat())
  }, [users])
  /**
   * 金額変更時イベント
   * @param {string} val 入力された金額の値 
   * @param {number} index 入力されたユーザのindex
   */
  const handleMoneyChange = (val: string, index: number) => {
    if (!Number(val)) {
      return
    }
    tempUsers[index].money = Number(val)
    setTempUsers(tempUsers.concat())
  }
  /**
   * 削除ボタン押下時イベント
   * @param {number} index 削除ボタンのindex 
   */
  const handleDeleteButtonClick = (index: number) => {
    tempUsers.splice(index, 1)
    setTempUsers(tempUsers.concat())
  }
  /**
   * 保存ボタン押下時イベント
   */
  const handleSaveButtonClick = () => {
    updateUsers(dispatch, tempUsers)
  }
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            ユーザ情報詳細設定
          </Grid>
          <Grid item xs={12}>
            <List>
              {tempUsers.map((user: User, index: number) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <Button
                      variant="contained"
                      onClick={() => handleDeleteButtonClick(index)}
                    >
                      削除
                    </Button>
                  }
                >
                  <Container maxWidth="sm">
                    <Grid container>
                      <Grid item xs={3}>
                        {user.service}
                      </Grid>
                      <Grid item xs={5}>
                        {user.name}
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          label="所持金"
                          type="number"
                          variant="standard"
                          value={user.money}
                          onChange={(e) => handleMoneyChange(e.target.value, index)} />
                      </Grid>
                    </Grid>
                  </Container>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={() => handleSaveButtonClick()}
            >
              保存
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default UserConfig