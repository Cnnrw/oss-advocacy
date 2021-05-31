import useResizeObserver                        from '@react-hook/resize-observer'
import dynamic                                  from 'next/dynamic'
import { useEffect, useMemo, useRef, useState } from 'react'
import { scaleSequentialSqrt }                  from 'd3-scale'
import { interpolateYlOrRd }                    from 'd3-scale-chromatic'
import earthTexture                             from 'public/static/images/earth-dark.jpg'
import universeTexture                          from 'public/static/images/night-sky.png'

import data          from 'data/ne_110m_admin_0_countries.json'
import { Container } from 'theme-ui'

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
  const [altitude, setAltitude] = useState(0.1)
  const [transitionDuration, setTransitionDuration] = useState(1000)

  useEffect(() => {
    setCountries(data)

    setTimeout(() => {
      setTransitionDuration(2000)
      setAltitude(() => feat => Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5))

      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.3;
      globeRef.current.pointOfView({ altitude: 5 }, 2000)
    }, 3000)
  }, [])

  const colorScale = scaleSequentialSqrt(interpolateYlOrRd)

  const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST)

  const maxVal = useMemo(
    () => Math.max(... countries.features.map(getVal)),
    [countries]
  )
  colorScale.domain([0, maxVal])

  useEffect(() => {
    if (globeRef.current && size) {
      globeRef.current.camera().aspect = (size.width / size.height)
      globeRef.current.camera().updateProjectionMatrix()

      globeRef.current.renderer().setSize(size.width, size.height)
    }
  }, [size])

  return (
    <Container ref={sizeRef}
               sx={{
               }}>
      <GlobeWrapper
            globeImageUrl={earthTexture}
            backgroundImageUrl={universeTexture}
            lineHoverPrecision={0}

            polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
            polygonAltitude={altitude}
            polygonCapColor={d => colorScale(getVal(d))}
            polygonSideColor={() => 'rgba(4, 147, 114, 0.15)'}
            polygonStrokeColor={() => '#111'}
            polygonLabel={({ properties: d }) => `
                <b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
                Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
              `}
            polygonsTransitionDuration={transitionDuration}
            forwardRef={globeRef}
            {...props}
          />
    </Container>
  )
}

export default Globe
