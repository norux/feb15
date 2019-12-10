import React from 'react'
import { hot } from 'react-hot-loader/root'
import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider } from '@material-ui/core/styles'

import { Index } from '~/pages'

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    height: '100vh',
  },
}))

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
    h2: {
      fontSize: '3rem',
      fontWeight: '500',
    },
    subtitle1: {
      fontSize: '2rem',
      fontWeight: '500',
    },
    subtitle2: {
      fontSize: '1.6rem',
      fontWeight: '500',
    },
    body1: {
      fontFamily: 'Noto Serif KR, serif',
      fontSize: '1.6rem',
      fontWeight: '500',
    },
    body2: {
      fontSize: '1.3rem',
      fontWeight: '500',
    },
  },
})

export const App = hot(() => {
  const classes = useStyles()
  const { root } = classes

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" className={root}>
        <Index />
      </Container>
    </ThemeProvider>
  )
})
