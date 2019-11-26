import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  box: {
    padding: '0 15px 15px',
  },
  tile: {
    '& .MuiGridListTile-tile': {
      borderRadius: '5px',
    }
  }
}))

export const Grid = ({ photos }) => {
  const { root, box, tile } = useStyles()
  return (
    <Box className={box}>
      <GridList cellHeight={160} cols={3} className={root}>
        {photos.map((photo, index) => (
          <GridListTile key={index} cols={photo.cols} className={tile}>
            <img src={photo.src} alt={photo.alt} />
          </GridListTile>
        ))}
      </GridList>
    </Box>
  )
}
