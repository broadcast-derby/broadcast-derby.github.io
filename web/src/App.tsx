import React from 'react'
import Routes from './Routes'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'

/**
 * テーマの定義
 */
const theme = createTheme({
})

/**
 * MUIによらないbodyやhtmlタグのスタイル定義
 */
const globalStyles = {
}

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles styles={globalStyles} />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
