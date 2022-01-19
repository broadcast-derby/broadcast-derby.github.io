import React, { useEffect, useState } from 'react'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Dialog from '@mui/material/Dialog'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Input from '@mui/material/Input'
import Typography from '@mui/material/Typography'

// utils
import { FORMULAS, COLORS } from '../../../const'
import { RacehorseBase, Color } from '../../../interface'

/**
 * チケットダイアログProps
 */
interface TicketDialogProps {
  /**
   * 出走馬情報
   */
  racehorses: any[],
  /**
   * 式別Index
   */
  formula: number,
  /**
   * 金額
   */
  money: number,
  /**
   * ダイアログを開いているか銅か
   */
  open: boolean,
  /**
   * ダイアログを閉じたときのイベント
   */
  onClose: () => void,
}
/**
 * チケットダイアログ
 */
const TicketDialog: React.FC<TicketDialogProps> = ({
  /**
   * 出走馬情報
   */
  racehorses,
  /**
   * 式別Index
   */
  formula,
  /**
   * 金額
   */
  money,
  /**
   * ダイアログを開いているか銅か
   */
  open,
  /**
   * ダイアログを閉じたときのイベント
   */
  onClose,
}) => {
  /**
   * 馬券情報
   * コピーしてコメントしてもらうための文字列
   */
  const [ticketComment, setTicketComment] = useState<string>('')
  /**
   * 初期表示時に馬券コメントの内容を作成する
   */
  useEffect(() => {
    let comment: string = FORMULAS[formula].keyword
    for (let i = 0; i < racehorses.length; i++) {
      comment += racehorses[i].number
      if (i + 1 !== racehorses.length) {
        comment += '-'
      }
    }
    comment += ' ' + money
    setTicketComment(comment)
  })
  /**
   * クリップボードにコピーボタン押下時イベント
   */
  const handleCopyButtonClick = () => {
    const copyEventListener = (e: any) => {
      e.clipboardData.setData('text/plain', ticketComment)
      e.preventDefault()
      document.removeEventListener('copy', copyEventListener)
    }
    document.addEventListener('copy', copyEventListener)
    document.execCommand('copy')
  }
  /**
   * 今日の日付
   */
  const today = new Date()
  /**
   * 日付をフォーマットする
   * @param {Date} date 日付 
   */
  const formatDate = (date: Date): string => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return year + "年" + month + "月" + day + "日"
  }

  /**
   * キーからカラーコードを取得
   * TODO 同じ処理が他にある
   * @param {string} key キー名 
   * @returns カラーコード
   */
  const getColorCode = (key: string): string => {
    const color = COLORS.find((c: Color) => c.key === key)
    if (color) {
      return color.code
    }
    else {
      return "#ffffff"
    }
  }
  /**
   * キーから文字色を反転させるかどうかを取得
   * TODO 同じ処理が他にある
   * @param {string} key キー名 
   * @returns 反転させるかどうか
   */
  const isReverse = (key: string): boolean => {
    const color = COLORS.find((c: Color) => c.key === key)
    if (color) {
      return color.isReverse
    }
    else {
      return false
    }
  }
  /**
   * キーから枠線が必要かどうかを取得
   * TODO 同じ処理が他にある
   * @param {string} key キー名 
   * @returns 枠線が必要かどうか
   */
  const needBorder = (key: string): boolean => {
    const color = COLORS.find((c: Color) => c.key === key)
    if (color) {
      return color.needBorder
    }
    else {
      return false
    }
  }
  return (
    <Dialog onClose={() => onClose()} open={open}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item container xs={12}>
              <Grid item container xs={3}>
                <Grid item xs={12}>
                  {formatDate(today)}
                </Grid>
                <Grid item xs={12}>
                  おさかなだぁびぃ
                </Grid>
              </Grid>
              <Grid item xs={2} sx={{
                border: "2px solid",
              }} >
                {FORMULAS[formula].name.split("").map((c: string, index: number) => (
                  <Typography
                    align="center"
                    key={index}
                    variant="h4"
                  >
                    {c}
                  </Typography>
                ))}
              </Grid>
              <Grid item xs={7} container alignItems="center" >
                {racehorses.length !== 0 ?
                  FORMULAS[formula].racehorseCount === 1 ? (
                    <Grid container justifyContent="center">
                      <Grid item xs={1}>
                        <Typography
                          align="center"
                          sx={{
                            borderRadius: "50%",
                            width: "25px",
                            height: "25px",
                            lineHeight: "25px",
                            backgroundColor: getColorCode(racehorses[0].color),
                            color: isReverse(racehorses[0].color) ? "#ffffff" : "#000000",
                            border: needBorder(racehorses[0].color) ? "2px solid" : "",
                          }}
                        >
                          {racehorses[0].number}
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        {racehorses[0].name}
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid container justifyContent="center">
                      {racehorses.map((racehorse: RacehorseBase, index: number) => (
                        <React.Fragment key={index}>
                          <Grid item xs={1}>
                            <Typography
                              align="center"
                              sx={{
                                borderRadius: "50%",
                                width: "25px",
                                height: "25px",
                                lineHeight: "25px",
                                backgroundColor: getColorCode(racehorse.color),
                                color: isReverse(racehorse.color) ? "#ffffff" : "#000000",
                                border: needBorder(racehorse.color) ? "2px solid" : "",
                              }}>
                              {racehorse.number}
                            </Typography>
                          </Grid>
                          <Grid item xs={2}>
                            {racehorse.name}
                          </Grid>
                          {index !== racehorses.length - 1 ? (
                            <Grid item xs={1}>
                              {FORMULAS[formula].isCombination ? '－' : '＞'}
                            </Grid>
                          ) : null}
                        </React.Fragment>
                      ))}
                    </Grid>
                  )
                  : null}
              </Grid>
              <Grid item xs={12} container justifyContent="flex-end">
                金額:{money.toLocaleString()}円
              </Grid>
            </Grid>
            <Grid item xs={12} sx={{
              marginTop: "10px",
              marginBottom: "10px",
            }}>
              <Divider variant="middle" />
            </Grid>
            <Grid item container xs={12}>
              <Grid item container xs={9}>
                <Grid item xs={12}>
                  下の文字列をコピーしてコメントしよう!!
                </Grid>
                <Grid item xs={12} sx={{
                  marginRight: "10px",
                }}>
                  <Input
                    fullWidth
                    readOnly
                    value={ticketComment}
                  />
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  onClick={handleCopyButtonClick}
                >
                  クリップボードにコピー
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Dialog>
  )
}
export default TicketDialog