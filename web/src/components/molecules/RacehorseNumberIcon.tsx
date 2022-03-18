import React from 'react'

// mui
import Typography from '@mui/material/Typography'

// util
import { RACEHORSES } from 'const'
import { RacehorseBase } from 'interface'
import { getColorCode, isReverse, needBorder } from 'common/color'

/**
 * 出走馬番号アイコンProps
 */
interface RacehorseNumberIconProp {
  /**
   * 出走馬番号icon
   */
  number: number,
}
/**
 * 出走馬番号アイコンProps
 */
const RacehorseNumberIcon: React.FC<RacehorseNumberIconProp> = ({
  /**
   * 出走馬番号icon
   */
  number,
}) => {
  /**
   * 出走馬情報
   */
  const racehorse: RacehorseBase | undefined = RACEHORSES.find((r: RacehorseBase) => r.number === number)
  if (racehorse === undefined) {
    return null
  }
  return (
    <Typography
      align="center"
      sx={{
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        lineHeight: '30px',
        backgroundColor: getColorCode(racehorse.color),
        color: isReverse(racehorse.color) ? '#ffffff' : '#000000',
        border: needBorder(racehorse.color) ? '2px solid' : '',
      }}
    >
      {racehorse.number}
    </Typography>
  )
}

export default RacehorseNumberIcon
