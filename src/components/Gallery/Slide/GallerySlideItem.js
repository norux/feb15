import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(() => ({
  root: {
    width: '300px',
    height: '100%',
    '&+$root': {
      marginLeft: '15px',
    },
  },
  item: {
    borderRadius: '10px',
  },
}))

export const GallerySlideItem = ({ photo, currentIndex, setModalImageIndex, setModalOpen }) => {
  const { root, item } = useStyles()
  const onClick = () => {
    setModalImageIndex(currentIndex)
    setModalOpen(true)
  }

  return (
    <li className={root} onClick={onClick}>
      <img src={photo.src} className={item} alt={photo.alt} width="100%" />
    </li>
  )
}
