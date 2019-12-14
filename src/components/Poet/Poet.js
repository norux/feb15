import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Section } from '~/components/common/Section'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import LocalCafeIcon from '@material-ui/icons/LocalCafeOutlined'
import { Groom } from '~/components/Poet/Groom'
import { Bride } from '~/components/Poet/Bride'
import ClassNames from 'classnames'

const useStyles = makeStyles(() => ({
  root: {
    padding: '50px 0',
  },
  typography: {
    textAlign: 'center',
  },
  paragraph: {
    '&:nth-child(2)': {
      marginTop: '27px',
    },
    '&:nth-child(3)': {
      marginTop: '27px',
    },
    '&:nth-child(4)': {
      marginTop: '50px',
    },
  },
  icon: {
    marginRight: '7px',
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
          <LocalCafeIcon className={ClassNames(icon, 'naver-color')} />
          <Typography variant="body1" className={typography}>
            이이체 ‘연인’
          </Typography>
        </Box>

        <Box className={paragraph}>
          <Groom />
          <Bride />
        </Box>
      </>
    </Section>
  )
}
