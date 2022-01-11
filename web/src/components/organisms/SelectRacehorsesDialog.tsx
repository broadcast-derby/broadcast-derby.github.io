import React from 'react'
import { makeStyles } from '@mui/styles'

// mui
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

// util
import { RACEHORSES, COLORS } from '../../const'
import { RacehorseBase, Color } from '../../interface'

const useStyles = makeStyles(() => ({
}))

/**
 * 出走馬選択ダイアログProps
 */
interface SelectRacehorseDialogProps {
  /**
   * 開いているかどうか
   */
  open: boolean,
  /**
   * 選択済みの出走馬情報一覧
   */
   selectedRacehorses: RacehorseBase[],
  /**
   * ダイアログを閉じたときのイベント
   */
  onClose: Function,
}
/**
 * 出走馬選択ダイアログ
 */
const SelectRacehorsesDialog: React.FC<SelectRacehorseDialogProps> = ({
  /**
   * 開いているかどうか
   */
  open,
  /**
   * 選択済みの出走馬情報一覧
   */
   selectedRacehorses,
  /**
   * ダイアログを閉じたときのイベント
   */
  onClose,
}) => {
  /**
   * 出走馬選択時イベント
   */
  const handleListItemClick = (index: number) => {
    onClose(index)
  }
  /**
   * キーから色名を取得
   * @param {string} key キー名 
   * @returns 色名
   */
  const getColorName = (key: string) => {
    const color = COLORS.find((c: Color) => c.key === key)
    if (color) {
      return color.name
    }
    else {
      return ''
    }
  }
  return (
    <Dialog onClose={() => { onClose(null) }} open={open}>
      <DialogTitle>魚を選択してください</DialogTitle>
      <List>
        {RACEHORSES.map((racehorse: RacehorseBase, index: number) => (
          <ListItem
            button
            disabled={selectedRacehorses.includes(racehorse)}
            onClick={() => handleListItemClick(index)}
            key={index}
          >
            <ListItemText primary={racehorse.name} secondary={racehorse.number + " " + getColorName(racehorse.color)} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default SelectRacehorsesDialog
