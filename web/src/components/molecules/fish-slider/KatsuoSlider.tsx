import { styled } from '@mui/material/styles'
import BaseStyledSlider from './BaseStyledSlider'

/**
 * カツオスライダー
 */
 const KatsuoSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 376,
    backgroundImage: 'url(Katsuo.png)',
  },
})

export default KatsuoSlider