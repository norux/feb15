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
  }
}))

export const SlideItem = ({ photo }) => {
  const { root, item } = useStyles()

  return  (
    <li className={root}>
      <img src={photo.src} className={item} alt={photo.alt} width="100%" />
    </li>
  )
}
