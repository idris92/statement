import { extendTheme, ThemeConfig, ColorMode } from '@chakra-ui/react'
import { foundations } from './foundations'
import {components}  from './components'


const theme = extendTheme({
  components,
  ...foundations,
})

export default theme
