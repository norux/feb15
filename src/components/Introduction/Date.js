import React, { useMemo } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(() => ({
  root: {
    padding: '15px 0 50px',
  },
  date: {
    fontSize: '1.7rem',
    fontWeight: '600',
  },
  location: {
    marginTop: '2pt',
    fontWeight: '600',
  },
}))

export const Date = ({count}) => {
  const { root, date, location } = useStyles()

  return (
    <Box className={root}>
      <Typography variant="body1" className={date} align="center">
        {count < 17 ? '2020년 2월 15일 토요일 오후 1시' : '2017년 6월 17일 토요일부터 :)'}
      </Typography>
      <Typography variant="body1" className={location} align="center">
        <span className="naver-color">네이버</span> 그린팩토리
      </Typography>
    </Box>
  )
}
