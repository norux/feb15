import React from 'react'
import { Introduction } from '~/components/Introduction/Introduction'
import { Poet } from '~/components/Poet/Poet'
import { Gallery } from '~/components/Gallery/Gallery'
import { Information } from '~/components/Information/Information'
import { TMI } from '~/components/TMI/TMI'
import { Copyright } from '~/components/common/Copyright'

export const Index = () => {
  return (
    <>
      <Introduction />
      <Poet />
      <Gallery />
      <Information />
      <TMI />
      <Copyright />
    </>
  )
}
