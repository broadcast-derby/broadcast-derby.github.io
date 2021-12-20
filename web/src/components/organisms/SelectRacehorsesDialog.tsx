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
  return (
    <Dialog onClose={() => { onClose(null) }} open={open}>
      <DialogTitle>魚を選択してください</DialogTitle>
      <List>
        {RACEHORSES.map((racehorse: RacehorseBase, index: number) => (
          <ListItem button onClick={() => handleListItemClick(index)} key={index}>
            <ListItemText primary={racehorse.name} secondary={racehorse.number + " " + COLORS.find((c: Color) => c.key === racehorse.color)?.name ?? ''} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default SelectRacehorsesDialog
