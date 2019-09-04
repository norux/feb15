import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Section } from '~/components/common/Section'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(() => ({
  poet: {
    padding: '50px 0',
  },
  typography: {
    textAlign: 'center',
  },
}))

export const Poet = () => {
  const classes = useStyles()
  const { poet, typography } = classes

  return (
    <Section>
      <Box className={poet}>
        <Typography className={typography}>예쁜 예감이 들었다.</Typography>
        <Typography className={typography}>우리는 언제나 손을 잡고 있게 될 것이다.</Typography>
        <Typography className={typography}>⁃ 이이체 ‘연인’ -</Typography>
      </Box>
    </Section>
  )
}
