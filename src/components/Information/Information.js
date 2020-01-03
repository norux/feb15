import React, { useCallback, useState } from 'react'
import queryString from 'query-string'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Section } from '~/components/common/Section'
import { Title } from '~/components/Information/Title'
import { Map } from '~/components/Information/Map'
import { ShuttleBus } from '~/components/Information/ShuttleBus/ShuttleBus'
import { PublicTransportation } from '~/components/Information/PublicTransportation/PublicTransportation'
import { QUERY_YES_VALUE } from '~/constants'
import { Address } from '~/components/Information/Address/Address'
import { Parking } from '~/components/Information/Parking/Parking'
import Box from '@material-ui/core/Box'
import { Restaurant } from '~/components/Information/Restaurant/Restaurant'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    position: 'relative',
    padding: '50px 0',
  },
  title: {
    zIndex: 11,
  },
  detailGuide: {
    marginTop: '50px',
  },
}))

export const Information = () => {
  const { root, title, detailGuide } = useStyles()
  const [locked, setLocked] = useState(true)

  const onClickInit = useCallback(() => {
    const resetEl = document.getElementsByClassName('btn_zoom_reset')[0]
    resetEl.click()
  })

  const onClickLock = useCallback(() => {
    locked ? setLocked(false) : setLocked(true)
  }, [locked])

  const { st } = queryString.parse(location.search)

  return (
    <Section className={root} alignItems="flex-start">
      <Title className={title} locked={locked} onClickInit={onClickInit} onClickLock={onClickLock} />
      <Map locked={locked} />
      <Box className={detailGuide}>
        <Address />
        <Restaurant />
        <Parking />
        {st === QUERY_YES_VALUE && <ShuttleBus />}
        <PublicTransportation />
      </Box>
    </Section>
  )
}
