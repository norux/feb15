import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import introImage from '~/css/images/intro.jpg'

const useStyles = makeStyles(() => ({
  introduction: {
    backgroundColor: '#FFF',
    padding: '20px',
  },
  title: {
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: 500,
    color: '#FF746C',
  },
  photo: {
    marginTop: '30px',
    width: '100%',
  },
}))

export const Introduction = () => {
  const classes = useStyles()
  const { introduction, title, photo } = classes

  return (
    <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" className={introduction}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" className={title}>
          2020
        </Typography>
        <Typography variant="h1" className={title}>
          02. 15
        </Typography>
      </Box>
      <Box className={photo}>
        <img src={introImage} alt="intro" width="100%" />
      </Box>
    </Box>
  )
}
