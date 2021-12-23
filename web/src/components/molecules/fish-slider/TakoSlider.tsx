import { styled } from '@mui/material/styles'
import BaseStyledSlider from './BaseStyledSlider'

/**
 * タコスライダー
 */
 const TakoSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 326,
    backgroundImage: 'url(Tako.png)',
  },
})

export default TakoSlider