import { styled } from '@mui/material/styles'
import BaseStyledSlider from './BaseStyledSlider'

/**
 * カジキスライダー
 */
 const KajikiSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 442,
    backgroundImage: 'url(Kajiki.png)',
  },
})

export default KajikiSlider