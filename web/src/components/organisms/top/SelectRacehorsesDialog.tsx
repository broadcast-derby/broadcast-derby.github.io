import React from 'react'

// mui
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

// util
import { RACEHORSES, COLORS } from '../../../const'
import { RacehorseBase, Color } from '../../../interface'

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
  /**
   * キーからカラーコードを取得
   * @param {string} key キー名 
   * @returns カラーコード
   */
  const getColorCode = (key: string): string => {
    const color = COLORS.find((c: Color) => c.key === key)
    if (color) {
      return color.code
    }
    else {
      return "#ffffff"
    }
  }
  /**
   * キーから文字色を反転させるかどうかを取得
   * @param {string} key キー名 
   * @returns 反転させるかどうか
   */
  const isReverse = (key: string): boolean => {
    const color = COLORS.find((c: Color) => c.key === key)
    if (color) {
      return color.isReverse
    }
    else {
      return false
    }
  }
  /**
   * キーから枠線が必要かどうかを取得
   * @param {string} key キー名 
   * @returns 枠線が必要かどうか
   */
  const needBorder = (key: string): boolean => {
    const color = COLORS.find((c: Color) => c.key === key)
    if (color) {
      return color.needBorder
    }
    else {
      return false
    }
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
          >
            <ListItemAvatar>
              <Typography
                align="center"
                sx={{
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  lineHeight: "30px",
                  backgroundColor: getColorCode(racehorse.color),
                  color: isReverse(racehorse.color) ? "#ffffff" : "#000000",
                  border: needBorder(racehorse.color) ? "2px solid" : "",
                }}
              >
                {racehorse.number}
              </Typography>
            </ListItemAvatar>
            <ListItemText sx={{ marginTop: "14px", }}>
              {racehorse.name}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default SelectRacehorsesDialog
