import React, { Fragment } from 'react'
import { Introduction } from '~/components/Introduction'
import { Poet } from '~/components/Poet'
import { Gallery } from '~/components/Gallery'

export const Index = () => {
  return (
    <Fragment>
      <Introduction />
      <Poet />
      <Gallery />
      <Poet />
      <Poet />
    </Fragment>
  )
}
