import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '7px',
  },
}))

export const Content = () => {
  const { root } = useStyles()
  return (
    <Box className={root}>
      <ul>
        <li>
          <Typography variant="subtitle2">
            <span className="naver-color">네이버</span> 그린팩토리
          </Typography>
        </li>
        <li>
          <Typography variant="body2">도로명주소: 경기도 성남시 분당구 불정로 6 그린팩토리</Typography>
        </li>
        <li>
          <Typography variant="body2">지번주소: 경기도 성남시 분당구 정자동 178-1</Typography>
        </li>
        <li>
          <Typography variant="body2">1588-3830</Typography>
        </li>
      </ul>
    </Box>
  )
}
