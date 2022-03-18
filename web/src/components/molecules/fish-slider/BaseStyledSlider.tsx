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

/**
 * 出走馬番号スライダーのレイアウト
 */
export const OverviewBaseSlider = styled(Slider)({
  height: 3,
  padding: "0px 0",
  '& .MuiSlider-rail': {
    color: "#ccc",
    opacity: 1,
  },
  '& .MuiSlider-track': {
    color: "#ccc",
    opacity: 1,
    border: 'none',
  },
  color: '#52af77',
  '& .MuiSlider-thumb': {
    height: 5,
    width: 5,
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
})

export default BaseStyledSlider