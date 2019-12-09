import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Section } from '~/components/common/Section'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import LocalCafeIcon from '@material-ui/icons/LocalCafeOutlined'

const useStyles = makeStyles(() => ({
  root: {
    padding: '50px 0',
  },
  typography: {
    textAlign: 'center',
  },
  paragraph: {
    '&:nth-child(2)': {
      marginTop: '50px',
    },
    '&:nth-child(3)': {
      marginTop: '40px',
      verticalAlign: 'middle',
    },
  },
  icon: {
    marginRight: '7px',
    color: '#e26364',
  },
}))

export const Poet = () => {
  const { root, paragraph, typography, icon } = useStyles()

  return (
    <Section className={root}>
      <>
        <Box className={paragraph}>
          <Typography variant="body1" className={typography}>
            예쁜 예감이
          </Typography>
          <Typography variant="body1" className={typography}>
            들었다.
          </Typography>
        </Box>

        <Box className={paragraph}>
          <Typography variant="body1" className={typography}>
            우리는 언제나
          </Typography>
          <Typography variant="body1" className={typography}>
            손을 잡고 있게 될 것이다.
          </Typography>
        </Box>

        <Box className={paragraph} display="flex" alignItems="center">
          <LocalCafeIcon className={icon} />
          <Typography variant="body1" className={typography}>
            {' '}
            이이체 ‘연인’
          </Typography>
        </Box>
      </>
    </Section>
  )
}
