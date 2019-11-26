import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import classNames from 'classnames'
import { SlideList } from '~/components/Gallery/Slide/SlideList'
import { Fade } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    overflow: 'hidden',
    overflowX: 'auto',
  },
  flicking: {
    height: '450px',
  },
  area: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export const Slide = ({ photos, activated }) => {
  const { root } = useStyles()

  return (
    <Fade in={activated} timeout={{ enter: 1500, exit: 0 }}>
      <Box className={classNames(root, 'invisible-scrollbar')}>
        <SlideList photos={photos} />
      </Box>
    </Fade>
  )
}

Slide.propTypes = {
  photos: PropTypes.array,
  activated: PropTypes.bool,
}
