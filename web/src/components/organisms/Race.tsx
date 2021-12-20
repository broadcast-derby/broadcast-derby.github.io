import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { useSelector, useDispatch, ReactReduxContext } from 'react-redux'

// mui
import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider'

// utils
import { RealRacehorse } from '../../interface'


const MaguroSlider = styled(Slider)({
  height: 8,
  '& .MuiSlider-rail': {
    opacity: 0,
  },
  '& .MuiSlider-track': {
    opacity: 0,
  },
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 100,
    // backgroundImage: 'url(maguro.jpg)',
    borderRadius: '0%',
  },
});
const KajikiSlider = styled(Slider)({
  height: 8,
  '& .MuiSlider-rail': {
    opacity: 0,
  },
  '& .MuiSlider-track': {
    opacity: 0,
  },
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 100,
    // backgroundImage: 'url(kajiki.png)',
    borderRadius: '0%',
  },
});
const SakeSlider = styled(Slider)({
  height: 8,
  '& .MuiSlider-rail': {
    opacity: 0,
  },
  '& .MuiSlider-track': {
    opacity: 0,
  },
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 100,
    // backgroundImage: 'url(sake.jpn)',
    borderRadius: '0%',
  },
});
const AjiSlider = styled(Slider)({
  height: 8,
  '& .MuiSlider-rail': {
    opacity: 0,
  },
  '& .MuiSlider-track': {
    opacity: 0,
  },
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 100,
    // backgroundImage: 'url(aji.jpg)',
    borderRadius: '0%',
  },
});

/**
 * レース中
 */
const Race: React.FC = ({ }) => {
  /**
   * 出走馬一覧
   */
  const racehorses = useSelector((state: any) => state.racehorsesReducer.racehorses)
  const [runningRacehorse, setRunningRacehorse] = useState<any[]>([])
  const [isStart, setStart] = useState(false)
  /**
   * 初期表示時に馬の情報を設定する
   */
  useEffect(() => {
    const runnings: any[] = []
    racehorses.map((r: any) => {
      const runner = r
      runner.val = 0
      runnings.push(runner)
    })
    setRunningRacehorse(runnings)
    setStart(true)
  }, [])
  useEffect(() => {
    if (!isStart) {
      return
    }
    setInterval(() => {
      const min = 1
      const max = 50
      const runnings: any[] = []
      runningRacehorse.map(r => {
        r.val += Math.floor(Math.random() * (max - min) + min)
        runnings.push(r)
      })
      setRunningRacehorse(runnings)
    }, 200)
  }, [isStart])
  return (
    <Grid container >
      {runningRacehorse.map((rh: any, index: number) => (
        <React.Fragment key={index}>
          <Grid item xs={3}>
            {rh.name}
          </Grid>
          <Grid item xs={9}>
            {index === 0 ?
              <MaguroSlider
                min={0}
                max={10000}
                value={rh.val}
              />
              : index === 1 ?
                <SakeSlider
                  min={0}
                  max={10000}
                  value={rh.val}
                />
                : index === 2 ?
                  <KajikiSlider
                    min={0}
                    max={10000}
                    value={rh.val}
                  />
                  : index === 3 ?
                    <AjiSlider
                      min={0}
                      max={10000}
                      value={rh.val}
                    />
                    :
                    <Slider
                      min={0}
                      max={10000}
                      value={rh.val}
                    />}
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  )
}
export default Race

