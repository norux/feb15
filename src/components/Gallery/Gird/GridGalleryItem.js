import React from 'react'

export const GridGalleryItem = ({ photo, setModalImage, setModalOpen }) => {
  const onClick = () => {
    setModalImage(photo)
    setModalOpen(true)
  }

  return <img src={photo.src} alt={photo.alt} width="100%" onClick={onClick} />
}
