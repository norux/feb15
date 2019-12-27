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
    wordBreak: 'keep-all',
    textIndent: '-73px',
    paddingLeft: '73px',
  },
}))

export const Content = () => {
  const { root, section } = useStyles()
  return (
    <Box className={root}>
      <Typography variant="body2">인천에서 결혼식장까지 셔틀버스를 운행합니다.</Typography>
      <dl className={section}>
        <dt>
          <Typography variant="subtitle2">가는 길</Typography>
        </dt>
        <dd>
          <Typography variant="body2">오전 11:00 - 인천2호선 시민공원역 교보생명 1층 하나은행 앞 승차</Typography>
        </dd>
        <dd>
          <Typography variant="body2">오전 11:20 - 인천1호선 선학역 3번 출구 앞 경유 및 승차</Typography>
        </dd>
        <dd>
          <Typography variant="body2">오전 11:25 - 네이버로 출발</Typography>
        </dd>
      </dl>
      <dl className={section}>
        <dt>
          <Typography variant="subtitle2">오는 길</Typography>
        </dt>
        <dd>
          <Typography variant="body2">오후 03:30 - 네이버 정문 앞에서 인천으로 출발</Typography>
        </dd>
      </dl>

    </Box>
  )
}
