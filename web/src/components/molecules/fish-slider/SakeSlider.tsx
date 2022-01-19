import { styled } from '@mui/material/styles'
import BaseStyledSlider from './BaseStyledSlider'

/**
 * サケスライダー
 */
const SakeSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 544,
    backgroundImage: 'url(Sake.png)',
  },
})

export default SakeSlider