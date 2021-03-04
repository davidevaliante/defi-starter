import { createMuiTheme, ThemeOptions } from '@material-ui/core'
import { configuration } from '../configuration'

export const paletteColors = {
  primary: configuration.primaryColor,
  secondary: configuration.secondaryColor,
  error: '#E44C65',
  background: '#1b262c',
  text: '#bbe1fa',
}


const options = (dark: boolean): ThemeOptions => {
  return {
    palette: {
      type: dark ? 'dark' : 'light',
      primary: {
        main: paletteColors.primary,
      },
    }
  }
}

export const darkTheme = createMuiTheme(options(true))
export const lightTheme = createMuiTheme(options(false))