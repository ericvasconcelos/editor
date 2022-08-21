import React from 'react'
import { ThemeProvider } from 'styled-components'
import borders from './borders'
import color from './color'
import font from './font'
import GlobalStyle from './global'
import space from './space'

export const tokens = {
  color,
  font,
  space,
  borders
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
