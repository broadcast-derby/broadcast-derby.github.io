import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'

// mui icon
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import FavoriteIcon from '@mui/icons-material/Favorite'
import BoltIcon from '@mui/icons-material/Bolt'

// utils
import { consistencyRacehorses } from 'action/racehorse'
import {
  buyTicket as buyTicketAction,
  cleanBoughtTickets,
} from 'action/user'
import {
  Comment,
  RacehorseDetail,
  RealRacehorse,
} from 'interface'
import { FORMULAS } from 'const'

// molecules
import RacehorseNumberIcon from 'molecules/RacehorseNumberIcon'
import ConditionIcon from 'molecules/ConditionIcon'

/**
 * 出走馬紹介Props
 */
interface RacehorseIntroductionProps {
  /**
   * 読み上げられたコメント
   */
  activeComments: Comment[],
  /**
   * スタートボタン押下時イベント
   * 
   * @param {RealRacehorses[]} racehorses 更新された出走馬情報一覧
   * @param {number} totalMoney 合計金額
   * @param {number} totalTicketCount 合計チケット枚数
   * @param {number} totalVotes 合計得票数
   */
  onClickStartButton: (
    racehorses: RealRacehorse[],
    totalMoney: number,
    totalTicketCount: number,
    totalVotes: number
  ) => void,
}

/**
 * 出走馬紹介
 */
const RacehorseIntroduction: React.FC<RacehorseIntroductionProps> = ({
  /**
   * 読み上げられたコメント
   */
  activeComments,
  /**
   * 出走馬情報更新時イベント
   * 
   * @param {RealRacehorses[]} racehorses 更新された出走馬情報一覧
   */
  onClickStartButton,
}) => {
  /**
   * @description reduxに使用する
   */
  const dispatch = useDispatch()
  /**
   * @description snackbarに使用する
   */
  const { enqueueSnackbar } = useSnackbar()
  /**
   * 初期手持ち金額
   */
  const initialMoney = useSelector((state: any) => state.moneyReducer.money)
  /**
   * 詳細が更新された出走馬一覧
   */
  const customRacehorses: RacehorseDetail[] = useSelector((state: any) => state.racehorsesReducer.racehorses)
  /**
   * 出走馬情報一覧
   * ※調子等1レース毎に変動する値もリセット済み
   */
  const [realRacehorses, setRealRacehorses] = useState<RealRacehorse[]>([])
  /**
   * 馬券の合計購入金額
   */
  const [totalMoney, setTotalMoney] = useState<number>(0)
  /**
   * 単勝馬券の合計購入金額
   */
  const [singleTotalMoney, setSingleTotalMoney] = useState<number>(0)
  /**
   * 馬券の合計購入数
   * 1馬券に付き+1
   */
  const [totalTicketCount, setTotalTicketCount] = useState<number>(0)
  /**
   * 出走馬の投票数
   * 複数出走馬を選択する馬券ならそれぞれ選択された出走馬毎に+1
   */
  const [totalVotes, setTotalVotes] = useState<number>(0)
  /**
   * 初期設定
   * 出走馬情報を表示するタイミングでレース中に変更されるデータを更新する
   */
  useEffect(() => {
    // 初期表示時に最新のlocalStorageの情報を取得する
    dispatch(consistencyRacehorses)
    dispatch(cleanBoughtTickets)
    // storeの情報に更新しきって(racehorsesが更新されてから)から処理する
    setTimeout(() => {
      const rhs: RealRacehorse[] = []
      customRacehorses.map((detail: RacehorseDetail) => {
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
      setRealRacehorses(rhs.concat())
    }, 0)
  }, [])
  /**
   * 馬券購入コメントかどうか
   */
  const isBuyTicketComment = (commentContent: string) => {
    return commentContent.match(/^((t|f)([1-9]{1}\d{0,1})|((u(r|t)|w)[1-9]{1}\d{0,1}-[1-9]{1}\d{0,1})|3(p|t)[1-9]{1}\d{0,1}-[1-9]{1}\d{0,1}-[1-9]{1}\d{0,1}) ([1-9]{1}\d{0,5})$/)
  }
  /**
   * コメントから式別を取得
   * @param {string} content コメント内容
   * @return 式別のindex
   */
  const getFormulaIndexInCommentContent = (content: string): number => {
    switch (true) {
      // 単勝
      case /^t/.test(content): return 0
      // 複勝
      case /^f/.test(content): return 1
      // 馬連
      case /^ur/.test(content): return 2
      // 馬単
      case /^ut/.test(content): return 3
      // ワイド
      case /^w/.test(content): return 4
      // 三連複
      case /^3p/.test(content): return 5
      // 三連単
      case /^3t/.test(content): return 6
    }
    return 0
  }
  /**
   * コメント取得時の挙動
   * 
   * 馬券購入コメントか確認して、購入処理を行う
   */
  useEffect(() => {
    activeComments.map((c: Comment) => {
      if (isBuyTicketComment(c.content)) {
        // 馬券購入
        const formulaIndex: number = getFormulaIndexInCommentContent(c.content)
        const formulaName = FORMULAS[formulaIndex].name
        const racehorseNumbersOrMoney: string[] = c.content.replace(/^(t|f|ur|ut|w|3p|3t)/, '').split(/[- ]/)
        const racehorses: number[] = []
        let money: number = 0
        racehorseNumbersOrMoney.forEach((val: string, index: number) => {
          // 馬券購入コメントであるなら配列の最後が必ず金額
          if (index === racehorseNumbersOrMoney.length - 1) {
            money = Number(val)
          }
          else {
            racehorses.push(Number(val))
          }
        })
        buyTicketAction(dispatch, c.userName, c.service, formulaIndex, racehorses, money, initialMoney)

        // チケット購入で変動する値を更新する
        const _totalTicketCount = totalTicketCount + 1
        const _totalMoney = totalMoney + money
        const _totalVotes = totalVotes + racehorses.length
        const _singleTotalMoney = singleTotalMoney + (formulaIndex === 0 ? money : 0)

        // 単勝チケット購入の場合
        if (formulaIndex === 0) {
          const selectedRacehorse = realRacehorses.find((realRacehorse: RealRacehorse) => realRacehorse.number === racehorses[0])
          if (selectedRacehorse !== undefined) {
            selectedRacehorse.singleMoney += money
          }
        }

        // 式別に関わらず投票があれば得票数を更新する
        racehorses.forEach((racehorseNumber: number) => {
          const selectedRacehorse = realRacehorses.find((realRacehorse: RealRacehorse) => realRacehorse.number === racehorseNumber)
          if (selectedRacehorse !== undefined) {
            selectedRacehorse.votes++
          }
        })

        // 各出走馬の人気度と単勝倍率を百分率で表示するように更新
        realRacehorses.forEach((realRacehorse: RealRacehorse) => {
          // 人気度の算出
          if (_totalVotes === 0) {
            realRacehorse.popularPower = 0
          }
          else {
            realRacehorse.popularPower = realRacehorse.votes / _totalVotes
          }
          // 単勝倍率を算出
          if (realRacehorse.singleMoney !== 0) {
            realRacehorse.odds = _singleTotalMoney / realRacehorse.singleMoney
          }
        })

        setRealRacehorses(realRacehorses.concat())
        setTotalMoney(_totalMoney)
        setSingleTotalMoney(_singleTotalMoney)
        setTotalTicketCount(_totalTicketCount)
        setTotalVotes(_totalVotes)

        // トーストの表示
        enqueueSnackbar(
          `${(c.userName || '誰か')}が${money.toLocaleString()}円で${formulaName} ${racehorses.reduce<string>((previousValue: string, currentValue: number) => (previousValue ? previousValue + '-' : '') + currentValue, '')}の魚券を購入しました。`,
          { variant: 'success' }
        )
      }
    })
  }, [activeComments])
  /**
   * スタートボタン押下時イベント
   */
  const handleStartButtonClick = () => {
    onClickStartButton(
      realRacehorses,
      totalMoney,
      totalTicketCount,
      totalVotes
    )
  }

  return (
    <Grid container spacing={2}>
      {realRacehorses.map((rh: RealRacehorse, index: number) => (
        <Grid item xs={4} key={index}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <img src={rh.imagePath} />
                </Grid>
                <Grid item xs={3}>
                  <RacehorseNumberIcon number={rh.number} />
                </Grid>
                <Grid item xs={9}>
                  {rh.name}
                </Grid>
                <Grid item xs={3}>
                  ガンバ力
                </Grid>
                <Grid item xs={9}>
                  <Rating
                    name="hover-feedback"
                    value={Number(rh.support) / 20}
                    readOnly
                    precision={0.5}
                    icon={<ThumbUpAltIcon fontSize="inherit" sx={{ color: "#99cc00" }} />}
                    emptyIcon={<ThumbUpAltIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                </Grid>
                <Grid item xs={3}>
                  スタミナ
                </Grid>
                <Grid item xs={9}>
                  <Rating
                    name="hover-feedback"
                    value={Number(rh.stamina) / 20}
                    readOnly
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" sx={{ color: "#ff3d47" }} />}
                    emptyIcon={<FavoriteIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                </Grid>
                <Grid item xs={3}>
                  スピード
                </Grid>
                <Grid item xs={9}>
                  <Rating
                    name="hover-feedback"
                    value={Number(rh.speed) / 20}
                    readOnly
                    precision={0.5}
                    icon={<BoltIcon fontSize="inherit" sx={{ color: "#ffaa00" }} />}
                    emptyIcon={<BoltIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                </Grid>
                <Grid item xs={3}>
                  調子
                </Grid>
                <Grid item xs={9}>
                  <ConditionIcon value={Number(rh.currentCondition) / 20} />
                </Grid>
                <Grid item xs={3}>
                  単勝掛け金
                </Grid>
                <Grid item xs={9}>
                  {rh.singleMoney.toLocaleString()}円
                </Grid>
                <Grid item xs={3}>
                  得票数
                </Grid>
                <Grid item xs={9}>
                  {rh.votes.toLocaleString()}票
                </Grid>
                <Grid item xs={3}>
                  人気度
                </Grid>
                <Grid item xs={9}>
                  {Math.round(rh.popularPower * 100)}%
                </Grid>
                <Grid item xs={3}>
                  単勝倍率
                </Grid>
                <Grid item xs={9}>
                  {Math.round(rh.odds).toLocaleString()}倍
                </Grid>
              </Grid>
            </CardContent >
          </Card >
        </Grid>
      ))}
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

export default RacehorseIntroduction
