import React, { Fragment } from 'react'
import { Introduction } from '~/components/Introduction/Introduction'
import { Poet } from '~/components/Poet'
import { Gallery } from '~/components/Gallery/Gallery'
import { Location } from '~/components/Location/Location'

export const Index = () => {
  return (
    <Fragment>
      <Introduction />
      <Poet />
      <Gallery />
      <Location />
      <Poet />
      <Poet />
    </Fragment>
  )
}
