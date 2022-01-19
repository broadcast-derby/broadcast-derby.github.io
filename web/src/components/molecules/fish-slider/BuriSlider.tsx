import { styled } from '@mui/material/styles'
import BaseStyledSlider from './BaseStyledSlider'

/**
 * ブリスライダー
 */
const BuriSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 450,
    backgroundImage: 'url(Buri.png)',
  },
})

export default BuriSlider