import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '20px',
  },
}))

export const Content = () => {
  const { root } = useStyles()
  return (
    <Box className={root}>
      <Typography variant="body2">위치: 지하 1층 네이버 구내식당</Typography>
      <Typography variant="body2">오픈 시간: 오후 12시 (예식 1시간전)</Typography>
    </Box>
  )
}
