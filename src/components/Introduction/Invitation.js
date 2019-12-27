import React, { useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from '@material-ui/core/Box'
import { useInterval } from '~/components/hooks'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    fontSize: '1.6rem',
    alignSelf: 'center',
    marginTop: '50px',
  },
  name: {
    fontFamily: 'Noto Serif KR, serif',
    fontWeight: '500',
    fontSize: '3.2rem',
    width: '70%',
    textAlign: 'center',
    '& span': {
      fontSize: '2.2rem',
    },
  },
  invitation: {
    width: '100%',
    marginTop: '15px',
    '& span': {
      marginTop: '5px',
      fontSize: '1.7rem',
      transition: 'opacity .6s',
    },
  },
}))

const MIN_OPACITY = 0.1

export const Invitation = () => {
  const { root, name, invitation } = useStyles()
  const [style, setStyle] = useState({ opacity: 1 })

  useInterval(() => {
    setStyle({ opacity: style.opacity === MIN_OPACITY ? 1 : MIN_OPACITY })
  }, 800)

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className={root}>
      <Typography variant="h2" className={name}>
        곽희범 <span>&</span> 용희원
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" className={invitation}>
        <Typography variant="subtitle1">결혼식에 초대합니다.</Typography>
        <span className="naver-color" style={style}>
          We invite you
        </span>
      </Box>
    </Box>
  )
}
