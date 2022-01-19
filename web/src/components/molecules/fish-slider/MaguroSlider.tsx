import { styled } from '@mui/material/styles'
import BaseStyledSlider from './BaseStyledSlider'

/**
 * マグロスライダー
 */
const MaguroSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 392,
    backgroundImage: 'url(Maguro.png)',
  },
})

export default MaguroSlider