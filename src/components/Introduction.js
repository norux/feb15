import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import introImage from '~/css/images/intro.jpeg'
import { DisplayAnimation } from '~/components/common/DisplayAnimation'

const useStyles = makeStyles(() => ({
  introduction: {
    backgroundColor: '#FFF',
    paddingTop: '60px',
  },
  date: {
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: 500,
    color: '#6e6e6e',
    marginLeft: '30px ',
  },
  photo: {
    marginTop: '30px',
    width: '100%',
  },
}))

export const Introduction = () => {
  const { introduction, date, photo } = useStyles()

  return (
    <DisplayAnimation>
      <Box display="flex" flexDirection="column" justifyContent="flex-start" className={introduction}>
        <Box display="flex" flexDirection="column" alignItems="left">
          <Typography variant="h3" className={date}>
            02. 15
          </Typography>
        </Box>
        <Box className={photo}>
          <img src={introImage} alt="intro" width="100%" />
        </Box>
      </Box>
    </DisplayAnimation>
  )
}
