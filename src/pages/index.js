import React, { Fragment } from 'react'
import { Introduction } from '~/components/Introduction'
import { Poet } from '~/components/Poet'

export const Index = () => {
  return (
    <Fragment>
      <Introduction />
      <Poet />
      <Poet />
      <Poet />
      <Poet />
      <Poet />
    </Fragment>
  )
}
