import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'

// mui
import Grid from '@mui/material/Grid'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Stepper from '@mui/material/Stepper'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// utils
import {
  ACTION_USER_BUY_TICKET,
  ACTION_USER_CLEAN_BOUGHT_TICKETS,
  RACEHORSES,
} from '../../const'
import { getComments } from '../../action/comment'
import {
  Comment,
  RacehorseBase,
  RacehorseDetail,
  RealRacehorse,
  Ticket,
  User,
} from '../../interface'

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
 * ３．結果表示画面表示時に馬券情報と勝ち馬の情報をもとに、各ユーザの持ち金を操作する
 * 
 * 24日
 * ブラッシュアップ（見た目とか）
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
   * ユーザ情報
   */
  const users: User[] = useSelector((state: any) => state.userReducer.users)
  /**
   * 掛け金合計金額
   */
  const [totalMoney, setTotalMoney] = useState<number>(0)
  /**
   * 投票数合計
   * 三連単みたいに3頭出走馬を選択する場合は3頭分票が入る
   */
  const [totalVote, setTotalVote] = useState<number>(0)
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
              runValue: 0,
              supportPower: 0,
              odds: 0,
              singleMoney: 0,
              votes: 0,
              popularPower: 0,
            }
            rhs.push(realRacehorse)
          })
          setRealRacehorses(rhs)
        }, 0)
        break
      // 馬券購入締め切り
      case 2:
        let total = 0
        let voteTotal = 0
        users.map((user: User) => {
          user.boughtTickets.map((ticket: Ticket) => {
            total += ticket.money
            // 人気度を求める
            ticket.racehorses.map((racehorseNumber: number) => {
              const target = realRacehorses.find((realRacehorse: RealRacehorse) => realRacehorse.number === racehorseNumber)
              if (target) {
                target.votes++
                voteTotal++
              }
            })
            // 単勝の倍率を求める
            if (ticket.formula === 0) {
              const target = realRacehorses.find((realRacehorse: RealRacehorse) => realRacehorse.number === ticket.racehorses[0])
              if (target) {
                target.singleMoney += ticket.money
              }
            }
          })
        })
        realRacehorses.map((realRacehorse: RealRacehorse) => {
          realRacehorse.odds = realRacehorse.singleMoney ? Math.round(total / realRacehorse.singleMoney * 100) / 100 : 0
          realRacehorse.popularPower = realRacehorse.votes ? Math.round(realRacehorse.votes / voteTotal * 100) / 100 : 0
        })
        setRealRacehorses(realRacehorses.concat())
        setTotalMoney(total)
        setTotalVote(voteTotal)
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
   * 特定のキーワードに該当したときにもらえる力
   */
  const SPECIAL_POWER = 10
  /**
   * 何かしらコメントがあるともらえる力
   */
  const COMMENT_POWER = 1
  /**
   * コメントで出走馬を応援づける
   */
  const cheerUpRacehorse = (commentContent: string) => {
    realRacehorses.map((real: RealRacehorse) => {
      real.supportPower += COMMENT_POWER
      const regexList = RACEHORSES.find((base: RacehorseBase) => base.number === real.number)?.keywordRegexList ?? []
      regexList.map((regex: RegExp) => {
        if (commentContent.match(regex)) {
          real.supportPower += SPECIAL_POWER
          return
        }
      })
    })
    setRealRacehorses(realRacehorses.concat())
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
        activeComments.map((c: Comment) => {
          cheerUpRacehorse(c.content)
        })
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
          <Grid item xs={12}>
            魚券金額合計:{totalMoney.toLocaleString()}
          </Grid>
          <Grid item xs={12}>
            合計指名数:{totalVote.toLocaleString()}
          </Grid>
          <Grid item xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>出走魚</TableCell>
                    <TableCell align="right">番号</TableCell>
                    <TableCell align="right">人気度</TableCell>
                    <TableCell align="right">単勝倍率</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {realRacehorses.map((realRacehorse: RealRacehorse) => (
                    <TableRow key={realRacehorse.number}>
                      <TableCell component="th" scope="row">
                        {realRacehorse.name}
                      </TableCell>
                      <TableCell align="right">{realRacehorse.number}</TableCell>
                      <TableCell align="right">{realRacehorse.popularPower * 100}%</TableCell>
                      <TableCell align="right">{realRacehorse.odds}倍</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      ) : null}
      {activePhaseStep === 3 ? (
        <Grid item container xs={12}>
          <Race
            realRacehorses={realRacehorses}
          />
          {realRacehorses.map((r, index) => (
            <React.Fragment key={index}>
              <Grid item xs={2}>
                {r.name}
              </Grid>
              <Grid item xs={10}>
                {r.supportPower}
              </Grid>
            </React.Fragment>
          ))}
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
