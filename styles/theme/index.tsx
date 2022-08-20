import React from 'react'
import { ThemeProvider } from 'styled-components'
import borders from './borders'
import breakpoint from './breakpoint'
import color from './color'
import font from './font'
import GlobalStyle from './global'
import media from './media'
import opacity from './opacity'
import space from './space'

export const tokens = {
  breakpoint,
  color,
  font,
  space,
  media,
  borders,
  opacity
}

const Provider = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

Provider.defaultProps = {
  theme: tokens
}

export default Provider
