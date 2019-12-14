import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '30px',
    height: '100%',
  },
  divider: {
    width: '5px',
    height: '55px',
    backgroundColor: '#C6C6C6',
  },
  date: {
    fontFamily: 'Noto Serif, sans-serif',
    fontWeight: '900',
    color: '#333',
    fontSize: '4rem',
    '& span': {
      marginLeft: '9px',
      fontSize: '1.3rem',
    },
  },
}))

export const Title = () => {
  const { root, date } = useStyles()

  return (
    <Box alignItems="center" className={root}>
      <p className={date}>
        02. 15<span>❤️</span>
      </p>
    </Box>
  )
}
