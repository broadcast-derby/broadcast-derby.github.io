import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

// mui
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

// utils
import {
  updateUsers,
} from 'action/user'
import {
  Comment,
  RealRacehorse,
  RaceResult as RaceResultInterface,
  Ticket,
  User,
} from 'interface'

// organisms
import Title from 'organisms/game/Title'
import Race from 'organisms/game/Race'
import RaceResult from 'organisms/game/RaceResult'
import RacehorseIntroduction from 'organisms/game/RacehorseIntroduction'
import RefundResult from 'organisms/game/RefundResult'
import ResultRadio from 'organisms/game/ResultRadio'
import TicketTotalling from 'organisms/game/TicketTotalling'
import CommentReader from 'organisms/game/CommentReader'

/**
 * ゲーム画面
 */
const GamePage: React.FC = () => {
  const history = useHistory()
  /**
   * @description reduxに使用する
   */
  const dispatch = useDispatch()
  /**
   * 読み上げられたコメント
   */
  const [activeComments, setActiveComments] = useState<Comment[]>([])
  /**
   * 設定ボタン押下時イベント
   */
  const handleSettingButtonClick = () => {
    history.push('/config')
  }
  /**
   * アクティブ中のフェーズ
   */
  const [activePhaseStep, setActivePhaseStep] = React.useState<number>(0)
  /**
   * タイトル画面にある出走馬紹介画面への遷移ボタン押下時イベント
   */
  const handleNextToIntroductionButtonClick = () => {
    setActivePhaseStep(1)
  }
  /**
   * 実際にレースに参加する馬一覧
   */
  const [realRacehorses, setRealRacehorses] = useState<RealRacehorse[]>([])
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
   * 合計馬券購入数
   */
  const [totalTicketCount, setTotalTIcketCount] = useState<number>(0)
  /**
   * 出走馬紹介画面にあるレーススタート前の馬券購入締め切り画面への遷移ボタン押下時イベント
   * @param {RealRacehorse[]} realRacehorses 確定した出走馬の情報一覧
   * @param {number} totalMoney 合計金額
   * @param {number} totalTicketCount 合計馬券購入数
   * @param {number} totalVotes 合計得票数
   */
  const handleNextToPreparingToStartButtonClick = (
    realRacehorses: RealRacehorse[],
    totalMoney: number,
    totalTicketCount: number,
    totalVotes: number
  ) => {
    setRealRacehorses(realRacehorses.concat())
    setTotalMoney(totalMoney)
    setTotalTIcketCount(totalTicketCount)
    setTotalVote(totalVotes)
    setActivePhaseStep(2)
  }
  /**
   * 馬券購入締め切り画面からレース画面へ遷移するボタン押下時イベント
   */
  const handleNextToRaceButtonClick = () => {
    setActivePhaseStep(3)
  }
  /**
   * 払戻金の計算
   * @param {number} totalMoney 全馬券の購入金額合計 
   * @param {Ticket[]} tickets 購入された全馬券
   * @param {(number,number[])=>boolean} condition チケット絞り込み条件
   * @returns 払戻金
   */
  const calcMoney = (totalMoney: number, tickets: Ticket[], condition: (formula: number, racehorses: number[]) => boolean) => {
    let money = 0
    tickets.map((ticket: Ticket) => {
      if (condition(ticket.formula, ticket.racehorses)) {
        money += ticket.money
      }
    })
    return money === 0 ? 0 : Math.floor(totalMoney / money)
  }
  /**
   * ユーザ情報
   */
  const users: User[] = useSelector((state: any) => state.userReducer.users)
  /**
   * レース結果
   */
  const [raceResult, setRaceResult] = useState<RaceResultInterface | null>(null)
  /**
   * 全員ゴール時イベント
   */
  const handleGoal = (rankInNumbers: number[]) => {
    const allTickets: Ticket[] = []
    users.map((user: User) =>
      user.boughtTickets.map((ticket: Ticket) => allTickets.push(ticket))
    )
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
      doubleWin: rankInNumbers
        .filter((_: number, index: number) => index < 3)
        .map((rankInNumber: number) => {
          return {
            money: calcMoney(
              totalMoney,
              allTickets,
              (formula: number, racehorses: number[]) =>
                formula === 1 &&
                racehorses[0] === rankInNumber
            ),
            popular: allTickets.filter((ticket: Ticket) =>
              ticket.formula === 1 &&
              ticket.racehorses[0] === rankInNumber
            ).length,
            displayNumber: rankInNumber.toString(),
          }
        }),
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
        displayNumber: rankInNumbers[0] + '-' + rankInNumbers[1],
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
        displayNumber: rankInNumbers[0] + '-' + rankInNumbers[1],
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
          displayNumber: rankInNumbers[0] + '-' + rankInNumbers[1],
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
          displayNumber: rankInNumbers[1] + '-' + rankInNumbers[2],
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
          displayNumber: rankInNumbers[0] + '-' + rankInNumbers[2],
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
        displayNumber: rankInNumbers[0] + '-' + rankInNumbers[1] + '-' + rankInNumbers[2],
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
        displayNumber: rankInNumbers[0] + '-' + rankInNumbers[1] + '-' + rankInNumbers[2],
      },
    }
    setRaceResult(raceResult)

    users.map((user: User) => {
      // チケット購入金額分所持金を減らす
      user.boughtTickets.map((ticket: Ticket) => { user.money -= ticket.money })
      // チケット毎に払い戻し金額を計算する
      user.boughtTickets.map((ticket: Ticket) => {
        let totalRefund = 0.0
        switch (ticket.formula) {
          // 単勝
          case 0:
            if (ticket.racehorses[0] === rankInNumbers[0]) {
              totalRefund = raceResult.singleWin.money
            }
            break
          // 複勝
          case 1:
            if (ticket.racehorses[0] === rankInNumbers[0]) {
              totalRefund = raceResult.doubleWin[0].money
            }
            else if (ticket.racehorses[0] === rankInNumbers[1]) {
              totalRefund = raceResult.doubleWin[1].money

            }
            else if (ticket.racehorses[0] === rankInNumbers[2]) {
              totalRefund = raceResult.doubleWin[2].money
            }
            break
          // 魚連
          case 2:
            if (
              ticket.racehorses.includes(rankInNumbers[0]) &&
              ticket.racehorses.includes(rankInNumbers[1])
            ) {
              totalRefund = raceResult.compoundWin.money
            }
            break
          // 魚単
          case 3:
            if (
              ticket.racehorses[0] === rankInNumbers[0] &&
              ticket.racehorses[1] === rankInNumbers[1]
            ) {
              totalRefund = raceResult.continueWin.money
            }
            break
          // ワイド
          case 4:
            if (
              ticket.racehorses.includes(rankInNumbers[0]) &&
              ticket.racehorses.includes(rankInNumbers[1])
            ) {
              totalRefund = raceResult.wideWin[0].money
            }
            else if (
              ticket.racehorses.includes(rankInNumbers[1]) &&
              ticket.racehorses.includes(rankInNumbers[2])
            ) {
              totalRefund = raceResult.wideWin[1].money
            }
            else if (
              ticket.racehorses.includes(rankInNumbers[0]) &&
              ticket.racehorses.includes(rankInNumbers[2])
            ) {
              totalRefund = raceResult.wideWin[2].money
            }
            break
          // 三連複
          case 5:
            if (
              ticket.racehorses.includes(rankInNumbers[0]) &&
              ticket.racehorses.includes(rankInNumbers[1]) &&
              ticket.racehorses.includes(rankInNumbers[2])
            ) {
              totalRefund = raceResult.trifectaWin.money
            }
            break
          // 三連単
          case 6:
            if (
              ticket.racehorses[0] === rankInNumbers[0] &&
              ticket.racehorses[1] === rankInNumbers[1] &&
              ticket.racehorses[2] === rankInNumbers[2]
            ) {
              totalRefund = raceResult.tripleWin.money
            }
            break
        }
        ticket.refund = totalRefund === 0.0 ? 0 : Math.floor(totalRefund * ticket.money)
        user.money += ticket.refund
      })
    })
    updateUsers(dispatch, users)
    setActivePhaseStep(4)
  }
  /**
   * 結果画面のラジオボタンの状態
   */
  const [resultRadioValue, setResultRadioValue] = useState<string>('race')
  /**
   * 結果画面のラジオボタン変更時イベント
   * @param {string} value 'race' or 'money'
   */
  const handleResultRadioValueChange = (value: string) => {
    setResultRadioValue(value)
  }
  /**
   * 結果画面のタイトルに戻るボタン押下時イベント
   */
  const handleGoBackTitleButton = () => {
    setActivePhaseStep(0)
  }
  return (
    <SnackbarProvider maxSnack={100}>
      <CommentReader
        onAddComment={(comments: Comment[]) => setActiveComments(comments.concat())}
      />
      <Grid container>
        <Grid item xs={12}>
          {activePhaseStep === 0 ? (
            <Title
              activeComments={activeComments}
              onClickStartButton={handleNextToIntroductionButtonClick}
              onClickSettingButton={handleSettingButtonClick}
            />
          ) : null}
          {activePhaseStep === 1 ? (
            <RacehorseIntroduction
              activeComments={activeComments}
              onClickStartButton={handleNextToPreparingToStartButtonClick}
            />
          ) : null}
          {activePhaseStep === 2 ? (
            <TicketTotalling
              realRacehorses={realRacehorses}
              totalMoney={totalMoney}
              totalTicketCount={totalTicketCount}
              totalVote={totalVote}
              onClickStartButton={handleNextToRaceButtonClick}
            />
          ) : null}
          {activePhaseStep === 3 ? (
            <Race
              activeComments={activeComments}
              realRacehorses={realRacehorses}
              onGoal={handleGoal}
            />
          ) : null}
          {activePhaseStep === 4 ? (
            <Grid container >
              <Grid item xs={12}>
                <ResultRadio
                  value={resultRadioValue}
                  onChange={handleResultRadioValueChange} />
              </Grid>
              <Grid item xs={12}>
                {resultRadioValue === 'race' && raceResult !== null ? (
                  <RaceResult
                    raceResult={raceResult}
                  />
                ) : null}
                {resultRadioValue === 'money' ? (
                  <RefundResult />
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleGoBackTitleButton}
                >
                  タイトルに戻る
                </Button>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Grid >
    </SnackbarProvider>
  )
}

export default GamePage
