import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Section } from '~/components/common/Section'
import { Title } from '~/components/TMI/Title'
import { Content } from '~/components/TMI/Content'
import { Contact } from '~/components/TMI/Contact'
import { TIMs } from '~/components/TMI/constants'

const useStyles = makeStyles(() => ({
  root: {
    padding: '50px 0',
  },
}))

export const TMI = () => {
  const { root } = useStyles()
  return (
    <Section className={root} alignItems="flex-start">
      <Title />
      <Content sections={TIMs} />
      <Contact />
    </Section>
  )
}
