import React from 'react'
import { useDispatch } from 'react-redux'

// mui
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// organisms
import RacehorseEditor from '../organisms/RacehorseEditor'

/**
 * 設定画面
 */
const ConfigPage: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <Grid container>
      <Grid item xs={12}>
        設定画面
      </Grid>
      <Grid item xs={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>出走馬情報</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RacehorseEditor />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  )
}

export default ConfigPage
