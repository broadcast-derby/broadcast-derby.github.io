import { styled } from '@mui/material/styles'
import BaseStyledSlider from './BaseStyledSlider'

/**
 * カサゴスライダー
 */
const KasagoSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 334,
    backgroundImage: 'url(Kasago.png)',
  },
})

export default KasagoSlider