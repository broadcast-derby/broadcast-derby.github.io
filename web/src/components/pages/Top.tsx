import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// utils
import { FORMULAS, RACEHORSES } from '../../const'

// organisms
import Calculator from '../organisms/Calculator'
import TicketDialog from '../organisms/TicketDialog'
import SelectFormulaDialog from '../organisms/SelectFormulaDialog'
import SelectRacehorsesDialog from '../organisms/SelectRacehorsesDialog'
import { RacehorseBase } from '../../interface'

const useStyles = makeStyles(() => ({
}))

/**
 * TOP画面
 */
const TopPage: React.FC = () => {
  const classes = useStyles()
  /**
   * 選択中の式別
   */
  const [selectedFormula, setSelectedFormula] = useState<number | null>(null)
  /**
   * 式別選択ダイアログを開いているかどうか
   */
  const [isOpenSelectFormulaDialog, setOpenSelectFormulaDialog] = useState<boolean>(false)
  /**
   * 式別選択ダイアログを開くボタン押下時イベント
   */
  const handleOpenSelectFormulaDialogClick = () => {
    setOpenSelectFormulaDialog(true)
  }
  /**
   * 式別選択時イベント
   */
  const handleSelectFormula = (index: number | null) => {
    if (index !== null) {
      setSelectedFormula(index)
    }
    setOpenSelectFormulaDialog(false)
  }
  /**
   * 選択中の出走馬
   */
  const [selectedRacehorses, setSelectedRacehorses] = useState<RacehorseBase[]>([])
  /**
   * 式別選択時に内容を空にして選択中の出走馬数分配列を用意する
   */
  useEffect(() => {
    const rhs: RacehorseBase[] = []
    if (selectedFormula !== null) {
      for (let i = 0; i < FORMULAS[selectedFormula].racehorseCount; i++) {
        rhs.push({
          name: '',
          color: '',
          number: 0,
          imagePath: '',
          keywordRegexList:[],
        })
      }
    }
    setSelectedRacehorses(rhs.concat())
  }, [selectedFormula])
  /**
   * 出走馬選択ダイアログを表示するかどうか
   */
  const [isOpenSelectRacehorseDialog, setOpenSelectRacehorseDialog] = useState<boolean>(false)
  /**
   * 選択する出走馬のindex
   * 選択された出走馬の一覧のindexでなく、
   * 式別によって選択する必要がある出走馬のindex
   */
  const [selectedRacehorseIndex, setSelectedIndex] = useState<number>(0)
  /**
   * 出走馬選択ダイアログを表示するボタン押下時イベント
   * 引数より、選択した出走馬の情報を配列のどこに入れるかをstateに格納する
   * 
   * @param {number} selectedRacehorseIndex 選択された出走馬のindex
   */
  const handleOpenSelectRacehorseDialogClick = (selectedRacehorseIndex: number) => {
    setSelectedIndex(selectedRacehorseIndex)
    setOpenSelectRacehorseDialog(true)
  }
  /**
   * 出走馬選択時イベント
   * 
   * @param {number|null} racehorseIndex 選択された出走馬のindex　選択されていない場合がある
   */
  const handleSelectRacehorse = (racehorseIndex: number | null) => {
    setOpenSelectRacehorseDialog(false)
    if (racehorseIndex === null) {
      return
    }
    selectedRacehorses[selectedRacehorseIndex] = RACEHORSES[racehorseIndex]
    setSelectedRacehorses(selectedRacehorses.concat())
  }
  /**
   * 金額
   */
  const [money, setMoney] = useState<number>(0)
  /**
   * チケット発行ダイアログを表示するかどうか
   */
  const [isOpenTicketDialog, setOpenTicketDialog] = useState<boolean>(false)
  /**
   * 発行ボタン押下時イベント
   */
  const handleIssueButtonClick = () => {
    setOpenTicketDialog(true)
  }
  /**
   * 発行ダイアログを閉じたときのイベント
   */
  const handleTicketDialogClose = () => {
    setOpenTicketDialog(false)
  }
  /**
   * 発行ボタンを非表示とするか銅か
   */
  const [disabledIssueButton, setDisabledIssueButton] = useState<boolean>(true)
  /**
   * 発行ボタンを非表示にするかどうか判定する
   */
  useEffect(() => {
    if (money === 0) {
      setDisabledIssueButton(true)
      return
    }
    if (selectedRacehorses.length === 0) {
      setDisabledIssueButton(true)
      return
    }
    for (let i = 0; i < selectedRacehorses.length; i++) {
      if (selectedRacehorses[i].name === '') {
        setDisabledIssueButton(true)
        return
      }
    }
    setDisabledIssueButton(false)
  }, [selectedRacehorses, money])
  /**
   * クリアボタン押下時イベント
   */
  const handleClearButtonClick = () => {
    setSelectedFormula(null)
    setMoney(0)
  }
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Card>
          <CardContent>
            <Grid container>
              <Grid container item xs={12}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={2}>
                  式別
                </Grid>
                <Grid item xs={6}>
                  {selectedFormula !== null ? FORMULAS[selectedFormula].name : '式別を選択してください'}
                </Grid>
                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    onClick={handleOpenSelectFormulaDialogClick}
                  >
                    選択する
                  </Button>
                </Grid>
              </Grid>
              <Grid item container xs={12}>
                {selectedFormula !== null ? (
                  <React.Fragment>
                    <Grid item xs={12}>
                      {FORMULAS[selectedFormula].description}
                    </Grid>
                    {selectedRacehorses.map((rh: RacehorseBase, index: number) => (
                      <Grid item container xs={12} key={index}>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={2} >
                          {FORMULAS[selectedFormula].isCombination ? null : (
                            (index + 1) + '着'
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          {rh.name || '魚を選択してください'}
                        </Grid>
                        <Grid item xs={3}>
                          <Button
                            variant="contained"
                            onClick={() => handleOpenSelectRacehorseDialogClick(index)}
                          >
                            選択する
                          </Button>
                        </Grid>
                      </Grid>
                    ))}
                  </React.Fragment>
                ) : null}
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={4}></Grid>
                <Grid item container xs={4}>
                  <Grid item xs={12}>
                    金額を入力してください
                  </Grid>
                  <Grid item xs={12}>
                    <Calculator
                      max={6}
                      value={money}
                      onChange={(val: number) => setMoney(val)}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              onClick={handleClearButtonClick}
            >
              クリア
            </Button>
            <Button
              variant="contained"
              onClick={handleIssueButtonClick}
              disabled={disabledIssueButton}
            >
              発行
            </Button>
          </CardActions>
        </Card>
      </Container>
      <SelectFormulaDialog
        open={isOpenSelectFormulaDialog}
        onClose={handleSelectFormula}
      />
      <SelectRacehorsesDialog
        open={isOpenSelectRacehorseDialog}
        onClose={handleSelectRacehorse}
      />
      <TicketDialog
        formula={selectedFormula || 0}
        racehorses={selectedRacehorses}
        money={money}
        open={isOpenTicketDialog}
        onClose={handleTicketDialogClose}
      />
    </React.Fragment>
  )
}

export default TopPage
