import React, { useEffect, useState } from 'react'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Dialog from '@mui/material/Dialog'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'

// utils
import { FORMULAS } from '../../const'
import { RacehorseBase } from '../../interface'


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
  onClose: Function,
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
  return (
    <Dialog onClose={() => onClose()} open={open}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              {FORMULAS[formula].name}
            </Grid>
            <Grid item container xs={12}>
              {racehorses.map((rh: RacehorseBase, index: number) => (
                <Grid item container xs={12} key={index}>
                  <Grid item xs={1}>
                  </Grid>
                  <Grid item xs={2} >
                    {FORMULAS[formula].isCombination ? null : (
                      (index + 1) + '着'
                    )}
                  </Grid>
                  <Grid item xs={9}>
                    {rh.name}
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              金額：{money.toLocaleString()}
            </Grid>
            <Grid item xs={12}>
              下の文字列をコピーしてコメントしよう！！
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={9}>
                <Input
                  fullWidth
                  readOnly
                  value={ticketComment}
                />
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