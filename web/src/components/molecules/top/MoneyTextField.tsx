import { styled } from '@mui/material/styles'

// mui
import TextField from '@mui/material/TextField'

/**
 * 金額レイアウト
 */
const MoneyTextField = styled(TextField)({
  paddingTop: "10px",
  paddingBottom: "10px",
  textAlign: "right",
  "& > div > input": {
    textAlign: "right",
  },
})

export default MoneyTextField