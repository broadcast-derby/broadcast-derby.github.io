import { styled } from '@mui/material/styles'
import { alpha } from '@mui/material'

// mui
import Slider from '@mui/material/Slider'

/**
 * スライダーのレイアウト
 */
const BaseStyledSlider = styled(Slider)({
  height: 8,
  '& .MuiSlider-rail': {
    opacity: 0,
  },
  '& .MuiSlider-track': {
    opacity: 0,
  },
  '& .MuiSlider-thumb': {
    borderRadius: '0%',
    backgroundColor: alpha('#ffffff', 0)
  },
  '& .MuiSlider-thumb:before': {
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  }
})

export default BaseStyledSlider