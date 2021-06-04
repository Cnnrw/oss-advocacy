import React, { useState, useEffect } from 'react'
import Header                         from './Header'
import debounce                       from '@utils/debounce'

const MobileHeader = () => {
  const [isMobile, setMobile] = useState(false)
  const [isVisible, setVisibility] = useState(false)

  const resize = () => {
    let currentHideNav = window.innerWidth <= 720
    // Art we mobile?
    setMobile(currentHideNav)
  }

  const toggleVisibility = () => {
    setVisibility(!isVisible)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', debounce(resize, 250))
      resize()
    }
  })

  return (
    <Header mobile={isMobile}
            visible={isVisible}
            toggleVisibility={toggleVisibility}
    />
  )
}

export default MobileHeader
