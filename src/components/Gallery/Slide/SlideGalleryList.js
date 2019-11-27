import React, { Fragment } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { SlideGalleryItem } from '~/components/Gallery/Slide/SlideGalleryItem'

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 15px 15px',
  },
}))

export const SlideGalleryList = ({ photos, setModalOpen, setModalImage }) => {
  const { root } = useStyles()

  return (
    <Fragment>
      <ul className={root}>
        {photos.map((photo, index) => (
          <SlideGalleryItem photo={photo} key={index} setModalImage={setModalImage} setModalOpen={setModalOpen} />
        ))}
      </ul>
    </Fragment>
  )
}
