import React from 'react'

// mui
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'

// organisms
import { RacehorseBase } from '../../../interface'

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
    <CardActions sx={{
      justifyContent: "right",
    }}>
      <Typography
        variant="body2"
        sx={{
          marginRight: "10px",
          color: "#999999",
        }}
      >
        {getErrorMessage(
          selectedFormula,
          selectedRacehorses,
          money
        )}
      </Typography>
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
    </CardActions>
  )
}
export default CardActionsOrg
