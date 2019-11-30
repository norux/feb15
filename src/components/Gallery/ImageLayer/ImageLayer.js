import React, { useCallback } from 'react'
import classNames from 'classnames'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Backdrop from '@material-ui/core/Backdrop'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Swiper from 'swiper/js/swiper.esm.browser.bundle.min'
import 'swiper/css/swiper.min.css'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '100%',
    maxWidth: '700px',
    position: 'relative',
    backgroundColor: 'transparent',
    outline: 'none',
    zIndex: '10000',
  },
  swiperContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#858585',
    '--swiper-theme-color': '#ecf2ff',
  },
  swiperWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  swiperPagination: {
    background: 'rgba(0,0,0,0.65)',
  },
}))

export const ImageLayer = ({ open, photos, imageIndex, handleClose }) => {
  const { root, paper, swiperContainer, swiperWrapper, swiperPagination } = useStyles()

  const onClose = () => {
    handleClose()
  }

  const swiperRef = useCallback(
    node => {
      new Swiper(node, {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        mousewheel: true,
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        initialSlide: imageIndex,
        on: {
          touchMoveOpposite: onClose,
        },
      })
    },
    [photos, imageIndex],
  )

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={root}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open} timeout={700}>
        <div className={paper} onClick={onClose}>
          <div ref={swiperRef} className={classNames('swiper-container', swiperContainer)}>
            <div className={classNames('swiper-wrapper', swiperWrapper)}>
              {photos.map((photo, index) => {
                return (
                  <div key={index} className="swiper-slide">
                    <img src={photo.src} alt={photo.alt} width="100%" />
                  </div>
                )
              })}
            </div>
            <div className={classNames('swiper-pagination', swiperPagination)} />
          </div>
        </div>
      </Fade>
    </Modal>
  )
}
