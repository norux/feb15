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
          <Typography variant="body2">네이버 사옥의 주차장을 이용하실 수 있습니다.</Typography>
        </dd>
      </dl>
      <dl className={section}>
        <dt>
          <Typography variant="subtitle2">주차권 발급</Typography>
        </dt>
        <dd>
          <Typography variant="body2">1일 주차권을 제공합니다.</Typography>
        </dd>
        <dd>
          <Typography variant="body2">지하 1층 식권 접수 도우미에게 요청 해 주세요.</Typography>
        </dd>
      </dl>
      <dl className={section}>
        <dd>
          <Typography variant="body2">
            * 주차권을 발급받지 않고 퇴장 시, 주차요금이 부과됩니다. 반드시 식권 접수 도우미에게 요청 해 주세요.
          </Typography>
        </dd>
      </dl>
    </Box>
  )
}
