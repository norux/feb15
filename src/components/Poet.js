import React, { Fragment } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Section } from '~/components/common/Section'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    padding: '50px 0',
  },
  typography: {
    textAlign: 'center',
  },
}))

export const Poet = () => {
  const { root, typography } = useStyles()

  return (
    <Section className={root}>
      <Fragment>
        <Typography className={typography}>예쁜 예감이</Typography>
        <Typography className={typography}>들었다.</Typography>
        <br />
        <Typography className={typography}>우리는 언제나</Typography>
        <Typography className={typography}>손을 잡고 있게 될 것이다.</Typography>
        <br />
        <Typography className={typography}>⁃ 이이체 ‘연인’ -</Typography>
      </Fragment>
    </Section>
  )
}
