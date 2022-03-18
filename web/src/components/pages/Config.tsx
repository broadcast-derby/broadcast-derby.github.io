import React from 'react'
import { useHistory } from 'react-router-dom'

// mui
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ArrowBack from '@mui/icons-material/ArrowBack'
import Container from '@mui/material/Container'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// organisms
import MoneyConfig from 'organisms/config/MoneyConfig'
import RaceTrackConfig from 'organisms/config/RaceTrackConfig'
import RacehorseSelector from 'organisms/config/RacehorseSelector'
import RacehorseDetailConfig from 'organisms/config/RacehorseDetailConfig'
import UserConfig from 'organisms/config/UserConfig'

// molecules
import CustomFab from 'molecules/CustomFab'

/**
 * 設定画面
 */
const ConfigPage: React.FC = () => {
  const history = useHistory()
  /**
   * 戻るボタン押下時イベント
   */
  const handleBackButtonClick = () => {
    history.push('/game')
  }
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sx={{
            marginTop: '20px',
            marginLeft: '20px',
          }}>
            <Typography variant="h3">
              設定画面
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">基本設定</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container rowSpacing={2}>
                  <Grid item xs={12} >
                    <RaceTrackConfig />
                  </Grid>
                  <Grid item xs={12}>
                    <MoneyConfig />
                  </Grid>
                  <Grid item xs={12}>
                    <RacehorseSelector />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">詳細設定</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container rowSpacing={2}>
                  <Grid item xs={12}>
                    <RacehorseDetailConfig />
                  </Grid>
                  <Grid item xs={12}>
                    <UserConfig />
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
      <CustomFab onClick={handleBackButtonClick}>
        <ArrowBack />
      </CustomFab>
    </React.Fragment>
  )
}

export default ConfigPage
