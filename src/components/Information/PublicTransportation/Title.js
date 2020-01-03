import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {},
}))

export const Title = () => {
  const { root } = useStyles()
  return (
    <Box className={root}>
      <Typography variant="h4">대중교통 안내</Typography>
    </Box>
  )
}
