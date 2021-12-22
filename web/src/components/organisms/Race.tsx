import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { alpha } from '@mui/material'
import { useSelector, useDispatch, ReactReduxContext } from 'react-redux'

// mui
import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider'

// utils
import { RealRacehorse } from '../../interface'

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
/**
 * ブリスライダー
 */
const BuriSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 450,
    backgroundImage: 'url(Buri.png)',
  },
})
/**
 * イカスライダー
 */
const IkaSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 414,
    backgroundImage: 'url(Ika.png)',
  },
})
/**
 * カジキスライダー
 */
const KajikiSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 442,
    backgroundImage: 'url(Kajiki.png)',
  },
})
/**
 * カサゴスライダー
 */
const KasagoSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 334,
    backgroundImage: 'url(Kasago.png)',
  },
})
/**
 * カツオスライダー
 */
const KatsuoSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 376,
    backgroundImage: 'url(Katsuo.png)',
  },
})
/**
 * マグロスライダー
 */
const MaguroSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 392,
    backgroundImage: 'url(Maguro.png)',
  },
})
/**
 * サバスライダー
 */
const SabaSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 594,
    backgroundImage: 'url(Saba.png)',
  },
})
/**
 * サケスライダー
 */
const SakeSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 544,
    backgroundImage: 'url(Sake.png)',
  },
})
/**
 * タイスライダー
 */
const TaiSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 320,
    backgroundImage: 'url(Tai.png)',
  },
})
/**
 * タコスライダー
 */
const TakoSlider = styled(BaseStyledSlider)({
  '& .MuiSlider-thumb': {
    // 画像の高さに合わせる必要がある
    height: 100,
    width: 326,
    backgroundImage: 'url(Tako.png)',
  },
})

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
              : null}
            {index === 1 ?
              <SakeSlider
                min={0}
                max={10000}
                value={rh.val}
              />
              : null}
            {index === 2 ?
              <KajikiSlider
                min={0}
                max={10000}
                value={rh.val}
              />
              : null}
            {index === 3 ?
              <AjiSlider
                min={0}
                max={10000}
                value={rh.val}
              />
              : null}
            {index === 4 ?
              <SabaSlider
                min={0}
                max={10000}
                value={rh.val}
              />
              : null}
            {index === 5 ?
              <KatsuoSlider
                min={0}
                max={10000}
                value={rh.val}
              />
              : null}
            {index === 6 ?
              <IkaSlider
                min={0}
                max={10000}
                value={rh.val}
              />
              : null}
            {index === 7 ?
              <TakoSlider
                min={0}
                max={10000}
                value={rh.val}
              />
              : null}
            {index === 8 ?
              <KasagoSlider
                min={0}
                max={10000}
                value={rh.val}
              />
              : null}
            {index === 9 ?
              <TaiSlider
                min={0}
                max={10000}
                value={rh.val}
              />
              : null}
            {index === 10 ?
              <BuriSlider
                min={0}
                max={10000}
                value={rh.val}
              />
              : null}
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  )
}
export default Race

