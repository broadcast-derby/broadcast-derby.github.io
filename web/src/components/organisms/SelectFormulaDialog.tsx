import React from 'react'

// mui
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

// utils
import { FORMULAS } from '../../const'
import { Formula } from '../../interface'

/**
 * 式別選択ダイアログProps
 */
interface SelectFormulaDialogProps {
  /**
   * ダイアログを開いているかどうか
   */
  open: boolean,
  /**
   * ダイアログを閉じた時のイベント
   */
  onClose: Function,
}
/**
 * 式別選択ダイアログ
 */
const SelectFormulaDialog: React.FC<SelectFormulaDialogProps> = ({
  /**
   * ダイアログを開いているかどうか
   */
  open,
  /**
   * ダイアログを閉じた時のイベント
   */
  onClose,
}) => {
  /**
   * 式別選択時イベント
   */
  const handleListItemClick = (index: number) => {
    onClose(index)
  }
  return (
    <Dialog onClose={() => { onClose(null) }} open={open}>
      <DialogTitle>式別を選択してください</DialogTitle>
      <List>
        {FORMULAS.map((formula: Formula, index: number) => (
          <ListItem button onClick={() => handleListItemClick(index)} key={index}>
            <ListItemText primary={formula.name} secondary={formula.description} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}
export default SelectFormulaDialog