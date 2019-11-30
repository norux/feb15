import React from 'react'

export const GalleryGridItem = ({ photo, currentIndex, setModalImageIndex, setModalOpen }) => {
  const onClick = () => {
    setModalImageIndex(currentIndex)
    setModalOpen(true)
  }

  return <img src={photo.src} alt={photo.alt} width="100%" onClick={onClick} />
}
