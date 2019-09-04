import React from 'react'
import { hot } from 'react-hot-loader/root'
import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Index } from '~/pages'

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    height: '100vh',
  },
}))

export const App = hot(() => {
  const classes = useStyles()
  const { root } = classes

  return (
    <Container maxWidth="sm" className={root}>
      <Index />
    </Container>
  )
})
