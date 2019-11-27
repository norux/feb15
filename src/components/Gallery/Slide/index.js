import React from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import classNames from 'classnames'
import { SlideGalleryList } from '~/components/Gallery/Slide/SlideGalleryList'
import { Fade } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    minHeight: '300px',
    overflow: 'hidden',
    overflowX: 'auto',
  },
  area: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export const Slide = ({ photos, activated, setModalOpen, setModalImage }) => {
  const { root } = useStyles()

  return (
    <Fade in={activated} timeout={{ enter: 1500, exit: 0 }}>
      <Box className={classNames(root, 'invisible-scrollbar')}>
        <SlideGalleryList photos={photos} setModalOpen={setModalOpen} setModalImage={setModalImage} />
      </Box>
    </Fade>
  )
}
