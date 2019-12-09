import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '30px',
  },
}))

export const Content = () => {
  const { root } = useStyles()
  return (
    <Box className={root}>
      <Typography variant="body1">버스안내를 시작합니다.</Typography>
    </Box>
  )
}
