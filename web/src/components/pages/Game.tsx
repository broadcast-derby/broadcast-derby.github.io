import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'

// mui
import Grid from '@mui/material/Grid'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Stepper from '@mui/material/Stepper'

// utils
import { getComments } from '../../action/comment'
import { RealRacehorse } from '../../interface'

// organisms
import Race from '../organisms/Race'
import RacehorseIntroduction from '../organisms/RacehorseIntroduction'

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
   * 読み上げる対象化どうか判定する
   * @param {number} startTime      開始時間
   * @param {number} startNo        開始番号
   * @param {number} commentTime    コメント時間
   * @param {number} commentNo      コメント番号
   * @param {string} commentContent コメント内容
   */
  const readable = (startTime: number, startNo: number, commentTime: number, commentNo: number, commentContent: string) => {
    // コメント表示内容が無いものについては読み上げ対象としない
    if (commentContent === '') {
      return false
    }
    // 開始時間よりコメント時間の方が後なら読み上げる対象として判定する
    if (startTime < commentTime) {
      return true
    }
    // 開始時間とコメント時間が同じ場合
    else if (startTime === commentTime) {
      // 開始番号とコメント番号を比較してコメント番号の方が後なら読み上げる対象として判定する
      if (startNo < commentNo) {
        return true
      }
    }
    return false
  }
  /**
   * コメント一覧
   */
  const comments = useSelector((state: any) => state.commentReducer.comments)
  /**
   * コメント取得開始時間
   * 開始時間よりも前のものは取得しないようにする
   */
  const [startTime, setStartTime] = useState(Math.floor(new Date().getTime() / 1000))
  /**
   * コメント取得開始番号
   * 開始時間とコメントの時間が同じ場合にはコメントの番号を見て取得しないようにする
   */
  const [startNo, setStartNo] = useState(-1)
  /**
   * 一旦仮にsetIntervalでコメント毎秒取得
   */
  useEffect(() => {
    setInterval(() => {
      dispatch(getComments)
    }, 1000)
  }, [])
  /**
   * コメント取得時イベント
   */
  useEffect(() => {
    const actives: any[] = []
    comments.map((comment: any) => {
      // 読み上げ対象でない場合は省略する
      if (!readable(startTime, startNo, comment.time, comment.no, comment.content)) {
        return
      }
      setStartTime(comment.time)
      setStartNo(comment.no)
      if (comment.owner !== 1) {
        actives.push(comment)
      }
    })
    if (actives.length !== 0) {
      setActiveComments(actives)
    }
  }, [comments])
  /**
   * 読み上げられたコメント
   */
  const [activeComments, setActiveComments] = useState<any[]>([])
  const phaseSteps = ['待機中', '出泳魚紹介', '魚券購入締め切り', 'レース', '結果表示']
  const [activePhaseStep, setActivePhaseStep] = React.useState(0)
  const handlePhaseStep = (step: number) => () => {
    // 出走馬紹介画面を開いたタイミングで出走馬のステータスを更新する
    if (step === 1) {
      const rhs: any[] = []
      racehorses.map((rh: RealRacehorse) => {
        const horse = rh
        horse.currentCondition = Math.floor(Math.random() * 100)
        rhs.push(horse)
      })
      dispatch({ type: 'UPDATE_RACEHORSES', payload: rhs })
    }
    setActivePhaseStep(step)
  }

  /**
   * 馬券購入コメントか判定
   */
  const isBuyTicketComment = (comment: any) => {
    return true
  }
  /**
   * 馬券購入
   */
  const buyTicket = (comment: any) => {
    console.log('馬券購入！')
  }
  /**
   * アクティブコメント取得時イベント
   */
  useEffect(() => {
    switch (activePhaseStep) {
      // 出走馬紹介時
      case 1:
        activeComments.map(c => {
          if (isBuyTicketComment(c)) {
            buyTicket(c)
          }
        })
        break
      // レース中
      case 3:
        break
    }
  }, activeComments)

  return (
    <Grid container>
      <Grid item xs={12}>
        ゲーム画面
      </Grid>
      <Grid item xs={12}>
        <Stepper nonLinear activeStep={activePhaseStep}>
          {phaseSteps.map((label, index) => (
            <Step key={label}>
              <StepButton color="inherit" onClick={handlePhaseStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Grid>
      {activePhaseStep === 0 ? (
        <Grid item container xs={12}>
          ちょっと待ってね
        </Grid>
      ) : null}
      {activePhaseStep === 1 ? (
        <Grid item xs={12}>
          <RacehorseIntroduction />
        </Grid>
      ) : null}
      {activePhaseStep === 2 ? (
        <Grid item container xs={12}>
          bbbb
        </Grid>
      ) : null}
      {activePhaseStep === 3 ? (
        <Grid item container xs={12}>
          <Race />
        </Grid>
      ) : null}
      {activePhaseStep === 4 ? (
        <Grid item container xs={12}>
          dddd
        </Grid>
      ) : null}
    </Grid >
  )
}

export default GamePage
