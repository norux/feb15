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
      <Typography variant="body2">네이버 사옥 주차장 1일 주차권 지급</Typography>
      <Typography variant="body2">주차권 발급: 지하 1층 식권접수 도우미</Typography>
    </Box>
  )
}
