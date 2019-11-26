import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(() => ({
  root: {
    padding: '15px 0 50px',
  },
  date: {
    fontSize: '1.3rem',
    fontWeight: '600',
    textAlign: 'center',
  },
  location: {
    fontSize: '1.2rem',
    fontWeight: '600',
    textAlign: 'center',
    '& span': {
      color: '#2DB400'
    }
  },
}))

export const Date = () => {
  const { root, date, location } = useStyles()

  return (
    <Box className={root}>
      <Typography className={date}>2020년 2월 15일 토요일 오후 1시</Typography>
      <Typography className={location}><span>네이버</span> 그린팩토리</Typography>
    </Box>
  )
}
