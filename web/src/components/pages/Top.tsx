import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'

// mui
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

// utils
import { FORMULAS, RACEHORSES } from '../../const'
import { RacehorseBase } from '../../interface'

// organisms
import Calculator from '../organisms/Calculator'
import TicketDialog from '../organisms/TicketDialog'
import SelectFormulaDialog from '../organisms/SelectFormulaDialog'
import SelectRacehorsesDialog from '../organisms/SelectRacehorsesDialog'

import CardActionsOrg from '../organisms/top/CardActionsOrg'
import SelectedFormula from '../organisms/top/SelectedFormula'

/**
 * タイトルレイアウト
 */
const TitleGrid = styled(Grid)({
  marginBottom: "20px",
})
/**
 * サブタイトルレイアウト
 */
const SubTitleGrid = styled(Grid)({
  marginTop: "20px",
  marginBottom: "20px",
})
/**
 * 選択した出走馬の一覧レイアウト
 */
const SelectedRacehorseRow = styled(Grid)({
  marginBottom: "5px",
})
/**
 * TOP画面
 */
const TopPage: React.FC = () => {
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
          keywordRegexList: [],
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
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Grid container>
              <TitleGrid item xs={12}>
                <Typography
                  variant="h3"
                >
                  券売機
                </Typography>
              </TitleGrid>
              <SubTitleGrid item xs={12}>
                <Typography
                  variant="h4"
                >
                  式別
                </Typography>
                <Typography
                  variant="body2"
                >
                  式別は魚券の種類です。
                </Typography>
              </SubTitleGrid>
              <SelectedFormula
                selectedFormula={selectedFormula}
                onSelectButton={handleOpenSelectFormulaDialogClick}
              ></SelectedFormula>
              <SubTitleGrid item xs={12}>
                <Typography
                  variant="h4"
                >
                  おさかな
                </Typography>
                <Typography
                  variant="body2"
                >
                  おさかなを選択してください
                </Typography>
              </SubTitleGrid>
              <Grid item container xs={12}>
                {selectedFormula !== null ? selectedRacehorses.map((rh: RacehorseBase, index: number) => (
                  <React.Fragment key={index}>
                    <SelectedRacehorseRow item xs={2}></SelectedRacehorseRow>
                    {FORMULAS[selectedFormula].isCombination ? (
                      <SelectedRacehorseRow item xs={6}>
                        {rh.name || '魚を選択してください'}
                      </SelectedRacehorseRow>
                    ) : (
                      <React.Fragment>
                        <SelectedRacehorseRow item xs={1} >
                          {(index + 1) + '着'}
                        </SelectedRacehorseRow>
                        <SelectedRacehorseRow item xs={5}>
                          {rh.name || '魚を選択してください'}
                        </SelectedRacehorseRow>
                      </React.Fragment>
                    )}
                    <SelectedRacehorseRow item xs={2}>
                      <Button
                        variant="contained"
                        onClick={() => handleOpenSelectRacehorseDialogClick(index)}
                      >
                        選択する
                      </Button>
                    </SelectedRacehorseRow>
                    <SelectedRacehorseRow item xs={2}></SelectedRacehorseRow>
                  </React.Fragment>
                )) : (
                  <React.Fragment>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                      <Typography
                        variant="body1"
                      >
                        まずは式別を選択してください
                      </Typography>
                    </Grid>
                    <Grid item xs={2}></Grid>
                  </React.Fragment>
                )}
              </Grid>
              <SubTitleGrid item xs={12}>
                <Typography
                  variant="h4"
                >
                  金額
                </Typography>
                <Typography
                  variant="body2"
                >
                  魚券1枚をいくらで購入するかを決めます
                </Typography>
              </SubTitleGrid>
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
          <CardActionsOrg
            disabledIssueButton={disabledIssueButton}
            money={money}
            selectedFormula={selectedFormula}
            selectedRacehorses={selectedRacehorses}
            onClickClearButton={handleClearButtonClick}
            onClickIssueButton={handleIssueButtonClick}
          >
          </CardActionsOrg>
        </Card>
      </Container>
      <SelectFormulaDialog
        open={isOpenSelectFormulaDialog}
        onClose={handleSelectFormula}
      />
      <SelectRacehorsesDialog
        open={isOpenSelectRacehorseDialog}
        selectedRacehorses={selectedRacehorses}
        onClose={handleSelectRacehorse}
      />
      <TicketDialog
        formula={selectedFormula || 0}
        racehorses={selectedRacehorses}
        money={money}
        open={isOpenTicketDialog}
        onClose={handleTicketDialogClose}
      />
    </React.Fragment >
  )
}

export default TopPage
