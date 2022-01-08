import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles'

// mui
import Container from '@mui/material/Container'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Stepper from '@mui/material/Stepper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

// utils
import {
  ACTION_UPDATE_USERS,
  ACTION_USER_BUY_TICKET,
  ACTION_USER_CLEAN_BOUGHT_TICKETS,
  FORMULAS,
  RACEHORSES,
} from '../../const'
import { getComments } from '../../action/comment'
import {
  Comment,
  RacehorseBase,
  RacehorseDetail,
  RaceResult as RaceResultInterface,
  RealRacehorse,
  ResultRacehorse,
  Ticket,
  User,
} from '../../interface'

// organisms
import Race from '../organisms/Race'
import RaceResult from '../organisms/RaceResult'
import RacehorseIntroduction from '../organisms/RacehorseIntroduction'
import { ACTION_RACEHORSE_CONSISTENCY } from '../../const'

const useStyles = makeStyles(() => ({
}))

/**
 * ゲーム画面
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
    // 全員がゴールしていない状態で結果発表画面にはいけないようにする
    if (raceResult === null && step === 4) {
      return
    }
    switch (step) {
      // 初期表示時に購入済みチケットをクリアする
      case 0:
        users.map((user: User) => user.boughtTickets = [])
        dispatch({ type: ACTION_UPDATE_USERS, payload: users })
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
      const racehorse = RACEHORSES.find((base: RacehorseBase) => base.number === real.number)
      let regexList: RegExp[]
      if (!racehorse) {
        regexList = []
      }
      else {
        regexList = racehorse.keywordRegexList
      }
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
  /**
   * レース結果
   */
  const [raceResult, setRaceResult] = useState<RaceResultInterface | null>(null)
  const calcMoney = (totalMoney: number, tickets: Ticket[], condition: Function) => {
    const filteringTicket: Ticket[] = []
    tickets.map((ticket: Ticket) => {
      console.log(`formula:${ticket.formula}`)
      console.log(`racehorses:${JSON.stringify(ticket.racehorses)}`)
      if (condition(ticket.formula, ticket.racehorses)) {
        console.log("ticket push!")
        filteringTicket.push(ticket)
      }
    })
    console.log(`filteringTicketLength:${filteringTicket.length}`)
    let money = 0
    filteringTicket.map((ticket: Ticket) => {
      money += ticket.money
    })
    return money === 0 ? 0 : Math.round(totalMoney / money * 100) / 100
  }
  /**
   * 全員ゴール時イベント
   */
  const handleGoal = (rankInNumbers: number[]) => {
    console.log(`totalMoney:${totalMoney}`)
    console.log(`rankInNumbers:${JSON.stringify(rankInNumbers)}`)
    const allTickets: Ticket[] = []
    users.map((user: User) =>
      user.boughtTickets.map((ticket: Ticket) => allTickets.push(ticket))
    )
    console.log(`allTicketsLength:${allTickets.length}`)
    const raceResult: RaceResultInterface = {
      top3Numbers: rankInNumbers.filter((_: number, index: number) => index < 3),
      singleWin: {
        money: calcMoney(
          totalMoney,
          allTickets,
          (formula: number, racehorses: number[]) =>
            formula === 0 &&
            racehorses[0] === rankInNumbers[0]
        ),
        popular: allTickets.filter((ticket: Ticket) =>
          ticket.formula === 0 &&
          ticket.racehorses[0] === rankInNumbers[0]
        ).length,
        displayNumber: rankInNumbers[0].toString(),
      },
      doubleWin: [
        {
          money: calcMoney(
            totalMoney,
            allTickets,
            (formula: number, racehorses: number[]) =>
              formula === 1 &&
              racehorses[0] === rankInNumbers[0]
          ),
          popular: allTickets.filter((ticket: Ticket) =>
            ticket.formula === 1 &&
            ticket.racehorses[0] === rankInNumbers[0]
          ).length,
          displayNumber: rankInNumbers[0].toString(),
        },
        {
          money: calcMoney(
            totalMoney,
            allTickets,
            (formula: number, racehorses: number[]) =>
              formula === 1 &&
              racehorses[0] === rankInNumbers[1]
          ),
          popular: allTickets.filter((ticket: Ticket) =>
            ticket.formula === 1 &&
            ticket.racehorses[0] === rankInNumbers[1]
          ).length,
          displayNumber: rankInNumbers[1].toString(),
        },
        {
          money: calcMoney(
            totalMoney,
            allTickets,
            (formula: number, racehorses: number[]) =>
              formula === 1 &&
              racehorses[0] === rankInNumbers[2]
          ),
          popular: allTickets.filter((ticket: Ticket) =>
            ticket.formula === 1 &&
            ticket.racehorses[0] === rankInNumbers[2]
          ).length,
          displayNumber: rankInNumbers[2].toString(),
        },
      ],
      compoundWin: {
        money: calcMoney(
          totalMoney,
          allTickets,
          (formula: number, racehorses: number[]) =>
            formula === 2 &&
            racehorses.includes(rankInNumbers[0]) &&
            racehorses.includes(rankInNumbers[1])
        ),
        popular: allTickets.filter((ticket: Ticket) =>
          ticket.formula === 2 &&
          ticket.racehorses.includes(rankInNumbers[0]) &&
          ticket.racehorses.includes(rankInNumbers[1])
        ).length,
        displayNumber: rankInNumbers[0] + "-" + rankInNumbers[1],
      },
      continueWin: {
        money: calcMoney(
          totalMoney,
          allTickets,
          (formula: number, racehorses: number[]) =>
            formula === 3 &&
            racehorses[0] === rankInNumbers[0] &&
            racehorses[1] === rankInNumbers[1]
        ),
        popular: allTickets.filter((ticket: Ticket) =>
          ticket.formula === 3 &&
          ticket.racehorses[0] === rankInNumbers[0] &&
          ticket.racehorses[1] === rankInNumbers[1]
        ).length,
        displayNumber: rankInNumbers[0] + "-" + rankInNumbers[1],
      },
      wideWin: [
        {
          money: calcMoney(
            totalMoney,
            allTickets,
            (formula: number, racehorses: number[]) =>
              formula === 4 &&
              racehorses.includes(rankInNumbers[0]) &&
              racehorses.includes(rankInNumbers[1])
          ),
          popular: allTickets.filter((ticket: Ticket) =>
            ticket.formula === 4 &&
            ticket.racehorses.includes(rankInNumbers[0]) &&
            ticket.racehorses.includes(rankInNumbers[1])
          ).length,
          displayNumber: rankInNumbers[0] + "-" + rankInNumbers[1],
        },
        {
          money: calcMoney(
            totalMoney,
            allTickets,
            (formula: number, racehorses: number[]) =>
              formula === 4 &&
              racehorses.includes(rankInNumbers[1]) &&
              racehorses.includes(rankInNumbers[2])
          ),
          popular: allTickets.filter((ticket: Ticket) =>
            ticket.formula === 4 &&
            ticket.racehorses.includes(rankInNumbers[1]) &&
            ticket.racehorses.includes(rankInNumbers[2])
          ).length,
          displayNumber: rankInNumbers[1] + "-" + rankInNumbers[2],
        },
        {
          money: calcMoney(
            totalMoney,
            allTickets,
            (formula: number, racehorses: number[]) =>
              formula === 4 &&
              racehorses.includes(rankInNumbers[0]) &&
              racehorses.includes(rankInNumbers[2])
          ),
          popular: allTickets.filter((ticket: Ticket) =>
            ticket.formula === 4 &&
            ticket.racehorses.includes(rankInNumbers[0]) &&
            ticket.racehorses.includes(rankInNumbers[2])
          ).length,
          displayNumber: rankInNumbers[0] + "-" + rankInNumbers[2],
        }
      ],
      trifectaWin: {
        money: calcMoney(
          totalMoney,
          allTickets,
          (formula: number, racehorses: number[]) =>
            formula === 5 &&
            racehorses.includes(rankInNumbers[0]) &&
            racehorses.includes(rankInNumbers[1]) &&
            racehorses.includes(rankInNumbers[2])
        ),
        popular: allTickets.filter((ticket: Ticket) =>
          ticket.formula === 5 &&
          ticket.racehorses.includes(rankInNumbers[0]) &&
          ticket.racehorses.includes(rankInNumbers[1]) &&
          ticket.racehorses.includes(rankInNumbers[2])
        ).length,
        displayNumber: rankInNumbers[0] + "-" + rankInNumbers[1] + "-" + rankInNumbers[2],
      },
      tripleWin: {
        money: calcMoney(
          totalMoney,
          allTickets,
          (formula: number, racehorses: number[]) =>
            formula === 6 &&
            racehorses[0] === rankInNumbers[0] &&
            racehorses[1] === rankInNumbers[1] &&
            racehorses[2] === rankInNumbers[2]
        ),
        popular: allTickets.filter((ticket: Ticket) =>
          ticket.formula === 6 &&
          ticket.racehorses[0] === rankInNumbers[0] &&
          ticket.racehorses[1] === rankInNumbers[1] &&
          ticket.racehorses[2] === rankInNumbers[2]
        ).length,
        displayNumber: rankInNumbers[0] + "-" + rankInNumbers[1] + "-" + rankInNumbers[2],
      },
    }
    // 最終計算時にInfinityになるのを修正
    raceResult.singleWin.money = raceResult.singleWin.money === Infinity ? 0 : raceResult.singleWin.money
    raceResult.doubleWin.map(r => r.money = r.money === Infinity ? 0 : r.money)
    raceResult.compoundWin.money = raceResult.compoundWin.money === Infinity ? 0 : raceResult.compoundWin.money
    raceResult.continueWin.money = raceResult.continueWin.money === Infinity ? 0 : raceResult.continueWin.money
    raceResult.wideWin.map(r => r.money = r.money === Infinity ? 0 : r.money)
    raceResult.trifectaWin.money = raceResult.trifectaWin.money === Infinity ? 0 : raceResult.trifectaWin.money
    raceResult.tripleWin.money = raceResult.tripleWin.money === Infinity ? 0 : raceResult.tripleWin.money

    setRaceResult(raceResult)

    users.map((user: User) => {
      // チケット購入金額分所持金を減らす
      user.money -= user.boughtTickets.reduce<number>((total: number, ticket: Ticket) => total + ticket.money, 0)
      // チケット毎に払い戻し金額を計算する
      user.boughtTickets.map((ticket: Ticket) => {
        let rate = 0.0
        switch (ticket.formula) {
          // 単勝
          case 0:
            if (ticket.racehorses[0] === rankInNumbers[0]) {
              rate = raceResult.singleWin.money
            }
            break
          // 複勝
          case 1:
            if (ticket.racehorses[0] === rankInNumbers[0]) {
              rate = raceResult.doubleWin[0].money
            }
            else if (ticket.racehorses[0] === rankInNumbers[1]) {
              rate = raceResult.doubleWin[1].money

            }
            else if (ticket.racehorses[0] === rankInNumbers[2]) {
              rate = raceResult.doubleWin[2].money
            }
            break
          // 魚連
          case 2:
            if (
              ticket.racehorses.includes(rankInNumbers[0]) &&
              ticket.racehorses.includes(rankInNumbers[1])
            ) {
              rate = raceResult.compoundWin.money
            }
            break
          // 魚単
          case 3:
            if (
              ticket.racehorses[0] === rankInNumbers[0] &&
              ticket.racehorses[1] === rankInNumbers[1]
            ) {
              rate = raceResult.continueWin.money
            }
            break
          // ワイド
          case 4:
            if (
              ticket.racehorses.includes(rankInNumbers[0]) &&
              ticket.racehorses.includes(rankInNumbers[1])
            ) {
              rate = raceResult.wideWin[0].money
            }
            else if (
              ticket.racehorses.includes(rankInNumbers[1]) &&
              ticket.racehorses.includes(rankInNumbers[2])
            ) {
              rate = raceResult.wideWin[1].money
            }
            else if (
              ticket.racehorses.includes(rankInNumbers[0]) &&
              ticket.racehorses.includes(rankInNumbers[2])
            ) {
              rate = raceResult.wideWin[2].money
            }
            break
          // 三連複
          case 5:
            if (
              ticket.racehorses.includes(rankInNumbers[0]) &&
              ticket.racehorses.includes(rankInNumbers[1]) &&
              ticket.racehorses.includes(rankInNumbers[2])
            ) {
              rate = raceResult.trifectaWin.money
            }
            break
          // 三連単
          case 6:
            if (
              ticket.racehorses[0] === rankInNumbers[0] &&
              ticket.racehorses[1] === rankInNumbers[1] &&
              ticket.racehorses[2] === rankInNumbers[2]
            ) {
              rate = raceResult.tripleWin.money
            }
            break
        }
        ticket.refund = rate === 0.0 ? 0 : Math.round(rate * ticket.money)
        console.log(`ticket.refund:${ticket.refund}`)
        user.money += ticket.refund
      })
    })
    dispatch({ type: ACTION_UPDATE_USERS, payload: users })
  }
  const [resultRadioValue, setResultRadioValue] = useState<string>("race")
  const handleResultRadioValueChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setResultRadioValue(value)
  }
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
                      <TableCell >所持金(10,000スタート)</TableCell>
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
                      <TableCell align="right">{(realRacehorse.popularPower * 100).toString().split('.')[0]}%</TableCell>
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
          <Grid item xs={12}>
            .
          </Grid>
          <Race
            realRacehorses={realRacehorses}
            onGoal={handleGoal}
          />
        </Grid>
      ) : null}
      {activePhaseStep === 4 ? (
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                defaultValue="race"
                name="radio-buttons-group"
                value={resultRadioValue}
                onChange={handleResultRadioValueChange}
              >
                <FormControlLabel value="race" control={<Radio />} label="レース結果" />
                <FormControlLabel value="money" control={<Radio />} label="払戻金" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            {resultRadioValue === "race" && raceResult !== null ? (
              <RaceResult
                raceResult={raceResult}
              />
            ) : null}
            {resultRadioValue === "money" ? (
              <Container maxWidth="md">
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>サービス名</TableCell>
                        <TableCell>ユーザ名</TableCell>
                        <TableCell align="right">式別</TableCell>
                        <TableCell align="right">魚券</TableCell>
                        <TableCell align="right">購入金額</TableCell>
                        <TableCell align="right">払い戻し金額</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((u: User) => u.boughtTickets.map((ticket: Ticket) => (
                        <TableRow>
                          <TableCell component="th" scope="row">{u.service}</TableCell>
                          <TableCell>{u.name}</TableCell>
                          <TableCell>{FORMULAS[ticket.formula].name}</TableCell>
                          <TableCell>
                            {ticket.racehorses.reduce<string>(
                              (str: string, num: number, index: number) => str + num + (index === ticket.racehorses.length - 1 ? '' : '-'),
                              ''
                            )}
                          </TableCell>
                          <TableCell align="right">{ticket.money.toLocaleString()}</TableCell>
                          <TableCell align="right">{ticket.refund.toLocaleString()}</TableCell>
                        </TableRow>
                      )))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Container>
            ) : null}
          </Grid>
        </Grid>
      ) : null}
    </Grid >
  )
}

export default GamePage
