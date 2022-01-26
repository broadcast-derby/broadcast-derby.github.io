import React, { useState } from 'react'

// mui
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// organisms
import RaceTrackConfig from '../organisms/config/RaceTrackConfig'
import RacehorseEditor from '../organisms/RacehorseEditor'
import { Container } from '@mui/material'

/**
 * 設定画面
 */
const ConfigPage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sx={{
          marginTop: "20px",
          marginLeft: "20px",
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
              <Grid container>
                <Grid item xs={12}>
                  <RaceTrackConfig />
                </Grid>
                <Grid item xs={12}>
                  <RacehorseEditor />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ConfigPage
