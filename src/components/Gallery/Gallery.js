import React, { Fragment, useCallback, useState } from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Section } from '~/components/common/Section'
import { Title } from '~/components/Gallery/Title'
import { GallerySlide } from '~/components/Gallery/Slide/GallerySlide'
import { GalleryGrid } from '~/components/Gallery/Gird/GalleryGrid'
import { photos } from '~/components/Gallery/utils'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '30px 0',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  photoArea: {
    width: '100%',
    marginTop: '20px',
  },
}))

export const Gallery = () => {
  const { root, photoArea } = useStyles()
  const [expanded, setExpanded] = useState(false)
  const toggleSwitch = useCallback(() => {
    expanded ? setExpanded(false) : setExpanded(true)
  }, [expanded])

  return (
    <Section className={root}>
      <Fragment>
        <Title expanded={expanded} onClick={toggleSwitch} />
        <Box className={photoArea}>
          {expanded ? (
            <GalleryGrid activated={expanded} photos={photos} />
          ) : (
            <GallerySlide activated={!expanded} photos={photos} />
          )}
        </Box>
      </Fragment>
    </Section>
  )
}
