import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import introImage from '~/css/images/04.jpg'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '30px',
    width: '100%',
  },
  img: {
    minHeight: '200px',
  }
}))

export const Photo = () => {
  const { root, img } = useStyles()

  return (
    <Box className={root}>
      <img src={introImage} alt="intro" className={img} width="100%" />
    </Box>
  )
}