import React from 'react'

// mui
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'

// util
import { RACEHORSES } from 'const'
import { RacehorseBase } from 'interface'

// molecules
import RacehorseNumberIcon from 'molecules/RacehorseNumberIcon'

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
   * 
   * @param {number|null} 選択した要素番号
   */
  onClose: (index: number | null) => void,
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
  return (
    <Dialog onClose={() => { onClose(null) }} open={open}>
      <DialogTitle>魚を選択してください</DialogTitle>
      <Divider variant="middle" />
      <List>
        {RACEHORSES.map((racehorse: RacehorseBase, index: number) => (
          <ListItem
            button
            disabled={selectedRacehorses.includes(racehorse)}
            onClick={() => handleListItemClick(index)}
            key={index}
            alignItems="flex-start"
            dense
          >
            <ListItemAvatar>
              <RacehorseNumberIcon number={racehorse.number} />
            </ListItemAvatar>
            <ListItemText sx={{ marginTop: '14px', }}>
              {racehorse.name}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default SelectRacehorsesDialog
