import React from 'react'
import { useSelector } from 'react-redux'

// mui
import Grid from '@mui/material/Grid'

// utils
import {
  RealRacehorse,
  Track,
} from 'interface'

// fish slider
import { AjiOverviewSlider } from 'molecules/fish-slider/AjiSlider'
import { BuriOverviewSlider } from 'molecules/fish-slider/BuriSlider'
import { IkaOverviewSlider } from 'molecules/fish-slider/IkaSlider'
import { KajikiOverviewSlider } from 'molecules/fish-slider/KajikiSlider'
import { KasagoOverviewSlider } from 'molecules/fish-slider/KasagoSlider'
import { KatsuoOverviewSlider } from 'molecules/fish-slider/KatsuoSlider'
import { MaguroOverviewSlider } from 'molecules/fish-slider/MaguroSlider'
import { SabaOverviewSlider } from 'molecules/fish-slider/SabaSlider'
import { SakeOverviewSlider } from 'molecules/fish-slider/SakeSlider'
import { TaiOverviewSlider } from 'molecules/fish-slider/TaiSlider'
import { TakoOverviewSlider } from 'molecules/fish-slider/TakoSlider'

/**
 * 全体スライダー一覧Props
 */
interface OverviewSlidersProps {
  /**
   * 出走馬一覧
   */
  realRacehorses: RealRacehorse[],
  /**
   * スライダークリック時イベント
   */
  onClickSlider: (number: number) => void,
}
/**
 * 全体スライダー一覧
 */
const OverviewSliders: React.FC<OverviewSlidersProps> = ({
  /**
   * 出走馬一覧
   */
  realRacehorses,
  /**
   * スライダークリック時イベント
   */
  onClickSlider,
}) => {
  /**
   * トラック情報
   */
  const track: Track = useSelector((state: any) => state.raceTrackReducer.raceTrack)
  /**
   * 全体スライダー一覧
   */
  const OVERVIEW_SLIDER_LIST: any[] = [
    MaguroOverviewSlider,
    SakeOverviewSlider,
    KajikiOverviewSlider,
    AjiOverviewSlider,
    SabaOverviewSlider,
    KatsuoOverviewSlider,
    IkaOverviewSlider,
    TakoOverviewSlider,
    KasagoOverviewSlider,
    TaiOverviewSlider,
    BuriOverviewSlider,
  ]
  /**
   * 出走馬番号スライダー押下時イベント
   * @param {number} number 出走馬番号
   */
  const handleOverViewSliderClick = (number: number) => {
    onClickSlider(number)
  }
  return (
    <Grid container>
      {realRacehorses.map((rh: RealRacehorse, index: number) => (
        <React.Fragment key={index}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            {OVERVIEW_SLIDER_LIST.map((Slider, index) => (
              <React.Fragment key={index}>
                {index + 1 === rh.number ? (
                  <Slider
                    valueLabelDisplay="on"
                    valueLabelFormat={() => rh.number}
                    min={0}
                    max={Number(track.trackLength)}
                    value={rh.runValue}
                    onClick={() => handleOverViewSliderClick(rh.number)}
                  />
                ) : null}
              </React.Fragment>
            ))}
          </Grid>
          <Grid item xs={2}></Grid>
        </React.Fragment>
      ))}
    </Grid>
  )
}
export default OverviewSliders

