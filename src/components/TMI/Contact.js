import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    margin: '50px 30px 0',
  },
  link: {
    fontWeight: '700',
    color: '#376897',
  },
}))

export const Contact = () => {
  const { root, link } = useStyles()
  return (
    <Box className={root}>
      <Typography variant="body2">
        혹시 더 하고 싶은 질문이 있으시면 언제든지{' '}
        <a href="https://github.com/norux/feb15/issues" target="_blank" rel="noopener noreferrer" className={link}>
          이곳
        </a>
        에 남겨주세요 :)
      </Typography>
    </Box>
  )
}
