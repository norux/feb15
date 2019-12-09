import React, { useCallback, useState } from 'react'
import queryString from 'query-string'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Section } from '~/components/common/Section'
import { Title } from '~/components/Location/Title'
import { Map } from '~/components/Location/Map'
import { ShuttleBus } from '~/components/Location/ShuttleBus/ShuttleBus'
import { Metro } from '~/components/Location/Metro/Metro'
import { Bus } from '~/components/Location/Bus/Bus'
import { QUERY_YES_VALUE } from '~/constants'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    position: 'relative',
    padding: '30px 0',
  },
  title: {
    zIndex: 11,
  },
}))

export const Location = () => {
  const { root, title } = useStyles()
  const [locked, setLocked] = useState(true)

  const onClickInit = () => {
    const resetEl = document.getElementsByClassName('btn_zoom_reset')[0]
    resetEl.click()
  }

  const onClickLock = useCallback(() => {
    locked ? setLocked(false) : setLocked(true)
  }, [locked])

  const { shuttle } = queryString.parse(location.search)

  return (
    <Section className={root}>
      <Title className={title} locked={locked} onClickInit={onClickInit} onClickLock={onClickLock} />
      <Map locked={locked} />
      {shuttle === QUERY_YES_VALUE && <ShuttleBus />}
      <Metro />
      <Bus />
    </Section>
  )
}
