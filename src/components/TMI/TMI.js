import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Section } from '~/components/common/Section'
import { Title } from '~/components/TMI/Title'

const useStyles = makeStyles(() => ({
  root: {
    padding: '50px 0',
  },
}))
export const TMI = () => {
  const { root } = useStyles()
  return (
    <Section className={root}>
      <Title />
    </Section>
  )
}
