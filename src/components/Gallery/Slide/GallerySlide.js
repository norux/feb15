import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import makeStyles from '@material-ui/core/styles/makeStyles'
import classNames from 'classnames'
import { GallerySlideList } from '~/components/Gallery/Slide/GallerySlideList'
import { Fade } from '@material-ui/core'
import { ImageLayer } from '~/components/Gallery/ImageLayer/ImageLayer'

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '300px',
    overflow: 'hidden',
    overflowX: 'auto',
    padding: '0 30px',
  },
  area: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export const GallerySlide = ({ photos, activated }) => {
  const { root } = useStyles()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const handleClose = () => {
    setModalOpen(false)
  }

  return (
    <Fade in={activated} timeout={{ enter: 1500, exit: 0 }}>
      <Box className={classNames(root, 'invisible-scrollbar')}>
        <GallerySlideList photos={photos} setModalOpen={setModalOpen} setModalImageIndex={setModalImageIndex} />
        <ImageLayer open={modalOpen} photos={photos} imageIndex={modalImageIndex} handleClose={handleClose} />
      </Box>
    </Fade>
  )
}
