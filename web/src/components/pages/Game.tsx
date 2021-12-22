import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'

// mui
import Grid from '@mui/material/Grid'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Stepper from '@mui/material/Stepper'

// utils
import {
  ACTION_USER_BUY_TICKET,
  ACTION_USER_CLEAN_BOUGHT_TICKETS,
} from '../../const'
import { getComments } from '../../action/comment'
import { RealRacehorse, RacehorseDetail, Comment, Formula, RacehorseBase } from '../../interface'

// organisms
import Race from '../organisms/Race'
import RacehorseIntroduction from '../organisms/RacehorseIntroduction'
import { ACTION_RACEHORSE_CONSISTENCY } from '../../const'

const useStyles = makeStyles(() => ({
}))

/**
 * ゲーム画面
 * 
 * 23日
 * ４．レース画面にスタートのボタン実装
 * ５．ゴールした順番を表示
 * ６．レース画面中に応援コメントを判定して馬のスピードに加える
 * 
 * 24日
 * ３．購入締め切り画面表示時にストレージの中の馬券情報から倍率を算出
 * ７．結果表示画面表示時に馬券情報と勝ち馬の情報をもとに、各ユーザの持ち金を操作する
 * 
 * 24日夜
 * 遊ぶ！！！！！！
 */
const GamePage: React.FC = () => {
  // -------------------------------------------------------- 
  // コメント取得処理 ここから
  // -------------------------------------------------------- 
  /**
   * コメント取得間隔(ms)
   */
  const GET_COMMENT_INTERVAL: number = 500
  /**
   * コメント一覧
   */
  const comments: Comment[] = useSelector((state: any) => state.commentReducer.comments)
  /**
   * コメント取得開始時間
   * 開始時間よりも前のものは取得しないようにする
   */
  const [startTime, setStartTime] = useState<number>(Math.floor(new Date().getTime() / 1000))
  /**
   * コメント取得開始番号
   * 開始時間とコメントの時間が同じ場合にはコメントの番号を見て取得しないようにする
   */
  const [startNo, setStartNo] = useState<number>(-1)
  /**
   * 読み上げる対象化どうか判定する
   * @param {number} startTime      開始時間
   * @param {number} startNo        開始番号
   * @param {number} commentTime    コメント時間
   * @param {number} commentNo      コメント番号
   * @param {string} commentContent コメント内容
   */
  const readable = (startTime: number, startNo: number, commentTime: number, commentNo: number, commentContent: string): boolean => {
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
   * コメント取得時イベント
   */
  useEffect(() => {
    const actives: Comment[] = []
    comments.map((comment: Comment) => {
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
      setActiveComments(actives.concat())
    }
  }, [comments])
  /**
   * コメント取得再帰処理開始
   */
  useEffect(() => {
    let timer: number | undefined = setInterval(() => {
      dispatch(getComments)
    }, GET_COMMENT_INTERVAL)
    return () => {
      if (timer) {
        clearInterval(timer)
        timer = undefined
      }
    }
  }, [])
  /**
   * 読み上げられたコメント
   */
  const [activeComments, setActiveComments] = useState<Comment[]>([])
  // -------------------------------------------------------- 
  // コメント取得処理 ここまで
  // -------------------------------------------------------- 
  const dispatch = useDispatch()
  /**
   * 出走馬一覧
   */
  const racehorses: RacehorseDetail[] = useSelector((state: any) => state.racehorsesReducer.racehorses)
  /**
   * ゲーム中のフェーズ一覧
   */
  const PHASE_STEPS = ['待機中', '出泳魚紹介', '魚券購入締め切り', 'レース', '結果表示']
  /**
   * アクティブ中のフェーズ
   */
  const [activePhaseStep, setActivePhaseStep] = React.useState<number>(0)
  /**
   * 実際にレースに参加する馬一覧
   */
  const [realRacehorses, setRealRacehorses] = useState<RealRacehorse[]>([])
  /**
   * フェーズ変更時イベント
   */
  const handlePhaseStep = (step: number) => () => {
    switch (step) {
      // 出走馬紹介画面を開いたタイミングで出走馬のステータスを更新する
      case 1:
        // 初期表示時に最新のlocalStorageの情報を取得する
        dispatch({ type: ACTION_RACEHORSE_CONSISTENCY })
        dispatch({ type: ACTION_USER_CLEAN_BOUGHT_TICKETS })
        // storeの情報に更新しきって(racehorsesが更新されてから)から処理する
        setTimeout(() => {
          const rhs: RealRacehorse[] = []
          racehorses.map((detail: RacehorseDetail) => {
            const realRacehorse: RealRacehorse = {
              ...detail,
              currentCondition: Math.floor(Math.random() * 100),
            }
            rhs.push(realRacehorse)
          })
          setRealRacehorses(rhs)
        }, 0)
        break
    }
    setActivePhaseStep(step)
  }
  /**
   * 馬券購入コメントかどうか
   */
  const isBuyTicketComment = (commentContent: string) => {
    return commentContent.match(/^((t|f)([1-9]{1}\d{0,1})|((u(r|t)|w)[1-9]{1}\d{0,1}-[1-9]{1}\d{0,1})|3(p|t)[1-9]{1}\d{0,1}-[1-9]{1}\d{0,1}-[1-9]{1}\d{0,1}) ([1-9]{1}\d{0,6})$/)
  }
  /**
   * 馬券購入
   */
  const buyTicket = (userName: string, service: string, content: string) => {
    // 式別の判定
    let formulaIndex: number = 0
    switch (true) {
      // 単勝
      case /^t/.test(content):
        formulaIndex = 0
        break
      // 複勝
      case /^f/.test(content):
        formulaIndex = 1
        break
      // 馬連
      case /^ur/.test(content):
        formulaIndex = 2
        break
      // 馬単
      case /^ut/.test(content):
        formulaIndex = 3
        break
      // ワイド
      case /^w/.test(content):
        formulaIndex = 4
        break
      // 三連複
      case /^3p/.test(content):
        formulaIndex = 5
        break
      // 三連単
      case /^3t/.test(content):
        formulaIndex = 6
        break
    }
    // 選択された馬一覧
    const racehorseNumbersOrMoney: string[] = content.replace(/^(t|f|ur|ut|w|3p|3t)/, '').split(/[- ]/)
    const racehorses: number[] = []
    let money: number = 0
    racehorseNumbersOrMoney.forEach((val: string, index: number) => {
      if (index === racehorseNumbersOrMoney.length - 1) {
        money = Number(val)
      }
      else {
        racehorses.push(Number(val))
      }
    })
    dispatch({
      type: ACTION_USER_BUY_TICKET, payload: {
        userName: userName,
        service: service,
        formula: formulaIndex,
        racehorses: racehorses,
        money: money,
      }
    })
  }
  /**
   * アクティブコメント取得時イベント
   */
  useEffect(() => {
    switch (activePhaseStep) {
      // 出走馬紹介時
      case 1:
        activeComments.map((c: Comment) => {
          if (isBuyTicketComment(c.content)) {
            buyTicket(c.userName, c.service, c.content)
          }
        })
        break
      // レース中
      case 3:
        break
    }
  }, [activeComments])

  return (
    <Grid container>
      <Grid item xs={12}>
        ゲーム画面
      </Grid>
      <Grid item xs={12}>
        <Stepper nonLinear activeStep={activePhaseStep}>
          {PHASE_STEPS.map((label: string, index: number) => (
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
          {activeComments.map((c, index) => (<div key={index}>{c.content}</div>))}
        </Grid>
      ) : null}
      {activePhaseStep === 1 ? (
        <Grid item xs={12}>
          <RacehorseIntroduction
            realRacehorses={realRacehorses}
          />
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
