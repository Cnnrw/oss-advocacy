import { csvParse }                             from 'd3-dsv'
import { scaleSequentialSqrt }                  from 'd3-scale'
import { interpolateYlOrRd }                    from 'd3-scale-chromatic'
import dynamic                                  from 'next/dynamic'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Container }                            from 'theme-ui'
import useResizeObserver                        from '@react-hook/resize-observer'

import earthTexture    from 'public/static/images/earth-dark.jpg'
import universeTexture from 'public/static/images/night-sky.png'

const GlobeWrapper = dynamic(import('@components/Globe/GlobeWrapper'), { ssr: false })

const useSize = (target) => {
  const [size, setSize] = useState()

  useEffect(() => {
    setTimeout(() => {
      setSize(target.current.getBoundingClientRect())
    })
  }, [target])

  useResizeObserver(target, (entry) => {
    setSize(entry.contentRect)
  })
  return size
}

const Globe = (props) => {
  const sizeRef = useRef()
  const globeRef = useRef()

  const size = useSize(sizeRef)

  const [countries, setCountries] = useState({ features: [] })
  const [populationData, setPopulationData] = useState([])

  const [altitude, setAltitude] = useState(0.1)
  const [transitionDuration, setTransitionDuration] = useState(1000)

  /* --- Globe Data ----------------------------------------------------------*/
  useEffect(() => {

    // load up-to-date population data
    fetch('/static/data/internet-usage-data.csv').then(res => res.text())
      .then(csv => csvParse(csv, ({ entity, code, population, internetUsersPercent }) => ({ entity: entity, code: code, population: +population, internetUsersPercent: +internetUsersPercent })))
      .then(setPopulationData)

    // load country data from file
    fetch('/static/data/countries.geo.json')
      .then(res => res.json())
      .then(countries => {
        setCountries(countries)

        setTimeout(() => {
          setTransitionDuration(4000)
          setAltitude(() => feat => Math.max(0.1, Math.sqrt(+feat.properties.population) * 7e-5))
        }, 3000)
      })
  }, [])

  /* --- Globe Controls ------------------------------------------------------*/
  useEffect(() => {
    setTimeout(() => {
      if (globeRef.current) {
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 0.3;
        globeRef.current.pointOfView({ altitude: 8 }, 2500)
      }
    }, 500)
  }, [])

  /* --- Globe size ----------------------------------------------------------*/
  useEffect(() => {
    if (globeRef.current && size) {
      globeRef.current.camera().aspect = (size.width / size.height)
      globeRef.current.camera().updateProjectionMatrix()

      globeRef.current.renderer().setSize(size.width, size.height)
    }
  }, [size])

  /*
   | Add up-to-date population data to each country on first render
   */
  useMemo(
    () => {
      countries.features.map(c => {
        let d = populationData.find(p => p.code === c.properties.iso_a3)

        c.properties.population = parseInt(d?.population) || 0
        c.properties.internetUsersPercent = parseFloat(d?.internetUsersPercent) || 0
        c.properties.internetUsers = (c.properties.internetUsersPercent / 1e2) * c.properties.population
      })
    },
    [countries, populationData]
  )

  const colorScale = scaleSequentialSqrt(interpolateYlOrRd)

  const getVal = feat => feat.properties.internetUsers / Math.max(1e4, feat.properties.population)

  return (
    <Container ref={sizeRef}>
        <GlobeWrapper
          globeImageUrl={earthTexture}
          backgroundImageUrl={universeTexture}
          lineHoverPrecision={0}

          polygonsData={countries.features.filter(d => d.properties.iso_a2 !== 'AQ')}
          polygonAltitude={altitude}
          polygonCapColor={d => colorScale(getVal(d))}
          polygonSideColor={() => 'rgba(4, 147, 114, 0.15)'}
          polygonStrokeColor={() => '#111'}
          polygonLabel={({ properties: d }) => `
                  <b>${d.admin} (${d.iso_a2})</b>
                  <br />
                  Population: <i>${Math.round(+d.population / 1e4) / 1e2}M</i>
                  <br />
                  No. Internet Users: <i>${Math.round(d.internetUsers / 1e4) / 1e2}M</i>
                  <br />
                  % of pop.: <i>${parseFloat(d.internetUsersPercent).toFixed(2)}%</i>
                `}
          polygonsTransitionDuration={transitionDuration}
          forwardRef={globeRef}
          height={size?.height}
          width={size?.width}
          {...props}
        />
    </Container>
  )
}

export default Globe
