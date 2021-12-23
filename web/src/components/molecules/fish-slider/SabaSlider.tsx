import { styled } from '@mui/material/styles'
import BaseStyledSlider from './BaseStyledSlider'

/**
 * サバスライダー
 */
 const SabaSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 594,
    backgroundImage: 'url(Saba.png)',
  },
})

export default SabaSlider