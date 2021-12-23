import { styled } from '@mui/material/styles'
import BaseStyledSlider from './BaseStyledSlider'

/**
 * タイスライダー
 */
 const TaiSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 320,
    backgroundImage: 'url(Tai.png)',
  },
})

export default TaiSlider