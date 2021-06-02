import React             from 'react'
import styled            from '@emotion/styled'
import { useColorMode }  from 'theme-ui'

const StyledLabel = styled.label`
  & {
    display: flex;
    height: 26px;
    position: relative;
    width: 55px;
    font-size: 0.75em;
  }
  & input {
    display: none;
  }

  & .slider {
    background-color: #fff;
    border: 1px solid #000;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  & .slider:before {
    background-color: #333;
    border: 1px solid #000;
    bottom: 3px;
    content: '';
    height: 16px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 16px;
    z-index: 421;
  }
  & > input:checked + .slider {
    background-color: #101211;
    border-color: #cfcfcf;
  }
  & > input:checked + .slider:before {
    transform: translateX(28px);
    border-color: #cfcfcf;
    background-color: #efefef;
  }
  & .slider.round {
    border-radius: 28px;
  }
  & .slider.round:before {
    border-radius: 50%;
  }
  & .toggle-moon,
  & .toggle-sun {
    width: 50%;
    text-align: center;
    padding: 0.25em;
    position: relative;
    z-index: 420;
  }
`

export const ThemeToggle = React.memo(() => {
  const [mode, setMode] = useColorMode()

  return (
    <StyledLabel htmlFor="checkbox" title="Change color scheme to dark mode">
      <input
        type="checkbox"
        id="checkbox"
        checked={mode === 'dark'}
        onChange={() => {
          const next = mode === 'dark' ? 'light' : 'dark'
          setMode(next)
        }}
      />
      <div className="slider round"/>
      <div className="toggle-moon">🌙</div>
      <div className="toggle-sun">☀️</div>
    </StyledLabel>
  )
})

export default ThemeToggle
