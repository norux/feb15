import React from 'react'
import { hot } from 'react-hot-loader/root'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

export const App = hot(() => (
  <div>
    <Container maxWidth="sm" className="wrap">
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Container>
  </div>
))
