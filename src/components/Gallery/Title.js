import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '30px',
    height: '100%',
  },
  title: {
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 500,
    '& span': {
      fontSize: '1.3rem',
    }
  },
}))

export const Title = () => {
  const { root, title } = useStyles()
  return (
    <Box className={root}>
      <Typography variant="h3" className={title}>
        Gallery
      </Typography>
    </Box>
  )
}
