import React, { Fragment } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { GallerySlideItem } from '~/components/Gallery/Slide/GallerySlideItem'

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 15px 15px',
  },
}))

export const GallerySlideList = ({ photos, setModalOpen, setModalImageIndex }) => {
  const { root } = useStyles()

  return (
    <Fragment>
      <ul className={root}>
        {photos.map((photo, index) => (
          <GallerySlideItem
            photo={photo}
            key={index}
            currentIndex={index}
            setModalImageIndex={setModalImageIndex}
            setModalOpen={setModalOpen}
          />
        ))}
      </ul>
    </Fragment>
  )
}
