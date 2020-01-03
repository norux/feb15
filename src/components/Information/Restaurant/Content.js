import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '20px',
  },
  section: {
    '&:not(:nth-child(1))': {
      marginTop: '12px',
    },
  },
}))

export const Content = () => {
  const { root, section } = useStyles()
  return (
    <Box className={root}>
      <dl className={section}>
        <dd>
          <Typography variant="body2">위치: 지하 1층 네이버 구내식당</Typography>
        </dd>
        <dd>
          <Typography variant="body2">오픈 시간: 오후 12시 (예식 1시간전)</Typography>
        </dd>
      </dl>
      <dl className={section}>
        <dd>
          <Typography variant="body2">* 구내식당에서 직접 조리한 뷔페 음식이 제공됩니다.</Typography>
        </dd>
      </dl>
    </Box>
  )
}
