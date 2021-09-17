import { createTheme } from '@material-ui/core/styles'
import { neutralColor } from './colors'

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff784e',
      main: '#ff5722',
      dark: '#b23c17',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffcf33',
      main: '#ffc400',
      dark: '#b28900',
      contrastText: '#000',
    },
    text: {
        primary: neutralColor
    }
  }
})

export default theme