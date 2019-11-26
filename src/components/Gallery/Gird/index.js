import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box } from '@material-ui/core'
import { isWideScreen } from '~/utils'
import { orderingPhoto } from '~/components/Gallery/Gird/utils'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    borderRadius: '10px',
  },
  box: {
    padding: '0 15px 15px',
  },
  tile: {},
}))

const GRID_LIST_MAX_COLUMN_LENGTH = 3
const WIDE_GRID_LIST_MAX_COLUMN_LENGTH = 4

export const Grid = ({ photos, activated }) => {
  const { root, box, tile } = useStyles()
  const [orderedPhotos, setOrderedPhotos] = useState(photos)
  const [cols, setCols] = useState(null)
  const handleResize = () => {
    if (isWideScreen()) {
      setOrderedPhotos(orderingPhoto(photos, WIDE_GRID_LIST_MAX_COLUMN_LENGTH))
      setCols(WIDE_GRID_LIST_MAX_COLUMN_LENGTH)
      return
    }

    setOrderedPhotos(orderingPhoto(photos, GRID_LIST_MAX_COLUMN_LENGTH))
    setCols(GRID_LIST_MAX_COLUMN_LENGTH)
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Fade in={activated} timeout={{ enter: 1500, exit: 0 }}>
      <Box className={box}>
        <GridList cellHeight={160} cols={cols} className={root}>
          {orderedPhotos.map((photo, index) => (
            <GridListTile key={index} cols={photo.cols} className={tile}>
              <img src={photo.src} alt={photo.alt} />
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Fade>
  )
}

Grid.propTypes = {
  photos: PropTypes.array,
  activated: PropTypes.bool,
}
