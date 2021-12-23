import { styled } from '@mui/material/styles'
import BaseStyledSlider from './BaseStyledSlider'

/**
 * アジスライダー
 */
const AjiSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 370,
    backgroundImage: 'url(Aji.png)',
  },
})

export default AjiSlider