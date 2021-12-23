import { styled } from '@mui/material/styles'
import BaseStyledSlider from './BaseStyledSlider'

/**
 * イカスライダー
 */
 const IkaSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 414,
    backgroundImage: 'url(Ika.png)',
  },
})

export default IkaSlider