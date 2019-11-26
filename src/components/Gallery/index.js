import React, { Fragment, useState } from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Section } from '~/components/common/Section'
import { Title } from '~/components/Gallery/Title'
import { Slide } from '~/components/Gallery/Slide'
import { Grid } from '~/components/Gallery/Gird'
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
  const toggleSwitch = () => {
    expanded ? setExpanded(false) : setExpanded(true)
  }

  return (
    <Section className={root}>
      <Fragment>
        <Title expanded={expanded} onClick={toggleSwitch} />
        <Box className={photoArea}>
          {expanded ? <Grid activated={expanded} photos={photos} /> : <Slide activated={!expanded} photos={photos} />}
        </Box>
      </Fragment>
    </Section>
  )
}
