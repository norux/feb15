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
        <dt>
          <Typography variant="subtitle2">지하철</Typography>
        </dt>
        <dd>
          <Typography variant="body2">신분당선/분당선 정자역 3번출구</Typography>
        </dd>
        <dd>
          <Typography variant="body2">도보 15분 또는 마을버스 이용</Typography>
        </dd>
      </dl>
      <dl className={section}>
        <dt>
          <Typography variant="subtitle2">정자역에서 마을 버스 탑승 시</Typography>
        </dt>
        <dd>
          <Typography variant="body2">3번출구 바로 앞의 정류장에서 탑승합니다.</Typography>
        </dd>
        <dd>
          <Typography variant="body2">2번 버스 탑승 시, 네이버 정류장에서 하차</Typography>
        </dd>
        <dd>
          <Typography variant="body2">
            1, 19, 380, 250, 300, 520, 390, 116-1번 버스 탑승 시, 미켈란쉐르빌 하차 후 도보 5분
          </Typography>
        </dd>
      </dl>
    </Box>
  )
}
