import React from 'react'
import { Introduction } from '~/components/Introduction/Introduction'
import { Poet } from '~/components/Poet/Poet'
import { Gallery } from '~/components/Gallery/Gallery'
import { Location } from '~/components/Location/Location'
import { TMI } from '~/components/TMI/TMI'
import { Copyright } from '~/components/common/Copyright'

export const Index = () => {
  return (
    <>
      <Introduction />
      <Poet />
      <Gallery />
      <Location />
      <TMI />
      <Copyright />
    </>
  )
}
