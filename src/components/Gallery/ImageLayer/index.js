import React from 'react'
import classNames from 'classnames'
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Backdrop from '@material-ui/core/Backdrop'
import makeStyles from '@material-ui/core/styles/makeStyles'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    maxWidth: '700px',
    position: 'relative',
    backgroundColor: '#fff',
    outline: 'none',
    zIndex: '10000',
  },
  btn: {
    position: 'absolute',
    fontSize: '3rem',
    top: '38%',
  },
  left: {
    left: '0',
    padding: '70px 30px 70px 0',
  },
  right: {
    right: '0',
    padding: '70px 0 70px 30px',
  },
}))

export const ImageLayer = ({ open, photos, image, setImage, handleClose }) => {
  const { root, paper, left, right, btn } = useStyles()
  const onClick = ({ target: { id } }) => {
    let found = photos.findIndex(photo => photo.src === image.src)
    switch (id) {
      case 'leftArrow':
        if (found === 0) {
          found = photos.length
        }
        setImage(photos[found - 1])
        break

      case 'rightArrow':
        if (found === photos.length - 1) {
          found = -1
        }
        setImage(photos[found + 1])
        break

      default:
        handleClose()
        break
    }
  }

  if (!image) {
    return null
  }

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
        <div className={paper} onClick={onClick}>
          <NavigateBeforeIcon className={classNames(btn, left)} id="leftArrow" />
          <img src={image.src} alt={image.alt} width="100%" />
          <NavigateNextIcon className={classNames(btn, right)} id="rightArrow" />
        </div>
      </Fade>
    </Modal>
  )
}
