import { styled } from '@mui/material/styles'
import BaseStyledSlider, { OverviewBaseSlider } from './BaseStyledSlider'
import { RACEHORSES, COLORS } from 'const'
import { Color } from 'interface'

/**
 * 出走馬の情報
 */
const racehorse = RACEHORSES[6]
/**
 * 色の情報
 */
const color = COLORS.find((c: Color) => c.key === racehorse.color)

/**
 * イカスライダー
 */
const IkaSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 414,
    backgroundImage: `url(${racehorse.imagePath})`,
  },
})
/**
 * イカ全体スライダー
 */
export const IkaOverviewSlider = styled(OverviewBaseSlider)({
  '& .MuiSlider-valueLabel': {
    backgroundColor: color ? color.code : '',
    color: color ? color.isReverse ? '#ffffff' : '#000000' : '#ffffff',
    border: color ? color.needBorder ? '3px solid #000000' : '' : '',
  },
})

export default IkaSlider