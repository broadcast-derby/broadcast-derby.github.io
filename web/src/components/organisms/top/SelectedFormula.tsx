import React from 'react'

// mui
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// utils
import { FORMULAS } from 'const'

/**
 * TOP画面の式別選択用コンポーネントProps
 */
interface SelectedFormulaProps {
  /**
   * 選択中の式別
   */
  selectedFormula: number | null,
  /**
   * 選択ボタン押下時イベント
   */
  onSelectButton: () => void,
}
/**
 * TOP画面の式別選択用コンポーネント
 */
const SelectedFormula: React.FC<SelectedFormulaProps> = ({
  /**
   * 選択中の式別
   */
  selectedFormula,
  /**
   * 選択ボタン押下時イベント
   */
  onSelectButton,
}) => {
  /**
   * 式別選択ダイアログを開くボタン押下時イベント
   */
  const handleSelectButtonClick = () => {
    onSelectButton()
  }
  return (
    <Grid container item xs={12}>
      <Grid item xs={2}></Grid>
      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={12}>
            {selectedFormula !== null ? (
              <Typography
                variant="h5">
                {FORMULAS[selectedFormula].name}
              </Typography>
            ) :
              '式別を選択してください'
            }
          </Grid>
          <Grid item xs={12}>
            {selectedFormula !== null ? (
              <Typography
                variant="body2">
                {FORMULAS[selectedFormula].description}
              </Typography>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          onClick={handleSelectButtonClick}
        >
          選択する
        </Button>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  )
}

export default SelectedFormula
