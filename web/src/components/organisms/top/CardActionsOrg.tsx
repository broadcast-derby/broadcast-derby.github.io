import React from 'react'
import { styled } from '@mui/material/styles'

// mui
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'

// organisms
import { RacehorseBase } from '../../../interface'
import { Typography } from '@mui/material'

/**
 * カードアクションレイアウト
 */
const StyledCardActions = styled(CardActions)({
  justifyContent: "right",
})
/**
 * エラー文言レイアウト
 */
const ErrorTypograpy = styled(Typography)({
  marginRight: "10px",
  color: "#999999",
})
/**
 * TOP画面のCardActionsのコンポーネントProps
 */
interface CardActionsOrgProps {
  /**
   * 発行ボタンを非活性とするかどうか
   */
  disabledIssueButton: boolean,
  /**
   * 金額
   */
  money: number,
  /**
   * 選択中の式別
   */
  selectedFormula: number | null,
  /**
   * 選択中の出走馬
   */
  selectedRacehorses: RacehorseBase[],
  /**
   * クリアボタン押下時イベント
   */
  onClickClearButton: () => void,
  /**
   * 発行ボタン押下時イベント
   */
  onClickIssueButton: () => void,
}
/**
 * TOP画面のCardActionsのコンポーネント
 */
const CardActionsOrg: React.FC<CardActionsOrgProps> = ({
  /**
   * 発行ボタンを非活性とするかどうか
   */
  disabledIssueButton,
  /**
   * 金額
   */
  money,
  /**
   * 選択中の式別
   */
  selectedFormula,
  /**
   * 選択中の出走馬
   */
  selectedRacehorses,
  /**
   * クリアボタン押下時イベント
   */
  onClickClearButton,
  /**
   * 発行ボタン押下時イベント
   */
  onClickIssueButton,
}) => {
  /**
   * 発行ボタン押下時イベント
   */
  const handleIssueButtonClick = () => {
    onClickIssueButton()
  }
  /**
   * クリアボタン押下時イベント
   */
  const handleClearButtonClick = () => {
    onClickClearButton()
  }
  /**
   * エラー文言取得
   * @param {number | null} selectedFormula 選択された式別
   * @param {RacehorseBase[]} selectedRacehorses 選択された出走馬一覧
   * @param {number} money 金額
   */
  const getErrorMessage = (
    selectedFormula: number | null,
    selectedRacehorses: RacehorseBase[],
    money: number
  ) => {
    if (selectedFormula === null) {
      return "式別を選択してください"
    }
    if (selectedRacehorses.find((r: RacehorseBase) => r.name === '')) {
      return "おさかなを選択してください"
    }
    if (money === 0) {
      return "金額を入力してください"
    }
    return ""
  }
  return (
    <StyledCardActions>
      <ErrorTypograpy
        variant="body2"
      >
        {getErrorMessage(
          selectedFormula,
          selectedRacehorses,
          money
        )}
      </ErrorTypograpy>
      <Button
        variant="contained"
        onClick={handleIssueButtonClick}
        disabled={disabledIssueButton}
      >
        発行
      </Button>
      <Button
        variant="outlined"
        onClick={handleClearButtonClick}
      >
        クリア
      </Button>
    </StyledCardActions>
  )
}
export default CardActionsOrg
