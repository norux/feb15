import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '7px',
  },
}))

export const Content = () => {
  const { root } = useStyles()
  return (
    <Box className={root}>
      <Typography variant="body2">인천에서 결혼식장까지 셔틀버스를 운행합니다.</Typography>
    </Box>
  )
}
