import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    padding: '0 10px 15px 10px',
    fontSize: '1.3rem',
  },
}))

export const Copyright = () => {
  const { root } = useStyles()
  return (
    <Box display="flex" justifyContent="flex-end" className={root}>
      <Typography variant="body2">Copyright 🐵 norux, all rights reserved.</Typography>
    </Box>
  )
}
